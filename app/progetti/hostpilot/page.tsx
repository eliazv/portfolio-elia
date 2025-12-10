import Hostpilot from "@/project-pages/projects/Hostpilot";
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
  title: "Hostpilot | Channel manager per affitti brevi | Elia Zavatta",
  description:
    "Hostpilot è il channel manager per affitti brevi ideato da Elia Zavatta: sincronizza Airbnb, Booking.com e portali OTA, automatizza tasse di soggiorno e messaggi agli ospiti con dashboard intuitiva.",
  keywords: [
    "Hostpilot channel manager",
    "gestione affitti brevi romagna",
    "software affitti brevi cesena",
    "channel manager italiano",
    "app gestione case vacanza",
    "sincronizzazione Airbnb Booking",
  ],
  openGraph: {
    title: "Hostpilot | Channel manager per affitti brevi",
    description:
      "Software per host e property manager: sincronizzazione calendari, automazioni fiscali e dashboard centralizzata.",
    url: `${SITE_URL}/progetti/hostpilot`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/hostpilot.svg`,
        width: 1200,
        height: 630,
        alt: "Hostpilot - Channel manager affitti brevi",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/progetti/hostpilot`,
  },
};

export default function Page() {
  const jsonLd = combineSchemas(
    generateSoftwareAppSchema({
      name: "Hostpilot",
      description:
        "Channel manager professionale per affitti brevi con sincronizzazione OTA, automazioni fiscali e gestione multi-proprietà",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS, Web",
      author: "Elia Zavatta",
      image: `${SITE_URL}/hostpilot.svg`,
      url: `${SITE_URL}/progetti/hostpilot`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Progetti", url: `${SITE_URL}/#projects` },
      { name: "Hostpilot", url: `${SITE_URL}/progetti/hostpilot` },
    ]),
    generateFAQSchema([
      {
        question: "Quali piattaforme supporta Hostpilot?",
        answer:
          "Hostpilot si sincronizza automaticamente con Airbnb, Booking.com, Vrbo, Expedia e molte altre piattaforme OTA, oltre alle prenotazioni dirette.",
      },
      {
        question: "È conforme alla normativa italiana?",
        answer:
          "Assolutamente sì. Hostpilot gestisce automaticamente la cedolare secca, le tasse di soggiorno e la registrazione ospiti secondo le leggi italiane.",
      },
      {
        question: "Posso gestire più proprietà?",
        answer:
          "Sì, Hostpilot è progettato per multi-proprietà con calendari separati, tariffe personalizzate e gestione portfolio completa.",
      },
      {
        question: "C'è un'app mobile?",
        answer:
          "Sì, Hostpilot è disponibile su mobile, web e desktop con sincronizzazione cloud e backup automatico.",
      },
      {
        question: "Come vengono automatizzate le comunicazioni con gli ospiti?",
        answer:
          "Hostpilot invia messaggi automatici di benvenuto, promemoria check-in/out e richieste recensioni, tutti personalizzabili.",
      },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJSONLD(jsonLd) }}
      />
      <Hostpilot />
    </>
  );
}
