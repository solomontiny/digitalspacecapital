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

  return <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-[16px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/digital-space-capital-logo.png" alt="Digital Space Capital" className="h-24 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
                {item.label}
              </a>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    THE GROUP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-2 bg-background border border-border">
                      {subsidiaries.map((subsidiary) => (
                        <li key={subsidiary.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={subsidiary.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              LOGIN IN
            </Button>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
              SIGN UP
            </Button>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;