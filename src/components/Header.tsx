import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "WHAT WE DO", href: "/what-we-do" },
    { label: "DIRECTORS", href: "/directors" }
  ];

  const subsidiaries = [
    { name: "Digital Space Capital", href: "/subsidiaries" },
    { name: "DSC Asset Management", href: "/subsidiaries" },
    { name: "DSC MICROFINANCE BANK", href: "/subsidiaries" },
    { name: "NAINGATE INSURANCE BROKERS", href: "/subsidiaries" },
    { name: "EMISON REAL ESTATE", href: "/subsidiaries" },
    { name: "EASY PAY", href: "/subsidiaries" }
  ];

  return <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/digital-space-capital-logo.png" alt="Digital Space Capital" className="h-20 w-auto transition-transform hover:scale-105" />
          </div>

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
                    <ul className="grid w-[280px] gap-1 p-3 bg-background/98 backdrop-blur-md border border-border/50 shadow-lg rounded-lg">
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
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300 px-6">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;