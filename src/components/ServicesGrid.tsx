import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import creditImg from "@/assets/credit.jpg";
import insuranceBankingImg from "@/assets/insurance-banking.jpg";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";
import bondsImg from "@/assets/bonds-new.jpg";

const ServicesGrid = () => {
  const services = [
    {
      title: "Digital Savings",
      description: "Smart, secure, and flexible savings solutions designed for modern lifestyles. Our digital savings products help you grow wealth effortlessly while staying in full control.",
      readMore: "Read more to explore Digilock, Digisave, and Digitarget options tailored to your financial goals.",
      image: creditImg,
      href: "/subsidiaries/digikolo"
    },
    {
      title: "Loans",
      description: "Fast, transparent, and flexible loan solutions built to support personal and business growth. From business expansion to education financing, our loan offerings are structured for convenience and clarity.",
      readMore: "Read more to discover Commercial, SME, and Educational loan options.",
      image: insuranceBankingImg,
      href: "/subsidiaries/dsc-microfinance-bank"
    },
    {
      title: "Financial Advisory",
      description: "Personalized financial guidance to help you make smarter money decisions. Our experts support clients with investment planning, budgeting, and long-term financial strategies for sustainable success.",
      readMore: "Read more to learn how our advisory services can help you achieve your financial goals.",
      image: investmentBankingImg,
      href: "/subsidiaries/dsc-asset-management"
    },
    {
      title: "Bonds",
      description: "Stable and secure investment opportunities through government and corporate bonds. Designed for reliable income and long-term portfolio growth, our bond offerings balance returns with security.",
      readMore: "Read more to understand how bonds can strengthen your investment portfolio.",
      image: bondsImg,
      href: "/subsidiaries/dsc-asset-management"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <Link key={index} to={service.href}>
              <Card className="group relative cursor-pointer overflow-hidden border-2 border-border/50 hover:border-primary/30 bg-card shadow-md hover:shadow-2xl transition-all duration-500 h-full tilt-card soft-shadow">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <CardContent className="relative p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-wide mb-3 underline-animate">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <p className="text-primary text-sm font-medium group-hover:underline">
                    {service.readMore}
                  </p>
                  <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-500" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;