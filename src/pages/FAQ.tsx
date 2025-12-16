import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { HelpCircle, Building, CreditCard, Shield, Users, FileText, Phone, Search, ThumbsUp, ThumbsDown, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FeedbackState {
  [key: string]: "helpful" | "not-helpful" | null;
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [feedback, setFeedback] = useState<FeedbackState>({});
  const { toast } = useToast();

  const faqCategories = [
    {
      title: "About Digital Space Capital",
      icon: Building,
      questions: [
        {
          id: "about-1",
          q: "What is Digital Space Capital?",
          a: "Digital Space Capital is a leading Nigerian financial services holding company that provides a comprehensive range of investment and financial solutions. We operate through our subsidiaries including DSC Asset Management, DSC Microfinance Bank, Naingate Insurance, Emison Real Estate, EasyPay, and Digikolo."
        },
        {
          id: "about-2",
          q: "Is Digital Space Capital regulated?",
          a: "Yes, Digital Space Capital and its subsidiaries operate under the supervision of relevant regulatory bodies including the Securities and Exchange Commission (SEC) Nigeria, the Central Bank of Nigeria (CBN), and the National Insurance Commission (NAICOM)."
        },
        {
          id: "about-3",
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
          id: "invest-1",
          q: "What investment products do you offer?",
          a: "We offer a variety of investment products including Money Market Funds, Infrastructure Funds, Fixed Income Securities, Equity Trading, Portfolio Management, and Real Estate Investment opportunities through our various subsidiaries."
        },
        {
          id: "invest-2",
          q: "What is the minimum investment amount?",
          a: "Minimum investment amounts vary by product. For our Digikolo savings platform, you can start with as little as ₦1,000. For other investment products through DSC Asset Management, please contact our team for specific requirements."
        },
        {
          id: "invest-3",
          q: "How do I start investing with Digital Space Capital?",
          a: "You can start by downloading our Digikolo app from the App Store or Google Play Store for easy savings and investments. For larger institutional investments, please contact our team through the Contact page or email us at info@digitalspacecapital.com."
        },
        {
          id: "invest-4",
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
          id: "digikolo-1",
          q: "What is Digikolo?",
          a: "Digikolo is our fintech savings and investment platform that allows you to save and invest seamlessly from your mobile device. It offers features like automated savings, investment options, and easy withdrawals."
        },
        {
          id: "digikolo-2",
          q: "How do I download the Digikolo app?",
          a: "Digikolo is available on both iOS and Android platforms. You can download it from the Apple App Store or Google Play Store by searching for 'Digikolo'."
        },
        {
          id: "digikolo-3",
          q: "Is my money safe with Digikolo?",
          a: "Yes, Digikolo operates under Digital Space Capital's regulatory framework. Your funds are managed by licensed professionals, and we employ bank-grade security measures to protect your account and transactions."
        },
        {
          id: "digikolo-4",
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
          id: "security-1",
          q: "How do you protect my personal information?",
          a: "We employ industry-standard security measures including encryption, secure servers, and strict access controls. Our privacy practices are detailed in our Privacy Policy, and we never share your personal information with third parties without your consent."
        },
        {
          id: "security-2",
          q: "What cookies does your website use?",
          a: "We use essential cookies for website functionality, analytics cookies to understand how visitors use our site, and marketing cookies for personalized advertising. You can manage your cookie preferences through our Cookie Preference Center."
        },
        {
          id: "security-3",
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
          id: "account-1",
          q: "How do I open an account?",
          a: "For individual investors, download the Digikolo app and follow the registration process. For institutional accounts or specialized services, please contact our team directly through the Contact page."
        },
        {
          id: "account-2",
          q: "What documents do I need to open an account?",
          a: "You will typically need a valid government-issued ID (National ID, International Passport, or Driver's License), proof of address, and your Bank Verification Number (BVN) for Nigerian residents."
        },
        {
          id: "account-3",
          q: "How can I contact customer support?",
          a: "You can reach our support team via email at info@digitalspacecapital.com, phone at +234 9131059419, or through the live chat feature on our website. Our team is available during business hours to assist you."
        },
        {
          id: "account-4",
          q: "What are your business hours?",
          a: "Our offices are open Monday to Friday, 8:00 AM to 5:00 PM (WAT). Our digital platforms including Digikolo are available 24/7 for transactions and account management."
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories;
    
    const query = searchQuery.toLowerCase();
    return faqCategories
      .map(category => ({
        ...category,
        questions: category.questions.filter(
          item => 
            item.q.toLowerCase().includes(query) || 
            item.a.toLowerCase().includes(query)
        )
      }))
      .filter(category => category.questions.length > 0);
  }, [searchQuery]);

  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0);

  const handleFeedback = (questionId: string, isHelpful: boolean) => {
    setFeedback(prev => ({
      ...prev,
      [questionId]: isHelpful ? "helpful" : "not-helpful"
    }));
    
    toast({
      title: "Thank you for your feedback!",
      description: isHelpful 
        ? "We're glad this answer was helpful." 
        : "We'll work on improving this answer.",
    });
  };

  const FeedbackButtons = ({ questionId }: { questionId: string }) => {
    const currentFeedback = feedback[questionId];
    
    return (
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Was this helpful?</span>
          <div className="flex items-center gap-2">
            {currentFeedback ? (
              <span className="text-sm text-primary flex items-center gap-1">
                {currentFeedback === "helpful" ? (
                  <>
                    <ThumbsUp className="w-4 h-4" />
                    Thanks for your feedback!
                  </>
                ) : (
                  <>
                    <ThumbsDown className="w-4 h-4" />
                    Thanks, we'll improve this.
                  </>
                )}
              </span>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeedback(questionId, true);
                  }}
                  className="h-8 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10"
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Yes
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeedback(questionId, false);
                  }}
                  className="h-8 px-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                >
                  <ThumbsDown className="w-4 h-4 mr-1" />
                  No
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

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
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions about our services, products, and policies. 
                Can't find what you're looking for? Contact our support team.
              </p>
              
              {/* Search Box */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-10 py-6 text-lg rounded-xl bg-card border-2 focus:border-primary"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
              
              {/* Search Results Count */}
              {searchQuery && (
                <p className="mt-4 text-sm text-muted-foreground">
                  {totalResults === 0 
                    ? "No results found. Try a different search term."
                    : `Found ${totalResults} result${totalResults === 1 ? "" : "s"} for "${searchQuery}"`
                  }
                </p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredCategories.length === 0 ? (
            <AnimatedSection animation="fade-up">
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
                </p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            </AnimatedSection>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} animation="fade-up" delay={categoryIndex * 100}>
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((item) => (
                      <AccordionItem 
                        key={item.id} 
                        value={item.id}
                        className="bg-card border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          <p>{item.a}</p>
                          <FeedbackButtons questionId={item.id} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </AnimatedSection>
            ))
          )}
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
