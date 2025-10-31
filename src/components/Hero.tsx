import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Financial Solutions That Work
          </h1>
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-6">
              Finance at its finest
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We help people, businesses, and institutions nurture and manage wealth so they can pursue their financial goals. We do this by providing a robust suite of well-researched and tested financial solutions to our diverse client base.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover:scale-105"
          >
            Read More
          </Button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;