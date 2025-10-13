import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StockTicker from "@/components/StockTicker";
import ServicesGrid from "@/components/ServicesGrid";
import Statistics from "@/components/Statistics";
import NewsSection from "@/components/NewsSection";
import AppDownload from "@/components/AppDownload";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StockTicker />
      <ServicesGrid />
      <Statistics />
      <NewsSection />
      <AppDownload />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Index;
