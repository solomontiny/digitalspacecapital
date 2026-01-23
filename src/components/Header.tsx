import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import newLogo from "@/assets/dsc-logo-new.png";
import MobileNavigation from "./MobileNavigation";

// Desktop navigation data
const mainNavItems = [
  { label: "HOME", href: "/", scrollTo: "hero" },
  { label: "ABOUT US", href: "/about" },
  { label: "WHAT WE DO", href: "/what-we-do" },
  { label: "SERVICES", scrollTo: "services" },
  { label: "NEWS", scrollTo: "news" },
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header 
        className={cn(
          "w-full bg-background/98 backdrop-blur-md border-b sticky top-0 z-50",
          "transition-all duration-300 ease-out",
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
              className="flex items-center relative z-[60] cursor-pointer"
              onClick={() => {
                closeMobileMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src={newLogo} 
                alt="Digital Space Capital" 
                className={cn(
                  "w-auto transition-all duration-300",
                  scrolled ? "h-10 sm:h-12 md:h-14" : "h-12 sm:h-14 md:h-16"
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Main Nav Items */}
              {mainNavItems.map((item) => (
                item.scrollTo ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.scrollTo!)}
                    className="h-9 px-3 text-sm font-semibold text-foreground/80 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    className="h-9 px-3 text-sm font-semibold text-foreground/80 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary flex items-center"
                  >
                    {item.label}
                  </Link>
                )
              ))}

              {/* Directors Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group h-9 px-3 text-sm font-semibold text-foreground/80 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary flex items-center gap-1">
                    DIRECTORS
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={8} className="min-w-[200px] rounded-xl border bg-background p-2 shadow-xl">
                  {directorsSubmenu.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg cursor-pointer">
                      <Link to={item.href} className="w-full px-3 py-2 text-sm font-medium">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Testimonials Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group h-9 px-3 text-sm font-semibold text-foreground/80 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary flex items-center gap-1">
                    TESTIMONIALS
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={8} className="min-w-[200px] rounded-xl border bg-background p-2 shadow-xl">
                  {testimonialsSubmenu.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg cursor-pointer">
                      <Link to={item.href} className="w-full px-3 py-2 text-sm font-medium">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* The Group Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group h-9 px-3 text-sm font-semibold text-foreground/80 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary flex items-center gap-1">
                    THE GROUP
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={8} className="min-w-[240px] rounded-xl border bg-background p-2 shadow-xl">
                  {subsidiaries.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg cursor-pointer">
                      <Link to={item.href} className="w-full px-3 py-2 text-sm font-medium">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="ml-2 h-9 px-4 text-sm font-semibold text-primary-foreground bg-primary rounded-md transition-all duration-200 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md flex items-center"
              >
                CONTACT US
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-[60] p-2.5 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-200"
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

      {/* Mobile Navigation Component */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        scrolled={scrolled}
        onClose={closeMobileMenu}
        onScrollToSection={scrollToSection}
      />
    </>
  );
};

export default Header;
