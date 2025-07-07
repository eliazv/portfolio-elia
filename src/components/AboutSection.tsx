import { Calendar, Lightbulb, Volleyball, BookCopy } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ProfileCard from "./ProfileCard";

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
              <SpotlightCard
                spotlightColor="rgba(0,229,255,0.18)"
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <BookCopy className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Background</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Sono{" "}
                  <span className="font-bold text-primary">Elia Zavatta</span>,
                  laureato in
                  <span className="font-semibold text-accent">
                    {" "}
                    Scienze ed Ingegneria Informatica
                  </span>{" "}
                  a Cesena. Sono un web developer, una persona curiosa che ama
                  capire come funzionano le cose.
                </p>
              </SpotlightCard>
              <SpotlightCard
                spotlightColor="rgba(0,229,255,0.18)"
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-bold text-accent">Esperienza</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Lavoro nel settore dello sviluppo software da{" "}
                  <span className="font-bold text-accent">più di 3 anni</span>,
                  accumulando esperienza in progetti diversi e tecnologie
                  all'avanguardia.
                </p>
              </SpotlightCard>
            </div>
            {/* Profile Card - Center */}
            <div className="lg:order-2 flex justify-center">
              <ProfileCard
                name="Elia Zavatta"
                title="Web Developer"
                handle="eliazavatta"
                status="Disponibile"
                contactText="Contattami"
                avatarUrl="/elia-persona.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
            {/* Text Content - Right */}
            <div className="lg:order-3 space-y-6">
              <SpotlightCard
                spotlightColor="rgba(0,229,255,0.18)"
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Filosofia</h3>
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
              </SpotlightCard>
              <SpotlightCard
                spotlightColor="rgba(0,229,255,0.18)"
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <Volleyball className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-accent">
                    Oltre il codice
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Quando non programmo, gioco a calcio e gestisco altri miei
                  progetti come{" "}
                  <span className="font-semibold text-accent">
                    e-commerce e property management
                  </span>
                  .
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
