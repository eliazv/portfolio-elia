import type { Metadata } from "next";
import CalcolaBMIClient from "./CalcolaBMIClient";

export const metadata: Metadata = {
  title: "Calcola BMI Online Gratis | Indice Massa Corporea",
  description:
    "Calcola il tuo Indice di Massa Corporea (BMI) gratuitamente. Scopri se sei sottopeso, normopeso, sovrappeso o obeso. Strumento online senza registrazione.",
  keywords: [
    "calcola bmi",
    "indice massa corporea",
    "bmi calculator",
    "calcolo peso ideale",
    "bmi online",
    "calcola imc",
    "body mass index",
    "peso forma",
  ],
  openGraph: {
    title: "Calcola BMI - Indice di Massa Corporea Online Gratis",
    description:
      "Calcola il tuo BMI e scopri il tuo peso ideale. Strumento gratuito.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/calcola-bmi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calcolatore BMI - Indice di Massa Corporea",
  description:
    "Calcola il tuo BMI e scopri se sei nel peso ideale. Strumento gratuito online.",
  url: "https://www.eliazavatta.it/strumenti/calcola-bmi",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function CalcolaBMIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalcolaBMIClient />
    </>
  );
}
