import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";

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
            Our collective expertise and experience highlight our ability to provide excellent services that surpass our clients' expectations.
          </p>
        </div>

        <ServicesGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default WhatWeDo;
