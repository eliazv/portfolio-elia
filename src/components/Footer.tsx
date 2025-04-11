
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-border">
          <a href="#" className="text-2xl font-bold font-heading text-gradient mb-4 md:mb-0">Portfolio.dev</a>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:info@example.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Portfolio.dev. Tutti i diritti riservati.
          </p>
          
          <div className="flex space-x-8">
            <a href="#home" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Progetti
            </a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Chi sono
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Contatti
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
        aria-label="Torna su"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
