import type { Metadata } from "next";
import ContaCaratteriClient from "./ContaCaratteriClient";

export const metadata: Metadata = {
  title: "Conta Caratteri e Parole Online Gratis",
  description:
    "Conta caratteri, parole, frasi e paragrafi nel tuo testo istantaneamente. Strumento gratuito per scrittori, studenti e professionisti. Nessuna registrazione richiesta.",
  keywords: [
    "conta caratteri",
    "conta parole",
    "conteggio caratteri",
    "word counter",
    "character counter",
    "conta lettere",
    "contaparole online",
    "conteggio parole",
  ],
  openGraph: {
    title: "Conta Caratteri e Parole Online Gratis",
    description:
      "Conta caratteri, parole, frasi e paragrafi istantaneamente. Strumento gratuito senza registrazione.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/conta-caratteri",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Conta Caratteri e Parole",
  description:
    "Strumento online gratuito per contare caratteri, parole, frasi e paragrafi nel testo.",
  url: "https://www.eliazavatta.it/strumenti/conta-caratteri",
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

export default function ContaCaratteriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContaCaratteriClient />
    </>
  );
}
