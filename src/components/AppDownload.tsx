import { Link } from "react-router-dom";
import { PiggyBank, TrendingUp, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import digikoloPromo from "@/assets/digikolo-promo.mp4";

const features = [
  { icon: PiggyBank, title: "Smart Savings", description: "Automated savings plans" },
  { icon: TrendingUp, title: "Investments", description: "Grow your wealth" },
  { icon: Shield, title: "Secure", description: "Bank-grade security" },
  { icon: Smartphone, title: "Easy Access", description: "Manage on the go" },
];

const AppDownload = () => {
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