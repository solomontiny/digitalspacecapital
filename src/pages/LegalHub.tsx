import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Shield, Cookie, Scale, Building, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

const LegalHub = () => {
  const legalDocuments = [
    {
      title: "Privacy Policy",
      description: "Learn how we collect, use, and protect your personal information when you use our services.",
      icon: Shield,
      link: "/privacy-policy",
      lastUpdated: "December 2024"
    },
    {
      title: "Terms of Service",
      description: "The terms and conditions governing your use of Digital Space Capital's website and financial services.",
      icon: FileText,
      link: "/terms-of-service",
      lastUpdated: "December 2024"
    },
    {
      title: "Cookie Policy",
      description: "Information about the cookies we use and how you can manage your cookie preferences.",
      icon: Cookie,
      link: "/privacy-policy#cookies",
      lastUpdated: "December 2024"
    }
  ];

  const quickLinks = [
    {
      title: "Regulatory Compliance",
      description: "Digital Space Capital operates under the supervision of the Securities and Exchange Commission (SEC) Nigeria and the Central Bank of Nigeria (CBN).",
      icon: Building
    },
    {
      title: "Investment Risk Disclosure",
      description: "All investments carry risks. Past performance is not indicative of future results. Please read all relevant documentation before investing.",
      icon: AlertTriangle
    },
    {
      title: "Dispute Resolution",
      description: "Any disputes arising from our services shall be resolved through arbitration in accordance with Nigerian law.",
      icon: Scale
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Legal Hub" description="Central directory of all legal documents, policies and compliance information for Digital Space Capital Group." />

      <Helmet>
        <title>Legal Hub - Digital Space Capital</title>
        <meta name="description" content="Access all legal documents, policies, and compliance information for Digital Space Capital's financial services." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Legal Information
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Legal Hub
              </h1>
              <p className="text-xl text-muted-foreground">
                Access all our legal documents, policies, and regulatory information in one place. 
                We believe in transparency and are committed to protecting your rights.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Legal Documents</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {legalDocuments.map((doc, index) => (
              <AnimatedSection key={doc.title} animation="fade-up" delay={index * 100}>
                <Link 
                  to={doc.link}
                  className="group block bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <doc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {doc.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    Last updated: {doc.lastUpdated}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Important Information</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className="bg-card border rounded-2xl p-6 h-full">
                  <div className="p-3 bg-secondary/50 rounded-xl w-fit mb-4">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Preferences Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center bg-card border rounded-2xl p-8">
              <Cookie className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Manage Cookie Preferences</h2>
              <p className="text-muted-foreground mb-6">
                Control how we use cookies on our website. You can customize your preferences at any time.
              </p>
              <button
                onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Cookie className="w-4 h-4" />
                Open Cookie Preferences
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Have Legal Questions?</h2>
              <p className="text-primary-foreground/80 mb-6">
                If you have any questions about our legal documents or need clarification, 
                please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@digitalspacecapital.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
                >
                  Contact Legal Team
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-foreground/30 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  General Inquiries
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalHub;
