import type { Metadata } from "next";
import GeneraPasswordClient from "./GeneraPasswordClient";

export const metadata: Metadata = {
  title: "Generatore Password Sicure Online Gratis",
  description:
    "Genera password sicure e personalizzate gratis. Crea password forti con lettere, numeri e simboli per proteggere i tuoi account. Strumento online senza registrazione.",
  keywords: [
    "generatore password",
    "password sicura",
    "password forte",
    "generatore password online",
    "crea password",
    "password generator",
    "password casuale",
    "generatore password gratis",
  ],
  openGraph: {
    title: "Generatore Password Sicure Online Gratis",
    description:
      "Crea password forti e sicure per proteggere i tuoi account. Strumento gratuito senza registrazione.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/genera-password",
  },
};

// JSON-LD per lo strumento
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Generatore Password Sicure",
  description:
    "Genera password sicure e personalizzate per proteggere i tuoi account online. Scegli lunghezza e tipologia di caratteri.",
  url: "https://www.eliazavatta.it/strumenti/genera-password",
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
    url: "https://www.eliazavatta.it",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
};

export default function GeneraPasswordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeneraPasswordClient />
    </>
  );
}
