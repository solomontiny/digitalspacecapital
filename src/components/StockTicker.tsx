const StockTicker = () => {
  const tickerData = [
    "NFEM USD/NGN Rate: ₦1,535.50 | Nigeria's GDP Growth Q2 2025: 4.23%",
    "CBN Treasury Bills: 91-Day: 18.50% | 182-Day: 19.75% | 364-Day: 21.25%", 
    "Inflation Rate (YoY): 32.15% | Foreign Reserves: $34.2B | Crude Oil: $82.45/barrel"
  ];

  const tickerText = tickerData.join("   |   ");

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="whitespace-nowrap ticker-scroll">
        <span className="text-sm font-medium">
          {tickerText}   |   {tickerText}   |   {tickerText}
        </span>
      </div>
    </div>
  );
};

export default StockTicker;