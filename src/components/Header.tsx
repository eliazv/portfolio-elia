import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Chi sono", href: "#about" },
    // { name: "Servizi", href: "#services" },
    { name: "Progetti", href: "#projects" },
    { name: "Contatti", href: "#contact" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-heading text-gradient">
          Elia Zavatta
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
          <Button asChild>
            <a
              href="https://wa.me/393938932793"
              target="_blank"
              rel="noopener noreferrer"
            >
              Parliamo
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg p-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors duration-200"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-2" asChild>
              <a
                href="https://wa.me/393938932793"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parliamo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
