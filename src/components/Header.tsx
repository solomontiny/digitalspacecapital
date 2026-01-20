import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown, Home, Info, Briefcase, Users, Newspaper, Phone, Building2, Award, UserCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import newLogo from "@/assets/dsc-logo-new.png";

// Mobile dropdown component with smooth animation
const MobileDropdown = ({ 
  title, 
  icon: Icon, 
  items, 
  onItemClick 
}: { 
  title: string; 
  icon: React.ElementType;
  items: { label: string; href: string }[]; 
  onItemClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="rounded-2xl overflow-hidden bg-muted/20 border border-border/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-5 py-4",
          "text-base font-medium text-foreground",
          "transition-all duration-300 ease-out",
          "hover:bg-primary/10 active:scale-[0.99]",
          isOpen && "bg-primary/5"
        )}
      >
        <span className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          {title}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center",
          "transition-all duration-300 ease-out",
          isOpen && "bg-primary/10"
        )}>
          <ChevronDown 
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isOpen && "rotate-180 text-primary"
            )} 
          />
        </div>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/50 py-2 px-3 space-y-1">
          {items.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl",
                "text-sm font-medium text-muted-foreground",
                "hover:text-primary hover:bg-primary/10",
                "transition-all duration-300 ease-out",
                "hover:translate-x-1 active:scale-[0.98]"
              )}
              style={{ 
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };
  
  const mainNavItems = [
    { label: "HOME", href: "/", scrollTo: "hero", icon: Home },
    { label: "ABOUT US", href: "/about", icon: Info },
    { label: "WHAT WE DO", href: "/what-we-do", icon: Briefcase },
    { label: "SERVICES", scrollTo: "services", icon: Briefcase },
    { label: "NEWS", scrollTo: "news", icon: Newspaper },
  ];

  const directorsSubmenu = [
    { label: "Board of Directors", href: "/directors" },
    { label: "Join Our Team", href: "/team" },
  ];

  const testimonialsSubmenu = [
    { label: "All Testimonials", href: "/testimonials" },
    { label: "News", href: "/blog" },
    { label: "Investors", href: "/investor-relations" },
    { label: "Careers", href: "/careers" },
  ];

  const subsidiaries = [
    { label: "Digital Space Capital", href: "/subsidiaries/digital-space-capital" },
    { label: "DSC Asset Management", href: "/subsidiaries/dsc-asset-management" },
    { label: "DSC Microfinance Bank", href: "/subsidiaries/dsc-microfinance-bank" },
    { label: "Naingate Insurance Brokers", href: "/subsidiaries/naingate-insurance" },
    { label: "Emison Real Estate", href: "/subsidiaries/emison-real-estate" },
    { label: "Easy Pay", href: "/subsidiaries/easy-pay" },
    { label: "Digikolo", href: "/subsidiaries/digikolo" }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header 
        className={cn(
          "w-full bg-background/98 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300",
          scrolled 
            ? "border-border shadow-lg py-2" 
            : "border-transparent shadow-sm py-3"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center relative z-50"
              onClick={closeMobileMenu}
            >
              <img 
                src={newLogo} 
                alt="Digital Space Capital" 
                className={cn(
                  "w-auto transition-all duration-300",
                  scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-0.5">
                  {/* Main Nav Items */}
                  {mainNavItems.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.scrollTo ? (
                        <button
                          onClick={() => scrollToSection(item.scrollTo!)}
                          className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          to={item.href!}
                          className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        >
                          {item.label}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}

                  {/* Directors Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-semibold text-foreground/80 hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">
                      DIRECTORS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[200px] p-2 bg-background border border-border rounded-xl shadow-2xl">
                        {directorsSubmenu.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none rounded-lg p-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Testimonials Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-semibold text-foreground/80 hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">
                      TESTIMONIALS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[200px] p-2 bg-background border border-border rounded-xl shadow-2xl">
                        {testimonialsSubmenu.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none rounded-lg p-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* The Group Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-semibold text-foreground/80 hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">
                      THE GROUP
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[240px] p-2 bg-background border border-border rounded-xl shadow-2xl">
                        {subsidiaries.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none rounded-lg p-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact Us */}
                  <NavigationMenuItem>
                    <Link
                      to="/contact"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                      CONTACT US
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2.5 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-300",
                    mobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  )} 
                />
                <X 
                  className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-300",
                    mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  )} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 bg-background/98 backdrop-blur-xl z-40 lg:hidden",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "border-t border-border/50 shadow-2xl",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none translate-y-full"
        )}
        style={{ top: scrolled ? '60px' : '68px' }}
      >
        <div 
          className="h-full overflow-y-auto overscroll-contain"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <nav className="py-6 pb-safe">
            {/* Main Nav Items */}
            <div className="px-4 space-y-1">
              {mainNavItems.map((item, index) => (
                item.scrollTo ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.scrollTo!)}
                    className={cn(
                      "w-full flex items-center gap-4 px-5 py-4 text-base font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-2xl",
                      "transition-all duration-300 ease-out",
                      "hover:translate-x-2 hover:shadow-md active:scale-[0.98]",
                      "transform"
                    )}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center gap-4 px-5 py-4 text-base font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-2xl",
                      "transition-all duration-300 ease-out",
                      "hover:translate-x-2 hover:shadow-md active:scale-[0.98]"
                    )}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-5 mx-6" />

            {/* Dropdown Sections */}
            <div className="px-4 space-y-2">
              <MobileDropdown
                title="DIRECTORS"
                icon={UserCircle}
                items={directorsSubmenu}
                onItemClick={closeMobileMenu}
              />
              <MobileDropdown
                title="TESTIMONIALS"
                icon={Award}
                items={testimonialsSubmenu}
                onItemClick={closeMobileMenu}
              />
              <MobileDropdown
                title="THE GROUP"
                icon={Building2}
                items={subsidiaries}
                onItemClick={closeMobileMenu}
              />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-5 mx-6" />

            {/* Contact Button */}
            <div className="px-4 pt-2 pb-6">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={cn(
                  "flex items-center justify-center gap-3 w-full px-6 py-4",
                  "text-base font-semibold text-primary-foreground bg-primary rounded-2xl",
                  "transition-all duration-300 ease-out",
                  "hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl",
                  "active:scale-[0.98] shadow-lg"
                )}
              >
                <Phone className="w-5 h-5" />
                CONTACT US
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;