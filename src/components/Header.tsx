import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import newLogo from "@/assets/dsc-logo-new.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubsidiaries, setShowSubsidiaries] = useState(false);
  const [showDirectorsSubmenu, setShowDirectorsSubmenu] = useState(false);
  const [showTestimonialsSubmenu, setShowTestimonialsSubmenu] = useState(false);
  
  const mainNavItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "WHAT WE DO", href: "/what-we-do" },
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
    { name: "Digital Space Capital", href: "/subsidiaries/digital-space-capital" },
    { name: "DSC Asset Management", href: "/subsidiaries/dsc-asset-management" },
    { name: "DSC Microfinance Bank", href: "/subsidiaries/dsc-microfinance-bank" },
    { name: "Naingate Insurance Brokers", href: "/subsidiaries/naingate-insurance" },
    { name: "Emison Real Estate", href: "/subsidiaries/emison-real-estate" },
    { name: "Easy Pay", href: "/subsidiaries/easy-pay" },
    { name: "Digikolo", href: "/subsidiaries/digikolo" }
  ];

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={newLogo} alt="Digital Space Capital" className="h-16 md:h-20 w-auto transition-transform hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Main Nav Items */}
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      to={item.href}
                      className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Directors Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    DIRECTORS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {directorsSubmenu.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Testimonials Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    TESTIMONIALS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {testimonialsSubmenu.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* The Group Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    THE GROUP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-2">
                      {subsidiaries.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Us as nav link */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    CONTACT US
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden">
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
                    {/* First 3 main nav items */}
                    {mainNavItems.map((item, index) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/5 animate-fade-in hover:scale-105 active:scale-95"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {item.label}
                      </Link>
                    ))}
                    
                    {/* Directors with submenu */}
                    <div className="border-t mt-2 pt-2">
                      <button
                        onClick={() => setShowDirectorsSubmenu(!showDirectorsSubmenu)}
                        className="flex items-center justify-between w-full text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95"
                      >
                        DIRECTORS
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDirectorsSubmenu ? 'rotate-180' : ''}`} />
                      </button>
                      {showDirectorsSubmenu && (
                        <div className="flex flex-col gap-1 mt-2 ml-2">
                          {directorsSubmenu.map((item, index) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-foreground/70 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 animate-fade-in hover:translate-x-1"
                              style={{ animationDelay: `${index * 30}ms` }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Testimonials with submenu */}
                    <div>
                      <button
                        onClick={() => setShowTestimonialsSubmenu(!showTestimonialsSubmenu)}
                        className="flex items-center justify-between w-full text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/5 hover:scale-105 active:scale-95"
                      >
                        TESTIMONIALS
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showTestimonialsSubmenu ? 'rotate-180' : ''}`} />
                      </button>
                      {showTestimonialsSubmenu && (
                        <div className="flex flex-col gap-1 mt-2 ml-2">
                          {testimonialsSubmenu.map((item, index) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-foreground/70 hover:text-primary transition-all duration-300 py-2 px-4 rounded-md hover:bg-primary/5 animate-fade-in hover:translate-x-1"
                              style={{ animationDelay: `${index * 30}ms` }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* THE GROUP */}
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
                            <Link
                              key={subsidiary.name}
                              to={subsidiary.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-primary/5 animate-fade-in hover:scale-105 active:scale-95"
                              style={{ animationDelay: `${(mainNavItems.length + index) * 50}ms` }}
                            >
                              {subsidiary.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Contact Us */}
                    <div className="border-t mt-4 pt-4">
                      <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/5 block"
                      >
                        CONTACT US
                      </Link>
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
    </header>
  );
};

export default Header;