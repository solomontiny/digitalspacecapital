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
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/50 transition-colors duration-200"
      >
        <span className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-primary" />
          {title}
        </span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-300 ease-out",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-muted/30 py-1">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onItemClick}
              className="flex items-center gap-3 px-8 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden transition-all duration-300 ease-out",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        style={{ top: scrolled ? '60px' : '68px' }}
      >
        <ScrollArea className="h-[calc(100vh-68px)]">
          <nav className="py-4">
            {/* Main Nav Items */}
            <div className="px-2">
              {mainNavItems.map((item) => (
                item.scrollTo ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.scrollTo!)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-border/50 my-3 mx-4" />

            {/* Dropdown Sections */}
            <div className="px-2">
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

            <div className="h-px bg-border/50 my-3 mx-4" />

            {/* Contact Button */}
            <div className="px-4 pt-2">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-xl transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <Phone className="w-4 h-4" />
                CONTACT US
              </Link>
            </div>
          </nav>
        </ScrollArea>
      </div>
    </>
  );
};

export default Header;