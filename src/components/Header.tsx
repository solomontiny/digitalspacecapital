import { Button } from "@/components/ui/button";
const Header = () => {
  const navItems = [{
    label: "HOME",
    href: "/"
  }, {
    label: "ABOUT US",
    href: "/about"
  }, {
    label: "WHAT WE DO",
    href: "/what-we-do"
  }, {
    label: "DIRECTORS",
    href: "/directors"
  }, {
    label: "OUR SUBSIDIARIES",
    href: "/subsidiaries"
  }];
  return <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-[16px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/digital-space-capital-logo.png" alt="Digital Space Capital" className="h-24 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
                {item.label}
              </a>)}
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