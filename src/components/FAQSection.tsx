"use client";

import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    id: 1,
    emoji: "👤",
    question: "Chi sei e dove lavori?",
    answer: (
      <>
        Sono <strong className="text-foreground">Elia Zavatta</strong>,{" "}
        <strong className="text-foreground">programmatore freelance</strong> con
        sede a <strong className="text-foreground">Cesena</strong>. Lavoro con
        clienti in tutta la <strong className="text-foreground">Romagna</strong>{" "}
        e sono disponibile per progetti da{" "}
        <strong className="text-foreground">remoto in tutta Italia</strong>.
      </>
    ),
  },
  {
    id: 2,
    emoji: "🛠️",
    question: "Quali servizi offri?",
    answer: (
      <>
        Sviluppo <strong className="text-foreground">siti web</strong>,{" "}
        <strong className="text-foreground">e-commerce</strong>,{" "}
        <strong className="text-foreground">app mobile</strong> per iOS e
        Android, e offro{" "}
        <strong className="text-foreground">consulenza IT</strong> per startup e
        PMI.
      </>
    ),
  },
  {
    id: 3,
    emoji: "⚡",
    question: "Quali tecnologie utilizzi?",
    answer: (
      <>
        <strong className="text-foreground">React.js</strong>,{" "}
        <strong className="text-foreground">Next.js</strong>,{" "}
        <strong className="text-foreground">Flutter</strong> per mobile,{" "}
        <strong className="text-foreground">NestJS</strong> per backend, e
        database <strong className="text-foreground">SQL</strong> (PostgreSQL,
        MySQL).
      </>
    ),
  },
  {
    id: 4,
    emoji: "🏢",
    question: "Lavori con piccole imprese?",
    answer: (
      <>
        Sì! Lavoro con <strong className="text-foreground">PMI</strong>,{" "}
        <strong className="text-foreground">professionisti</strong> e{" "}
        <strong className="text-foreground">startup</strong> che cercano
        soluzioni digitali su misura con preventivi personalizzati.
      </>
    ),
  },
  {
    id: 5,
    emoji: "⏱️",
    question: "Quanto tempo serve?",
    answer: (
      <>
        <strong className="text-foreground">2-4 settimane</strong> per siti web,{" "}
        <strong className="text-foreground">4-8 settimane</strong> per
        e-commerce o app mobile. Fornisco sempre una timeline dettagliata.
      </>
    ),
  },
  {
    id: 6,
    emoji: "🌍",
    question: "Lavori da remoto?",
    answer: (
      <>
        Sì, sono disponibile per{" "}
        <strong className="text-foreground">collaborazioni remote</strong> con
        aziende in <strong className="text-foreground">tutta Italia</strong>.
        Uso strumenti moderni per comunicazione e gestione progetti.
      </>
    ),
  },
  {
    id: 7,
    emoji: "📧",
    question: "Come posso contattarti?",
    answer: (
      <>
        Scrivi a <strong className="text-primary">info@eliazavatta.it</strong>.
        Rispondo entro <strong className="text-foreground">24 ore</strong> con
        un preventivo gratuito e senza impegno.
      </>
    ),
    highlight: true,
  },
];

const FAQSection = () => {
  const { containerRef, visibleItems } = useStaggeredAnimation(
    faqItems.length,
    100,
  );

  return (
    <section
      aria-labelledby="faq-title"
      className="py-4 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block animate-slide-in-top"
            id="faq-title"
          >
            <span className="relative z-10">Domande Frequenti</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {faqItems.map((faq, index) => (
            <div
              key={faq.id}
              className={`${
                faq.highlight ? "md:col-span-2" : ""
              } group p-5 rounded-3xl bg-gradient-to-br enhanced-card-hover ${
                faq.highlight
                  ? "from-primary/10 via-accent/10 to-primary/10 border-primary/20 hover:border-primary/40 hover:shadow-primary/10"
                  : "from-card/80 to-card/40 border-border hover:border-primary/30 hover:shadow-primary/5"
              } backdrop-blur-sm border hover:shadow-lg transition-all duration-700 transform ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-start gap-1">
                <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {faq.emoji}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
