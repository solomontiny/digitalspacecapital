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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our collective expertise and experience highlight our ability to provide excellent services that surpass our clients' expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden transition-smooth hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;