import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Statistics = () => {
  const testimonials = [
    {
      quote: "Digital Space Capital's asset management services have consistently delivered exceptional returns. Their deep market knowledge and strategic approach have been instrumental in growing our portfolio.",
      author: "Oluwaseun Adebayo",
      role: "Managing Director, Apex Holdings",
      image: testimonial1,
      initials: "OA",
    },
    {
      quote: "Working with DSC on our corporate finance needs has been transformative. Their team provides invaluable insights and seamless execution that has accelerated our business growth.",
      author: "Chiamaka Okonkwo",
      role: "CFO, NextGen Technologies",
      image: testimonial2,
      initials: "CO",
    },
    {
      quote: "The professionalism and expertise at Digital Space Capital are unmatched. Their tailored financial solutions have enabled us to achieve our investment objectives efficiently.",
      author: "Ibrahim Musa",
      role: "Investment Director, Heritage Capital",
      image: testimonial3,
      initials: "IM",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-soft-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-blur-in text-gradient-animate">
            Customer Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-slide-up delay-200">
            Hear what our clients say about their experience with Digital Space Capital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto stagger-children">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card/80 glass tilt-card glow-border"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300 animate-soft-pulse" />
                    <Avatar className="w-24 h-24 relative border-4 border-background shadow-xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 interactive-scale">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-lg font-semibold bg-primary/10">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <Quote className="h-10 w-10 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-300 group-hover:animate-bounce-subtle" />
                  
                  <p className="text-sm text-foreground/90 mb-6 italic leading-relaxed text-center min-h-[4rem]">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                  
                  <div className="text-center">
                    <p className="font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;