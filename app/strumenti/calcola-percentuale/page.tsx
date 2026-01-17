import type { Metadata } from "next";
import CalcolaPercentualeClient from "./CalcolaPercentualeClient";

export const metadata: Metadata = {
  title: "Calcolatore Percentuale Online Gratis | Calcola Sconto",
  description:
    "Calcola percentuali, sconti e variazioni percentuali facilmente. Strumento gratuito per calcolare il prezzo scontato, la percentuale di un numero e molto altro.",
  keywords: [
    "calcola percentuale",
    "calcolatore sconto",
    "percentuale online",
    "calcolo percentuale",
    "calcola sconto",
    "percentuale di un numero",
    "calcolatrice percentuale",
    "quanto è il 20 percento",
  ],
  openGraph: {
    title: "Calcolatore Percentuale e Sconto Online Gratis",
    description:
      "Calcola percentuali, sconti e variazioni percentuali. Strumento gratuito senza registrazione.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/calcola-percentuale",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calcolatore Percentuale e Sconto",
  description:
    "Calcola percentuali, sconti e variazioni percentuali tra numeri. Strumento online gratuito.",
  url: "https://www.eliazavatta.it/strumenti/calcola-percentuale",
  applicationCategory: "UtilityApplication",
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

export default function CalcolaPercentualePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalcolaPercentualeClient />
    </>
  );
}
