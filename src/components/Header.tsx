import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Home, Info, Briefcase, Newspaper, Building2, Award, UserCircle, RefreshCw, Phone } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import newLogo from "@/assets/dsc-logo-new.png";

// Mobile dropdown component with ultra-smooth animation
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
  const [contentHeight, setContentHeight] = useState(0);
  
  return (
    <div className="rounded-2xl overflow-hidden bg-muted/20 border border-border/30 will-change-transform">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-5 py-4",
          "text-base font-medium text-foreground",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:bg-primary/10 active:scale-[0.995]",
          isOpen && "bg-primary/5"
        )}
      >
        <span className="flex items-center gap-4">
          <div className={cn(
            "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen && "bg-primary/20 scale-105"
          )}>
            <Icon className={cn(
              "w-5 h-5 text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen && "scale-110"
            )} />
          </div>
          {title}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen && "bg-primary/10 rotate-0"
        )}>
          <ChevronDown 
            className={cn(
              "w-4 h-4 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen && "rotate-180 text-primary"
            )} 
          />
        </div>
      </button>
      <div 
        className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
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
                  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:translate-x-2 active:scale-[0.98]",
                  "will-change-transform"
                )}
                style={{ 
                  transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-8px)'
                }}
              >
                <span className={cn(
                  "w-2 h-2 rounded-full bg-primary/40 transition-all duration-300",
                  "group-hover:bg-primary"
                )} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
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

  // Pull to refresh handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (scrollContainerRef.current && scrollContainerRef.current.scrollTop <= 0) {
      startY.current = e.touches[0].clientY;
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!scrollContainerRef.current || isRefreshing) return;
    
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;
    
    if (diff > 0 && scrollContainerRef.current.scrollTop <= 0) {
      const resistance = 1 - Math.min(diff / 240, 0.6);
      const adjustedDiff = Math.min(diff * resistance, 120);
      setPullDistance(adjustedDiff);
    }
  }, [isRefreshing]);

  const handleTouchEnd = useCallback(async () => {
    if (pullDistance >= 80) {
      setIsRefreshing(true);
      // Simulate refresh
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsRefreshing(false);
    }
    setPullDistance(0);
  }, [pullDistance]);
  
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
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="group inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                          DIRECTORS
                          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" side="bottom" sideOffset={10} className="min-w-[220px] rounded-xl border border-border bg-background p-2 shadow-2xl">
                        {directorsSubmenu.map((item) => (
                          <DropdownMenuItem key={item.label} asChild className="rounded-lg">
                            <Link
                              to={item.href}
                              className="block w-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>

                  {/* Testimonials Dropdown */}
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="group inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                          TESTIMONIALS
                          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" side="bottom" sideOffset={10} className="min-w-[220px] rounded-xl border border-border bg-background p-2 shadow-2xl">
                        {testimonialsSubmenu.map((item) => (
                          <DropdownMenuItem key={item.label} asChild className="rounded-lg">
                            <Link
                              to={item.href}
                              className="block w-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>

                  {/* The Group Dropdown */}
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="group inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                          THE GROUP
                          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" side="bottom" sideOffset={10} className="min-w-[260px] rounded-xl border border-border bg-background p-2 shadow-2xl">
                        {subsidiaries.map((item) => (
                          <DropdownMenuItem key={item.label} asChild className="rounded-lg">
                            <Link
                              to={item.href}
                              className="block w-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
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
          "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "border-t border-border/50 shadow-2xl",
          "will-change-transform overflow-hidden",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none translate-y-full"
        )}
        style={{
          top: scrolled ? 60 : 68,
          height: `calc(100dvh - ${scrolled ? 60 : 68}px)`,
        }}
      >
        {/* Pull to refresh indicator */}
        <div 
          className={cn(
            "absolute top-0 left-0 right-0 flex items-center justify-center overflow-hidden",
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "bg-gradient-to-b from-primary/5 to-transparent",
            "pointer-events-none"
          )}
          style={{ 
            height: pullDistance,
            opacity: pullDistance > 0 ? 1 : 0,
          }}
        >
          <div 
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-primary",
              "transition-all duration-300"
            )}
            style={{
              transform: `scale(${Math.min(pullDistance / 80, 1)})`,
              opacity: Math.min(pullDistance / 40, 1),
            }}
          >
            <RefreshCw 
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                isRefreshing && "animate-spin"
              )}
              style={{
                transform: `rotate(${pullDistance * 3}deg)`,
              }}
            />
            <span>{isRefreshing ? 'Refreshing...' : pullDistance >= 80 ? 'Release to refresh' : 'Pull to refresh'}</span>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={cn(
            "h-full w-full",
            "overflow-y-scroll",
            "touch-pan-y",
            "[&::-webkit-scrollbar]:w-1.5",
            "[&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:bg-primary/20",
            "[&::-webkit-scrollbar-thumb]:rounded-full",
            "[&::-webkit-scrollbar-thumb:hover]:bg-primary/30"
          )}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
            overscrollBehaviorY: 'auto',
            transform: `translateY(${pullDistance}px)`,
            transition: pullDistance === 0 ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
          }}
        >
          <nav className="py-6 pb-32 min-h-full">
            {/* Main Nav Items */}
            <div className="px-4 space-y-1.5">
              {mainNavItems.map((item, index) => (
                item.scrollTo ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.scrollTo!)}
                    className={cn(
                      "w-full flex items-center gap-4 px-5 py-4 text-base font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-2xl",
                      "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "hover:translate-x-3 hover:shadow-lg active:scale-[0.98]",
                      "will-change-transform"
                    )}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${80 + index * 60}ms` : '0ms',
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.96)'
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
                      "w-full flex items-center gap-4 px-5 py-4 text-base font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-2xl",
                      "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "hover:translate-x-3 hover:shadow-lg active:scale-[0.98]",
                      "will-change-transform"
                    )}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${80 + index * 60}ms` : '0ms',
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.96)'
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