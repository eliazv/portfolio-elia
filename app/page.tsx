import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eliazavatta.it";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: "Elia ZV - Portfolio",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      name: "Elia Zavatta",
      url: SITE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Chi sei e dove lavori?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sono Elia Zavatta, sviluppatore web e mobile freelance con sede a Cesena. Lavoro con clienti in tutta la Romagna (Forlì, Rimini, Ravenna, Cervia) e sono disponibile anche per progetti da remoto in tutta Italia.",
          },
        },
        {
          "@type": "Question",
          name: "Quali servizi offri?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sviluppo siti web professionali, e-commerce, app mobile per iOS e Android, e offro consulenza IT per startup e PMI. Mi occupo anche di modifiche e manutenzione su progetti esistenti.",
          },
        },
        {
          "@type": "Question",
          name: "Lavori con piccole imprese e startup a Cesena?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì! Lavoro con piccole e medie imprese, professionisti e startup in Romagna che cercano soluzioni digitali su misura. Offro preventivi personalizzati e tempistiche chiare.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo serve per sviluppare un sito web o un'app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dipende dalla complessità: 2-4 settimane per siti web standard, 4-8 settimane per e-commerce o app mobile complete. Fornisco sempre una timeline dettagliata.",
          },
        },
        {
          "@type": "Question",
          name: "Come posso richiedere un preventivo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usa il form di contatto sul sito o scrivi a info@eliazavatta.it. Rispondo entro 24 ore con un preventivo gratuito e senza impegno.",
          },
        },
      ],
    },
  ],
};
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <script
        key="structured-data"
        type="application/ld+json"
        // JSON-LD è iniettato server-side come script nel DOM per aiutare AI e motori
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <Header />
        <main>
          {/* TL;DR nascosto visivamente ma accessibile per SEO, AI e screen reader */}
          <section aria-label="Riepilogo" className="sr-only">
            <div>
              <h2>Sviluppatore Web e Mobile Freelance a Cesena</h2>
              <p>
                Sono Elia Zavatta, sviluppatore freelance specializzato in siti
                web, e-commerce e app mobile iOS/Android. Lavoro con aziende e
                professionisti a Cesena, Forlì, Rimini, Ravenna e in tutta la
                Romagna. Disponibile anche per progetti da remoto.
              </p>
            </div>
          </section>
          <HeroSection />
          <ProjectsSection />
          <ServicesSection />
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Colonna sinistra: Chi sono */}
                <div>
                  <AboutSection />
                </div>
                {/* Colonna destra: Contattami */}
                <div>
                  <ContactSection />
                </div>
              </div>
            </div>
          </section>
          {/* FAQ visibile per AI e utenti - ottimizzata per ricerca locale */}
          <section aria-labelledby="faq-title" className="py-16 bg-background">
            <div className="container mx-auto px-6">
              <h2
                id="faq-title"
                className="text-3xl font-bold mb-8 text-center"
              >
                Domande Frequenti
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Chi sei e dove lavori?
                  </h3>
                  <p className="text-foreground/80">
                    Sono <strong>Elia Zavatta</strong>, sviluppatore web e
                    mobile freelance con sede a <strong>Cesena</strong>. Lavoro
                    con clienti in tutta la <strong>Romagna</strong> (Forlì,
                    Rimini, Ravenna, Cervia) e sono disponibile anche per
                    progetti da remoto in tutta Italia.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Quali servizi offri?
                  </h3>
                  <p className="text-foreground/80">
                    Sviluppo <strong>siti web</strong> professionali,{" "}
                    <strong>e-commerce</strong>, <strong>app mobile</strong> per
                    iOS e Android, e offro <strong>consulenza IT</strong> per
                    startup e PMI. Mi occupo anche di modifiche e manutenzione
                    su progetti esistenti.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Lavori con piccole imprese e startup?
                  </h3>
                  <p className="text-foreground/80">
                    Sì! Lavoro con <strong>piccole e medie imprese</strong>,{" "}
                    <strong>professionisti</strong> e <strong>startup</strong>{" "}
                    che cercano soluzioni digitali su misura. Offro preventivi
                    personalizzati e tempistiche chiare.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Quanto tempo serve per un progetto?
                  </h3>
                  <p className="text-foreground/80">
                    Dipende dalla complessità: <strong>2-4 settimane</strong>{" "}
                    per siti web standard, <strong>4-8 settimane</strong> per
                    e-commerce o app mobile complete. Fornisco sempre una
                    timeline dettagliata prima di iniziare.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Come posso contattarti?
                  </h3>
                  <p className="text-foreground/80">
                    Usa il <strong>form di contatto</strong> qui sotto o scrivi
                    a <strong>info@eliazavatta.it</strong>. Rispondo entro 24
                    ore con un preventivo gratuito e senza impegno.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
