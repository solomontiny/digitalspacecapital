import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

interface TickerItem {
  label: string;
  value: string;
  change: string;
  changePercent: string;
  direction: "up" | "down" | "neutral";
}

const REFRESH_INTERVAL = 60_000; // 60 seconds

const MarketTickerBar = () => {
  const [items, setItems] = useState<TickerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const FALLBACK: TickerItem[] = [
    { label: "USD/NGN (Official)", value: "1,535.50", change: "+12.30", changePercent: "+0.81%", direction: "up" },
    { label: "EUR/NGN", value: "1,685.00", change: "-8.50", changePercent: "-0.50%", direction: "down" },
    { label: "NGX ASI", value: "104,562.40", change: "+1,245.30", changePercent: "+1.21%", direction: "up" },
    { label: "S&P 500", value: "5,892.34", change: "+23.45", changePercent: "+0.40%", direction: "up" },
    { label: "NASDAQ", value: "18,456.78", change: "-45.67", changePercent: "-0.25%", direction: "down" },
    { label: "BTC/USD", value: "67,234.50", change: "+1,234.00", changePercent: "+1.87%", direction: "up" },
    { label: "Gold", value: "2,045.30", change: "+8.50", changePercent: "+0.42%", direction: "up" },
    { label: "Brent Oil", value: "82.45", change: "+1.85", changePercent: "+2.30%", direction: "up" },
  ];

  const fetchTickerData = async (attempt = 0): Promise<void> => {
    try {
      const { data, error } = await supabase.functions.invoke("market-ticker");
      if (error) throw error;
      if (data?.data && data.data.length > 0) {
        setItems(data.data);
      } else {
        setItems((prev) => (prev.length > 0 ? prev : FALLBACK));
      }
    } catch (err) {
      console.warn(`Ticker fetch failed (attempt ${attempt + 1}):`, err);
      // Retry up to 2 times with backoff on transient errors (e.g. 503)
      if (attempt < 2) {
        setTimeout(() => fetchTickerData(attempt + 1), 1500 * (attempt + 1));
        return;
      }
      // After retries, ensure the bar still shows something
      setItems((prev) => (prev.length > 0 ? prev : FALLBACK));
    } finally {
      if (attempt === 0) setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTickerData();
    const interval = setInterval(fetchTickerData, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const directionColor = (dir: string) => {
    if (dir === "up") return "text-green-400";
    if (dir === "down") return "text-red-400";
    return "text-white/70";
  };

  const directionArrow = (dir: string) => {
    if (dir === "up") return "▲";
    if (dir === "down") return "▼";
    return "–";
  };

  if (isLoading) {
    return (
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary-foreground/50 animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground/70">
            Loading market data...
          </span>
        </div>
      </div>
    );
  }

  if (items.length === 0) return null;

  const tickerContent = items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-1.5 mx-4">
      <span className="font-semibold text-white/90">{item.label}:</span>
      <span className="text-white font-bold">{item.value}</span>
      <span className={`font-medium ${directionColor(item.direction)}`}>
        {item.change}
      </span>
      <span className={`text-xs ${directionColor(item.direction)}`}>
        ({item.changePercent})
      </span>
      <span className={`text-xs ${directionColor(item.direction)}`}>
        {directionArrow(item.direction)}
      </span>
      {i < items.length - 1 && (
        <span className="text-white/30 ml-2">|</span>
      )}
    </span>
  ));

  return (
    <div
      className="bg-primary text-primary-foreground py-3 overflow-hidden cursor-default"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="whitespace-nowrap"
        style={{
          display: "inline-flex",
          animation: `marketScroll 40s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <span className="text-sm inline-flex">{tickerContent}</span>
        <span className="text-sm inline-flex">{tickerContent}</span>
        <span className="text-sm inline-flex">{tickerContent}</span>
      </div>
    </div>
  );
};

export default MarketTickerBar;
