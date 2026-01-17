import {
  KeyRound,
  QrCode,
  Percent,
  BarChart2,
  FileImage,
  AlignLeft,
  Receipt,
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
  hidden?: boolean;
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
        description:
          "Crea password sicure e personalizzate per proteggere i tuoi account online",
        icon: KeyRound,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        keywords: [
          "generatore password",
          "password sicura",
          "password forte",
          "generatore password online",
        ],
      },
      {
        name: "Generatore QR Code",
        slug: "genera-qrcode",
        description:
          "Crea QR code personalizzati per URL, testi, email e numeri di telefono",
        icon: QrCode,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        keywords: [
          "generatore qr code",
          "qr code online",
          "crea qr code",
          "qr code gratis",
        ],
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
        description:
          "Calcola percentuali, sconti, aumenti e variazioni tra numeri facilmente",
        icon: Percent,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        keywords: [
          "calcola percentuale",
          "calcolatore sconto",
          "percentuale online",
          "calcolo percentuale",
        ],
      },
      {
        name: "Calcolatore BMI",
        slug: "calcola-bmi",
        description:
          "Calcola il tuo Indice di Massa Corporea e scopri se sei nel peso ideale",
        icon: BarChart2,
        color: "text-green-600",
        bgColor: "bg-green-50",
        keywords: [
          "calcola bmi",
          "indice massa corporea",
          "calcolo peso ideale",
          "bmi calculator",
        ],
      },
      {
        name: "Calcolatore RAL / P.IVA",
        slug: "calcola-stipendio",
        description:
          "Calcola stipendio netto da RAL, tariffa oraria freelancer e confronta dipendente vs P.IVA",
        icon: Receipt,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        keywords: [
          "calcolo stipendio netto",
          "ral netto",
          "partita iva quanto resta",
          "tariffa oraria freelancer",
          "stipendio netto mensile",
          "confronto dipendente partita iva",
        ],
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
        description:
          "Comprimi immagini JPEG, PNG, WEBP senza perdita di qualità visibile",
        icon: FileImage,
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        keywords: [
          "comprimi immagini",
          "ridurre dimensioni foto",
          "compressore immagini online",
          "ottimizza immagini",
        ],
        hidden: true,
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
        description:
          "Conta caratteri, parole, frasi e paragrafi nel tuo testo istantaneamente",
        icon: AlignLeft,
        color: "text-violet-600",
        bgColor: "bg-violet-50",
        keywords: [
          "conta caratteri",
          "conta parole",
          "word counter",
          "character counter",
        ],
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
    group.tools.some((tool) => tool.slug === slug),
  );
}
