const AboutSection = () => {
  return (
    <div id="about">
      <div className="space-y-6">
        {/* Header */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold ">Chi sono</h2>
        </div>

        {/* Immagine e info base in orizzontale */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-6">
          <div className="flex-shrink-0">
            <img
              src="/elia-persona.png"
              alt="Elia Zavatta"
              className="w-36 h-48 object-cover rounded-lg shadow-lg border-2 border-accent/20"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2 text-primary">
              Elia Zavatta
            </h3>
            <p className="text-foreground/80 font-medium mb-2">
              Full Stack Developer
            </p>
            <p className="text-sm text-foreground/60 mb-4">
              Laureato in Ingegneria Informatica
            </p>

            <div className="bg-card/30 rounded-lg p-4 border border-accent/10">
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                Con <span className="font-bold">oltre 3 anni</span> di
                esperienza nello sviluppo software, mi sono specializzato in
                tecnologie moderne come React, TypeScript e Node.js.
                {/* La mia
                formazione in{" "}
                <span className="font-semibold">Ingegneria Informatica</span> mi
                ha dato solide basi teoriche che applico ogni giorno nella
                pratica. */}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Quello che mi distingue è l'approccio pratico: amo{" "}
                <span className="font-semibold">metterci le mani dentro</span>,
                esplorare nuove tecnologie e trasformare idee complesse in
                soluzioni eleganti e funzionali.
                {/* Quando non programmo, gestisco progetti di e-commerce e property management, 
                sempre con l'obiettivo di ottimizzare processi e migliorare l'esperienza utente. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
