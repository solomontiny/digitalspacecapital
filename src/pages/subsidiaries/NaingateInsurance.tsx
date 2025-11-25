import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NaingateInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-background to-primary/5 py-20">
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
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Naingate Insurance Brokers
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert insurance brokerage services offering comprehensive coverage solutions for individuals and businesses.
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
              <h2 className="text-3xl font-bold text-foreground">About Naingate Insurance Brokers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Naingate Insurance Brokers is a leading insurance brokerage firm providing expert advisory services and comprehensive insurance solutions. With extensive experience in the insurance industry, we help individuals and businesses navigate the complex world of insurance to find the right coverage at the best value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of licensed insurance professionals works with top-rated insurance carriers to provide a wide range of coverage options. We pride ourselves on our personalized service, competitive pricing, and commitment to ensuring our clients have the protection they need when they need it most.
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
                    title: "Life Insurance",
                    description: "Comprehensive life insurance solutions to protect your family's financial future and provide peace of mind."
                  },
                  {
                    title: "Property Insurance",
                    description: "Complete property coverage including home, commercial, and specialized property insurance policies."
                  },
                  {
                    title: "Health Coverage",
                    description: "Individual and group health insurance plans offering comprehensive medical coverage for you and your family."
                  },
                  {
                    title: "Risk Assessment",
                    description: "Professional risk assessment and insurance planning services to identify and mitigate potential exposures."
                  }
                ].map((service, index) => (
                  <div key={index} className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-border">
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
              <h2 className="text-2xl font-bold text-foreground">Protect What Matters Most</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get a free insurance consultation and discover coverage options tailored to your needs.
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

export default NaingateInsurance;
