import { useEffect, useRef, useState } from "react";

// Import all sponsor logos
import sponsor1 from "@/assets/sponsors/sponsor-1.jpg";
import sponsor2 from "@/assets/sponsors/sponsor-2.jpg";
import sponsor3 from "@/assets/sponsors/sponsor-3.png";
import sponsor4 from "@/assets/sponsors/sponsor-4.jpg";
import sponsor5 from "@/assets/sponsors/sponsor-5.jpg";
import sponsor6 from "@/assets/sponsors/sponsor-6.png";
import sponsor7 from "@/assets/sponsors/sponsor-7.jpg";
import sponsor8 from "@/assets/sponsors/sponsor-8.jpg";
import sponsor9 from "@/assets/sponsors/sponsor-9.jpg";
import sponsor10 from "@/assets/sponsors/sponsor-10.jpg";
import sponsor11 from "@/assets/sponsors/sponsor-11.jpg";
import sponsor12 from "@/assets/sponsors/sponsor-12.jpg";
import sponsor13 from "@/assets/sponsors/sponsor-13.png";
import sponsor14 from "@/assets/sponsors/sponsor-14.png";
import sponsor15 from "@/assets/sponsors/sponsor-15.png";
import sponsor16 from "@/assets/sponsors/sponsor-16.jpg";
import sponsor17 from "@/assets/sponsors/sponsor-17.jpg";
import sponsor18 from "@/assets/sponsors/sponsor-18.jpg";
import sponsor19 from "@/assets/sponsors/sponsor-19.jpg";
import sponsor20 from "@/assets/sponsors/sponsor-20.jpg";
import sponsor21 from "@/assets/sponsors/sponsor-21.jpg";
import sponsor22 from "@/assets/sponsors/sponsor-22.png";
import sponsor23 from "@/assets/sponsors/sponsor-23.jpg";
import sponsor24 from "@/assets/sponsors/sponsor-24.jpg";
import sponsor25 from "@/assets/sponsors/sponsor-25.jpg";
import sponsor26 from "@/assets/sponsors/sponsor-26.jpg";
import sponsor27 from "@/assets/sponsors/sponsor-27.png";
import sponsor28 from "@/assets/sponsors/sponsor-28.jpg";
import sponsor29 from "@/assets/sponsors/sponsor-29.jpg";
import sponsor30 from "@/assets/sponsors/sponsor-30.jpg";

const sponsors = [
  { logo: sponsor1, name: "Sovereign Trust Insurance" },
  { logo: sponsor2, name: "The Brook Finance Limited" },
  { logo: sponsor3, name: "Polaris Bank" },
  { logo: sponsor4, name: "First Bank" },
  { logo: sponsor5, name: "Access Bank" },
  { logo: sponsor6, name: "Mainstreet Bank" },
  { logo: sponsor7, name: "Globus Bank" },
  { logo: sponsor8, name: "Zenith Bank" },
  { logo: sponsor9, name: "Anchor Insurance" },
  { logo: sponsor10, name: "Providus Bank" },
  { logo: sponsor11, name: "Bet9ja" },
  { logo: sponsor12, name: "Western Telecom" },
  { logo: sponsor13, name: "First Standard Insurance" },
  { logo: sponsor14, name: "Royal Exchange" },
  { logo: sponsor15, name: "Ogun State Government" },
  { logo: sponsor16, name: "UBA" },
  { logo: sponsor17, name: "ICAN" },
  { logo: sponsor18, name: "Prince Ebeano" },
  { logo: sponsor19, name: "Blackstone Capital" },
  { logo: sponsor20, name: "Medcomms" },
  { logo: sponsor21, name: "Bay Finance Investment" },
  { logo: sponsor22, name: "Zylus" },
  { logo: sponsor23, name: "LandWey" },
  { logo: sponsor24, name: "Salesville" },
  { logo: sponsor25, name: "WTES Limited" },
  { logo: sponsor26, name: "KAB Constructions" },
  { logo: sponsor27, name: "Parallex Bank" },
  { logo: sponsor28, name: "ValueJet" },
  { logo: sponsor29, name: "Panarottis" },
  { logo: sponsor30, name: "Ojaja Pan Africa" },
];

const SponsorsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += 0.8;
        if (scroll.scrollWidth / 2 <= scrollPosition) {
          scrollPosition = 0;
        }
        scroll.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Clients & Partners
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proudly partnering with leading organizations across industries
          </p>
        </div>
        
        {/* Gradient fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex overflow-hidden gap-6 md:gap-8 py-6"
            style={{ scrollBehavior: 'auto' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate sponsors for infinite scroll effect */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="group flex-shrink-0 px-6 py-5 bg-background rounded-2xl shadow-lg border border-border/40 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 min-w-[160px] md:min-w-[180px] h-[100px] md:h-[110px] flex items-center justify-center cursor-pointer transform hover:scale-105"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  title={sponsor.name}
                  className="max-h-[70px] md:max-h-[80px] max-w-[130px] md:max-w-[150px] object-contain filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Partner count badge */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted/50 rounded-full border border-border/50">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              {sponsors.length}+ Trusted Partners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSlider;
