import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Shield, Wallet, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectGallery from "@/components/ProjectGallery";
import digikoloBanner from "@/assets/digikolo-banner.jpg";
import moneyMarketImg from "@/assets/money-market-new.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";
import infrastructureFundImg from "@/assets/infrastructure-fund-new.jpg";

const Digikolo = () => {
  const galleryImages = [
    {
      src: moneyMarketImg,
      alt: "Smart Savings Platform",
      title: "Smart Savings Platform",
      description: "Automated savings solutions with competitive interest rates"
    },
    {
      src: investmentBankingImg,
      alt: "Investment Portfolio Management",
      title: "Investment Portfolio Management",
      description: "Diversified investment options tailored to your financial goals"
    },
    {
      src: infrastructureFundImg,
      alt: "Digital Wallet Services",
      title: "Digital Wallet Services",
      description: "Secure and convenient mobile wallet for everyday transactions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-600/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Subsidiaries
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Fintech Innovation
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                <span className="text-primary">Digikolo</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience seamless fintech savings and investment management with Digikolo - your trusted financial companion.
              </p>
              
              <p className="text-base text-muted-foreground/80 italic">
                A finance subsidiary company leveraging Digikolo's license.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group">
                  Get Started
                  <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-primary/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
                <img 
                  src={digikoloBanner} 
                  alt="Digikolo Platform" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 space-y-20">
        {/* About Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              About <span className="text-primary">Digikolo</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Digikolo is a cutting-edge fintech platform designed to make savings and investment management accessible, 
              simple, and rewarding for everyone. Built on a robust financial license, we combine technology with 
              financial expertise to deliver exceptional value to our users.
            </p>
            <p className="text-lg leading-relaxed">
              Our platform empowers individuals and businesses to take control of their financial future through 
              innovative savings products, diversified investment options, and intelligent financial planning tools.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wallet className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Savings Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible savings plans with competitive interest rates and automated saving features to help you reach your financial goals faster.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PieChart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Investment Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diversified investment portfolios managed by experts, giving you access to various asset classes and market opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Financial Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive financial planning tools and personalized advice to help you make informed decisions about your financial future.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Digital Banking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Secure digital banking services with instant transactions, real-time notifications, and comprehensive account management features.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto">
          <ProjectGallery 
            images={galleryImages}
            title="Platform Features"
            subtitle="Explore our innovative solutions designed to transform your financial experience"
          />
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-blue-600/10 border-2 border-primary/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Start Your Financial Journey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied users who trust Digikolo for their savings and investment needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="group">
                  Open an Account
                  <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Digikolo;
