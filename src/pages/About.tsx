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
                  At DSC, our collective team expertise with years of experience highlights our ability to provide excellent services, surpassing our client's expectations. Digital Space Capital Limited offers you a wide range of financial services with seamless solutions in asset management, corporate finance & business advisory, on-lending, forex services, brokerage & dealings, crowdfunding & aggregation. Our services cut across key areas in finance and business management across Sub-Saharan Africa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our unique proposition is to achieve exponential growth through our robust result-driven streams of opportunities ensuring that we maximize returns for our stakeholders.
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
