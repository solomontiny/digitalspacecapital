import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            What We Do
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Digital Space Capital offers a comprehensive range of financial services designed to meet the diverse needs of our clients. From investment management to securities trading, we provide expert solutions across all aspects of capital markets.
          </p>
        </div>

        <ServicesGrid />
      </main>
    </div>
  );
};

export default WhatWeDo;
