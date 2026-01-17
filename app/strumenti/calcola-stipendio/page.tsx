import type { Metadata } from "next";
import CalcolaStipendioClient from "./CalcolaStipendioClient";

export const metadata: Metadata = {
  title: "Calcolatore Stipendio Netto da RAL e Partita IVA | 2025",
  description:
    "Calcola il tuo stipendio netto da RAL, scopri quanto guadagni realmente con Partita IVA forfettaria e confronta dipendente vs freelancer. Dati aggiornati 2025.",
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
      "Scopri quanto ti resta in tasca da dipendente o freelancer. Calcoli aggiornati 2025.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/calcola-stipendio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calcolatore Stipendio Netto RAL e Partita IVA",
  description:
    "Calcola il tuo stipendio netto da RAL, simula guadagni con Partita IVA forfettaria e confronta dipendente vs freelancer. Aggiornato 2025.",
  url: "https://www.eliazavatta.it/strumenti/calcola-stipendio",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  author: {
    "@type": "Person",
    name: "Elia Zavatta",
  },
};

export default function CalcolaStipendioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalcolaStipendioClient />
    </>
  );
}
