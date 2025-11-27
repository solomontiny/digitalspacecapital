import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Shield, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import dscAssetMgtLogo from "@/assets/dsc-asset-management-logo.png";
import dscLogo from "@/assets/digital-space-capital-icon.png";
import dscMfbLogo from "@/assets/dsc-microfinance-bank-logo.png";
import naingateInsuranceLogo from "@/assets/naingate-insurance-logo.png";
import emisonRealEstateLogo from "@/assets/emison-real-estate-logo.png";
import easyPayLogo from "@/assets/easy-pay-logo.png";

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: "Digital Space Capital",
      icon: Building2,
      logo: dscLogo,
      description: "The parent company providing strategic oversight and financial services coordination across all subsidiaries.",
      services: ["Corporate Strategy", "Financial Planning", "Business Development", "Regulatory Compliance"],
      gradient: "from-primary/10 to-primary/5",
      link: "/subsidiaries/digital-space-capital"
    },
    {
      name: "DSC Asset Management",
      icon: TrendingUp,
      logo: dscAssetMgtLogo,
      description: "Specializing in portfolio management and investment advisory services for institutional and high-net-worth clients.",
      services: ["Portfolio Management", "Investment Advisory", "Wealth Planning", "Risk Management"],
      gradient: "from-blue-500/10 to-blue-600/5",
      link: "/subsidiaries/dsc-asset-management"
    },
    {
      name: "DSC Microfinance Bank",
      icon: Landmark,
      logo: dscMfbLogo,
      description: "Providing accessible financial services to underserved communities and supporting micro-enterprises.",
      services: ["Micro Loans", "Savings Accounts", "Business Advisory", "Financial Literacy"],
      gradient: "from-blue-400/10 to-blue-500/5",
      link: "/subsidiaries/dsc-microfinance-bank"
    },
    {
      name: "Naingate Insurance Brokers",
      icon: Shield,
      logo: naingateInsuranceLogo,
      description: "Expert insurance brokerage services offering comprehensive coverage solutions for individuals and businesses.",
      services: ["Life Insurance", "Property Insurance", "Health Coverage", "Risk Assessment"],
      gradient: "from-primary/15 to-primary/5",
      link: "/subsidiaries/naingate-insurance"
    },
    {
      name: "Emison Real Estate",
      icon: Building2,
      logo: emisonRealEstateLogo,
      description: "Full-service real estate solutions including property development, sales, and property management services.",
      services: ["Property Development", "Real Estate Sales", "Property Management", "Investment Advisory"],
      gradient: "from-blue-500/10 to-blue-600/5",
      link: "/subsidiaries/emison-real-estate"
    },
    {
      name: "Easy Pay",
      icon: TrendingUp,
      logo: easyPayLogo,
      description: "Modern payment solutions platform enabling seamless digital transactions and financial services.",
      services: ["Digital Payments", "Money Transfer", "Bill Payments", "Mobile Wallet"],
      gradient: "from-primary/10 to-primary/5",
      link: "/subsidiaries/easy-pay"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                Excellence Across Sectors
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Our <span className="text-primary">Subsidiaries</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our collective expertise and experience highlight our ability to provide excellent services that surpass our clients' expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidiaries Grid */}
      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {subsidiaries.map((subsidiary, index) => (
            <Link key={index} to={subsidiary.link}>
              <Card 
                className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full"
              >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subsidiary.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8 space-y-6">
                {/* Icon and Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative p-4 bg-background rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {subsidiary.logo ? (
                          <img src={subsidiary.logo} alt={subsidiary.name} className="h-12 w-12 object-contain" />
                        ) : (
                          <subsidiary.icon className="h-8 w-8 text-primary" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {subsidiary.name}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
                  {subsidiary.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Services */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                    <span className="w-8 h-px bg-primary" />
                    Key Services
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subsidiary.services.map((service, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subsidiaries;
