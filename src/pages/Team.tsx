import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import gmdImage from "@/assets/team-gmd.png";
import edImage from "@/assets/team-ed.jpg";
import gabrielImage from "@/assets/team-gabriel.jpg";
import abimbolaImage from "@/assets/team-abimbola.jpg";
import ezekielImage from "@/assets/team-ezekiel.jpg";
import ifeomaImage from "@/assets/team-ifeoma.jpg";
import okikiayoImage from "@/assets/team-okikiayo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "AMB. Dr Mrs Olubukola Abitoye",
      role: "GROUP MANAGING DIRECTOR",
      bio: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost orthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because",
      initials: "OA",
      image: gmdImage
    },
    {
      name: "LAWRENCE Sunday Ojebode",
      role: "EXECUTIVE DIRECTOR",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "LO",
      image: edImage
    },
    {
      name: "Egwuatu Gabriel",
      role: "Associate Director",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "EG",
      image: gabrielImage
    },
    {
      name: "Abimbola Sofeso",
      role: "Group Head, Credit and Business Growth",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "AS",
      image: abimbolaImage
    },
    {
      name: "Olabode Ezekiel",
      role: "Group Head, Internal Control and Audit",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "OE",
      image: ezekielImage
    },
    {
      name: "Ifeoma Isinguzo",
      role: "Group Head, Human Resources & Admin",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "II",
      image: ifeomaImage
    },
    {
      name: "ERINKITOLA Hammdalat Okikiayo",
      role: "GROUP, FINANCIAL CONTROLLER",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "EO",
      image: okikiayoImage
    },
    {
      name: "Team Member 8",
      role: "Position Title",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "TM",
      image: ""
    },
    {
      name: "Team Member 9",
      role: "Position Title",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "TM",
      image: ""
    },
    {
      name: "Team Member 10",
      role: "Position Title",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "TM",
      image: ""
    },
    {
      name: "Team Member 11",
      role: "Position Title",
      bio: "Brief description of team member's background, experience, and expertise in their field.",
      initials: "TM",
      image: ""
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
            Join Our Team
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the talented professionals who drive our success and help us deliver 
            exceptional financial services to our clients.
          </p>
          <div className="h-px w-24 bg-primary/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
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
                        src={member.image} 
                        alt={member.name} 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                      <AvatarFallback className="text-xl font-semibold bg-muted">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary/80 mb-4 border-b border-primary/20 pb-3 w-full">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                    {member.bio}
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

export default Team;
