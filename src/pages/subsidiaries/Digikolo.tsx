import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, TrendingUp, Shield, Wallet, PieChart, Users, Star, 
  Download, Target, Vault, Coins, Gift, Smartphone, UserPlus, 
  CreditCard, Sparkles, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import ProjectGallery from "@/components/ProjectGallery";
import AppDownload from "@/components/AppDownload";
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

// Savings Plans (from the app)
const savingsPlans = [
  {
    name: "DigiSave",
    rate: "Up to 21%",
    rateLabel: "p.a.",
    tagline: "Save on the go!",
    description: "Flexible savings with instant access. Perfect for everyday savers who want to earn while maintaining liquidity.",
    color: "from-blue-400 to-blue-600",
    iconBg: "bg-white/20",
  },
  {
    name: "DigiTarget",
    rate: "Up to 21%",
    rateLabel: "p.a.",
    tagline: "Save towards a target!",
    description: "Goal-based savings to help you achieve your financial targets. Set a goal, save consistently, and watch your dreams become reality.",
    color: "from-indigo-400 to-purple-500",
    iconBg: "bg-white/20",
  },
  {
    name: "DigiLock",
    rate: "Up to 21%",
    rateLabel: "p.a.",
    tagline: "Lock your funds for maximum returns!",
    description: "Fixed-term deposits with the highest interest rates. Lock your savings and watch your wealth grow faster.",
    color: "from-orange-400 to-orange-500",
    iconBg: "bg-white/20",
  },
];

// How it works steps
const howItWorksSteps = [
  {
    step: 1,
    icon: Smartphone,
    title: "Download the App",
    description: "Get Digikolo from Google Play Store or Apple App Store and install it on your device.",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up with your phone number and complete a quick verification process.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Fund Your Wallet",
    description: "Add money to your Digikolo wallet using bank transfer, card, or USSD.",
    color: "from-green-500 to-emerald-600",
  },
  {
    step: 4,
    icon: Sparkles,
    title: "Start Earning",
    description: "Choose a savings plan and watch your money grow with competitive interest rates.",
    color: "from-orange-500 to-amber-500",
  },
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wallet className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Digital Savings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Smart savings solutions with competitive interest rates up to 21% p.a. Choose from DigiSave for flexible savings or DigiLock for maximum returns on fixed deposits.
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

        {/* Savings Plans Section */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Choose a <span className="text-primary">Savings Plan</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pick the perfect plan that matches your financial goals and start earning competitive returns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {savingsPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${plan.color} p-8 text-white shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] cursor-pointer`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:bg-white/15 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-[200%] group-hover:h-[200%] transition-all duration-1000" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300">{plan.name}</h3>
                    <CheckCircle2 className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold group-hover:scale-110 transition-transform duration-300 origin-left">{plan.rate}</span>
                    <span className="text-lg font-medium opacity-90">{plan.rateLabel}</span>
                  </div>
                  
                  <p className="text-lg font-semibold opacity-95 group-hover:translate-x-1 transition-transform duration-300">{plan.tagline}</p>
                  
                  <p className="text-sm opacity-80 leading-relaxed pt-2 border-t border-white/20 group-hover:opacity-100 transition-opacity duration-300">
                    {plan.description}
                  </p>
                  
                  {/* Icon decoration with animation */}
                  <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {index === 0 && <Coins className="w-20 h-20" />}
                    {index === 1 && <Target className="w-20 h-20" />}
                    {index === 2 && <Vault className="w-20 h-20" />}
                  </div>
                </div>
                
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.2)' }} />
              </div>
            ))}
          </div>

          {/* Refer & Earn Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Gift className="w-8 h-8" />
                  Refer & Earn
                </h3>
                <p className="text-white/90 max-w-lg">
                  You get the chance to win lots of prizes by inviting your friends to use Digikolo. 
                  Share your referral code and earn rewards together!
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              How It <span className="text-primary">Works</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your savings journey in just 4 simple steps
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 rounded-full" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div 
                  key={index}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Step number with animated ring */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary/30 group-hover:scale-125 transition-all duration-500" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                  
                  {/* Arrow connector for mobile */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="lg:hidden mt-6 text-primary animate-bounce">
                      <svg className="w-6 h-6 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
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

        {/* App Download Section */}
        <AppDownload />

      </main>

      <Footer />
    </div>
  );
};

export default Digikolo;
