import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, Shield, Landmark } from "lucide-react";

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: "DSC Asset Management",
      icon: TrendingUp,
      description: "Specializing in portfolio management and investment advisory services for institutional and high-net-worth clients.",
      services: ["Portfolio Management", "Investment Advisory", "Wealth Planning", "Risk Management"]
    },
    {
      name: "DSC Securities Trading",
      icon: Building2,
      description: "A full-service brokerage offering securities trading, market analysis, and investment research.",
      services: ["Equity Trading", "Bonds & Fixed Income", "Market Analysis", "Investment Research"]
    },
    {
      name: "DSC Insurance Services",
      icon: Shield,
      description: "Providing comprehensive insurance and risk management solutions for businesses and individuals.",
      services: ["Life Insurance", "General Insurance", "Risk Assessment", "Claims Management"]
    },
    {
      name: "DSC Trustees Limited",
      icon: Landmark,
      description: "Offering professional trusteeship services for pension funds, unit trusts, and corporate entities.",
      services: ["Pension Fund Management", "Corporate Trustee Services", "Estate Planning", "Custodial Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Our Subsidiaries
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Through our network of specialized subsidiaries, we deliver comprehensive financial solutions tailored to meet diverse client needs across multiple sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {subsidiaries.map((subsidiary, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <subsidiary.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{subsidiary.name}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {subsidiary.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {subsidiary.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Subsidiaries;
