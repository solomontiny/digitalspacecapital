import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "CEO, Tech Innovations Ltd",
      subsidiary: "DSC Asset Management",
      image: testimonial1,
      initials: "AJ",
      rating: 5,
      quote: "DSC Asset Management has transformed our investment portfolio. Their expert guidance and strategic insights helped us achieve a 35% return on investment within 18 months."
    },
    {
      name: "Mrs. Folake Adeyemi",
      role: "Small Business Owner",
      subsidiary: "DSC Microfinance Bank",
      image: testimonial2,
      initials: "FA",
      rating: 5,
      quote: "As a small business owner, accessing capital was always a challenge until I discovered DSC Microfinance Bank. My business has grown by 200% in two years!"
    },
    {
      name: "Dr. Chioma Okafor",
      role: "Medical Practitioner",
      subsidiary: "Emison Real Estate",
      image: testimonial3,
      initials: "CO",
      rating: 5,
      quote: "Emison Real Estate helped me find and acquire the perfect property for my medical practice. Their property management services are outstanding."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how Digital Space Capital has helped clients achieve their financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/testimonials" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
