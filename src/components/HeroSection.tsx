
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, ExternalLink, Github } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const circleElements = heroRef.current.querySelectorAll('.floating-circle');
      circleElements.forEach((circle, index) => {
        const factor = (index + 1) * 10;
        (circle as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" ref={heroRef}>
      <div className="hero-gradient absolute inset-0 -z-10"></div>
      
      {/* Floating circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 floating-circle animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-accent/10 floating-circle animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 right-1/3 w-32 h-32 rounded-full bg-primary/10 floating-circle animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-block bg-secondary rounded-full px-4 py-2 text-sm font-medium mb-6 animate-fade-in">
            <span className="text-foreground/70">Sviluppatore full-stack</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Trasformo <span className="text-gradient">idee</span> in <span className="text-gradient">esperienze digitali</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            Sono uno sviluppatore specializzato nella creazione di applicazioni web e mobili di alta qualità, con un focus sull'esperienza utente e le soluzioni innovative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="group">
              Scopri i miei progetti
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact" className="inline-flex items-center">Contattami</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <ExternalLink className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Code className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full mt-1.5"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
