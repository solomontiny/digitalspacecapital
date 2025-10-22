import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import gmdImage from "@/assets/director-gmd.png";
import emirImage from "@/assets/director-emir.png";
import hakeemImage from "@/assets/director-hakeem.png";
import oluwatosinImage from "@/assets/director-oluwatosin.png";

const Directors = () => {
  const directors = [
    {
      name: "AMB. Dr. Olubukola Abitoye",
      role: "GROUP MANAGING DIRECTOR",
      bio: "Amb. Dr. Mrs. Olubukola M. Abitoye hails from Ondo town in Ondo State, Nigeria. A skilled Financial specialist, she holds a bachelor's degree in Management and Accounting from Obafemi Awolowo University and a master's degree in Business Administration from Charisma University in North America. As GMD of Digital Space Capital Group, Amb. Dr. Mrs. Abitoye oversees an all-in-one provider of Financial services, including investment banking, asset management, insurance, micro banking, and Fintech. 20+ years of experience in treasury management, corporate Finance, investment banking, commercial and retail banking, project Finance, interior designs, and real estate. A certified SEC-sponsored individual, she is authorized to provide investment advisory and manage Financial transactions. Amb. Dr. Mrs. Abitoye holds memberships in esteemed organizations such as: - Chartered Institute of Directors, Nigeria (CIOD) - Nigerian Institute of Management (NIM) - Fellow, Chartered Institute of Loan and Risk Management of Nigeria (doctorate holder - Financial Markets Association (ACI) - Doctoral Fellowship, International Certified Risk Management Professionals, United Kingdom She serves as a youth ambassador (ECOWAS Youth Council) and has received the Nelson Mandela Leadership Award of Excellence and Integrity. Amb. Dr. Mrs. Abitoye is a seasoned leader committed to excellence, with remarkable achievements in Finance and philanthropy.",
      initials: "OA",
      image: gmdImage
    },
    {
      name: "HRH Alh. (Dr.) Yahaya Abubakar CFR",
      role: "Chairman",
      bio: "His Royal Highness brings decades of distinguished leadership and royal wisdom to the board, with extensive experience in traditional governance and modern financial oversight.",
      initials: "YA",
      image: emirImage
    },
    {
      name: "Engr. Hakeem Ademola Adeoye",
      role: "Non-Executive Director",
      bio: "With over 25 years in operational management, Mr. Johnson drives excellence across all divisions and ensures seamless service delivery.",
      initials: "HA",
      image: hakeemImage
    },
    {
      name: "Ms. Oluwatosin Odubela",
      role: "Non-Executive Director",
      bio: "Mrs. Adeyemi brings deep expertise in financial management, regulatory compliance, and strategic financial planning to ensure fiscal stability.",
      initials: "OO",
      image: oluwatosinImage
    },
    {
      name: "Dr. Ibrahim Musa",
      role: "Non-Executive Director",
      bio: "Dr. Musa provides strategic guidance with extensive experience in investment banking and capital markets across West Africa.",
      initials: "IM",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Mrs. Chiamaka Okonkwo",
      role: "Non-Executive Director",
      bio: "A distinguished legal expert specializing in corporate law and governance, ensuring compliance and best practices.",
      initials: "CO",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
    },
    {
      name: "Mr. Olumide Adebayo",
      role: "Independent Director",
      bio: "Mr. Adebayo brings independent oversight with decades of experience in risk management and corporate strategy.",
      initials: "OA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Mrs. Zainab Mohammed",
      role: "Independent Director",
      bio: "With expertise in fintech innovation and digital transformation, Mrs. Mohammed guides our technological advancement.",
      initials: "ZM",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Kenneth Eze",
      role: "Non-Executive Director",
      bio: "Dr. Eze provides valuable insights with his background in economics, policy development, and international finance.",
      initials: "KE",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-primary/30 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in tracking-tight">
            Board of Directors
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our board comprises distinguished professionals with proven track records in finance, 
            investment management, and corporate governance.
          </p>
          <div className="h-px w-24 bg-primary/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {directors.map((director, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-primary/30"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                    <Avatar className="relative w-32 h-32 ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300">
                      <AvatarImage 
                        src={director.image} 
                        alt={director.name} 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                      <AvatarFallback className="text-xl font-semibold bg-muted">
                        {director.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {director.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary/80 mb-4 border-b border-primary/20 pb-3 w-full">
                    {director.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                    {director.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Directors;
