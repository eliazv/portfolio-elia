import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      // Solo i cerchi di sfondo, NON i loghi
      const circleElements = heroRef.current.querySelectorAll(
        ".floating-circle.bg-primary\\/10, .floating-circle.bg-accent\\/10"
      );
      circleElements.forEach((circle, index) => {
        const factor = (index + 1) * 10;
        (circle as HTMLElement).style.transform = `translate(${x * factor}px, ${
          y * factor
        }px)`;
      });
    };

    // Sistema di rimbalzo per i loghi
    const setupBouncingLogos = () => {
      if (!heroRef.current) return;

      const logos = logosRef.current.filter(Boolean);
      if (logos.length === 0) return;

      const heroRect = heroRef.current.getBoundingClientRect();

      // Stato di ogni logo
      const logoStates = logos.map((logo, index) => ({
        element: logo,
        x: Math.random() * (heroRect.width - 80),
        y: Math.random() * (heroRect.height - 80),
        vx: (Math.random() - 0.5) * 2, // velocità x (-1 a 1)
        vy: (Math.random() - 0.5) * 2, // velocità y (-1 a 1)
        size: logo.offsetWidth,
      }));

      const animate = () => {
        if (!heroRef.current) return;

        const currentHeroRect = heroRef.current.getBoundingClientRect();

        logoStates.forEach((state) => {
          // Aggiorna posizione
          state.x += state.vx;
          state.y += state.vy;

          // Controllo rimbalzo sui bordi
          if (state.x <= 0 || state.x >= currentHeroRect.width - state.size) {
            state.vx = -state.vx;
            state.x = Math.max(
              0,
              Math.min(state.x, currentHeroRect.width - state.size)
            );
          }

          if (state.y <= 0 || state.y >= currentHeroRect.height - state.size) {
            state.vy = -state.vy;
            state.y = Math.max(
              0,
              Math.min(state.y, currentHeroRect.height - state.size)
            );
          }

          // Applica la nuova posizione
          state.element.style.transform = `translate(${state.x}px, ${state.y}px)`;
        });

        requestAnimationFrame(animate);
      };

      animate();
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Avvia l'animazione di rimbalzo dopo un breve delay
    const timer = setTimeout(setupBouncingLogos, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-10 md:pt-40 overflow-hidden"
      ref={heroRef}
    >
      <div className="hero-gradient absolute inset-0 -z-10"></div>{" "}
      {/* Floating circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 floating-circle animate-float"></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-accent/10 floating-circle animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-32 h-32 rounded-full bg-primary/10 floating-circle animate-float"
        style={{ animationDelay: "2s" }}
      ></div>{" "}
      {/* Floating project logos - rimbalzo autonomo */}
      <div
        ref={(el) => el && (logosRef.current[0] = el)}
        className="absolute w-16 h-16 opacity-15 hover:opacity-50 transition-opacity duration-500 bouncing-logo"
        style={{ zIndex: 1 }}
      >
        <img
          src="/marafone.jpg"
          alt="Marafone logo"
          className="w-full h-full object-contain rounded-lg shadow-lg bg-white/70 p-1.5"
        />
      </div>
      <div
        ref={(el) => el && (logosRef.current[1] = el)}
        className="absolute w-14 h-14 opacity-15 hover:opacity-50 transition-opacity duration-500 bouncing-logo"
        style={{ zIndex: 1 }}
      >
        <img
          src="/globo.png"
          alt="Globo Ricambi logo"
          className="w-full h-full object-contain rounded-lg shadow-lg bg-white/70 p-1.5"
        />
      </div>
      <div
        ref={(el) => el && (logosRef.current[2] = el)}
        className="absolute w-12 h-12 opacity-10 hover:opacity-40 transition-opacity duration-500 bouncing-logo"
        style={{ zIndex: 1 }}
      >
        <img
          src="/marafone.jpg"
          alt="Marafone logo"
          className="w-full h-full object-contain rounded-lg shadow-lg bg-white/60 p-1"
        />
      </div>{" "}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-block bg-secondary rounded-full px-4 py-2 text-sm font-medium mb-6 animate-fade-in">
            <span className="text-foreground/70">Full Stack Developer</span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Elia <span className="text-gradient">Zavatta</span>
          </h1>{" "}
          <p
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Studio i processi aziendali e creo soluzioni informatiche che fanno
            davvero la differenza.
          </p>
          <div
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
          </div>
          <div
            className="flex items-center gap-6 mt-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="mailto:zavattaelia@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eliazavatta/"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://wa.me/393938932793"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
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
