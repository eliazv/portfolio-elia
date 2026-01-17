import type { Metadata } from "next";
import GeneraQRCodeClient from "./GeneraQRCodeClient";

export const metadata: Metadata = {
  title: "Generatore QR Code Online Gratis | Crea QR Code Personalizzati",
  description:
    "Genera QR Code gratuiti per URL, testi, email e numeri di telefono. Personalizza colori e dimensioni. Strumento online senza registrazione.",
  keywords: [
    "generatore qr code",
    "qr code gratis",
    "crea qr code",
    "qr code online",
    "qr code generator",
    "genera codice qr",
    "qr code personalizzato",
    "qr code maker",
  ],
  openGraph: {
    title: "Generatore QR Code Online Gratis",
    description:
      "Crea QR Code personalizzati per URL, testi, email e telefono. Strumento gratuito.",
    type: "website",
    locale: "it_IT",
  },
  alternates: {
    canonical: "https://www.eliazavatta.it/strumenti/genera-qrcode",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Generatore QR Code",
  description:
    "Genera QR Code personalizzati per URL, testi, email e numeri di telefono.",
  url: "https://www.eliazavatta.it/strumenti/genera-qrcode",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function GeneraQRCodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeneraQRCodeClient />
    </>
  );
}
