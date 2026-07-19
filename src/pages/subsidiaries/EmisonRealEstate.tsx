// Emison Real Estate Page
import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import emisonRealEstateLogo from "@/assets/emison-real-estate-logo.png";
import emisonHeroLeasing from "@/assets/emison-hero-leasing.png";
import emisonHeroProperty from "@/assets/emison-hero-property.png";
import SEO from "@/components/SEO";

const chemicalPlazaVideo = "/videos/chemical-plaza.mp4";
const featuredProjectVideo = "/videos/featured-project.mp4";

const heroSlides = [
  {
    src: emisonHeroLeasing,
    alt: "Emison Real Estate leasing and shop rental promotion",
  },
  {
    src: emisonHeroProperty,
    alt: "Emison Real Estate property investment promotion",
  },
];

const EmisonRealEstate = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  const updateActiveSlide = useCallback((api: CarouselApi) => {
    setActiveSlide(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    updateActiveSlide(carouselApi);
    carouselApi.on("select", updateActiveSlide);
    carouselApi.on("reInit", updateActiveSlide);

    return () => {
      carouselApi.off("select", updateActiveSlide);
      carouselApi.off("reInit", updateActiveSlide);
    };
  }, [carouselApi, updateActiveSlide]);

  useEffect(() => {
    if (!carouselApi || isHeroHovered) return;

    const autoplay = window.setInterval(() => carouselApi.scrollNext(), 5000);
    return () => window.clearInterval(autoplay);
  }, [carouselApi, isHeroHovered]);

  useEffect(() => {
    const nextSlide = new Image();
    nextSlide.src = heroSlides[(activeSlide + 1) % heroSlides.length].src;
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Emison Real Estate" description="Emison Real Estate — premium property development, sales and management including Ojaja Mall and ongoing landmark projects." />

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-950/10 via-background to-background px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-[1440px]">
          <Carousel
            setApi={setCarouselApi}
            opts={{ loop: true, duration: 30 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-emerald-950 shadow-2xl"
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
          >
            <CarouselContent className="-ml-0">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={slide.src} className="pl-0">
                  <div className="relative h-[500px] sm:h-[560px] lg:h-[680px]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover object-center"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      style={
                        index === activeSlide
                          ? { animation: "emison-ken-burns 9s ease-out both" }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/68 to-emerald-950/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
              <div className="w-full px-7 sm:px-12 lg:px-16">
                <div className="max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <img
                    src={emisonRealEstateLogo}
                    alt="Emison Real Estate"
                    className="mb-6 h-16 w-16 rounded-lg bg-white/95 p-2 shadow-lg sm:h-20 sm:w-20"
                  />
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300 sm:text-sm">
                    Elevated property experiences
                  </p>
                  <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Premium Real Estate Solutions
                  </h1>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                    Developing premium residential, commercial and mixed-use properties while delivering trusted property development, sales and management solutions across Nigeria.
                  </p>
                  <a
                    href="https://www.emisonrealestate.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto mt-7 inline-flex"
                  >
                    <Button size="lg" className="rounded-md bg-amber-500 px-6 text-emerald-950 shadow-lg transition-colors hover:bg-amber-400">
                      Visit Emison Website
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <Link to="/subsidiaries" className="absolute left-5 top-5 z-20">
              <Button variant="ghost" className="gap-2 border border-white/15 bg-black/20 text-white hover:bg-black/40 hover:text-white">
                <ArrowLeft className="w-4 h-4" />
                Back to Subsidiaries
              </Button>
            </Link>

            <CarouselPrevious className="left-5 z-20 h-10 w-10 border-white/20 bg-black/25 text-white opacity-100 shadow-none transition-opacity hover:bg-black/50 hover:text-white sm:left-7 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100" />
            <CarouselNext className="right-5 z-20 h-10 w-10 border-white/20 bg-black/25 text-white opacity-100 shadow-none transition-opacity hover:bg-black/50 hover:text-white sm:right-7 sm:h-11 sm:w-11 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100" />

            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "w-8 bg-amber-300" : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>
        <style>{`
          @keyframes emison-ken-burns {
            from { transform: scale(1); }
            to { transform: scale(1.08); }
          }
        `}</style>
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
          <Card className="overflow-hidden bg-gradient-to-br from-background via-background to-blue-500/5">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Ongoing Projects
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover our current developments transforming communities
                </p>
              </div>
              
              <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
                {[
                  { src: "/videos/odelemo-project.mp4", title: "ODELEMO PROJECT" },
                  { src: chemicalPlazaVideo, title: "Chemical Plaza Ojota" },
                ].map((video, index) => (
                  <div 
                    key={index} 
                    className="group relative w-[200px] md:w-[240px] transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Glow effect behind card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Video Card */}
                    <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl aspect-[9/16] bg-black/5 backdrop-blur-sm">
                      {/* Sharp video rendering */}
                      <video
                        src={video.src}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{
                          imageRendering: 'crisp-edges',
                          filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                        }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Elegant overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Soft shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Title with glassmorphism */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                          <p className="text-white text-sm font-semibold tracking-wide text-center truncate">
                            {video.title}
                          </p>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Project Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold text-foreground">Featured Project</h2>
                <p className="text-muted-foreground">Showcasing our landmark development</p>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="relative rounded-xl overflow-hidden border border-border shadow-lg aspect-video">
                  <video
                    src={featuredProjectVideo}
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
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold">OJAJA MALL</h3>
                    <p className="text-white/80 text-sm mt-1">A premier mixed-use commercial development featuring retail spaces and modern amenities</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
            <CardContent className="p-8 text-center space-y-4">
              <h2
               className="text-2xl font-bold text-foreground">Ready to Invest in Your Next Property?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
               Explore Emison Real Estate's latest developments, investment opportunities and premium property solutions by visiting our official website.
              </p>
              <a
  href="https://www.emisonrealestate.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="gap-2">
    Visit Emison Website
  </Button>
</a>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmisonRealEstate;
