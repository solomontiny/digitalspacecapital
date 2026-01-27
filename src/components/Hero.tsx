import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero-background-trading.jpg";
import heroBackground2 from "@/assets/hero-background.jpg";
import heroBackground3 from "@/assets/hero-background-new.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    heroBackground,
    heroBackground2,
    heroBackground3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[85vh] flex items-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl animate-soft-pulse" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-blur-in">
              Financial Solutions That Work
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-blue-200 mb-4 md:mb-6 animate-slide-up delay-200">
              Finance at its finest
            </h2>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 animate-slide-up delay-300 max-w-lg mx-auto lg:mx-0">
              We help people, businesses, and institutions nurture and manage wealth so they can pursue their financial goals. We do this by providing a robust suite of well-researched and tested financial solutions to our diverse client base.
            </p>
            
            <div className="animate-bounce-in delay-500 flex justify-center lg:justify-start">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/95 hover:scale-105 shadow-xl transition-all duration-300 px-8 ripple-effect animate-breathe"
                >
                  Read More
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Slider - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              {/* Slider Images */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <img 
                    src={slide} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
                  />
                </div>
              ))}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-white w-8" 
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;