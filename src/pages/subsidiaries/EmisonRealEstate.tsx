import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import emisonRealEstateLogo from "@/assets/emison-real-estate-logo.png";
import infrastructureImg from "@/assets/infrastructure-fund-new.jpg";
import infrastructureOldImg from "@/assets/infrastructure.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";
import ongoingProjectVideo1 from "@/assets/emison-ongoing-project.mp4";
import ongoingProjectVideo3 from "@/assets/emison-project-3.mp4";
import ongoingProjectVideo4 from "@/assets/emison-project-4.mp4";

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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src={emisonRealEstateLogo} alt="Emison Real Estate" className="h-20 w-20 object-contain" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Emison Real Estate
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Full-service real estate solutions including property development, sales, and property management services.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl" />
                <img 
                  src={infrastructureImg} 
                  alt="Real Estate Development" 
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

          {/* Ongoing Projects Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold text-foreground">Ongoing Projects</h2>
                <p className="text-muted-foreground">Discover our current developments transforming communities</p>
              </div>
              <div className="px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
              {[
                      { src: ongoingProjectVideo1, title: "Emison Estate Phase 1" },
                      { src: ongoingProjectVideo3, title: "Commercial Complex" },
                      { src: ongoingProjectVideo4, title: "Premium Residence" },
                    ].map((video, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="space-y-3">
                          <div className="relative rounded-xl overflow-hidden border border-border shadow-lg aspect-[9/16] max-h-[320px]">
                            <video
                              src={video.src}
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                            >
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="text-white text-sm font-medium truncate">{video.title}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Section */}
          <ProjectGallery 
            title="Featured Projects"
            subtitle="Showcasing our landmark developments and successful transactions"
            images={[
              {
                src: infrastructureImg,
                alt: "Luxury Villa Development",
                title: "Luxury Villa Development",
                description: "Premium luxury villas with world-class amenities"
              },
              {
                src: infrastructureOldImg,
                alt: "Commercial Development",
                title: "Premium Office Complex",
                description: "50,000 sq ft commercial development in prime location"
              },
              {
                src: investmentBankingImg,
                alt: "Property Management",
                title: "Portfolio Management Success",
                description: "Managing $100M+ in commercial properties"
              }
            ]}
          />

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
