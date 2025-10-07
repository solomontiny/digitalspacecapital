import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Statistics = () => {
  const testimonials = [
    {
      quote: "Digital Space Capital transformed our investment strategy. Their expertise and personalized approach helped us achieve returns beyond our expectations.",
      author: "Sarah Johnson",
      role: "CEO, Tech Innovations Ltd",
    },
    {
      quote: "The team's professionalism and market insights are unparalleled. They've been instrumental in growing our portfolio over the past three years.",
      author: "Michael Chen",
      role: "CFO, Global Ventures",
    },
    {
      quote: "Outstanding service and results. Digital Space Capital's strategic guidance has been key to our financial success and long-term growth.",
      author: "Aisha Mohammed",
      role: "Investment Director, Future Capital",
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
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
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