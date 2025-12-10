import CasaVacanze from "@/project-pages/projects/CasaVacanze";
import type { Metadata } from "next";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  combineSchemas,
  serializeJSONLD,
} from "@/lib/seo-utils";

const SITE_URL = "https://www.eliazavatta.it";

// Metadata server-side per SEO ottimizzato
export const metadata: Metadata = {
  title: "Casa Vacanze | Sito web gestione affitti brevi | Elia Zavatta",
  description:
    "Sito web completo per gestione e promozione casa vacanze con backoffice dedicato per prenotazioni e ricavi. Progetto sviluppato da Elia Zavatta, sviluppatore web freelance in Romagna.",
  keywords: [
    "sito web casa vacanze",
    "sviluppo web affitti brevi",
    "sito gestione prenotazioni cesena",
    "piattaforma gestione casa vacanze",
    "backoffice affitti brevi",
  ],
  openGraph: {
    title: "Casa Vacanze | Sito web gestione affitti brevi",
    description:
      "Sito web completo per gestione e promozione casa vacanze con backoffice dedicato.",
    url: `${SITE_URL}/progetti/casa-vacanze`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/immerso/immerso-desktop.png`,
        width: 1200,
        height: 630,
        alt: "Casa Vacanze - Sito web gestione affitti",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/progetti/casa-vacanze`,
  },
};

export default function Page() {
  // JSON-LD strutturato per AI e motori di ricerca
  const jsonLd = combineSchemas(
    generateProductSchema({
      name: "Casa Vacanze - Sito web gestione affitti brevi",
      description:
        "Soluzione completa per promozione e gestione casa vacanze con backoffice integrato",
      category: "Web Development",
      author: "Elia Zavatta",
      image: `${SITE_URL}/immerso/immerso-desktop.png`,
      url: `${SITE_URL}/progetti/casa-vacanze`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Progetti", url: `${SITE_URL}/#projects` },
      { name: "Casa Vacanze", url: `${SITE_URL}/progetti/casa-vacanze` },
    ]),
    generateFAQSchema([
      {
        question: "Cosa include il sito Casa Vacanze?",
        answer:
          "Include una vetrina pubblica per presentare la struttura, un backoffice per gestire prenotazioni e ricavi, calendario integrato, dashboard statistiche e form di contatto per richieste dirette.",
      },
      {
        question: "Quali tecnologie sono state utilizzate?",
        answer:
          "React, TypeScript, TailwindCSS, Vite, Capacitor per versione mobile, shadcn-ui per i componenti UI.",
      },
      {
        question: "È disponibile come app mobile?",
        answer:
          "Sì, grazie a Capacitor il sito è disponibile anche come app nativa per iOS e Android.",
      },
      {
        question: "Come posso richiedere un progetto simile?",
        answer:
          "Contattami tramite il form nella sezione Contatti o scrivi a info@eliazavatta.it. Rispondo entro 24 ore.",
      },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJSONLD(jsonLd) }}
      />
      <CasaVacanze />
    </>
  );
}
