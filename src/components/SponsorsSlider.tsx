import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scroll.scrollWidth / 2 <= scrollPosition) {
        scrollPosition = 0;
      }
      scroll.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Clients & Partners</h2>
          <p className="text-muted-foreground">Trusted by leading organizations across industries</p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-hidden gap-8 py-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate sponsors for infinite scroll effect */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-3 bg-background rounded-lg shadow-md border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 min-w-[140px] h-[80px] flex items-center justify-center"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="max-h-[60px] max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSlider;
