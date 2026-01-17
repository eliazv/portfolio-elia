import {
  KeyRound,
  QrCode,
  Percent,
  BarChart2,
  FileImage,
  FileText,
  AlignLeft,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  keywords: string[];
  isAI?: boolean;
}

export interface ToolGroup {
  id: string;
  name: string;
  tools: Tool[];
}

// Definizione dei gruppi di strumenti con metadata SEO
export const toolGroups: ToolGroup[] = [
  {
    id: "generators",
    name: "Generatori",
    tools: [
      {
        name: "Generatore Password",
        slug: "genera-password",
        description: "Crea password sicure e personalizzate per proteggere i tuoi account online",
        icon: KeyRound,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        keywords: ["generatore password", "password sicura", "password forte", "generatore password online"],
      },
      {
        name: "Generatore QR Code",
        slug: "genera-qrcode",
        description: "Crea QR code personalizzati per URL, testi, email e numeri di telefono",
        icon: QrCode,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        keywords: ["generatore qr code", "qr code online", "crea qr code", "qr code gratis"],
      },
    ],
  },
  {
    id: "calculators",
    name: "Calcolatori",
    tools: [
      {
        name: "Calcolatore Percentuale",
        slug: "calcola-percentuale",
        description: "Calcola percentuali, sconti, aumenti e variazioni tra numeri facilmente",
        icon: Percent,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        keywords: ["calcola percentuale", "calcolatore sconto", "percentuale online", "calcolo percentuale"],
      },
      {
        name: "Calcolatore BMI",
        slug: "calcola-bmi",
        description: "Calcola il tuo Indice di Massa Corporea e scopri se sei nel peso ideale",
        icon: BarChart2,
        color: "text-green-600",
        bgColor: "bg-green-50",
        keywords: ["calcola bmi", "indice massa corporea", "calcolo peso ideale", "bmi calculator"],
      },
    ],
  },
  {
    id: "images",
    name: "Immagini",
    tools: [
      {
        name: "Comprimi Immagini",
        slug: "comprimi-immagini",
        description: "Comprimi immagini JPEG, PNG, WEBP senza perdita di qualità visibile",
        icon: FileImage,
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        keywords: ["comprimi immagini", "ridurre dimensioni foto", "compressore immagini online", "ottimizza immagini"],
      },
    ],
  },
  {
    id: "documents",
    name: "Documenti",
    tools: [
      {
        name: "Conta Caratteri",
        slug: "conta-caratteri",
        description: "Conta caratteri, parole, frasi e paragrafi nel tuo testo istantaneamente",
        icon: AlignLeft,
        color: "text-violet-600",
        bgColor: "bg-violet-50",
        keywords: ["conta caratteri", "conta parole", "word counter", "character counter"],
      },
      {
        name: "Convertitore PDF",
        slug: "convertitore-pdf",
        description: "Converti file PDF in Word, immagini e altri formati",
        icon: FileText,
        color: "text-red-600",
        bgColor: "bg-red-50",
        keywords: ["pdf to word", "convertitore pdf", "pdf converter", "converti pdf"],
      },
    ],
  },
  {
    id: "ai",
    name: "Strumenti AI",
    tools: [
      {
        name: "Generatore Meta Description",
        slug: "genera-meta-description",
        description: "Genera meta description SEO-ottimizzate con intelligenza artificiale",
        icon: Sparkles,
        color: "text-violet-600",
        bgColor: "bg-violet-50",
        keywords: ["meta description generator", "seo ai", "generatore meta tag", "ai seo tool"],
        isAI: true,
      },
    ],
  },
];

// Flatten per ricerca facile
export const allTools = toolGroups.flatMap((group) => group.tools);

// Funzione per trovare uno strumento per slug
export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find((tool) => tool.slug === slug);
}

// Funzione per ottenere il gruppo di uno strumento
export function getToolGroup(slug: string): ToolGroup | undefined {
  return toolGroups.find((group) =>
    group.tools.some((tool) => tool.slug === slug)
  );
}
