import Contaspicci from "@/project-pages/projects/Contaspicci";
import type { Metadata } from "next";
import {
  generateSoftwareAppSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  combineSchemas,
  serializeJSONLD,
} from "@/lib/seo-utils";

const SITE_URL = "https://www.eliazavatta.it";

export const metadata: Metadata = {
  title: "ContaSpicci | App gestione spese e investimenti | Elia Zavatta",
  description:
    "ContaSpicci è l'app gratuita per gestire spese personali, budget mensili e portafoglio investimenti in modo semplice e 100% offline. Sviluppata da Elia Zavatta.",
  keywords: [
    "ContaSpicci app",
    "app gestione spese",
    "app budget personale",
    "app investimenti offline",
    "gestione finanze personali",
    "app finanze gratis",
  ],
  openGraph: {
    title: "ContaSpicci | App gestione spese e investimenti",
    description:
      "Gestisci spese, risparmi e investimenti con un'unica app semplice e completamente offline.",
    url: `${SITE_URL}/progetti/contaspicci`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/contaspicci.png`,
        width: 1200,
        height: 630,
        alt: "ContaSpicci - App gestione finanze",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/progetti/contaspicci`,
  },
};

export default function Page() {
  const jsonLd = combineSchemas(
    generateSoftwareAppSchema({
      name: "ContaSpicci",
      description:
        "App gratuita per gestire spese personali, budget mensili e portafoglio investimenti in modo semplice e 100% offline.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android, iOS",
      price: "0",
      priceCurrency: "EUR",
      author: "Elia Zavatta",
      image: `${SITE_URL}/contaspicci.png`,
      url: `${SITE_URL}/progetti/contaspicci`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Progetti", url: `${SITE_URL}/#projects` },
      { name: "ContaSpicci", url: `${SITE_URL}/progetti/contaspicci` },
    ]),
    generateFAQSchema([
      {
        question: "ContaSpicci è gratuita?",
        answer:
          "Sì, ContaSpicci è completamente gratuita senza acquisti in-app o pubblicità.",
      },
      {
        question: "I dati sono sincronizzati online?",
        answer:
          "No, ContaSpicci è 100% offline per garantire massima privacy. I tuoi dati restano solo sul tuo dispositivo.",
      },
      {
        question: "Quali funzionalità offre?",
        answer:
          "Gestione spese e entrate, budget mensili, portafoglio investimenti con grafici real-time, statistiche automatiche e categorie personalizzabili.",
      },
      {
        question: "È disponibile per iOS e Android?",
        answer: "Sì, ContaSpicci è disponibile sia per Android che per iOS.",
      },
      {
        question: "Posso esportare i miei dati?",
        answer:
          "Sì, puoi esportare tutti i dati in formato CSV per backup o analisi esterne.",
      },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJSONLD(jsonLd) }}
      />
      <Contaspicci />
    </>
  );
}
