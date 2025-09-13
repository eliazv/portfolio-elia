import React from "react";
import { Button } from "@/components/ui/button";
import { Home, User, FolderOpen, Mail, MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    // { name: "Servizi", href: "#services" },
    { name: "Progetti", href: "#projects", icon: FolderOpen },
    { name: "Chi sono", href: "#about", icon: User },
    { name: "Contatti", href: "#contact", icon: Mail },
  ];

  // Funzione per gestire click sulle voci del menu
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    if (location.pathname.startsWith("/progetti/")) {
      e.preventDefault();
      navigate(`/${href}`.replace("/#", "/#")); // va in home
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
    // altrimenti comportamento normale (ancora)
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300">
      <div className="container mx-auto max-w-4xl p-0">
        <div className="bg-background/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg flex justify-between items-center enhanced-card-hover animate-float-gentle">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold font-heading text-gradient magnetic-element"
          >
            <span className="hidden md:inline">Elia Zavatta</span>
            <span className="md:hidden">EZ</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300 px-3 py-2 rounded-full hover:bg-primary/10 magnetic-element hover-lift animate-float-gentle"
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                >
                  <IconComponent size={16} />
                  <span>{item.name}</span>
                </a>
              );
            })}
            {/* <Button asChild className="rounded-full">
              <a
                href="https://wa.me/393938932793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle size={16} />
                <span>Parliamo</span>
              </a>
            </Button> */}
          </nav>

          {/* Mobile Menu */}
          <nav className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 magnetic-element animate-pulse-glow"
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
            {/* <Button asChild size="sm" className="rounded-full p-2">
              <a
                href="https://wa.me/393938932793"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
              </a>
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
