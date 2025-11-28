import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
    { name: "Digital Space Capital", href: "/subsidiaries" },
    { name: "DSC Asset Management", href: "/subsidiaries" },
    { name: "DSC MICROFINANCE BANK", href: "/subsidiaries" },
    { name: "NAINGATE INSURANCE BROKERS", href: "/subsidiaries" },
    { name: "EMISON REAL ESTATE", href: "/subsidiaries" },
    { name: "EASY PAY", href: "/subsidiaries" },
    { name: "DIGIKOLO", href: "/subsidiaries" }
  ];

  return <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/digital-space-capital-logo.png" alt="Digital Space Capital" className="h-20 w-auto transition-transform hover:scale-105" />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </a>
            ))}
            
            <NavigationMenu className="z-50">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-foreground/80 hover:text-primary transition-all duration-300">
                    THE GROUP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ScrollArea className="h-[300px] w-[280px] bg-background/98 backdrop-blur-md border border-border/50 shadow-lg rounded-lg">
                      <ul className="grid gap-1 p-3">
                        {subsidiaries.map((subsidiary) => (
                          <li key={subsidiary.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={subsidiary.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-sm font-medium"
                              >
                                {subsidiary.name}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button size="sm" asChild>
              <a href="/contact">CONTACT US</a>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] flex flex-col">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex-1 -mx-6 px-6">
                  <nav className="flex flex-col gap-1 mt-8 pb-8">
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
                  </nav>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild>
              <a href="/contact">CONTACT US</a>
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;