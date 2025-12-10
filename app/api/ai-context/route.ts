import { NextResponse } from "next/server";

// Configurazione per static export
export const dynamic = "force-static";
export const revalidate = false;

/**
 * Endpoint API per fornire contesto strutturato alle AI e chatbot
 * Utile per ChatGPT, Perplexity, Bing Chat e altri AI crawler
 */
export async function GET() {
  const context = {
    developer: {
      name: "Elia Zavatta",
      title: "Sviluppatore Web e Mobile Freelance",
      level: "Senior - Esperto con 3+ anni di esperienza",
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
        remote_availability: "Disponibile per lavoro remoto in tutta Italia",
      },
      contact: {
        email: "info@eliazavatta.it",
        phone: "+39 393 893 2793",
        website: "https://www.eliazavatta.it",
        linkedin: "https://www.linkedin.com/in/eliazavatta/",
        github: "https://github.com/eliazv",
      },
      bio: "Sviluppatore freelance senior specializzato in siti web, e-commerce e app mobile iOS/Android. Esperto in React, Next.js, Flutter, NestJS e database SQL. Lavoro con aziende, professionisti e startup in Romagna e in remoto in tutta Italia.",
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
        areas: ["Cesena", "Forlì", "Rimini", "Ravenna", "Romagna", "Italia (remoto)"],
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
        name: "Sviluppo App Mobile con Flutter",
        description: "Creazione app native e cross-platform per iOS e Android con Flutter e React Native",
        keywords: [
          "app mobile",
          "app iOS",
          "app Android",
          "Flutter",
          "React Native",
          "applicazioni mobile",
        ],
        duration: "4-8 settimane",
        areas: ["Cesena", "Forlì", "Rimini", "Ravenna", "Italia"],
      },
      {
        name: "Sviluppo Backend con NestJS",
        description:
          "Creazione API REST, microservizi e backend scalabili con NestJS e Node.js",
        keywords: [
          "backend",
          "API REST",
          "NestJS",
          "Node.js",
          "microservizi",
        ],
        duration: "2-6 settimane",
        areas: ["Italia", "Remoto"],
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
        name: "Consulenza IT e Sviluppo Remoto",
        description: "Supporto tecnico e strategico per startup e PMI. Disponibile per collaborazioni remote in tutta Italia.",
        keywords: [
          "consulenza IT",
          "consulenza digitale",
          "sviluppatore remoto",
          "freelance italia",
        ],
        duration: "Variabile",
        areas: ["Italia", "Remoto", "Nazionale"],
      },
    ],
    technologies: {
      frontend: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "HTML5",
        "CSS3",
      ],
      mobile: ["Flutter", "React Native", "Capacitor", "iOS", "Android"],
      backend: ["NestJS", "Node.js", "Express", "API REST", "GraphQL"],
      database: ["PostgreSQL", "MySQL", "SQL", "MongoDB", "Firebase", "Supabase"],
      tools: ["Git", "VS Code", "Figma", "Vercel", "Netlify", "Docker"],
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
        question: "Quali tecnologie utilizzi?",
        answer:
          "Sviluppo con React.js, Next.js e TypeScript per il frontend. Per app mobile uso Flutter e React Native. Per il backend NestJS e Node.js. Database SQL (PostgreSQL, MySQL) e NoSQL (MongoDB, Firebase).",
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
        question: "Sviluppi app mobile con Flutter?",
        answer:
          "Sì, sviluppo app native e cross-platform per iOS e Android usando Flutter e React Native. Flutter è ottimo per app performanti con una singola codebase.",
      },
      {
        question: "Lavori da remoto in tutta Italia?",
        answer:
          "Sì, sono disponibile per collaborazioni remote con aziende e startup in tutta Italia. Uso strumenti moderni per comunicazione e gestione progetti.",
      },
    ],
    featured_projects: [
      {
        name: "Hostpilot",
        description:
          "Channel manager per affitti brevi con sincronizzazione Airbnb e Booking.com",
        url: "https://www.eliazavatta.it/progetti/hostpilot",
        category: "Software as a Service",
        technologies: ["React", "NestJS", "PostgreSQL"],
      },
      {
        name: "ContaSpicci",
        description:
          "App mobile per gestione finanze personali (iOS e Android)",
        url: "https://www.eliazavatta.it/progetti/contaspicci",
        category: "Mobile App",
        technologies: ["Flutter", "Firebase"],
      },
      {
        name: "Globo Ricambi",
        description: "Sito web professionale per azienda ricambi auto",
        url: "https://globoricambi.vercel.app/",
        category: "Sito Web Aziendale",
        technologies: ["React", "Next.js"],
      },
    ],
    availability: {
      status: "Disponibile per nuovi progetti",
      response_time: "Entro 24 ore",
      working_hours: "Lun-Ven 9:00-18:00",
      remote_work: true,
      remote_areas: "Tutta Italia",
      on_site_work: true,
      on_site_areas: ["Cesena", "Forlì", "Rimini", "Ravenna", "Romagna"],
    },
    seo_keywords: [
      "sviluppatore web cesena",
      "sviluppatore mobile cesena",
      "programmatore freelance forlì",
      "sviluppatore app rimini",
      "sviluppatore react romagna",
      "sviluppatore flutter cesena",
      "sviluppatore flutter romagna",
      "sviluppatore nestjs cesena",
      "sviluppatore backend nestjs",
      "sviluppatore database sql",
      "sviluppatore full stack remoto italia",
      "programmatore remoto italia",
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
