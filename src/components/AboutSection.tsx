const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Chi sono</h2>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src="/elia-persona.png" 
                alt="Elia Zavatta" 
                className="w-32 h-32 rounded-full object-cover border-4 border-accent/20"
              />
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                Sono <span className="font-bold text-primary">Elia Zavatta</span>, 
                laureato in <span className="font-semibold">Scienze ed Ingegneria Informatica</span> a Cesena. 
                Sono un web developer, una persona curiosa che ama capire come funzionano le cose.
              </p>
              
              <p>
                Lavoro nel settore dello sviluppo software da <span className="font-bold">più di 3 anni</span>, 
                accumulando esperienza in progetti diversi e tecnologie all'avanguardia.
              </p>
              
              <p>
                Quello che mi motiva di più è <span className="font-semibold">metterci le mani dentro</span>: 
                nuovi progetti, tecnologie che non conosco, problemi complessi da risolvere. 
                Mi piace analizzare come migliorare i processi.
              </p>
              
              <p>
                Quando non programmo, gioco a calcio e gestisco altri miei progetti come 
                <span className="font-semibold"> e-commerce e property management</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
