'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, User, FolderOpen, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "Progetti", href: "/#projects", icon: FolderOpen },
    { name: "Chi sono", href: "/#about", icon: User },
    { name: "Contatti", href: "/#contact", icon: Mail },
  ];

  // Gestione click: se non siamo sulla home, naviga lì e poi scrolla
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("/#", "");

    if (pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300">
      <div className="container mx-auto max-w-4xl p-0">
        <div className="bg-background/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg flex justify-between items-center enhanced-card-hover">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold font-heading text-gradient magnetic-element"
          >
            <span className="hidden md:inline">Elia Zavatta</span>
            <span className="md:hidden">EZ</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300 px-3 py-2 rounded-full hover:bg-primary/10 magnetic-element"
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu */}
          <nav className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 magnetic-element"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
