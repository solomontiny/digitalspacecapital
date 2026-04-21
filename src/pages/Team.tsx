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
import toyinImage from "@/assets/team-toyin.jpg";
import adeoyeImage from "@/assets/team-adeoye.jpg";
import osokoImage from "@/assets/team-osoko.jpg";
import josephImage from "@/assets/team-joseph.jpg";
import SEO from "@/components/SEO";

const Team = () => {
  const teamMembers = [
    {
      name: "AMB. Dr Mrs Olubukola Abitoye",
      role: "GROUP MANAGING DIRECTOR",
      bio: "Amb. Dr. Mrs. Olubukola M. Abitoye hails from Ondo town in Ondo State, Nigeria. A skilled Financial specialist, she holds a bachelor's degree in Management and Accounting from Obafemi Awolowo University and a master's degree in Business Administration from Charisma University in North America. As GMD of Digital Space Capital Group, Amb. Dr. Mrs. Abitoye oversees an all-in-one provider of Financial services, including investment banking, asset management, insurance, micro banking, and Fintech. 20+ years of experience in treasury management, corporate Finance, investment banking, commercial and retail banking, project Finance, interior designs, and real estate. A certified SEC-sponsored individual, she is authorized to provide investment advisory and manage Financial transactions. Amb.",
      initials: "OA",
      image: gmdImage
    },
    {
      name: "LAWRENCE Sunday Ojebode",
      role: "EXECUTIVE DIRECTOR",
      bio: "HND Accounting from The Polytechnic Ibadan. Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) with a prize in Management Information System. Trained in 'Developing a Leading Edge in Operation Strategy' at MIT, Boston, USA. Completed Small Enterprise Education Program (SEEP) in Arlington, Virginia, USA. Professional experience in consultancy, telecommunications (Glomobile Nigeria), banking (Allstates Trust Bank, Intercontinental Bank), microfinance, and public sector auditing (Nigerian Press Council).",
      initials: "LO",
      image: edImage
    },
    {
      name: "Egwuatu Gabriel",
      role: "Associate Director",
      bio: "B.Sc. in Political Science from Anambra State University (Now Chukwuemeka Odumegwu Ojukwu University). Master's degree in Industrial and Labour Relations from the University of Lagos. Associate of the Nigeria Institute of Management. Over 14 years experience in Operations, business development, Sales and real estate.",
      initials: "EG",
      image: gabrielImage
    },
    {
      name: "Abimbola Sofeso",
      role: "Group Head, Credit and Business Growth",
      bio: "B.Sc. in Marketing, Covenant University. Associate Member, National Institute of Marketing. Certifications in Project Management and Business Analysis. Over a decade experience in business development and credit analysis.",
      initials: "AS",
      image: abimbolaImage
    },
    {
      name: "Olabode Ezekiel",
      role: "Group Head, Internal Control and Audit",
      bio: "HND in Accountancy, Polytechnic Ibadan. Master of Business Administration (MBA), Obafemi Awolowo University, Ile Ife. Associate, Institute of Chartered Accountants of Nigeria (ICAN). Associate, Chartered Institute of Stockbrokers of Nigeria. Associate, Chartered Institute of Taxation of Nigeria. Dealing Clerk, Nigeria Stock Exchange.",
      initials: "OE",
      image: ezekielImage
    },
    {
      name: "Ifeoma Isinguzo",
      role: "Group Head, Human Resources & Admin",
      bio: "BSc in Public Administration, University of Nigeria, Nsukka (UNN). MSc in Labour and Industrial Relations, University of Lagos. Certified Member, Chartered Institute of Personnel Management (CIPM). Member, Nigerian Institute of Management (NIM). Experienced in strategic HR leadership and organisational development across technology, telecommunications, and financial services sectors.",
      initials: "II",
      image: ifeomaImage
    },
    {
      name: "ERINKITOLA Hammdalat Okikiayo",
      role: "GROUP, FINANCIAL CONTROLLER",
      bio: "B.Sc. in Psychology from Obafemi Awolowo University, Ile-Ife, Osun State. MBA from the University of Lagos. Member of the Institute of Chartered Accountants of Nigeria. Over a decade experience across financial institutions in various roles.",
      initials: "EO",
      image: okikiayoImage
    },
    {
      name: "DR. TOYIN Olufolahan",
      role: "DSC MFB MANAGING DIRECTOR",
      bio: "Dr. Olufolahan holds a PhD, MSc, and BSc (Hons) in Economics from Obafemi Awolowo University. An MBA focused on Financial Institution Management from the University of Ado Ekiti. A Fellow of the Microfinance Association in the UK. Fellow the Chartered Institute of Bankers of Nigeria. Fellow Nigerian Economic Society. Over 25 years experience in banking with institutions like Olon Microfinance Bank Plc, Sterling Bank Plc, Afribank Nig Plc, and Intercontinental Bank Plc.",
      initials: "TO",
      image: toyinImage
    },
    {
      name: "ADEOYE, Kayode Olugbemiga",
      role: "NAINGATE INSURANCE BROKERS MANAGING DIRECTOR",
      bio: "HND Insurance. Fellow of the Chartered Insurance Institute of Nigeria (FIIN). Fellow of the Chartered Institute of Insurance Brokers (FCIB). Over 28 years of experience in insurance, including marketing, technical operations, reinsurance, and claims. Extensive participation in management and leadership courses, seminars, and workshops both in Nigeria and internationally.",
      initials: "AO",
      image: adeoyeImage
    },
    {
      name: "JOSEPH Folarinde",
      role: "COMPANY SECRETARY",
      bio: "Bachelor of Laws from Joseph Ayo Babalola University. Nigerian Law School Campus Enugu. Fellow Institute of Management Consultant. Experience in Secretarial Duties, Property Law, Debts recovery and Corporate transactions.",
      initials: "JF",
      image: josephImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Executive Team" description="Meet the executive leadership team driving Digital Space Capital Group's growth across investment, banking, insurance and real estate." />

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
                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" 
                        style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1)' }}
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
