import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Landmark, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DSCMicrofinanceBank = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400/10 via-background to-blue-500/5 py-20">
        <div className="container mx-auto px-4">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Subsidiaries
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-lg">
                <Landmark className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                DSC Microfinance Bank
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Providing accessible financial services to underserved communities and supporting micro-enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">About DSC Microfinance Bank</h2>
              <p className="text-muted-foreground leading-relaxed">
                DSC Microfinance Bank is committed to financial inclusion and empowering underserved communities through accessible banking services. We specialize in providing micro-loans and financial products tailored to the needs of small businesses and individuals who traditionally lack access to conventional banking services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to support economic development at the grassroots level by providing the financial tools and education necessary for micro-enterprises to thrive. We believe that everyone deserves access to quality financial services, and we work tirelessly to bridge the gap between traditional banking and underserved communities.
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
                    title: "Micro Loans",
                    description: "Flexible micro-lending solutions designed to support small businesses and entrepreneurs in growing their ventures."
                  },
                  {
                    title: "Savings Accounts",
                    description: "Accessible savings products with competitive interest rates to help individuals and families build financial security."
                  },
                  {
                    title: "Business Advisory",
                    description: "Expert business advisory services to help micro-enterprises develop sustainable business models and growth strategies."
                  },
                  {
                    title: "Financial Literacy",
                    description: "Comprehensive financial education programs to empower communities with knowledge about money management and planning."
                  }
                ].map((service, index) => (
                  <div key={index} className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-blue-400/10 to-transparent border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
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
          <Card className="bg-gradient-to-br from-blue-400/10 to-blue-500/5 border-blue-400/20">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Access Financial Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with DSC Microfinance Bank.
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

export default DSCMicrofinanceBank;
