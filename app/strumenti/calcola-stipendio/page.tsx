import type { Metadata } from "next";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareAppSchema,
} from "@/lib/seo-utils";
import CalcolaStipendioClient from "./CalcolaStipendioClient";

export const metadata: Metadata = {
  title: "Calcolatore Stipendio Netto da RAL e Partita IVA | 2026",
  description:
    "Calcola il tuo stipendio netto da RAL, scopri quanto guadagni realmente con Partita IVA forfettaria e confronta dipendente vs freelancer. Dati aggiornati 2026.",
  keywords: [
    "calcolo stipendio netto",
    "ral netto",
    "partita iva quanto resta",
    "tariffa oraria freelancer",
    "stipendio netto mensile",
    "confronto dipendente partita iva",
    "calcolo netto forfettario",
    "simulatore stipendio",
    "da lordo a netto",
    "quanto guadagno partita iva",
  ],
  openGraph: {
    title: "Calcolatore Stipendio Netto RAL e Partita IVA",
    description:
      "Scopri quanto ti resta in tasca da dipendente o freelancer. Calcoli aggiornati 2026.",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "https://www.eliazavatta.it/images/og/calcolatore-stipendio.png",
        alt: "Calcolatore stipendio netto - RAL e Partita IVA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolatore Stipendio Netto RAL e Partita IVA",
    description:
      "Calcola il netto da RAL e simula il forfettario. Dati aggiornati 2026.",
    images: ["https://www.eliazavatta.it/images/og/calcolatore-stipendio.png"],
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/calcola-stipendio",
  },
};

const structuredData = combineSchemas(
  generateSoftwareAppSchema({
    name: "Calcolatore Stipendio Netto RAL e Partita IVA",
    description:
      "Calcola il tuo stipendio netto da RAL, simula guadagni con Partita IVA forfettaria e confronta dipendente vs freelancer. Aggiornato 2026.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    author: "Elia Zavatta",
    url: "https://www.eliazavatta.it/strumenti/calcola-stipendio",
    image: "https://www.eliazavatta.it/images/og/calcolatore-stipendio.png",
  }),
  generateBreadcrumbSchema([
    { name: "Home", url: "https://www.eliazavatta.it/" },
    { name: "Strumenti", url: "https://www.eliazavatta.it/strumenti" },
    {
      name: "Calcolatore Stipendio Netto",
      url: "https://www.eliazavatta.it/strumenti/calcola-stipendio",
    },
  ]),
  generateFAQSchema([
    {
      question: "Come si calcola il netto dalla RAL?",
      answer:
        "Dal lordo si sottraggono contributi INPS, IRPEF (con detrazioni) e addizionali; questo calcolatore applica scaglioni e detrazioni aggiornati al 2026 per stimare il netto.",
    },
    {
      question: "Quanto resta nel regime forfettario?",
      answer:
        "Nel forfettario si applica un coefficiente di redditività e un'imposta sostitutiva (5% start-up o 15%) più l'INPS gestione separata. Il risultato varia in base al tuo codice ATECO.",
    },
  ]),
);

export default function CalcolaStipendioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CalcolaStipendioClient />
    </>
  );
}
