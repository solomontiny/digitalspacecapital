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

  const fetchTickerData = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("market-ticker");
      if (error) throw error;
      if (data?.data && data.data.length > 0) {
        setItems(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch ticker data:", err);
      // Keep existing data on error
    } finally {
      setIsLoading(false);
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
