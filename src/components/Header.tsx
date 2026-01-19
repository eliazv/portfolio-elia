"use client";

import React, { useEffect, useRef, useState } from "react";
import { Home, User, FolderOpen, Mail, Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "Progetti", href: "/#projects", icon: FolderOpen },
    { name: "Strumenti", href: "/strumenti", icon: Wrench },
    { name: "Chi sono", href: "/#about", icon: User },
    { name: "Contatti", href: "/#contact", icon: Mail },
  ];

  // Gestione click: se non siamo sulla home, naviga lì e poi scrolla
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    // Se è un link esterno (come /strumenti), non fare nulla e lascia che Link gestisca
    if (!href.startsWith("/#")) {
      return;
    }

    e.preventDefault();
    const id = href.replace("/#", "");

    if (pathname !== "/") {
      window.location.href = "/";
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300">
      <div className="container mx-auto max-w-4xl p-0">
        <div
          ref={containerRef}
          className="bg-background/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg flex justify-between items-center enhanced-card-hover"
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-xl md:text-2xl font-bold font-heading text-gradient magnetic-element"
            aria-label="Torna alla home"
          >
            <Image
              src="/images/icons/logo.png"
              alt="Logo Elia Zavatta"
              width={40}
              height={40}
              priority
            />
            {/* <span>
              {nameVariant === "full"
                ? "Elia Zavatta"
                : nameVariant === "short"
                  ? "Elia Z"
                  : "EZ"}
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isExternalLink = !item.href.startsWith("/#");

              if (isExternalLink) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300 px-3 py-2 rounded-full hover:bg-primary/10 magnetic-element"
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              }

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
              const isExternalLink = !item.href.startsWith("/#");

              if (isExternalLink) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 magnetic-element"
                  >
                    <Icon size={18} />
                  </Link>
                );
              }

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
