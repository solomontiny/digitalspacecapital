import { useState } from "react";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Declare Zoho types
declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        floatbutton?: {
          click: () => void;
        };
      };
    };
  }
}

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 border-t border-primary-foreground/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* Help Desk Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground">Help Desk</h3>
            <p className="text-primary-foreground/80">
              Our support team is here to help you with any questions or concerns.
            </p>
            <Button 
              onClick={() => {
                // Trigger Zoho chat widget
                if (window.$zoho && window.$zoho.salesiq) {
                  window.$zoho.salesiq.floatbutton.click();
                }
              }}
              className="bg-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))]/90 text-[hsl(var(--warning-foreground))] gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Support
            </Button>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground">Contact Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-primary-foreground mt-1 flex-shrink-0" />
                <p className="text-sm">
                  5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road, Ikoyi, Lagos Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                <a 
                  href="mailto:info@digitalspacecapital.com" 
                  className="text-sm hover:text-primary-foreground transition-colors"
                >
                  info@digitalspacecapital.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                <a 
                  href="tel:+2349131059419" 
                  className="text-sm hover:text-primary-foreground transition-colors"
                >
                  +234 9131059419
                </a>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground">Subscribe</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our emails and get the latest updates on our products and services
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={isLoading}
                  className="flex-shrink-0 bg-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))]/90 text-[hsl(var(--warning-foreground))]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-primary-foreground/80 text-center md:text-left">
                © {new Date().getFullYear()} Digital Space Capital. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60">
                Powered by Digikolo
              </p>
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <a href="/about" className="hover:text-primary-foreground transition-colors">
                About
              </a>
              <a href="/what-we-do" className="hover:text-primary-foreground transition-colors">
                What We Do
              </a>
              <a href="/subsidiaries" className="hover:text-primary-foreground transition-colors">
                Subsidiaries
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
