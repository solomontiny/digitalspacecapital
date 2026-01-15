import { useEffect, useRef } from "react";

const sponsors = [
  "Sovereign Trust Insurance",
  "The Brook Finance Limited",
  "Polaris Bank",
  "First Bank",
  "Access Bank",
  "Mainstreet Bank",
  "Globus Bank",
  "Zenith Bank",
  "Anchor Insurance",
  "Providus Bank",
  "Bet9ja",
  "Western Telecom",
  "First Standard Insurance",
  "Royal Exchange",
  "Ogun State Government",
  "UBA",
  "ICAN",
  "Prince Ebeano",
  "Blackstone Capital",
  "Medcomms",
  "Bay Finance Investment",
  "Zylus",
  "LandWey",
  "Salesville",
  "WTES Limited",
  "KAB Constructions",
  "Parallex Bank",
  "ValueJet",
  "Panarottis",
  "Ojaja Pan Africa",
  "Trumpy Concept",
  "Casafina Development",
  "Nigerian Shippers Council",
  "Keystone Bank",
  "Lagos State Government",
  "Leadway",
  "Weystruct",
  "First Metro",
  "ExxonMobil"
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
              className="flex-shrink-0 px-6 py-4 bg-background rounded-lg shadow-md border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 min-w-[180px] flex items-center justify-center"
            >
              <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap text-center">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSlider;
