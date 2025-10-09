import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Statistics = () => {
  const testimonials = [
    {
      quote: "Digital Space Capital transformed our investment strategy.",
      author: "Sarah Johnson",
      role: "CEO, Tech Innovations Ltd",
      image: testimonial1,
      initials: "SJ",
    },
    {
      quote: "The team's professionalism and market insights are unparalleled.",
      author: "Michael Chen",
      role: "CFO, Global Ventures",
      image: testimonial2,
      initials: "MC",
    },
    {
      quote: "Outstanding service and results. Strategic guidance has been key to our success.",
      author: "Aisha Mohammed",
      role: "Investment Director",
      image: testimonial3,
      initials: "AM",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Customer Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear what our clients say about their experience with Digital Space Capital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card/80 backdrop-blur"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                    <Avatar className="w-24 h-24 relative border-4 border-background shadow-xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
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
                  
                  <Quote className="h-10 w-10 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-300" />
                  
                  <p className="text-sm text-foreground/90 mb-6 italic leading-relaxed text-center min-h-[4rem]">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4" />
                  
                  <div className="text-center">
                    <p className="font-bold text-base text-foreground mb-1">
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