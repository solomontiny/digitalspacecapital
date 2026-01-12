import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import newLogo from "@/assets/dsc-logo-new.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={newLogo} alt="Digital Space Capital" className="h-14 md:h-16 w-auto transition-transform hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {/* Main Nav Items */}
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      to={item.href}
                      className="inline-flex h-10 items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Directors Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium px-3">
                    DIRECTORS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-background border rounded-lg shadow-lg z-50">
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
                  <NavigationMenuTrigger className="text-sm font-medium px-3">
                    TESTIMONIALS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-background border rounded-lg shadow-lg z-50">
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
                  <NavigationMenuTrigger className="text-sm font-medium px-3">
                    THE GROUP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-2 bg-background border rounded-lg shadow-lg z-50">
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

                {/* Contact Us */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    CONTACT US
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Directors */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium mb-2">DIRECTORS</p>
                <div className="ml-3 flex flex-col gap-1">
                  {directorsSubmenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium mb-2">TESTIMONIALS</p>
                <div className="ml-3 flex flex-col gap-1">
                  {testimonialsSubmenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* The Group */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium mb-2">THE GROUP</p>
                <div className="ml-3 flex flex-col gap-1">
                  {subsidiaries.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                CONTACT US
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;