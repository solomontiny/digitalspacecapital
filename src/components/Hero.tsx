import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in">
            Financial Solutions That Work
          </h1>
          
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Finance at its finest
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We help people, businesses, and institutions nurture and manage wealth so they can pursue their financial goals. We do this by providing a robust suite of well-researched and tested financial solutions to our diverse client base.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/about">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/95 hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;