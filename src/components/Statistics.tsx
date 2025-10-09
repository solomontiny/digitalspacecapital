import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";

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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      initials: "MC",
    },
    {
      quote: "Outstanding service and results. Strategic guidance has been key to our success.",
      author: "Aisha Mohammed",
      role: "Investment Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      initials: "AM",
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Customer Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients say about their experience with Digital Space Capital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <Quote className="h-6 w-6 text-primary/20 mx-auto mb-3" />
                <p className="text-xs text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
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