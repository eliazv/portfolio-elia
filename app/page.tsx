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
            text: "Sono Elia Zavatta, programmatore freelance con sede a Cesena. Lavoro con clienti in tutta la Romagna (Forlì, Rimini, Ravenna, Cervia) e sono disponibile anche per progetti da remoto in tutta Italia.",
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
          name: "Quali tecnologie utilizzi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sviluppo con React.js, Next.js e TypeScript per il frontend. Per app mobile uso Flutter e React Native. Per il backend NestJS e Node.js. Database SQL (PostgreSQL, MySQL) e NoSQL (MongoDB, Firebase).",
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
          name: "Lavori da remoto in tutta Italia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì, sono disponibile per collaborazioni remote con aziende e startup in tutta Italia. Uso strumenti moderni per comunicazione e gestione progetti a distanza.",
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
          <HeroSection />
          <ProjectsSection />
          {/* <ServicesSection /> */}
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
          {/* FAQ visibile per AI e utenti - design moderno con accordions */}
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
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-lg">💬</span>
                  <span className="text-sm font-medium text-primary">FAQ</span>
                </div> */}
                <h2
                  className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block animate-slide-in-top"
                  id="faq-title"
                >
                  <span className="relative z-10">Domande Frequenti</span>
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
                </h2>
                {/* <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Tutto quello che devi sapere
                </p> */}
              </div>

              {/* FAQ Grid */}
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* FAQ Item 1 */}
                <div className="group p-5 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      👤
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Chi sei e dove lavori?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sono{" "}
                        <strong className="text-foreground">
                          Elia Zavatta
                        </strong>
                        ,{" "}
                        <strong className="text-foreground">
                          programmatore freelance
                        </strong>{" "}
                        con sede a{" "}
                        <strong className="text-foreground">Cesena</strong>.
                        Lavoro con clienti in tutta la{" "}
                        <strong className="text-foreground">Romagna</strong> e
                        sono disponibile per progetti da{" "}
                        <strong className="text-foreground">
                          remoto in tutta Italia
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="group p-5 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      🛠️
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Quali servizi offri?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sviluppo{" "}
                        <strong className="text-foreground">siti web</strong>,{" "}
                        <strong className="text-foreground">e-commerce</strong>,{" "}
                        <strong className="text-foreground">app mobile</strong>{" "}
                        per iOS e Android, e offro{" "}
                        <strong className="text-foreground">
                          consulenza IT
                        </strong>{" "}
                        per startup e PMI.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="group p-5 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      ⚡
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Quali tecnologie utilizzi?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">React.js</strong>,{" "}
                        <strong className="text-foreground">Next.js</strong>,{" "}
                        <strong className="text-foreground">Flutter</strong> per
                        mobile,{" "}
                        <strong className="text-foreground">NestJS</strong> per
                        backend, e database{" "}
                        <strong className="text-foreground">SQL</strong>{" "}
                        (PostgreSQL, MySQL).
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="group p-5 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      🏢
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Lavori con piccole imprese?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sì! Lavoro con{" "}
                        <strong className="text-foreground">PMI</strong>,{" "}
                        <strong className="text-foreground">
                          professionisti
                        </strong>{" "}
                        e <strong className="text-foreground">startup</strong>{" "}
                        che cercano soluzioni digitali su misura con preventivi
                        personalizzati.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="group p-5 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      ⏱️
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Quanto tempo serve?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">
                          2-4 settimane
                        </strong>{" "}
                        per siti web,{" "}
                        <strong className="text-foreground">
                          4-8 settimane
                        </strong>{" "}
                        per e-commerce o app mobile. Fornisco sempre una
                        timeline dettagliata.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 6 */}
                <div className="group p-5 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      🌍
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Lavori da remoto?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sì, sono disponibile per{" "}
                        <strong className="text-foreground">
                          collaborazioni remote
                        </strong>{" "}
                        con aziende in{" "}
                        <strong className="text-foreground">
                          tutta Italia
                        </strong>
                        . Uso strumenti moderni per comunicazione e gestione
                        progetti.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 7 - Full width CTA */}
                <div className="md:col-span-2 group p-5 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-1">
                    <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      📧
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Come posso contattarti?
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Scrivi a{" "}
                        <strong className="text-primary">
                          info@eliazavatta.it
                        </strong>
                        . Rispondo entro{" "}
                        <strong className="text-foreground">24 ore</strong> con
                        un preventivo gratuito e senza impegno.
                      </p>
                    </div>
                  </div>
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
