import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import xmasLogo from "@/assets/digital-space-capital-xmas-logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubsidiaries, setShowSubsidiaries] = useState(false);
  
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "WHAT WE DO", href: "/what-we-do" },
    { label: "DIRECTORS", href: "/directors" },
    { label: "JOIN OUR TEAM", href: "/team" },
    { label: "TESTIMONIALS", href: "/testimonials" },
    { label: "NEWS", href: "/blog" },
    { label: "INVESTORS", href: "/investor-relations" },
    { label: "CAREERS", href: "/careers" }
  ];

  const subsidiaries = [
    { name: "Digital Space Capital", href: "/subsidiaries/digital-space-capital" },
    { name: "DSC Asset Management", href: "/subsidiaries/dsc-asset-management" },
    { name: "DSC Microfinance Bank", href: "/subsidiaries/dsc-microfinance-bank" },
    { name: "Naingate Insurance Brokers", href: "/subsidiaries/naingate-insurance" },
    { name: "Emison Real Estate", href: "/subsidiaries/emison-real-estate" },
    { name: "Easy Pay", href: "/subsidiaries/easy-pay" },
    { name: "Digikolo", href: "/subsidiaries/digikolo" }
  ];

  return <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={xmasLogo} alt="Digital Space Capital" className="h-24 md:h-28 w-auto transition-transform hover:scale-105" />
          </a>

          {/* Desktop and Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button size="sm" asChild className="hidden sm:flex">
              <a href="/contact">CONTACT US</a>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px] flex flex-col">
                <SheetHeader>
                  <SheetTitle className="text-lg font-bold">Navigation Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex-1 -mx-6 px-6">
                  <nav className="flex flex-col gap-1 mt-6 pb-8">
                    {navItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/5 animate-fade-in hover:scale-105 active:scale-95"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {item.label}
                      </a>
                    ))}
                    
                    <div className="border-t mt-2 pt-4">
                      <button
                        onClick={() => setShowSubsidiaries(!showSubsidiaries)}
                        className="flex items-center justify-between w-full text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95"
                      >
                        THE GROUP
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showSubsidiaries ? 'rotate-180' : ''}`} />
                      </button>
                      {showSubsidiaries && (
                        <div className="flex flex-col gap-1 mt-2 ml-2">
                          {subsidiaries.map((subsidiary, index) => (
                            <a
                              key={subsidiary.name}
                              href={subsidiary.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-primary/5 animate-fade-in hover:scale-105 active:scale-95"
                              style={{ animationDelay: `${(navItems.length + index) * 50}ms` }}
                            >
                              {subsidiary.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Quick Links Section */}
                    <div className="border-t mt-4 pt-4">
                      <h3 className="text-xs font-bold text-foreground/60 uppercase tracking-wider px-3 mb-3">Quick Links</h3>
                      <div className="flex flex-col gap-1">
                        <a href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95">
                          🏠 Home
                        </a>
                        <a href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95">
                          ℹ️ About Us
                        </a>
                        <a href="/what-we-do" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95">
                          💼 What We Do
                        </a>
                        <a href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95">
                          📧 Contact Us
                        </a>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t mt-4 pt-4">
                      <h3 className="text-xs font-bold text-foreground/60 uppercase tracking-wider px-3 mb-3">Contact Info</h3>
                      <div className="flex flex-col gap-3 px-3">
                        <div className="text-sm">
                          <p className="font-semibold text-foreground/80 mb-1">Email</p>
                          <a href="mailto:info@digitalspacecapital.com" className="text-foreground/60 hover:text-primary transition-colors">
                            info@digitalspacecapital.com
                          </a>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground/80 mb-1">Phone</p>
                          <a href="tel:+2348012345678" className="text-foreground/60 hover:text-primary transition-colors">
                            +234 801 234 5678
                          </a>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground/80 mb-1">Office</p>
                          <p className="text-foreground/60 text-xs leading-relaxed">
                            Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                    </div>
                  </nav>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;