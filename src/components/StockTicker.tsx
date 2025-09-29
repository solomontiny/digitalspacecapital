const StockTicker = () => {
  const tickerData = [
    "Daily FIDF - Bid Price: $114.78; Offer Price: $114.78",
    "FINF- Bid Price: N1,237.36; Offer Price: N1,237.36", 
    "MMF Bid Price: N1.00; Offer Price: N1.00"
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