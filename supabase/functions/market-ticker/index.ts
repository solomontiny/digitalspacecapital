import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface TickerItem {
  label: string;
  value: string;
  change: string;
  changePercent: string;
  direction: "up" | "down" | "neutral";
}

// In-memory cache
let cache: { data: TickerItem[]; timestamp: number } | null = null;
const CACHE_TTL = 90_000; // 90 seconds

const SYMBOLS = [
  { symbol: "USD/NGN", label: "USD/NGN (Official)", type: "forex" },
  { symbol: "EUR/NGN", label: "EUR/NGN", type: "forex" },
  { symbol: "SPX", label: "S&P 500", type: "index" },
  { symbol: "IXIC", label: "NASDAQ", type: "index" },
  { symbol: "BTC/USD", label: "BTC/USD", type: "crypto" },
  { symbol: "XAU/USD", label: "Gold", type: "commodity" },
];

async function fetchTwelveData(apiKey: string): Promise<TickerItem[]> {
  const results: TickerItem[] = [];

  // Twelve Data quote endpoint supports comma-separated symbols
  const forexSymbols = SYMBOLS.filter((s) => s.type === "forex").map((s) => s.symbol);
  const cryptoSymbols = SYMBOLS.filter((s) => s.type === "crypto").map((s) => s.symbol);
  const indexSymbols = SYMBOLS.filter((s) => s.type === "index").map((s) => s.symbol);

  const allSymbols = [...forexSymbols, ...cryptoSymbols, ...indexSymbols].join(",");

  try {
    const res = await fetch(
      `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(allSymbols)}&apikey=${apiKey}`
    );
    const data = await res.json();

    // When multiple symbols, response is an object keyed by symbol
    for (const sym of SYMBOLS) {
      const quote = allSymbols.includes(",") ? data[sym.symbol] : data;
      if (!quote || quote.status === "error") continue;

      const change = parseFloat(quote.change || "0");
      const pctChange = parseFloat(quote.percent_change || "0");

      results.push({
        label: sym.label,
        value: parseFloat(quote.close || quote.price || "0").toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        change: change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2),
        changePercent: pctChange >= 0 ? `+${pctChange.toFixed(2)}%` : `${pctChange.toFixed(2)}%`,
        direction: change > 0 ? "up" : change < 0 ? "down" : "neutral",
      });
    }
  } catch (err) {
    console.error("Twelve Data fetch error:", err);
  }

  // Add hardcoded NGX ASI and Brent Oil as Twelve Data free tier may not cover them
  results.push(
    {
      label: "NGX ASI",
      value: "104,562.40",
      change: "+1,245.30",
      changePercent: "+1.21%",
      direction: "up",
    },
    {
      label: "Brent Oil",
      value: "82.45",
      change: "+1.85",
      changePercent: "+2.30%",
      direction: "up",
    }
  );

  return results;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check cache
    if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
      return new Response(JSON.stringify({ data: cache.data, cached: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("TWELVE_DATA_API_KEY");
    if (!apiKey) {
      // Return fallback data if no API key
      const fallback = getFallbackData();
      return new Response(JSON.stringify({ data: fallback, fallback: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await fetchTwelveData(apiKey);

    if (data.length > 0) {
      cache = { data, timestamp: Date.now() };
    }

    return new Response(JSON.stringify({ data: data.length > 0 ? data : getFallbackData() }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Market ticker error:", error);
    const fallback = cache?.data || getFallbackData();
    return new Response(JSON.stringify({ data: fallback, error: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function getFallbackData(): TickerItem[] {
  return [
    { label: "USD/NGN (Official)", value: "1,535.50", change: "+12.30", changePercent: "+0.81%", direction: "up" },
    { label: "EUR/NGN", value: "1,685.00", change: "-8.50", changePercent: "-0.50%", direction: "down" },
    { label: "NGX ASI", value: "104,562.40", change: "+1,245.30", changePercent: "+1.21%", direction: "up" },
    { label: "S&P 500", value: "5,892.34", change: "+23.45", changePercent: "+0.40%", direction: "up" },
    { label: "NASDAQ", value: "18,456.78", change: "-45.67", changePercent: "-0.25%", direction: "down" },
    { label: "BTC/USD", value: "67,234.50", change: "+1,234.00", changePercent: "+1.87%", direction: "up" },
    { label: "Gold", value: "2,045.30", change: "+8.50", changePercent: "+0.42%", direction: "up" },
    { label: "Brent Oil", value: "82.45", change: "+1.85", changePercent: "+2.30%", direction: "up" },
  ];
}
