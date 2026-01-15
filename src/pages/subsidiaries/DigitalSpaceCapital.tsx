import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Shield, 
  PiggyBank, 
  LineChart, 
  CreditCard, 
  Home, 
  Hotel, 
  Hammer,
  GraduationCap,
  Briefcase,
  Car,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import AppDownload from "@/components/AppDownload";
import SponsorsSlider from "@/components/SponsorsSlider";
import dscLogo from "@/assets/digital-space-capital-icon.png";
import investmentBankingImg from "@/assets/investment-banking-new.jpg";
import assetManagementImg from "@/assets/asset-management.jpg";
import securitiesTradingImg from "@/assets/securities-trading.jpg";
import trusteeshipImg from "@/assets/trusteeship.jpg";
import dscAssetMgtLogo from "@/assets/dsc-asset-management-logo.png";
import dscMfbLogo from "@/assets/dsc-microfinance-bank-logo.png";
import naingateInsuranceLogo from "@/assets/naingate-insurance-logo.png";
import emisonRealEstateLogo from "@/assets/emison-real-estate-logo.png";
import easyPayLogo from "@/assets/easy-pay-logo.png";
import digikoloLogo from "@/assets/digikolo-banner.jpg";
import hospitalityImg from "@/assets/hospitality-service.jpg";
import buildingMaterialsImg from "@/assets/building-materials.jpg";
import loansImg from "@/assets/loans-service.jpg";
import realEstateImg from "@/assets/real-estate-service.jpg";
import fundsManagementImg from "@/assets/funds-management.jpg";

const services = [
  {
    title: "Insurance Brokerage",
    description: "Comprehensive insurance solutions for individuals and businesses through our subsidiary Naingate Insurance Brokers.",
    icon: Shield,
    gradient: "from-blue-500 to-blue-600",
    link: "/subsidiaries/naingate-insurance"
  },
  {
    title: "Savings & Investment",
    description: "Digital savings and investment solutions through Digikolo with competitive interest rates up to 21% p.a.",
    icon: PiggyBank,
    gradient: "from-green-500 to-emerald-600",
    link: "/subsidiaries/digikolo"
  },
  {
    title: "Funds Management",
    description: "Professional portfolio management and investment advisory services through DSC Asset Management.",
    icon: LineChart,
    gradient: "from-purple-500 to-violet-600",
    link: "/subsidiaries/dsc-asset-management",
    image: fundsManagementImg
  },
  {
    title: "Loans",
    description: "Flexible lending solutions including Asset Financing, School Loans, and Business Loans through DSC Microfinance Bank.",
    icon: CreditCard,
    gradient: "from-orange-500 to-amber-600",
    subServices: [
      { name: "Asset Financing", icon: Car },
      { name: "School Loans", icon: GraduationCap },
      { name: "Business Loans", icon: Briefcase }
    ],
    link: "/subsidiaries/dsc-microfinance-bank",
    image: loansImg
  },
  {
    title: "Real Estate",
    description: "Property development, sales, and management services through Emison Real Estate.",
    icon: Home,
    gradient: "from-cyan-500 to-teal-600",
    link: "/subsidiaries/emison-real-estate",
    image: realEstateImg
  },
  {
    title: "Hospitality",
    description: "Premium hospitality services and accommodation solutions for business and leisure travelers.",
    icon: Hotel,
    gradient: "from-pink-500 to-rose-600",
    link: null,
    image: hospitalityImg
  },
  {
    title: "Building Material Supplies",
    description: "Quality construction materials and supplies for residential and commercial projects.",
    icon: Hammer,
    gradient: "from-slate-500 to-gray-600",
    link: null,
    image: buildingMaterialsImg
  }
];

const subsidiaryLinks = [
  { name: "DSC Asset Management", logo: dscAssetMgtLogo, link: "/subsidiaries/dsc-asset-management" },
  { name: "DSC Microfinance Bank", logo: dscMfbLogo, link: "/subsidiaries/dsc-microfinance-bank" },
  { name: "Naingate Insurance", logo: naingateInsuranceLogo, link: "/subsidiaries/naingate-insurance" },
  { name: "Emison Real Estate", logo: emisonRealEstateLogo, link: "/subsidiaries/emison-real-estate" },
  { name: "Easy Pay", logo: easyPayLogo, link: "/subsidiaries/easy-pay" },
  { name: "Digikolo", logo: digikoloLogo, link: "/subsidiaries/digikolo" }
];

const DigitalSpaceCapital = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <Link to="/subsidiaries">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Subsidiaries
            </Button>
          </Link>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-background rounded-2xl shadow-lg">
                    <img src={dscLogo} alt="Digital Space Capital" className="h-16 w-16 object-contain" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Digital Space Capital
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The parent company providing strategic oversight and financial services coordination across all subsidiaries.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
                <img 
                  src={investmentBankingImg} 
                  alt="Digital Space Capital" 
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* About Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">About Digital Space Capital</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Space Capital Group ("DSC") is a licensed revolutionary innovator in the digital finance industry providing a bouquet of services which include asset management, corporate finance and business advisory, micro and macro lending (DSC MFB), Forex and Utility payment services (EasyPay), Insurance brokerage etc. We operate on key licences from the Securities and Exchange Commission, Central Bank of Nigeria (MFB), NAICOM and a host of other regulators. Our services cut across key areas in finance and business management within and outside the Sub-Saharan Africa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At DSC, our team collective expertise and experience of the team highlights our ability to provide excellent services as at when due hence, surpassing our client expectations.
              </p>
            </CardContent>
          </Card>

          {/* Services Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial services and business solutions across multiple sectors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                const hasImage = 'image' in service && service.image;
                const content = (
                  <Card 
                    key={index} 
                    className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${service.link ? 'cursor-pointer' : ''}`}
                  >
                    {/* Image Background for services with images */}
                    {hasImage && (
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />
                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                          <Icon className={`w-6 h-6 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} style={{ color: service.gradient.includes('pink') ? '#ec4899' : '#64748b' }} />
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient Background for non-image cards */}
                    {!hasImage && <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />}
                    
                    {/* Top Accent Line for non-image cards */}
                    {!hasImage && <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />}
                    
                    <CardContent className={`${hasImage ? 'p-5' : 'p-6'} relative`}>
                      {/* Icon for non-image cards */}
                      {!hasImage && (
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      )}
                      
                      {/* Title */}
                      <h3 className={`text-xl font-bold text-foreground ${hasImage ? 'mb-2' : 'mb-3'} group-hover:text-primary transition-colors`}>
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      {/* Sub-services for Loans */}
                      {service.subServices && (
                        <div className="space-y-2 mb-4 border-t border-border pt-4">
                          {service.subServices.map((sub, idx) => {
                            const SubIcon = sub.icon;
                            return (
                              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <SubIcon className="w-4 h-4 text-primary" />
                                <span>{sub.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      {/* Link indicator */}
                      {service.link && (
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );

                return service.link ? (
                  <Link key={index} to={service.link}>
                    {content}
                  </Link>
                ) : (
                  content
                );
              })}
            </div>
          </section>

          {/* Our Subsidiaries Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Subsidiaries</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our group of companies delivering specialized services across various sectors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {subsidiaryLinks.map((subsidiary, index) => (
                <Link 
                  key={index} 
                  to={subsidiary.link}
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-background shadow-md group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={subsidiary.logo} 
                          alt={subsidiary.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {subsidiary.name}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Sponsors/Partners Slider */}
          <SponsorsSlider />

          {/* Digikolo App Download Section */}
          <AppDownload />

          {/* Gallery Section */}
          <ProjectGallery 
            title="Success Stories"
            subtitle="Showcasing our strategic achievements and successful partnerships"
            images={[
              {
                src: investmentBankingImg,
                alt: "Investment Strategy",
                title: "Strategic Investment Planning",
                description: "Comprehensive portfolio optimization for institutional clients"
              },
              {
                src: assetManagementImg,
                alt: "Asset Management",
                title: "Asset Management Excellence",
                description: "Delivering superior returns through disciplined management"
              },
              {
                src: securitiesTradingImg,
                alt: "Securities Trading",
                title: "Trading Operations",
                description: "Advanced trading solutions for market efficiency"
              },
              {
                src: trusteeshipImg,
                alt: "Trusteeship Services",
                title: "Corporate Governance",
                description: "Ensuring compliance and fiduciary responsibility"
              },
              {
                src: investmentBankingImg,
                alt: "Corporate Strategy",
                title: "Business Development",
                description: "Strategic growth initiatives across subsidiaries"
              },
              {
                src: assetManagementImg,
                alt: "Financial Planning",
                title: "Financial Advisory",
                description: "Expert guidance for long-term value creation"
              }
            ]}
          />

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about how Digital Space Capital can support your financial goals and business objectives.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalSpaceCapital;
