import type { Metadata } from "next";
import ComprimiImmaginiClient from "./ComprimiImmaginiClient";

export const metadata: Metadata = {
  title: "Comprimi Immagini Online Gratis | Ridurre Dimensioni Foto",
  description:
    "Comprimi immagini JPEG, PNG e WEBP gratuitamente senza perdita di qualità. Riduci le dimensioni delle foto per web, email e social media. Nessuna registrazione.",
  keywords: [
    "comprimi immagini",
    "compressore immagini online",
    "ridurre dimensioni foto",
    "comprimi jpg",
    "comprimi png",
    "ottimizza immagini",
    "riduci peso immagini",
    "compressione foto gratis",
  ],
  openGraph: {
    title: "Comprimi Immagini Online Gratis",
    description:
      "Riduci le dimensioni delle tue immagini senza perdere qualità. Strumento gratuito.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/comprimi-immagini",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compressore Immagini Online",
  description:
    "Comprimi immagini JPEG, PNG e WEBP senza perdita di qualità visibile.",
  url: "https://www.eliazavatta.it/strumenti/comprimi-immagini",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function ComprimiImmaginiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComprimiImmaginiClient />
    </>
  );
}
