import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import gmdImage from "@/assets/director-gmd.png";
import professorSanniImage from "@/assets/director-professor-sanni.png";
import emirImage from "@/assets/director-emir.png";
import hakeemImage from "@/assets/director-hakeem.png";
import oluwatosinImage from "@/assets/director-oluwatosin.png";
import adeyinkaImage from "@/assets/director-adeyinka.png";
import babsImage from "@/assets/director-babs.png";
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
      bio: "His Royal Highness was commissioned into the Nigerian Army Armored Corp as a Second Lieutenant on 13th December 1975 where he served at various capacities for 28 years. He rose to the rank of Brigadier General before his majestic exit in 2003 Ascended the Throne as the 13th Etsu Nupe, sworn in and presented with the First-Class Staff of Office in Bida, Niger State on 11th July, 2004. Fellowship of the National Defence College NDC Egypt. National Honour of Commander of the Federal Republic (CFR) in 2004 Chairman Abuja National Mosque Management Committee Chairman Coordinating Committee of Nigeria's National Council of Traditional Rulers Doctor of Philosophy Honoris Causa of Four distinguished Nigerian Universities. Chancellor of two notable Universities in Nigeria. Obafemi Awolowo University Ile-Ife, Osun State South-West Nigeria and Ambrose Alli University, Ekpoma, Edo State, South-South Nigeria. Etsu Yahaya Abubakar is the sole owner of EDU-Soko Farms Limited covering more than 30,000 hectares of both up and low lands with various colonies such as rice, cassava, guinea corn and groundnut, orchards, Fish and livestock e.t.c.",
      initials: "YA",
      image: emirImage
    },
    {
      name: "Professor Abiola Sanni (SAN)",
      role: "Non-Executive Director",
      bio: "Abiola Sanni is a Senior Advocate of Nigeria (SAN) and Professor of Commercial Law in the University of Lagos (UNILAG), with a specialization in Arbitration, Taxation and Commercial Law and Practice. He is the Editor of Introduction to Nigerian Legal Methods popularly known as 'The Blue Bible' in Nigerian universities and other countries in the West African sub region. He is also the author of Introduction to Nigerian Business Law, the founder and Editor-in-Chief of the Nigerian Revenue Law Reports (NRLR) and African Tax Law Reports (ATLR); the first law reports on tax cases in Nigeria and Africa respectively. He is a member of the Tax Advisory Committee (TAC) 'Think-Tank' Group for the Federal Inland Revenue Service (FIRS). He served as the Chairman of the National Tax Policy Review Committee (NTPRC) in 2016 He was appointed the Chairman of National Tax Policy Implementation Committee (NTPIC) in 2017 He is the Chairman of the Board of Directors of several companies including Tax Technologies Limited, TaxAide Limited and the Budding Mothers Club (BMC), a Director and Alternate Chairman of the UNILAG Micro Finance Bank, a Trustee of the United States Government Exchange Alumni Association of Nigeria (USGEAAN), a Trustee of the Nigerian Law School Alumni Class of 1989-90, the Coordinator of The Tax Club, a Trustee and President of the 'Tax Academician Association of Nigeria' (TaxAAN).",
      initials: "AS",
      image: professorSanniImage
    },
    {
      name: "Engr. Hakeem Ademola Adeoye",
      role: "Non-Executive Director",
      bio: "Engr Hakeem Ademola Adeoye is a renowned Mechanical Engineer with more than 25 years of experience in the Oil and Gas Industry in Nigeria. He was a proactive member of several project management teams that worked on various ground-breaking projects both within and outside of Nigeria. In addition, he is also a distinguished stakeholder engagement expert whose reputation precedes him globally. Engr Hakeem is an astute investor with a solid background in People, Project, and Stakeholders' management. He has functioned on projects with direct responsibility for the strategic management of reputation nationwide and globally. Engr Adeoye's antecedents shows he is committed to Operational Excellence, Contractual Agreements and Business Acumen. He is a rational decision maker with strong negotiation and influencing skills. His strategic thinking has made him excel in many projects. He is a registered engineer with COREN in Nigeria and Institute of Engineering and Technology (IET) in the United Kingdom.",
      initials: "HA",
      image: hakeemImage
    },
    {
      name: "Ms. Oluwatosin Odubela",
      role: "Non-Executive Director",
      bio: "Oluwatosin earned her LLB degree from the University of Westminster London in July 2017. She was called to the Nigerian Bar Association (NBA) in August 2018 and Solicitor of the Supreme Court of Nigeria Her Legal career kicked off with a role at Rickey Tarfa & Co as a Legal Associate, where she gained extensive experience in Civil litigation, Family law, Criminal litigation, Real Estate and Property, Contracts, Mergers and Acquisitions, compliance as well as arbitration and mediation. Oluwatosin completed her LLM degree in International Trade Law at Swansea University, Wales, United Kingdom in 2021. Afterwards, she proceeded to join Kingdom as a Trainee practicing negligence, Immigration, Corporate TNA Solicitors, United in areas of medical law, Commercial law, Claims Against Public Authorities and Property Law. She is also a Member of International Bar Association (IBA) & Chartered Institute of Arbitrators (CIArb).",
      initials: "OO",
      image: oluwatosinImage
    },
    {
      name: "Dr. (Mrs.) Adeyinka Olumayowa",
      role: "Non-Executive Director",
      bio: "Mrs. Mayowa Adeyinka graduated from Yaba College of Technology with an HND in Business Administration. She is an Associate member of the Nigeria Institute of Management (NIM) and the Chartered Institute of Marketing; she is also a Member of the Chartered Insurance Institute of London and the Canadian Institute of Marketing as well as a Fellow of the Chartered Institute Of Loan And Risks Management Of Nigeria. Mayowa is a seasoned marketer with over 24 years working experience. She is an astute Marketer who has carved a niche for herself in the Insurance Industry especially in the Northern region of Nigeria. In the course of her career she has attended several trainings, conferences, seminars and summits in the area of Insurance, Marketing, Leadership, Management and Finance both locally and internationally.",
      initials: "AO",
      image: adeyinkaImage
    },
    {
      name: "Babs Olugbemi",
      role: "Independent Director",
      bio: "Babs is a fellow of the Institute of Chartered Accountants of Nigeria and Accountants of the Association of Chartered and Certified Accountants of the United Kingdom. He was experienced banking professional for twenty years before yielding to his passion for helping individuals and organisations be at their best through coaching, mentoring, writing, speaking, and consulting on business continuity, legacy creation, finance, and institutional development. He is the author of the five highly motivating books: Transform Yourself (the secrets for unleashing and maximising your potential), The Students' Fortress (ten practical rules for passing your exams), The Teachers' Fortress (a simple guide to becoming a teacher of influence and impact), Take the Lead (how to live, energise, activate and develop your strength zone) and The Value Chain Banking.",
      initials: "BO",
      image: babsImage
    },
    {
      name: "Mr. Adegoke Adegbami",
      role: "Non-Executive Director",
      bio: "Adegoke Adegbami holds an MBA in Financial Management from Ladoke Akintola University of Technology, Ogbomosho. He is an alumnus of Boulder Institute of Microfinance, Turin, Italy; School of African Microfinance, Mombasa, Kenya; Harvard Business School and Lagos Business School Mr. Adegbami is a Fellow of ICAN, Associate of CITN, Fellow of Institute of Credit Administration (ICA), a Certified Microfinance Banker (MCIB) and member of the Institute of Strategic Management of Nigeria. He is a member of the Africa Board Fellowship Program in Governance Organized by Center for Financial Inclusion-CFI, Washington DC. A thorough banker with in-depth knowledge and experience in Corporate Governance, Financial Management, Performance Management, Internal Audit and Compliance, Financial Reporting and Management Accounting, Risk Management, Business Development and Strategy. Adegoke Adegbami is currently the MD/CEO of Mainstreet Microfinance Bank Limited.",
      initials: "AA",
      image: adegokeImage
    },
    {
      name: "Mr. Oluwagbemileke Joseph Ogunbanwo",
      role: "Non-Executive Director",
      bio: "An IT professional with architecting, systems implementation, as well support. 17 years' experience in software design, development and as Information and Infrastructure He's a blockchain Guru, one of the best software solution architects around. An Indian trained professional, aside from his UK degree in (software engineering) he also possesses other Professional certifications He is also a consultant to various financial institutions (banks, fintech, investment houses etc.) both local and international. Oluwagbemileke is also an AI expert who leads a team that built the first indigenous AI (Artificial Intelligent framework in Nigeria without using any framework but his mathematical algorithms) that powered Ada (bot for Diamond bank) and Temi (bot for FCMB).",
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
