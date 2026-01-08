import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import FAQSection from "@/components/FAQSection";

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
          {/* FAQ visibile per AI e utenti - design moderno con animazioni */}
          <FAQSection />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
