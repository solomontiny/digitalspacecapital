import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text aligned to the left */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in">
              Financial Solutions That Work
            </h1>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-3 md:mb-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Finance at its finest
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed animate-fade-in lg:max-w-xl" style={{ animationDelay: '0.4s' }}>
                We help people, businesses, and institutions nurture and manage wealth so they can pursue their financial goals. We do this by providing a robust suite of well-researched and tested financial solutions to our diverse client base.
              </p>
            </div>
            
            <div className="animate-fade-in flex justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
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

          {/* Image on the right */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroBackground} 
                alt="Financial Solutions" 
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;