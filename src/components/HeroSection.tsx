'use client';

import React, { useEffect, useRef, useState } from "react";
import Iridescence from "./Iridescence";
import Silk from "./Silk";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import GradientText from "./GradientText";
import ASCIIText from "./ASCIIText";
import InteractiveParticles from "./InteractiveParticles";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-10 md:pt-40 overflow-hidden"
      ref={heroRef}
    >
      {/* Silk background */}
      {/* <div className="absolute inset-0 -z-20 pointer-events-none">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div> */}
      {/* Iridescence background */}
      <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 -z-5">
        <InteractiveParticles
          particleCount={30}
          mouseRadius={120}
          particleSize={3}
          speed={0.3}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* <div className="inline-block bg-secondary/80 rounded-full px-6 py-3 text-lg font-semibold mb-8 animate-fade-in shadow-lg backdrop-blur-md">
            <span className="text-primary font-bold tracking-widest uppercase">
              Full Stack Developer
            </span>
          </div> */}

          {/* Nome con effetto reveal avanzato */}
          <div className="text-reveal-container mb-8">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading animate-fade-in  text-white/95"
              style={{
                animationDelay: "0.1s",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              <span className="text-gradient">Elia Zavatta</span>
            </h1>
          </div>

          {/* Sottotitolo con typewriter effect */}
          <div className="mb-8 max-w-3xl">
            {showTypewriter ? (
              <p className="text-2xl md:text-3xl text-primary font-medium drop-shadow-lg animate-typewriter break-words text-balance">
                Creo soluzioni digitali
                <br className="block sm:hidden" /> che fanno la differenza
              </p>
            ) : (
              <p className="text-2xl md:text-3xl text-primary font-medium drop-shadow-lg opacity-0 break-words text-balance">
                Creo soluzioni digitali
                <br className="block sm:hidden" /> che fanno la differenza
              </p>
            )}
            {/* Sottotitolo SEO-visible con tecnologie e località */}
            <p className="text-base md:text-lg text-foreground/70 mt-4 font-normal">
              Sviluppatore Web e Mobile Freelance • Cesena, Romagna • 
              React, Flutter, NestJS • Disponibile in remoto in tutta Italia
            </p>
          </div>

          {/* Call to Action Buttons con animazioni */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 ${
              isLoaded ? "animate-slide-up-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: "2.5s" }}
          >
            <Button
              size="lg"
              className="group magnetic-element enhanced-card-hover animate-pulse-glow"
            >
              <a href="#projects" className="inline-flex items-center">
                Scopri i miei progetti
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="magnetic-element enhanced-card-hover animate-morphing-border"
              asChild
            >
              <a href="#about" className="inline-flex items-center">
                Chi sono
              </a>
            </Button>
          </div>
          {/* <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="group">
              <a href="#projects" className="inline-flex items-center">
                Scopri i miei progetti
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about" className="inline-flex items-center">
                Contattami
              </a>
            </Button>
          </div> */}
          {/* Social links con animazioni fluttuanti */}
          <div
            className={`flex items-center gap-6 ${
              isLoaded ? "animate-slide-up-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: "3s" }}
          >
            <a
              href="mailto:zavattaelia@gmail.com"
              className="text-foreground/70 hover:text-primary magnetic-element animate-float-gentle p-3 rounded-full hover:bg-primary/10 backdrop-blur-sm transition-all"
              style={{ animationDelay: "0.1s" }}
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eliazavatta/"
              className="text-foreground/70 hover:text-primary magnetic-element animate-float-wave p-3 rounded-full hover:bg-primary/10 backdrop-blur-sm transition-all"
              style={{ animationDelay: "0.3s" }}
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://wa.me/393938932793"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary magnetic-element animate-float-gentle p-3 rounded-full hover:bg-primary/10 backdrop-blur-sm transition-all"
              style={{ animationDelay: "0.5s" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.193 1.6 6.033L0 24l6.188-1.572A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.803 17.197c-.243.683-1.42 1.34-2.01 1.42-.514.073-1.18.104-3.96-1.26-3.34-1.47-5.51-5.08-5.68-5.32-.17-.24-1.35-1.8-1.35-3.44 0-1.64.85-2.45 1.15-2.79.3-.34.65-.43.86-.43.22 0 .43.002.62.01.2.01.47-.076.74.57.3.68 1.02 2.36 1.11 2.54.09.17.15.38.03.61-.13.26-.2.42-.4.65-.2.23-.42.51-.6.68-.2.17-.4.36-.17.71.23.34 1.02 1.68 2.2 2.72 1.52 1.34 2.8 1.75 3.14 1.89.34.13.54.11.74-.07.2-.17.85-.98 1.08-1.32.23-.34.46-.28.77-.17.3.1 1.9.89 2.23 1.05.34.17.57.26.65.4.08.14.08.72-.16 1.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
