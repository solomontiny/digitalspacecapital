import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EmisonRealEstate = () => {
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
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Emison Real Estate
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Full-service real estate solutions including property development, sales, and property management services.
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
              <h2 className="text-3xl font-bold text-foreground">About Emison Real Estate</h2>
              <p className="text-muted-foreground leading-relaxed">
                Emison Real Estate is a comprehensive real estate services company specializing in property development, sales, and management. With a proven track record of successful projects and satisfied clients, we bring together expertise in residential, commercial, and mixed-use property development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has established us as a trusted name in the real estate industry. From concept to completion, we deliver properties that exceed expectations and create lasting value for investors, buyers, and communities.
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
                    title: "Property Development",
                    description: "End-to-end property development services from site acquisition and design through construction and delivery."
                  },
                  {
                    title: "Real Estate Sales",
                    description: "Professional real estate sales and marketing services to help you buy or sell residential and commercial properties."
                  },
                  {
                    title: "Property Management",
                    description: "Comprehensive property management services to maximize asset value and ensure tenant satisfaction."
                  },
                  {
                    title: "Investment Advisory",
                    description: "Expert real estate investment advisory services to help clients identify and capitalize on lucrative opportunities."
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
              <h2 className="text-2xl font-bold text-foreground">Your Real Estate Partner</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're looking to develop, buy, sell, or manage property, Emison Real Estate is here to help.
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

export default EmisonRealEstate;
