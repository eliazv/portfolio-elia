import { redirect } from "next/navigation";
import type { Metadata } from "next";

const SITE_URL = "https://www.eliazavatta.it";

export const metadata: Metadata = {
  title: "ContaSpicci | App gestione spese e investimenti | Elia Zavatta",
  description:
    "ContaSpicci è l'app gratuita per gestire spese personali, budget mensili e portafoglio investimenti in modo semplice e 100% offline. Sviluppata da Elia Zavatta, programmatore freelance a Cesena.",
  keywords: [
    "ContaSpicci app",
    "app gestione spese",
    "app budget personale",
    "app investimenti offline",
    "gestione finanze personali",
    "sviluppatore app cesena",
    "programmatore freelance cesena",
  ],
  openGraph: {
    title: "ContaSpicci | App gestione spese e investimenti",
    description:
      "Gestisci spese, risparmi e investimenti con un'unica app semplice e completamente offline. Sviluppata da Elia Zavatta.",
    url: `${SITE_URL}/contaspicci`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/contaspicci.png`,
        width: 1200,
        height: 630,
        alt: "ContaSpicci - App gestione finanze",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/contaspicci`,
  },
};

export default function Page() {
  // Redirect permanente alla home
  redirect("/");
}
