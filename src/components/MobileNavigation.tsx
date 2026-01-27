import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight, Home, Info, Briefcase, Newspaper, Building2, Award, UserCircle, Phone } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  scrollTo?: string;
  icon: React.ElementType;
}

interface SubMenuItem {
  label: string;
  href: string;
}

interface MobileMenuSectionProps {
  title: string;
  icon: React.ElementType;
  items: SubMenuItem[];
  onItemClick: () => void;
  isVisible: boolean;
}

const MobileMenuSection = ({ 
  title, 
  icon: Icon, 
  items, 
  onItemClick,
  isVisible
}: MobileMenuSectionProps) => {
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

interface MobileNavigationProps {
  isOpen: boolean;
  scrolled: boolean;
  onClose: () => void;
  onScrollToSection: (sectionId: string) => void;
}

// Navigation data
const mainNavItems: NavItem[] = [
  { label: "HOME", href: "/", scrollTo: "hero", icon: Home },
  { label: "ABOUT US", href: "/about", icon: Info },
  { label: "WHAT WE DO", href: "/what-we-do", icon: Briefcase },
  { label: "SERVICES", scrollTo: "services", icon: Briefcase },
  { label: "NEWS", scrollTo: "news", icon: Newspaper },
];

const directorsSubmenu: SubMenuItem[] = [
  { label: "Board of Directors", href: "/directors" },
  { label: "Join Our Team", href: "/team" },
];

const testimonialsSubmenu: SubMenuItem[] = [
  { label: "All Testimonials", href: "/testimonials" },
  { label: "News", href: "/blog" },
  { label: "Investors", href: "/investor-relations" },
  { label: "Careers", href: "/careers" },
];

const subsidiaries: SubMenuItem[] = [
  { label: "Digital Space Capital", href: "/subsidiaries/digital-space-capital" },
  { label: "DSC Asset Management", href: "/subsidiaries/dsc-asset-management" },
  { label: "DSC Microfinance Bank", href: "/subsidiaries/dsc-microfinance-bank" },
  { label: "Naingate Insurance Brokers", href: "/subsidiaries/naingate-insurance" },
  { label: "Emison Real Estate", href: "/subsidiaries/emison-real-estate" },
  { label: "Easy Pay", href: "/subsidiaries/easy-pay" },
  { label: "Digikolo", href: "/subsidiaries/digikolo" }
];

const MobileNavigation = ({ 
  isOpen, 
  scrolled, 
  onClose, 
  onScrollToSection 
}: MobileNavigationProps) => {
  const headerHeight = scrolled ? 56 : 64;

  return (
    <>
      {/* Backdrop overlay - closes menu on click */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden",
          "transition-all duration-400 ease-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          top: headerHeight,
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Navigation Overlay - Compact sidebar */}
      <div
        className={cn(
          "fixed left-0 right-0 bg-background/95 backdrop-blur-md z-50 lg:hidden",
          "rounded-b-3xl shadow-2xl border-b border-x border-border/50",
          "overflow-hidden",
          isOpen
            ? "opacity-100 pointer-events-auto animate-[slideDownBounce_0.5s_ease-out_forwards]"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          top: headerHeight,
          height: `calc(75dvh - ${headerHeight}px)`,
          transform: isOpen ? 'translateY(0)' : 'translateY(-30px)',
          willChange: 'transform, opacity',
          transition: isOpen 
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
                    onClick={() => onScrollToSection(item.scrollTo!)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-xl",
                      "transition-all duration-300 ease-out",
                      "active:scale-[0.98]"
                    )}
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateX(0)" : "translateX(-20px)",
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
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground",
                      "bg-muted/30 hover:bg-primary/10 rounded-xl",
                      "transition-all duration-300 ease-out",
                      "active:scale-[0.98]"
                    )}
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateX(0)" : "translateX(-20px)",
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
              onItemClick={onClose}
              isVisible={isOpen}
            />

            <MobileMenuSection
              title="Testimonials"
              icon={Award}
              items={testimonialsSubmenu}
              onItemClick={onClose}
              isVisible={isOpen}
            />

            <MobileMenuSection
              title="The Group"
              icon={Building2}
              items={subsidiaries}
              onItemClick={onClose}
              isVisible={isOpen}
            />

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-4" />

            {/* Contact Button */}
            <div className="px-2">
              <Link
                to="/contact"
                onClick={onClose}
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

export default MobileNavigation;
