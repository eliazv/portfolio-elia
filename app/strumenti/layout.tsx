import type { Metadata } from "next";
import ToolsLayout from "@/components/tools/ToolsLayout";

export const metadata: Metadata = {
  title: {
    default: "Strumenti Online Gratuiti | Generatori, Calcolatori, Convertitori",
    template: "%s | Strumenti Online Gratuiti - Elia Zavatta",
  },
  description:
    "Raccolta di strumenti online gratuiti: generatore password, QR code, calcolatori, convertitori e molto altro. Nessuna registrazione, tutti i dati elaborati nel browser.",
  keywords: [
    "strumenti online gratis",
    "generatore password",
    "qr code generator",
    "calcolatore percentuale",
    "convertitore valute",
    "strumenti web gratuiti",
    "utility online",
    "tools online free",
  ],
  openGraph: {
    title: "Strumenti Online Gratuiti | Elia Zavatta",
    description:
      "Raccolta di strumenti online gratuiti: generatori, calcolatori, convertitori. Nessuna registrazione richiesta.",
    type: "website",
    locale: "it_IT",
  },
};

export default function StrumentiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ToolsLayout>{children}</ToolsLayout>;
}
