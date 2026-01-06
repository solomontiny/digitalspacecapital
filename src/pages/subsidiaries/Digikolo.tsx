import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, TrendingUp, Shield, Wallet, PieChart, Users, Star, 
  Download, Smartphone, Bell, Lock, Zap, CreditCard, BarChart3, 
  Globe, Clock, Fingerprint, RefreshCw, HeadphonesIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import ProjectGallery from "@/components/ProjectGallery";
import digikoloBanner from "@/assets/digikolo-banner.jpg";
import moneyMarketImg from "@/assets/money-market-new.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";
import infrastructureFundImg from "@/assets/infrastructure-fund-new.jpg";

// Hook for animated counting
const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  
  return count;
};

// Stats data
const stats = [
  { icon: Users, value: 50000, label: "Active Users", prefix: "", suffix: "+" },
  { icon: Wallet, value: 2.5, label: "Total Savings", prefix: "₦", suffix: "B+" },
  { icon: Download, value: 100000, label: "App Downloads", prefix: "", suffix: "+" },
  { icon: Star, value: 4.8, label: "App Rating", prefix: "", suffix: "/5" },
];

// App features data
const appFeatures = [
  {
    icon: Smartphone,
    title: "Intuitive Mobile App",
    description: "Beautifully designed app with seamless user experience across iOS and Android devices."
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "256-bit encryption and multi-factor authentication to keep your funds safe."
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Lightning-fast transfers and real-time transaction notifications."
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description: "Generate virtual cards for secure online shopping and subscriptions."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Track your spending patterns and savings growth with detailed insights."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Customizable alerts for transactions, savings milestones, and investment updates."
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Save and invest in multiple currencies with competitive exchange rates."
  },
  {
    icon: Clock,
    title: "Auto-Save Features",
    description: "Set up automatic savings rules to build wealth effortlessly."
  },
  {
    icon: Fingerprint,
    title: "Biometric Login",
    description: "Quick and secure access with fingerprint and face recognition."
  },
  {
    icon: RefreshCw,
    title: "Recurring Investments",
    description: "Automate your investment strategy with scheduled contributions."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support via chat, email, and phone."
  },
  {
    icon: PieChart,
    title: "Portfolio Tracking",
    description: "Monitor all your investments and returns in one unified dashboard."
  }
];

// User reviews data
const userReviews = [
  { name: "Adebayo O.", rating: 5, review: "Best savings app I've ever used! The auto-save feature helped me save ₦500k in 6 months.", date: "2 weeks ago" },
  { name: "Chioma N.", rating: 5, review: "Very secure and easy to use. I love how I can track my investments in real-time.", date: "1 month ago" },
  { name: "Emeka I.", rating: 4, review: "Great app with excellent customer support. Would love to see more investment options.", date: "3 weeks ago" },
  { name: "Fatima A.", rating: 5, review: "Digikolo transformed my financial life. The interest rates on savings are unbeatable!", date: "1 week ago" },
];

// Stat counter component
const StatCounter = ({ icon: Icon, value, label, prefix, suffix, isVisible }: {
  icon: any;
  value: number;
  label: string;
  prefix: string;
  suffix: string;
  isVisible: boolean;
}) => {
  const isDecimal = value % 1 !== 0;
  const count = useCountUp(isDecimal ? Math.floor(value * 10) : value, 2000, isVisible);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
const Digikolo = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      src: moneyMarketImg,
      alt: "Smart Savings Platform",
      title: "Smart Savings Platform",
      description: "Automated savings solutions with competitive interest rates"
    },
    {
      src: investmentBankingImg,
      alt: "Investment Portfolio Management",
      title: "Investment Portfolio Management",
      description: "Diversified investment options tailored to your financial goals"
    },
    {
      src: infrastructureFundImg,
      alt: "Digital Wallet Services",
      title: "Digital Wallet Services",
      description: "Secure and convenient mobile wallet for everyday transactions"
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-blue-600/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Subsidiaries
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Fintech Innovation
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                <span className="text-primary">Digikolo</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience seamless fintech savings and investment management with Digikolo - your trusted financial companion.
              </p>
              
              <p className="text-base text-muted-foreground/80 italic">
                A finance subsidiary company leveraging Digikolo's license.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group">
                  Get Started
                  <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-primary/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
                <img 
                  src={digikoloBanner} 
                  alt="Digikolo Platform" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 space-y-20">
        {/* About Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              About <span className="text-primary">Digikolo</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Digikolo is a cutting-edge fintech platform designed to make savings and investment management accessible, 
              simple, and rewarding for everyone. Built on a robust financial license, we combine technology with 
              financial expertise to deliver exceptional value to our users.
            </p>
            <p className="text-lg leading-relaxed">
              Our platform empowers individuals and businesses to take control of their financial future through 
              innovative savings products, diversified investment options, and intelligent financial planning tools.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wallet className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Savings Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible savings plans with competitive interest rates and automated saving features to help you reach your financial goals faster.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PieChart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Investment Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diversified investment portfolios managed by experts, giving you access to various asset classes and market opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Financial Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive financial planning tools and personalized advice to help you make informed decisions about your financial future.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Digital Banking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Secure digital banking services with instant transactions, real-time notifications, and comprehensive account management features.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">
              Digikolo by the <span className="text-primary">Numbers</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a growing community of users who trust Digikolo for their financial needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-blue-600/5 border border-border">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isVisible={statsVisible}
              />
            ))}
          </div>
        </section>

        {/* App Features Section */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              App <span className="text-primary">Features</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful features that make Digikolo the preferred choice for smart savers and investors
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* App Rating & Reviews Section */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              User <span className="text-primary">Reviews</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-blue-600/5 border border-border">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">4.8</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-6 h-6 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-500 fill-yellow-500/50'}`} 
                  />
                ))}
              </div>
              <p className="text-muted-foreground">Based on 15,000+ reviews</p>
            </div>
            
            <div className="h-px w-full md:h-24 md:w-px bg-border" />
            
            <div className="space-y-2 flex-1 max-w-md">
              {[
                { stars: 5, percentage: 78 },
                { stars: 4, percentage: 15 },
                { stars: 3, percentage: 5 },
                { stars: 2, percentage: 1 },
                { stars: 1, percentage: 1 },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-4">{rating.stars}</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10">{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {userReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto">
          <ProjectGallery 
            images={galleryImages}
            title="Platform Features"
            subtitle="Explore our innovative solutions designed to transform your financial experience"
          />
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-blue-600/10 border-2 border-primary/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Start Your Financial Journey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied users who trust Digikolo for their savings and investment needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="group">
                  Open an Account
                  <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Digikolo;
