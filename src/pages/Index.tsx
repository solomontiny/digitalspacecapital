import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StockTicker from "@/components/StockTicker";
import ServicesGrid from "@/components/ServicesGrid";
import Statistics from "@/components/Statistics";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import CookieConsent from "@/components/CookieConsent";
import CookiePreferenceCenter from "@/components/CookiePreferenceCenter";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <AnimatedSection animation="fade-up">
        <StockTicker />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <ServicesGrid />
      </AnimatedSection>
      
      <AnimatedSection animation="scale" delay={150}>
        <Statistics />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={200}>
        <NewsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={250}>
        <TestimonialsSection />
      </AnimatedSection>
      
      <Footer />
      <CookieConsent />
      <CookiePreferenceCenter />
    </div>
  );
};

export default Index;
