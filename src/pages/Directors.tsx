import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import gmdImage from "@/assets/director-gmd.png";
import emirImage from "@/assets/director-emir.png";
import hakeemImage from "@/assets/director-hakeem.png";
import oluwatosinImage from "@/assets/director-oluwatosin.png";
import adegokeImage from "@/assets/director-adegoke.png";
import oluwagbemilekeImage from "@/assets/director-oluwagbemileke.jpg";

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
      bio: "Abiola Sanni is a Senior Advocate of Nigeria (SAN) and Professor of Commercial Law in the University of Lagos (UNILAG), with a specialization in Arbitration, Taxation and Commercial Law and Practice. He is the Editor of Introduction to Nigerian Legal Methods popularly known as 'The Blue Bible' in Nigerian universities and other countries in the West African sub region. He is also the author of Introduction to Nigerian Business Law, the founder and Editor-in-Chief of the Nigerian Revenue Law Reports (NRLR) and African Tax Law Reports (ATLR); the first law reports on tax cases in Nigeria and Africa respectively. He is a member of the Tax Advisory Committee (TAC) 'Think-Tank' Group for the Federal Inland Revenue Service (FIRS). He served as the Chairman of the National Tax Policy Review Committee (NTPRC) in 2016 He was appointed the Chairman of National Tax Policy Implementation Committee (NTPIC) in 2017 He is the Chairman of the Board of Directors of several companies including Tax Technologies Limited, TaxAide Limited and the Budding Mothers Club (BMC), a Director and Alternate Chairman of the UNILAG Micro Finance Bank, a Trustee of the United States Government Exchange Alumni Association of Nigeria (USGEAAN), a Trustee of the Nigerian Law School Alumni Class of 1989-90, the Coordinator of The Tax Club, a Trustee and President of the 'Tax Academician Association of Nigeria' (TaxAAN).",
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
      name: "Mr. Adegoke Adegbami",
      role: "Non-Executive Director",
      bio: "Dr. Musa provides strategic guidance with extensive experience in investment banking and capital markets across West Africa.",
      initials: "AA",
      image: adegokeImage
    },
    {
      name: "Mr. Oluwagbemileke Joseph Ogunbanwo",
      role: "Non-Executive Director",
      bio: "A distinguished legal expert specializing in corporate law and governance, ensuring compliance and best practices.",
      initials: "OO",
      image: oluwagbemilekeImage
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
