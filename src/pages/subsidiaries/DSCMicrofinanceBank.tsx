import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Landmark, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import dscMfbLogo from "@/assets/dsc-microfinance-bank-logo.png";
import creditImg from "@/assets/credit.jpg";
import assetManagementImg from "@/assets/asset-management.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";

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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src={dscMfbLogo} alt="DSC Microfinance Bank" className="h-20 w-20 object-contain" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    DSC Microfinance Bank
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Providing accessible financial services to underserved communities and supporting micro-enterprises.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-2xl" />
                <img 
                  src={creditImg} 
                  alt="Microfinance Banking" 
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

          {/* Gallery Section */}
          <ProjectGallery 
            title="Community Impact Stories"
            subtitle="Empowering entrepreneurs and transforming communities"
            images={[
              {
                src: creditImg,
                alt: "Micro Loan Success",
                title: "Small Business Growth",
                description: "Supporting 500+ entrepreneurs with micro-loans in 2024"
              },
              {
                src: assetManagementImg,
                alt: "Financial Inclusion",
                title: "Financial Literacy Program",
                description: "Training 1000+ community members in financial management"
              },
              {
                src: creditImg,
                alt: "Community Banking",
                title: "Rural Banking Expansion",
                description: "Bringing banking services to underserved communities"
              },
              {
                src: investmentBankingImg,
                alt: "Business Development",
                title: "Entrepreneur Support",
                description: "Advisory services helping businesses scale operations"
              },
              {
                src: assetManagementImg,
                alt: "Savings Initiative",
                title: "Community Savings Groups",
                description: "Building financial security for families"
              },
              {
                src: creditImg,
                alt: "Loan Portfolio",
                title: "Women Empowerment",
                description: "Dedicated lending programs for women entrepreneurs"
              }
            ]}
          />

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
