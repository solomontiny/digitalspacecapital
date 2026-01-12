import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Shield, 
  TrendingUp, 
  Wallet,
  Building2,
  Banknote,
  PiggyBank,
  FileText,
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Home,
  Users,
  Zap,
  Target,
  Award,
  Lightbulb,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dscLogo from "@/assets/digital-space-capital-icon.png";
import dscAssetMgtLogo from "@/assets/dsc-asset-management-logo.png";
import dscMfbLogo from "@/assets/dsc-microfinance-bank-logo.png";
import naingateInsuranceLogo from "@/assets/naingate-insurance-logo.png";
import emisonRealEstateLogo from "@/assets/emison-real-estate-logo.png";
import easyPayLogo from "@/assets/easy-pay-logo.png";
import digikoloLogo from "@/assets/digikolo-banner.jpg";

const businessStructure = [
  {
    title: "DSC Asset Management",
    gradient: "from-blue-500 to-indigo-600",
    items: [
      "Fund & Investment Mgt",
      "Portfolio Mgt Services",
      "Capital Raising",
      "Debts & Equity",
      "Investment Advisory Services"
    ]
  },
  {
    title: "DSC FX/Trading",
    gradient: "from-emerald-500 to-teal-600",
    items: [
      "Remittance (Easy Pay)",
      "Bureau de change",
      "Distribution",
      "Supply Chain"
    ]
  },
  {
    title: "DSC Resources & Investment",
    gradient: "from-purple-500 to-violet-600",
    items: [
      "B2B Trading",
      "Branding & Communication",
      "Project Financing",
      "Photovoltaic Energy"
    ]
  },
  {
    title: "Real Estates",
    gradient: "from-orange-500 to-amber-600",
    items: [
      "Construction",
      "Marketing",
      "Facility Management",
      "Joint Ventures"
    ]
  }
];

const coreServices = [
  { name: "Financial Services", icon: TrendingUp },
  { name: "Financial Advisory", icon: FileText },
  { name: "Microbanking", icon: Banknote },
  { name: "Saving Platform (Digikolo)", icon: PiggyBank },
  { name: "Loans", icon: Wallet },
  { name: "Insurance Brokerage", icon: Shield }
];

const teamExpertise = [
  { 
    number: "1", 
    title: "Deep Industry Knowledge", 
    icon: Briefcase,
    description: "Decades of combined experience in financial markets and services"
  },
  { 
    number: "2", 
    title: "Proven Track Record of Success", 
    icon: Award,
    description: "Consistent delivery of exceptional results for our clients"
  },
  { 
    number: "3", 
    title: "Innovative Problem-Solving Skills", 
    icon: Lightbulb,
    description: "Creative solutions tailored to unique client challenges"
  },
  { 
    number: "4", 
    title: "Unwavering Commitment to Client Satisfaction", 
    icon: Heart,
    description: "Putting our clients' success at the heart of everything we do"
  }
];

const subsidiaryLinks = [
  { name: "DSC Asset Management", logo: dscAssetMgtLogo, link: "/subsidiaries/dsc-asset-management" },
  { name: "DSC Microfinance Bank", logo: dscMfbLogo, link: "/subsidiaries/dsc-microfinance-bank" },
  { name: "Naingate Insurance", logo: naingateInsuranceLogo, link: "/subsidiaries/naingate-insurance" },
  { name: "Emison Real Estate", logo: emisonRealEstateLogo, link: "/subsidiaries/emison-real-estate" },
  { name: "Easy Pay", logo: easyPayLogo, link: "/subsidiaries/easy-pay" },
  { name: "Digikolo", logo: digikoloLogo, link: "/subsidiaries/digikolo" }
];

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const DigitalSpaceCapital = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
          <div 
            className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] transition-all duration-1000 ease-out"
            style={{
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
            }}
          />
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/30 blur-[80px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-6 gap-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />
              Back to Subsidiaries
            </Button>
          </Link>

          <div className="max-w-5xl">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Revolutionary Digital Finance
            </div>

            {/* Main heading with logo */}
            <div className="flex items-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-4 bg-background rounded-2xl shadow-2xl border border-border/50">
                  <img src={dscLogo} alt="Digital Space Capital" className="h-20 w-20 object-contain" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                Digital Space<br />
                <span className="text-primary">Capital Group</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A licensed revolutionary innovator in the digital finance industry providing a bouquet of services including{" "}
              <span className="text-foreground font-medium">asset management</span>,{" "}
              <span className="text-foreground font-medium">corporate finance</span>,{" "}
              <span className="text-foreground font-medium">micro and macro lending</span>,{" "}
              <span className="text-foreground font-medium">Forex and Utility payment services</span>, and{" "}
              <span className="text-foreground font-medium">Insurance brokerage</span>.
            </p>

            {/* Regulatory badges */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {["SEC", "CBN (MFB)", "NAICOM"].map((reg, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{reg} Licensed</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button size="lg" className="gap-2 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="gap-2">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute right-10 top-1/4 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-2xl">
              <Globe className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services DNA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              DSC Financial Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Cutting across key areas in finance and business management within and outside Sub-Saharan Africa
            </p>
          </div>

          {/* DNA-style service layout */}
          <div className="max-w-4xl mx-auto relative">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" style={{ transform: "translateX(-50%)" }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div 
                    key={index}
                    className={`group relative ${isLeft ? "md:pr-12" : "md:pl-12 md:mt-16"}`}
                  >
                    {/* Connector dot */}
                    <div className={`absolute top-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 hidden md:block ${isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`} style={{ transform: `translate(${isLeft ? "50%" : "-50%"}, -50%)` }} />
                    
                    <Card className="relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Collective Expertise
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Our team's collective expertise and experience highlights our ability to provide excellent services as and when due, surpassing our client expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamExpertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index}
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-3xl font-bold text-primary-foreground">{item.number}</span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-background border border-border shadow-md flex items-center justify-center">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Structure Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Business Structure
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              DSC Group Structure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our diversified business units delivering specialized financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {businessStructure.map((unit, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${unit.gradient}`} />
                
                <CardContent className="p-6">
                  <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${unit.gradient} bg-clip-text text-transparent`}>
                    {unit.title}
                  </h3>
                  <ul className="space-y-3">
                    {unit.items.map((item, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${unit.gradient}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Our Companies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Subsidiaries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our group of companies delivering specialized services across various sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {subsidiaryLinks.map((subsidiary, index) => (
              <Link 
                key={index} 
                to={subsidiary.link}
                className="group"
              >
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-background shadow-md group-hover:scale-110 transition-transform duration-500">
                        <img 
                          src={subsidiary.logo} 
                          alt={subsidiary.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {subsidiary.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: 6, suffix: "+", label: "Subsidiaries" },
              { value: 50000, suffix: "+", label: "Clients Served" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 100, suffix: "M+", label: "Transactions" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <CardContent className="p-12 text-center relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                Learn more about how Digital Space Capital can support your financial goals and business objectives across Sub-Saharan Africa and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 group">
                    Contact Us Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="gap-2">
                    About Our Group
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DigitalSpaceCapital;
