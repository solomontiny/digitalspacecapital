import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "CEO, Tech Innovations Ltd",
      subsidiary: "DSC Asset Management",
      image: testimonial1,
      initials: "AJ",
      rating: 5,
      quote: "DSC Asset Management has transformed our investment portfolio. Their expert guidance and strategic insights helped us achieve a 35% return on investment within 18 months. The team's professionalism and dedication to our financial goals are truly exceptional.",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
      name: "Mrs. Folake Adeyemi",
      role: "Small Business Owner",
      subsidiary: "DSC Microfinance Bank",
      image: testimonial2,
      initials: "FA",
      rating: 5,
      quote: "As a small business owner, accessing capital was always a challenge until I discovered DSC Microfinance Bank. Their micro-loan program not only provided the funding I needed but also offered invaluable business advisory services. My business has grown by 200% in two years!",
      gradient: "from-blue-400/10 to-blue-500/5"
    },
    {
      name: "Chief Olumide Balogun",
      role: "Property Developer",
      subsidiary: "Naingate Insurance Brokers",
      image: testimonial1,
      initials: "OB",
      rating: 5,
      quote: "Naingate Insurance Brokers provided comprehensive coverage for our property development projects. Their risk assessment team is thorough, and their claims process is incredibly efficient. They've protected our investments and given us peace of mind.",
      gradient: "from-primary/15 to-primary/5"
    },
    {
      name: "Dr. Chioma Okafor",
      role: "Medical Practitioner",
      subsidiary: "Emison Real Estate",
      image: testimonial3,
      initials: "CO",
      rating: 5,
      quote: "Emison Real Estate helped me find and acquire the perfect property for my medical practice. Their property management services are outstanding, and the investment advisory they provided has made my real estate portfolio one of my best financial decisions.",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Construction Company Owner",
      subsidiary: "Easy Pay",
      image: testimonial2,
      initials: "TB",
      rating: 5,
      quote: "Easy Pay has revolutionized how we handle payments from our clients. The digital payment platform is seamless, secure, and incredibly fast. Our cash flow has improved significantly, and our clients love the convenience of multiple payment options.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      name: "Mrs. Amina Mohammed",
      role: "Entrepreneur",
      subsidiary: "Digital Space Capital",
      image: testimonial1,
      initials: "AM",
      rating: 5,
      quote: "Digital Space Capital's holistic approach to financial services has been a game-changer for my business. From strategic planning to regulatory compliance, their team has supported us every step of the way. Their expertise across multiple financial sectors is unmatched.",
      gradient: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Quote className="w-4 h-4" />
                Client Success Stories
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              What Our <span className="text-primary">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from businesses and individuals who have experienced exceptional service and remarkable results with our subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8 space-y-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                    <Avatar className="relative w-14 h-14 ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      {testimonial.subsidiary}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their financial future with our expert services.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact">
                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                    Get Started Today
                  </button>
                </a>
                <a href="/subsidiaries">
                  <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300">
                    Explore Our Services
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
