import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DigitalSpaceCapital = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Subsidiaries
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
                <Building2 className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Digital Space Capital
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The parent company providing strategic oversight and financial services coordination across all subsidiaries.
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
              <h2 className="text-3xl font-bold text-foreground">About Digital Space Capital</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Space Capital serves as the cornerstone of our financial services group, providing strategic direction and comprehensive oversight across all our subsidiary companies. With a commitment to excellence and innovation, we coordinate financial services to deliver exceptional value to our clients and stakeholders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced leadership team brings decades of combined expertise in financial markets, corporate strategy, and regulatory compliance, ensuring that each subsidiary operates at the highest standards of professionalism and service delivery.
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
                    title: "Corporate Strategy",
                    description: "Comprehensive strategic planning and business development services to drive growth across all subsidiaries."
                  },
                  {
                    title: "Financial Planning",
                    description: "Expert financial planning and analysis to optimize performance and maximize shareholder value."
                  },
                  {
                    title: "Business Development",
                    description: "Identifying and pursuing strategic opportunities for expansion and market leadership."
                  },
                  {
                    title: "Regulatory Compliance",
                    description: "Ensuring adherence to all regulatory requirements and maintaining the highest standards of corporate governance."
                  }
                ].map((service, index) => (
                  <div key={index} className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about how Digital Space Capital can support your financial goals and business objectives.
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

export default DigitalSpaceCapital;
