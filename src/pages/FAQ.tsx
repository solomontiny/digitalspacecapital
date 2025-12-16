import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { HelpCircle, Building, CreditCard, Shield, Users, FileText, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      title: "About Digital Space Capital",
      icon: Building,
      questions: [
        {
          q: "What is Digital Space Capital?",
          a: "Digital Space Capital is a leading Nigerian financial services holding company that provides a comprehensive range of investment and financial solutions. We operate through our subsidiaries including DSC Asset Management, DSC Microfinance Bank, Naingate Insurance, Emison Real Estate, EasyPay, and Digikolo."
        },
        {
          q: "Is Digital Space Capital regulated?",
          a: "Yes, Digital Space Capital and its subsidiaries operate under the supervision of relevant regulatory bodies including the Securities and Exchange Commission (SEC) Nigeria, the Central Bank of Nigeria (CBN), and the National Insurance Commission (NAICOM)."
        },
        {
          q: "Where are your offices located?",
          a: "Our head office is located at 5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road, Ikoyi, Lagos, Nigeria. You can also reach us via email at info@digitalspacecapital.com or call +234 9131059419."
        }
      ]
    },
    {
      title: "Investment Services",
      icon: CreditCard,
      questions: [
        {
          q: "What investment products do you offer?",
          a: "We offer a variety of investment products including Money Market Funds, Infrastructure Funds, Fixed Income Securities, Equity Trading, Portfolio Management, and Real Estate Investment opportunities through our various subsidiaries."
        },
        {
          q: "What is the minimum investment amount?",
          a: "Minimum investment amounts vary by product. For our Digikolo savings platform, you can start with as little as ₦1,000. For other investment products through DSC Asset Management, please contact our team for specific requirements."
        },
        {
          q: "How do I start investing with Digital Space Capital?",
          a: "You can start by downloading our Digikolo app from the App Store or Google Play Store for easy savings and investments. For larger institutional investments, please contact our team through the Contact page or email us at info@digitalspacecapital.com."
        },
        {
          q: "What returns can I expect on my investments?",
          a: "Returns vary depending on the investment product and market conditions. Our Money Market Funds typically offer competitive rates above traditional savings accounts. Please note that past performance is not indicative of future results, and all investments carry inherent risks."
        }
      ]
    },
    {
      title: "Digikolo App",
      icon: Users,
      questions: [
        {
          q: "What is Digikolo?",
          a: "Digikolo is our fintech savings and investment platform that allows you to save and invest seamlessly from your mobile device. It offers features like automated savings, investment options, and easy withdrawals."
        },
        {
          q: "How do I download the Digikolo app?",
          a: "Digikolo is available on both iOS and Android platforms. You can download it from the Apple App Store or Google Play Store by searching for 'Digikolo'."
        },
        {
          q: "Is my money safe with Digikolo?",
          a: "Yes, Digikolo operates under Digital Space Capital's regulatory framework. Your funds are managed by licensed professionals, and we employ bank-grade security measures to protect your account and transactions."
        },
        {
          q: "How do I withdraw my funds from Digikolo?",
          a: "You can withdraw your funds directly through the Digikolo app to your linked bank account. Withdrawal requests are typically processed within 24-48 business hours."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      questions: [
        {
          q: "How do you protect my personal information?",
          a: "We employ industry-standard security measures including encryption, secure servers, and strict access controls. Our privacy practices are detailed in our Privacy Policy, and we never share your personal information with third parties without your consent."
        },
        {
          q: "What cookies does your website use?",
          a: "We use essential cookies for website functionality, analytics cookies to understand how visitors use our site, and marketing cookies for personalized advertising. You can manage your cookie preferences through our Cookie Preference Center."
        },
        {
          q: "How can I update my personal information?",
          a: "You can update your personal information through the Digikolo app settings or by contacting our customer support team. For account security, some changes may require identity verification."
        }
      ]
    },
    {
      title: "Account & Support",
      icon: FileText,
      questions: [
        {
          q: "How do I open an account?",
          a: "For individual investors, download the Digikolo app and follow the registration process. For institutional accounts or specialized services, please contact our team directly through the Contact page."
        },
        {
          q: "What documents do I need to open an account?",
          a: "You will typically need a valid government-issued ID (National ID, International Passport, or Driver's License), proof of address, and your Bank Verification Number (BVN) for Nigerian residents."
        },
        {
          q: "How can I contact customer support?",
          a: "You can reach our support team via email at info@digitalspacecapital.com, phone at +234 9131059419, or through the live chat feature on our website. Our team is available during business hours to assist you."
        },
        {
          q: "What are your business hours?",
          a: "Our offices are open Monday to Friday, 8:00 AM to 5:00 PM (WAT). Our digital platforms including Digikolo are available 24/7 for transactions and account management."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Digital Space Capital</title>
        <meta name="description" content="Find answers to frequently asked questions about Digital Space Capital's financial services, investment products, Digikolo app, and more." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Help Center
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our services, products, and policies. 
                Can't find what you're looking for? Contact our support team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} animation="fade-up" delay={categoryIndex * 100}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.title}-${index}`}
                      className="bg-card border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-primary-foreground/80 mb-8">
                Our customer support team is here to help. Reach out to us through any of our channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
                >
                  Contact Us
                </Link>
                <a 
                  href="mailto:info@digitalspacecapital.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-foreground/30 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Email Support
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Helpful Resources</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Link 
                to="/legal"
                className="flex items-center gap-3 p-4 bg-card border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <FileText className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">Legal Hub</span>
              </Link>
              <Link 
                to="/privacy-policy"
                className="flex items-center gap-3 p-4 bg-card border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">Privacy Policy</span>
              </Link>
              <Link 
                to="/terms-of-service"
                className="flex items-center gap-3 p-4 bg-card border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <FileText className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">Terms of Service</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
