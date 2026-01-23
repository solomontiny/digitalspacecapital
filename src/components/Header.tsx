import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, ChevronRight, Home, Info, Briefcase, Newspaper, Building2, Award, UserCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import newLogo from "@/assets/dsc-logo-new.png";

// Inline submenu section for mobile - shows items directly without dropdown
const MobileMenuSection = ({ 
  title, 
  icon: Icon, 
  items, 
  onItemClick,
  isVisible
}: { 
  title: string; 
  icon: React.ElementType;
  items: { label: string; href: string }[]; 
  onItemClick: () => void;
  isVisible: boolean;
}) => {
  return (
    <div 
      className="space-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 px-4 py-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </span>
      </div>
      
      {/* Items displayed inline */}
      <div className="space-y-0.5">
        {items.map((item, index) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={onItemClick}
            className={cn(
              "flex items-center gap-3 mx-2 px-4 py-3 rounded-xl",
              "text-sm font-medium text-foreground",
              "bg-muted/20 hover:bg-primary/10 hover:text-primary",
              "transition-all duration-300 ease-out",
              "active:scale-[0.98]"
            )}
            style={{
              transitionDelay: `${index * 30}ms`,
            }}
          >
            <ChevronRight className="w-4 h-4 text-primary/50" />
            {item.label}
          </Link>
        ))}
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    // iOS Safari can break nested scrolling when body is set to position: fixed.
    // Keeping it simple: disable body scroll via overflow only, and let the overlay handle scrolling.
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
          "w-full bg-background/98 backdrop-blur-md border-b sticky top-0 z-50",
          "transition-all duration-300 ease-out",
          scrolled 
            ? "border-border shadow-lg py-2" 
            : "border-transparent shadow-sm py-3"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Always clickable */}
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

      {/* Backdrop overlay - closes menu on click */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden",
          "transition-all duration-400 ease-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          top: scrolled ? 56 : 64,
        }}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation Overlay - Compact sidebar */}
      <div
        className={cn(
          "fixed left-0 right-0 bg-background/95 backdrop-blur-md z-50 lg:hidden",
          "rounded-b-3xl shadow-2xl border-b border-x border-border/50",
          "overflow-hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto animate-[slideDownBounce_0.5s_ease-out_forwards]"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          top: scrolled ? 56 : 64,
          height: `calc(75dvh - ${scrolled ? 56 : 64}px)`,
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-30px)',
          willChange: 'transform, opacity',
          transition: mobileMenuOpen 
            ? 'none' 
            : 'all 0.3s cubic-bezier(0.4, 0, 1, 1)',
        }}
      >
        <div
          className="h-full w-full overflow-y-auto overscroll-contain touch-pan-y pb-20 scroll-smooth"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
            scrollbarColor: "hsl(var(--primary) / 0.3) transparent",
          }}
        >
          <nav className="py-4 px-2 space-y-6">
            {/* Main Navigation Items */}
            <div className="space-y-1">
              {mainNavItems.map((item, index) => (
                item.scrollTo ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.scrollTo!)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-xl",
                      "transition-all duration-300 ease-out",
                      "active:scale-[0.98]"
                    )}
                    style={{
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 50}ms`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-xl",
                      "transition-all duration-300 ease-out",
                      "active:scale-[0.98]"
                    )}
                    style={{
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 50}ms`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-4" />

            {/* Inline Sections - No dropdown, items show directly */}
            <MobileMenuSection
              title="Directors"
              icon={UserCircle}
              items={directorsSubmenu}
              onItemClick={closeMobileMenu}
              isVisible={mobileMenuOpen}
            />

            <MobileMenuSection
              title="Testimonials"
              icon={Award}
              items={testimonialsSubmenu}
              onItemClick={closeMobileMenu}
              isVisible={mobileMenuOpen}
            />

            <MobileMenuSection
              title="The Group"
              icon={Building2}
              items={subsidiaries}
              onItemClick={closeMobileMenu}
              isVisible={mobileMenuOpen}
            />

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-4" />

            {/* Contact Button */}
            <div className="px-2">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={cn(
                  "flex items-center justify-center gap-3 w-full px-6 py-4",
                  "text-base font-semibold text-primary-foreground bg-primary rounded-xl",
                  "transition-all duration-300 ease-out",
                  "hover:bg-primary/90 active:scale-[0.98] shadow-lg"
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
