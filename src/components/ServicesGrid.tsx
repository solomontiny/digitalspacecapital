import { Card, CardContent } from "@/components/ui/card";
import creditImg from "@/assets/credit.jpg";
import insuranceBankingImg from "@/assets/insurance-banking.jpg";
import infrastructureImg from "@/assets/infrastructure-fund-new.jpg";
import moneyMarketImg from "@/assets/money-market-new.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";
import assetManagementImg from "@/assets/asset-management.jpg";
import securitiesTradingImg from "@/assets/securities-trading.jpg";

const ServicesGrid = () => {
  const services = [
    {
      title: "Credit",
      image: insuranceBankingImg,
      href: "/investments"
    },
    {
      title: "Seamless Banking",
      image: infrastructureImg,
      href: "/infrastructure-fund"
    },
    {
      title: "Insurance Banking",
      image: moneyMarketImg,
      href: "/money-market-fund"
    },
    {
      title: "Investment Banking",
      image: investmentBankingImg,
      href: "/investment-banking"
    },
    {
      title: "Asset Management",
      image: assetManagementImg,
      href: "/asset-management"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative cursor-pointer overflow-hidden border-2 border-border/50 hover:border-primary/30 bg-card shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              <CardContent className="relative p-8 -mt-16 z-10">
                <div className="bg-card/95 backdrop-blur-md border border-border/30 rounded-lg p-6 shadow-xl group-hover:shadow-2xl group-hover:border-primary/40 transition-all duration-500">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-wide">
                    {service.title}
                  </h3>
                  <div className="mt-2 h-1 w-0 group-hover:w-full bg-primary/80 rounded-full transition-all duration-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;