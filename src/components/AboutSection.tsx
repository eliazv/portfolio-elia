import { Code, Calendar, Lightbulb, Volleyball, BookCopy } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-background to-secondary/20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block">
              <span className="relative z-10">Chi sono</span>
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              La mia storia, le mie passioni e quello che mi spinge a creare
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Text Content - Left */}
            <div className="lg:order-1 space-y-6">
              {/* Background Card */}
              <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      {/* <span className="text-lg">🎓</span> */}
                      <BookCopy className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Background
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Sono{" "}
                    <span className="font-bold text-primary">Elia Zavatta</span>
                    , laureato in
                    <span className="font-semibold text-accent">
                      {" "}
                      Scienze ed Ingegneria Informatica
                    </span>{" "}
                    a Cesena. Sono un web developer, una persona curiosa che ama
                    capire come funzionano le cose.
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-border/30 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-accent">
                      Esperienza
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Lavoro nel settore dello sviluppo software da{" "}
                    <span className="font-bold text-accent">più di 3 anni</span>
                    , accumulando esperienza in progetti diversi e tecnologie
                    all'avanguardia.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Image - Center */}
            <div className="lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 p-2 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                    <div className="relative">
                      <img
                        src="/EZlogo.png"
                        alt="EZ Logo"
                        className="w-40 h-40 object-contain"
                      />
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-100">
                  <Code className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Text Content - Right */}
            <div className="lg:order-3 space-y-6">
              {/* Philosophy Card */}
              <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Filosofia
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Quello che mi motiva di più è{" "}
                    <span className="font-semibold text-primary">
                      metterci le mani dentro
                    </span>
                    : nuovi progetti, tecnologie che non conosco, problemi
                    complessi da risolvere. Mi piace{" "}
                    <span className="font-semibold text-accent">
                      analizzare come migliorare i processi
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Interests Card */}
              <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-border/30 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                      {/* <span className="text-lg">⚽</span> */}
                      <Volleyball className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-accent">
                      Oltre il codice
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Quando non programmo, gioco a calcio e gestisco altri miei
                    progetti come
                    <span className="font-semibold text-accent">
                      {" "}
                      e-commerce e property management
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
