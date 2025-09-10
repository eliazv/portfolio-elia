const AboutSection = () => {
  return (
    <div id="about">
      <div className="space-y-8">
        {/* Header with accent line */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Chi sono</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Main content card */}
        <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-8 border border-accent/10 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Profile image */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="/elia-persona.png"
                alt="Elia Zavatta"
                className="relative w-36 h-48 object-cover rounded-lg shadow-xl border-2 border-white/20"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              {/* Name and title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1 text-primary">
                  Elia Zavatta
                </h3>
                <p className="text-lg text-foreground/90 font-semibold mb-1">
                  Full Stack Developer
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/70">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Laureato in Ingegneria e Scienze Informatiche</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/70">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
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

              {/* Key strength */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20">
                <p className="text-foreground/90 leading-relaxed">
                  Quello che mi distingue è l'
                  <span className="font-bold text-primary">
                    approccio pratico
                  </span>
                  : amo metterci le mani dentro, esplorare nuove tecnologie e
                  trasformare
                  <span className="font-semibold text-accent">
                    {" "}
                    idee complesse
                  </span>{" "}
                  in
                  <span className="font-semibold text-accent">
                    {" "}
                    soluzioni eleganti
                  </span>{" "}
                  e funzionali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
