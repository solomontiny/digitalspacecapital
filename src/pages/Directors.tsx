import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Directors = () => {
  const directors = [
    {
      name: "Dr. Adebayo Ogunlesi",
      role: "Chairman",
      bio: "With over 30 years of experience in investment banking and private equity, Dr. Ogunlesi brings strategic vision and global expertise to Digital Space Capital.",
      initials: "AO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Mrs. Funke Adebayo",
      role: "Managing Director",
      bio: "A seasoned financial expert with extensive experience in capital markets, Mrs. Adebayo leads our operations with innovation and excellence.",
      initials: "FA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Mr. Chidi Ike",
      role: "Executive Director, Operations",
      bio: "Mr. Ike oversees our operational excellence and ensures the highest standards of service delivery across all divisions.",
      initials: "CI",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Mrs. Amina Hassan",
      role: "Executive Director, Finance",
      bio: "With deep expertise in financial management and regulatory compliance, Mrs. Hassan ensures our financial integrity and stability.",
      initials: "AH",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Board of Directors
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our board comprises distinguished professionals with proven track records in finance, investment management, and corporate governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {directors.map((director, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-6 ring-4 ring-primary/20">
                    <AvatarImage src={director.image} alt={director.name} className="object-cover" />
                    <AvatarFallback className="text-xl font-semibold">
                      {director.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {director.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {director.role}
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
                  <p className="text-muted-foreground leading-relaxed">
                    {director.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Directors;
