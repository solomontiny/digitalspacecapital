import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-new.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Financial Solutions That Work
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-4">
              Stability, Liquidity, Growth
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We help people, businesses and institutions nurture and manage wealth so they can pursue their financial goals. We do this by providing a robust suite of well researched and tested financial solutions to our diverse client base.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
          >
            Read More
          </Button>
        </div>
      </div>
      
      {/* Navigation Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex items-center space-x-2">
            <div className="text-white text-sm font-light">0{num}</div>
            <div className="w-8 h-px bg-white/40" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;