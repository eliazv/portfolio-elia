"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Iridescence from "./Iridescence";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import InteractiveParticles from "./InteractiveParticles";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  // Gestione scroll smooth per i pulsanti
  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (id === "projects") {
        // trigger ProjectsSection to expand the list
        window.dispatchEvent(new CustomEvent("expandProjects"));
      }
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Structured data for SEO (JSON-LD)
  const seoJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elia Zavatta",
    url: "https://eliazavatta.it",
    jobTitle: "Programmatore Freelance",
    description:
      "Programmatore freelance a Cesena specializzato in sviluppo web e mobile. Offro servizi di sviluppo con React, Next.js, Flutter, NestJS, Node.js e TypeScript per aziende e professionisti in Romagna e da remoto.",
    sameAs: ["https://www.linkedin.com/in/eliazavatta/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cesena",
      addressRegion: "Emilia-Romagna",
      addressCountry: "IT",
    },
    email: "info@eliazavatta.it",
    areaServed: ["Cesena", "Forlì", "Rimini", "Ravenna", "Romagna", "Italia"],
  };

  return (
    <>
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
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center min-h-[60vh]">
          <div className="flex flex-col md:flex-row items-center md:items-start lg:gap-14 w-full md:max-w-6xl mx-auto">
            {/* Portrait with pop + float animation (wrapped to include desktop social links under image) */}
            <div className="flex flex-col items-center md:items-start shrink-0">
              <div className="relative w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/15 via-primary/15 to-accent/20 blur-xl -z-10" />
                <div className="pop-float relative w-full h-full rounded-[28px] overflow-hidden p-2">
                  <Image
                    src="/images/icons/EZlogoperosna.webp"
                    alt="Elia Zavatta ritratto"
                    fill
                    priority
                    sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 18rem"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Social links for desktop: shown under the image, in row */}
              <div
                className={`hidden md:flex items-center self-center gap-6  ${
                  isLoaded ? "animate-slide-up-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "3s" }}
              >
                <a
                  href="mailto:info@eliazavatta.it"
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

            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              {/* <div className="inline-block bg-secondary/80 rounded-full px-6 py-3 text-lg font-semibold mb-8 animate-fade-in shadow-lg backdrop-blur-md">
            <span className="text-primary font-bold tracking-widest uppercase">
              Full Stack Developer
            </span>
          </div> */}

              {/* Nome con effetto reveal avanzato */}
              <div className="text-reveal-container ">
                {/* <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/icons/logo.webp"
                  alt="Logo Elia Zavatta"
                  width={96}
                  height={96}
                  priority
                />
              </div> */}
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold animate-fade-in"
                  style={{
                    animationDelay: "0.1s",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  <span className="text-gradient rounded-heading">
                    Elia Zavatta
                  </span>
                </h1>
              </div>

              <h2 className="text-center md:text-left text-xl md:text-2xl font-semibold text-gradient rounded-heading leading-relaxed tracking-tight drop-shadow-sm mb-4">
                Sviluppatore web e mobile freelance
              </h2>

              {/* Sottotitolo con typewriter effect */}
              <div className="mb-6 max-w-3xl">
                {showTypewriter ? (
                  <p className="text-2xl md:text-3xl text-primary font-medium drop-shadow-lg animate-typewriter break-words text-balance pixel-robot two-line-clamp">
                    Creo soluzioni digitali
                    <br className="block sm:hidden" /> che fanno la differenza
                  </p>
                ) : (
                  <p className="text-2xl md:text-3xl text-primary font-medium drop-shadow-lg opacity-0 break-words text-balance pixel-robot two-line-clamp">
                    Creo soluzioni digitali
                    <br className="block sm:hidden" /> che fanno la differenza
                  </p>
                )}
                {/* Località (mobile) */}
                <div className="mt-6 flex items-center justify-center md:justify-start md:hidden">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-foreground/90 text-sm md:text-base shadow-sm backdrop-blur border border-white/10">
                    <span className="text-primary text-lg">📍</span>
                    Cesena, Emilia-Romagna
                  </span>
                </div>
              </div>

              {/* Call to Action Buttons con animazioni */}
              <div
                className={`flex flex-col sm:flex-row items-center gap-4 mb-12 md:flex-wrap ${
                  isLoaded ? "animate-slide-up-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "2.5s" }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="group magnetic-element enhanced-card-hover bg-gradient-to-r from-primary to-accent text-white shadow-primary/40 shadow-lg border-0"
                  >
                    <a
                      href="#projects"
                      onClick={(e) => handleScrollClick(e, "projects")}
                      className="inline-flex items-center font-semibold"
                    >
                      Scopri i miei progetti
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="magnetic-element enhanced-card-hover border-primary/40 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollClick(e, "contact")}
                      className="inline-flex items-center font-semibold"
                    >
                      Contattami
                    </a>
                  </Button>
                </div>

                {/* Località (desktop) - mostrata dopo i pulsanti; andrà sotto se manca spazio */}
                <span className="hidden md:inline-flex w-full md:w-auto justify-center md:justify-start items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-foreground/90 text-sm md:text-base shadow-sm backdrop-blur border border-white/10 md:ml-2">
                  <span className="text-primary text-lg">📍</span>
                  Cesena, Emilia-Romagna
                </span>
              </div>
              {/* Social links con animazioni fluttuanti */}
              <div
                className={`flex items-center gap-6 md:hidden ${
                  isLoaded ? "animate-slide-up-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: "3s" }}
              >
                <a
                  href="mailto:info@eliazavatta.it"
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
        </div>
        {/* JSON-LD structured data per SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJson) }}
        />
        <style jsx>{`
          .pop-float {
            animation:
              popIn 0.7s ease-out forwards,
              floaty 6s ease-in-out infinite 0.7s;
            transform-origin: center;
          }

          @keyframes popIn {
            0% {
              transform: scale(0.9) translateY(12px);
              opacity: 0;
            }
            60% {
              transform: scale(1.04) translateY(-4px);
              opacity: 1;
            }
            100% {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
          }

          @keyframes floaty {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          /* Limit subtitle to 2 lines on desktop */
          .two-line-clamp {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            /* default: no clamp on mobile */
          }

          @media (min-width: 768px) {
            .two-line-clamp {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              white-space: normal;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;
