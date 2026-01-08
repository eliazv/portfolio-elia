"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technologies = [
  { 
    name: "React", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png" 
  },
  { 
    name: "Next.js", 
    logo: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1762498501254" 
  },
  { 
    name: "Flutter", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flutter_logo.svg" 
  },
  { 
    name: "NestJS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/250px-NestJS.svg.png" 
  },
  { 
    name: "Node.js", 
    logo: "https://nodejs.org/static/logos/jsIconGreen.svg" 
  },
  { 
    name: "TypeScript", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png" 
  },
];

const stats = [
  { value: "3+", label: "Anni di esperienza" },
  { value: "20+", label: "Progetti completati" },
  { value: "100%", label: "Clienti soddisfatti" },
];

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div id="about" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className="space-y-8">
        {/* Header con design moderno */}
        <div
          className={`relative transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block animate-slide-in-top">
            <span className="relative z-10">Chi sono</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
          </h2>
        </div>

        {/* Main card con glassmorphism */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile section */}
              <div
                className={`flex flex-col items-center md:items-start md:w-1/3 transform transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                {/* Avatar con glow effect */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src="/images/profile/elia-persona.png"
                    alt="Elia Zavatta - Sviluppatore Full Stack"
                    className="relative w-36 h-48 object-cover rounded-2xl border-2 border-white/20 shadow-xl"
                  />
                  {/* Status badge */}
                  {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Disponibile
                  </div> */}
                </div>

                {/* Name and title */}
                <div className="mt-6 text-center md:text-left">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Elia Zavatta
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    Sviluppatore Web & Mobile
                  </p>
                </div>

                {/* Quick info pills */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted/50 border border-border hover:border-primary/50 transition-colors">
                    📍 Cesena, Romagna
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted/50 border border-border hover:border-primary/50 transition-colors">
                    🎓 Ing. Informatica
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted/50 border border-border hover:border-primary/50 transition-colors">
                    🌍 Remoto Italia
                  </span>
                </div>
              </div>

              {/* Content section */}
              <div
                className={`flex-1 transform transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                {/* Bio */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Aiuto{" "}
                  <strong className="text-foreground">imprese locali</strong>,{" "}
                  <strong className="text-foreground">professionisti</strong> e{" "}
                  <strong className="text-foreground">startup</strong> della
                  Romagna a trasformare le loro idee in prodotti digitali
                  concreti, lavorando fianco a fianco dalla strategia allo
                  sviluppo.
                </p>

                {/* Stats row */}
                {/* <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`text-center p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border hover:border-primary/30 transition-all duration-300 transform ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-90"
                      }`}
                      style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div> */}

                {/* Technologies */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    Tecnologie principali:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <div
                        key={tech.name}
                        className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-md border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transform ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${0.6 + index * 0.05}s` }}
                      >
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10">
                  <p className="text-center text-foreground">
                    ✨ Trasformo le tue idee in{" "}
                    <strong className="text-primary">soluzioni digitali</strong>{" "}
                    che funzionano
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
