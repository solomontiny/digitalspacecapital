import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StockData {
  symbol: string;
  name: string;
  price: string;
  change: number;
  changePercent: number;
}

const StockWidget = () => {
  const stockData: StockData[] = [
    {
      symbol: "NGX",
      name: "NGX All-Share Index",
      price: "104,562.40",
      change: 1245.30,
      changePercent: 1.21
    },
    {
      symbol: "USD/NGN",
      name: "Dollar to Naira",
      price: "₦1,685.00",
      change: -12.50,
      changePercent: -0.74
    },
    {
      symbol: "CRUDE",
      name: "Brent Crude",
      price: "$82.45",
      change: 1.85,
      changePercent: 2.30
    },
    {
      symbol: "GOLD",
      name: "Gold (XAU/USD)",
      price: "$2,045.30",
      change: 8.50,
      changePercent: 0.42
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stockData.map((stock) => (
            <Card key={stock.symbol} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stock.symbol}
                </CardTitle>
                <p className="text-xs text-muted-foreground">{stock.name}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{stock.price}</p>
                  <div className={`flex items-center gap-1 text-sm ${
                    stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span className="font-medium">
                      {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Market data delayed by 15 minutes. For informational purposes only.
        </p>
      </div>
    </section>
  );
};

export default StockWidget;
