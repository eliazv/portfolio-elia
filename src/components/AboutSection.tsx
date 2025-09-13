import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div id="about" ref={elementRef}>
      <div className="space-y-8">
        {/* Header with accent line */}
        <div className={`relative transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-text-focus-in" 
              style={{ animationDelay: isVisible ? '0.2s' : 'none' }}>
            Chi sono
          </h2>
          <div className={`w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${
            isVisible ? 'w-16' : 'w-0'
          }`} style={{ transitionDelay: '0.5s' }}></div>
        </div>

        {/* Main content card */}
        <div className={`bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-8 border border-accent/10 backdrop-blur-sm shadow-lg enhanced-card-hover transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`} style={{ transitionDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Profile image - più prominente */}
            <div className={`flex-shrink-0 relative group transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '0.6s' }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500 animate-pulse-glow"></div>
              <div className="relative">
                <img
                  src="/elia-persona.png"
                  alt="Elia Zavatta - Sviluppatore Full Stack"
                  className="relative w-40 h-52 object-cover rounded-2xl shadow-2xl border-3 border-white/30 animate-float-gentle backdrop-blur-sm"
                  style={{ animationDelay: '1s' }}
                />
                {/* Badge "Disponibile" */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  ✅ Disponibile
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`flex-1 text-center sm:text-left transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '0.8s' }}>
              {/* Name and title */}
              <div className="mb-6 space-y-2">
                <h3 className={`text-2xl font-bold mb-1 text-primary animate-reveal-text ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '1s' }}>
                  Elia Zavatta
                </h3>
                <p className={`text-lg text-foreground/90 font-semibold mb-1 animate-reveal-text ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '1.2s' }}>
                  Full Stack Developer
                </p>
                <div className={`flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/70 animate-fade-in-left ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '1.4s' }}>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Laureato in Ingegneria e Scienze Informatiche</span>
                </div>
                <div className={`flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/70 animate-fade-in-left ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '1.6s' }}>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>3+ Anni di esperienza</span>
                </div>
              </div>

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
              <div className={`space-y-4 transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '1.8s' }}>
                
                {/* Punti di forza principali */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20 enhanced-card-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary text-sm font-bold">💻</span>
                      </div>
                      <h4 className="font-semibold text-primary">Full Stack</h4>
                    </div>
                    <p className="text-sm text-foreground/80">Frontend e Backend con le tecnologie più moderne</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-4 border border-accent/20 enhanced-card-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-accent text-sm font-bold">📱</span>
                      </div>
                      <h4 className="font-semibold text-accent">Mobile First</h4>
                    </div>
                    <p className="text-sm text-foreground/80">App e siti responsive per tutti i dispositivi</p>
                  </div>
                </div>

                {/* Messaggio personale semplificato */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                  <p className="text-foreground/90 text-center">
                    🚀 Trasformo le tue <strong className="text-primary">idee</strong> in <strong className="text-accent">soluzioni digitali</strong> che funzionano davvero
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
