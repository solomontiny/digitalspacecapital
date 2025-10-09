import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            About Digital Space Capital
          </h1>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Digital Space Capital is a leading financial services company dedicated to providing innovative investment solutions and capital management services. With years of experience in the financial industry, we have built a reputation for excellence and trust.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals and institutions to achieve their financial goals through strategic investment management, innovative financial products, and exceptional client service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative financial services provider, setting new standards in investment management and capital markets excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
