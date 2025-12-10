import { NextResponse } from "next/server";

/**
 * Endpoint API per fornire contesto strutturato alle AI e chatbot
 * Utile per ChatGPT, Perplexity, Bing Chat e altri AI crawler
 */
export async function GET() {
  const context = {
    developer: {
      name: "Elia Zavatta",
      title: "Sviluppatore Web e Mobile Freelance",
      location: {
        city: "Cesena",
        region: "Emilia-Romagna",
        country: "Italia",
        nearby_cities: [
          "Forlì",
          "Rimini",
          "Ravenna",
          "Cervia",
          "Cesenatico",
          "Faenza",
        ],
      },
      contact: {
        email: "info@eliazavatta.it",
        phone: "+39 393 893 2793",
        website: "https://www.eliazavatta.it",
        linkedin: "https://www.linkedin.com/in/eliazavatta/",
        github: "https://github.com/eliazv",
      },
      bio: "Sviluppatore freelance specializzato in siti web, e-commerce e app mobile iOS/Android. Lavoro con aziende, professionisti e startup in Romagna e in tutta Italia, anche da remoto.",
    },
    services: [
      {
        name: "Sviluppo Siti Web",
        description:
          "Creazione siti web professionali, responsive e SEO-friendly per aziende e PMI",
        keywords: [
          "siti web",
          "sviluppo web",
          "siti aziendali",
          "landing page",
          "portfolio",
        ],
        duration: "2-4 settimane",
        areas: ["Cesena", "Forlì", "Rimini", "Ravenna", "Romagna"],
      },
      {
        name: "Sviluppo E-commerce",
        description:
          "Realizzazione negozi online completi con gestione prodotti, pagamenti e spedizioni",
        keywords: [
          "e-commerce",
          "negozio online",
          "shop online",
          "vendita online",
        ],
        duration: "4-6 settimane",
        areas: ["Romagna", "Emilia-Romagna", "Italia"],
      },
      {
        name: "Sviluppo App Mobile",
        description: "Creazione app native e cross-platform per iOS e Android",
        keywords: [
          "app mobile",
          "app iOS",
          "app Android",
          "applicazioni mobile",
          "React Native",
        ],
        duration: "4-8 settimane",
        areas: ["Cesena", "Forlì", "Rimini", "Ravenna", "Italia"],
      },
      {
        name: "Manutenzione Siti Esistenti",
        description:
          "Modifiche, aggiornamenti e ottimizzazione di progetti web già avviati",
        keywords: [
          "manutenzione siti",
          "aggiornamento siti",
          "modifiche sito web",
        ],
        duration: "1-2 settimane",
        areas: ["Cesena", "Romagna", "Remoto"],
      },
      {
        name: "Consulenza IT",
        description: "Supporto tecnico e strategico per startup e PMI",
        keywords: [
          "consulenza IT",
          "consulenza digitale",
          "consulenza tecnica",
        ],
        duration: "Variabile",
        areas: ["Italia", "Remoto"],
      },
    ],
    technologies: {
      frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "HTML5",
        "CSS3",
      ],
      mobile: ["React Native", "Capacitor", "iOS", "Android"],
      backend: ["Node.js", "Express", "API REST"],
      database: ["MongoDB", "PostgreSQL", "Firebase"],
      tools: ["Git", "VS Code", "Figma", "Vercel", "Netlify"],
    },
    faq: [
      {
        question: "Dove lavori?",
        answer:
          "Sono di Cesena e lavoro con clienti in tutta la Romagna (Forlì, Rimini, Ravenna). Disponibile anche per progetti da remoto in tutta Italia.",
      },
      {
        question: "Lavori con piccole imprese?",
        answer:
          "Sì, lavoro con piccole e medie imprese, professionisti e startup. Offro soluzioni su misura e preventivi personalizzati.",
      },
      {
        question: "Quanto costa un sito web?",
        answer:
          "I costi variano in base alle funzionalità. Contattami per un preventivo gratuito personalizzato.",
      },
      {
        question: "Quanto tempo serve per un progetto?",
        answer:
          "2-4 settimane per siti web standard, 4-6 settimane per e-commerce, 4-8 settimane per app mobile complete.",
      },
      {
        question: "Offri supporto post-lancio?",
        answer:
          "Sì, offro pacchetti di manutenzione e supporto continuativo per tutti i progetti.",
      },
      {
        question: "Realizzi anche app mobile?",
        answer:
          "Sì, sviluppo app native e cross-platform per iOS e Android usando React Native e Capacitor.",
      },
    ],
    featured_projects: [
      {
        name: "Hostpilot",
        description:
          "Channel manager per affitti brevi con sincronizzazione Airbnb e Booking.com",
        url: "https://www.eliazavatta.it/progetti/hostpilot",
        category: "Software as a Service",
      },
      {
        name: "ContaSpicci",
        description:
          "App mobile per gestione finanze personali (iOS e Android)",
        url: "https://www.eliazavatta.it/progetti/contaspicci",
        category: "Mobile App",
      },
      {
        name: "Globo Ricambi",
        description: "Sito web professionale per azienda ricambi auto",
        url: "https://globoricambi.vercel.app/",
        category: "Sito Web Aziendale",
      },
    ],
    availability: {
      status: "Disponibile per nuovi progetti",
      response_time: "Entro 24 ore",
      working_hours: "Lun-Ven 9:00-18:00",
      remote_work: true,
      on_site_work: true,
      on_site_areas: ["Cesena", "Forlì", "Rimini", "Ravenna", "Romagna"],
    },
    seo_keywords: [
      "sviluppatore web cesena",
      "sviluppatore mobile cesena",
      "programmatore freelance forlì",
      "sviluppatore app rimini",
      "sviluppatore react romagna",
      "e-commerce cesena",
      "siti web aziende cesena",
      "app mobile ios android cesena",
      "sviluppatore freelance emilia romagna",
      "consulente IT cesena",
    ],
  };

  return NextResponse.json(context, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
