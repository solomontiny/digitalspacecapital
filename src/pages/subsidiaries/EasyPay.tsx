import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import easyPayLogo from "@/assets/easy-pay-logo.png";
import securitiesTradingImg from "@/assets/securities-trading.jpg";
import assetManagementImg from "@/assets/asset-management.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";

const EasyPay = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
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
                  <img src={easyPayLogo} alt="Easy Pay" className="h-20 w-20 object-contain" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Easy Pay
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Modern payment solutions platform enabling seamless digital transactions and financial services.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
                <img 
                  src={securitiesTradingImg} 
                  alt="Digital Payments" 
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
              <h2 className="text-3xl font-bold text-foreground">About Easy Pay</h2>
              <p className="text-muted-foreground leading-relaxed">
                Easy Pay is a cutting-edge digital payment platform designed to make financial transactions simple, secure, and convenient. We leverage the latest technology to provide seamless payment experiences for individuals and businesses, enabling them to transact with confidence in today's digital economy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform supports a wide range of payment methods and services, from peer-to-peer money transfers to bill payments and mobile wallet solutions. With a focus on security, reliability, and user experience, Easy Pay is transforming the way people manage their finances and conduct transactions.
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
                    title: "Digital Payments",
                    description: "Fast, secure, and convenient digital payment solutions for online and in-store transactions."
                  },
                  {
                    title: "Money Transfer",
                    description: "Instant money transfer services enabling you to send and receive funds quickly and securely."
                  },
                  {
                    title: "Bill Payments",
                    description: "Convenient bill payment services for utilities, subscriptions, and other recurring payments."
                  },
                  {
                    title: "Mobile Wallet",
                    description: "Secure mobile wallet solution for storing payment methods and making contactless payments on the go."
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

          {/* Gallery Section */}
          <ProjectGallery 
            title="Platform Success Stories"
            subtitle="Revolutionizing digital payments and mobile transactions"
            images={[
              {
                src: securitiesTradingImg,
                alt: "Mobile Payment",
                title: "Seamless Mobile Transactions",
                description: "Processing 1M+ transactions monthly with 99.9% uptime"
              },
              {
                src: assetManagementImg,
                alt: "Digital Wallet",
                title: "Digital Wallet Innovation",
                description: "500K+ active users managing their finances digitally"
              },
              {
                src: investmentBankingImg,
                alt: "Payment Gateway",
                title: "Secure Payment Gateway",
                description: "Powering e-commerce for 10,000+ businesses"
              },
              {
                src: securitiesTradingImg,
                alt: "Bill Payment",
                title: "Multi-Service Bill Payment",
                description: "Convenient payment options for utilities and services"
              },
              {
                src: assetManagementImg,
                alt: "Money Transfer",
                title: "Instant Money Transfer",
                description: "Fast, secure peer-to-peer and cross-border transfers"
              },
              {
                src: investmentBankingImg,
                alt: "Merchant Solutions",
                title: "Merchant Payment Solutions",
                description: "Enabling businesses to accept digital payments easily"
              }
            ]}
          />

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Experience Easy Payments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users who trust Easy Pay for their digital payment needs.
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

export default EasyPay;
