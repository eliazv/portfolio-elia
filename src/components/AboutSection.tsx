"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div id="about" ref={elementRef}>
      <div className="space-y-8">
        {/* Header with accent line */}
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

        {/* Main content card */}
        <div
          className={`bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-8 mt-8 border border-accent/10 backdrop-blur-sm shadow-lg enhanced-card-hover transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-8">
            {/* Profile image (affiancata solo alla sezione Name and title su sm+) */}
            <div
              className={`relative transform transition-all duration-500 sm:col-span-1 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="relative mx-auto sm:mx-0">
                <img
                  src="/elia-persona.png"
                  alt="Elia Zavatta - Sviluppatore Full Stack"
                  className="w-40 h-52 object-cover rounded-xl shadow-lg border border-border"
                />
              </div>
            </div>

            {/* Name and title (affiancata all'immagine su sm+) */}
            <div
              className={`transform transition-all duration-500 sm:col-span-2 text-center sm:text-left ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "0.35s" }}
            >
              <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-bold mb-1">Elia Zavatta</h3>
                <p className="text-lg text-muted-foreground font-medium mb-1">
                  Sviluppatore Web & Mobile
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                  <span>📍</span>
                  <span>Cesena, Romagna</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                  <span>🎓</span>
                  <span>Ingegneria e Scienze Informatiche</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                  <span>💼</span>
                  <span>3+ anni di esperienza</span>
                </div>
              </div>
            </div>

            {/* Full-width content: dopo Name/Title, occupa tutta la larghezza */}
            <div
              className={`sm:col-span-3 transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              {/* Experience highlight */}
              {/* <div className="bg-primary/10 rounded-xl p-6 mb-4 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <span className="text-2xl font-bold text-primary">3+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Anni di esperienza
                    </p>
                    <p className="text-sm text-foreground/70">
                      nello sviluppo software
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TypeScript", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Key strengths - più chiaro e organizzato */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-base leading-relaxed">
                  Aiuto imprese locali, professionisti e startup della Romagna a
                  trasformare le loro idee in prodotti digitali concreti,
                  lavorando fianco a fianco dalla strategia allo sviluppo.
                </p>

                {/* Competenze principali */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">💻</span>
                      <h4 className="font-semibold">Full Stack Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Frontend e Backend con tecnologie moderne
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">📱</span>
                      <h4 className="font-semibold">Mobile & Responsive</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      App e siti ottimizzati per ogni dispositivo
                    </p>
                  </div>
                </div>

                {/* CTA semplice */}
                <div className="bg-muted/30 rounded-lg p-4 border border-border">
                  <p className="text-foreground text-center">
                    Trasformo le tue idee in <strong>soluzioni digitali</strong>{" "}
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
