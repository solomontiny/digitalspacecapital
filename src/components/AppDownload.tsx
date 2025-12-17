import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { PiggyBank, TrendingUp, Shield, Smartphone, Users, Wallet, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import digikoloPromo from "@/assets/digikolo-promo.mp4";

const features = [
  { icon: PiggyBank, title: "Smart Savings", description: "Automated savings plans" },
  { icon: TrendingUp, title: "Investments", description: "Grow your wealth" },
  { icon: Shield, title: "Secure", description: "Bank-grade security" },
  { icon: Smartphone, title: "Easy Access", description: "Manage on the go" },
];

const stats = [
  { icon: Users, value: 50000, label: "Active Users", prefix: "", suffix: "+" },
  { icon: Wallet, value: 2.5, label: "Total Savings", prefix: "₦", suffix: "B+" },
  { icon: Download, value: 100000, label: "App Downloads", prefix: "", suffix: "+" },
  { icon: Star, value: 4.8, label: "App Rating", prefix: "", suffix: "/5" },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number | null = null;
    const isDecimal = end % 1 !== 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * end;
      
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);
  
  return count;
};

const StatCounter = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };
  
  return (
    <div className="text-center p-4">
      <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        {stat.prefix}{stat.value >= 1000 ? formatNumber(count) : count}{stat.suffix}
      </div>
      <p className="text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const AppDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Download Our Digikolo Mobile app
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience seamless fintech savings and investment management with Digikolo - your trusted financial companion. A fintech arm powered by Digital Space Capital.
          </p>

          {/* Animated Stats */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8 bg-background/80 rounded-xl p-4 border border-border/30"
          >
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} isVisible={isVisible} />
            ))}
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.digitalspacecapital.digikolo&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-smooth hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>
            <a 
              href="https://apps.apple.com/ng/app/digikolo/id1546389680" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-smooth hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform">
              <Link to="/subsidiaries/digikolo">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Digikolo Video Advert Section */}
        <div className="mt-6 max-w-xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative rounded-xl overflow-hidden border border-border/50 bg-card shadow-lg">
              <video 
                src={digikoloPromo}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;