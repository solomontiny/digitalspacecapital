import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StockTicker from "@/components/StockTicker";
import ServicesGrid from "@/components/ServicesGrid";
import Statistics from "@/components/Statistics";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import CookieConsent from "@/components/CookieConsent";
import CookiePreferenceCenter from "@/components/CookiePreferenceCenter";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll-to-section when navigating from other pages
  useEffect(() => {
    if (!isLoading && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state to prevent re-scrolling
      window.history.replaceState({}, document.title);
    }
  }, [isLoading, location.state]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      
      <AnimatedSection animation="float-up">
        <section id="ticker">
          <StockTicker />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="zoom-blur" delay={100}>
        <section id="services">
          <ServicesGrid />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="slide-rotate" delay={150}>
        <section id="news">
          <NewsSection />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="float-up" delay={200}>
        <section id="testimonials">
          <Statistics />
        </section>
      </AnimatedSection>
      
      <section id="footer">
        <Footer />
      </section>
      <CookieConsent />
      <CookiePreferenceCenter />
    </div>
  );
};

export default Index;
