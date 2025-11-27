import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dscAssetMgtLogo from "@/assets/dsc-asset-management-logo.png";
import assetManagementImg from "@/assets/asset-management.jpg";

const DSCAssetManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500/10 via-background to-blue-600/5 py-20">
        <div className="container mx-auto px-4">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Subsidiaries
            </Button>
          </Link>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src={dscAssetMgtLogo} alt="DSC Asset Management" className="h-20 w-20 object-contain" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    DSC Asset Management
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Specializing in portfolio management and investment advisory services for institutional and high-net-worth clients.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl" />
                <img 
                  src={assetManagementImg} 
                  alt="Asset Management" 
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">About DSC Asset Management</h2>
              <p className="text-muted-foreground leading-relaxed">
                DSC Asset Management is a premier investment management firm dedicated to helping institutional investors and high-net-worth individuals achieve their financial objectives. Our team of experienced portfolio managers and investment advisors employs rigorous research and disciplined investment strategies to deliver superior risk-adjusted returns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine deep market insights with advanced analytics to construct portfolios tailored to each client's unique risk tolerance, investment horizon, and financial goals. Our commitment to transparency and client service has made us a trusted partner for wealth preservation and growth.
              </p>
            </CardContent>
          </Card>

          {/* Services Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Portfolio Management",
                    description: "Customized portfolio construction and management services designed to optimize returns while managing risk across diverse asset classes."
                  },
                  {
                    title: "Investment Advisory",
                    description: "Strategic investment advice and market insights to help clients make informed decisions about their financial future."
                  },
                  {
                    title: "Wealth Planning",
                    description: "Comprehensive wealth planning services including retirement planning, estate planning, and tax optimization strategies."
                  },
                  {
                    title: "Risk Management",
                    description: "Sophisticated risk assessment and mitigation strategies to protect and preserve wealth across market cycles."
                  }
                ].map((service, index) => (
                  <div key={index} className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground mt-2">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Start Your Investment Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Partner with DSC Asset Management for professional portfolio management and investment advisory services.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DSCAssetManagement;
