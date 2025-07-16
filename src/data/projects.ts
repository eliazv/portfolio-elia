import type { Project } from "@/types/project";

// Custom icons (PlayStoreIcon, AppStoreIcon) rimangono nel componente UI, qui solo i dati

export const projects: Project[] = [
  {
    id: 1,
    slug: "marafone-romagnolo",
    title: "Marafone Romagnolo",
    description:
      "Marafone Romagnolo è il gioco di carte tradizionale più amato della Romagna, ora disponibile sul tuo smartphone! Vivi tutta l’autenticità del gioco romagnolo con regole fedeli alla tradizione e un’atmosfera che richiama le vere sfide tra amici.",
    image:
      "https://shop.dalnegro.com/wp-content/plugins/woocommerce-onpage/storage/cache/b8069a05a64bcbb4d8926c2488ac627e913e8e39.900x.png/dalnegro-mazzo-carte-regionale-napoletane-pro-astuccio-rosso-02.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80",
    logoImage: "/marafone.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Dev",
    demoUrl: "https://marafone-romagnolo.it/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa",
    // appStoreUrl: "https://apps.apple.com/app",
  },
  {
    id: 4,
    slug: "globo-ricambi",
    title: "Globo Ricambi",
    description:
      "Sito web moderno e professionale per Globo Ricambi, azienda specializzata in ricambi per auto d'epoca dal 1986 a Gambettola (FC).",
    image: "globo/globo-desk.png",
    logoImage: "/globo.png",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "shadcn-ui",
      "Framer Motion",
      "React Router",
    ],
    category: "Dev",
    demoUrl: "https://globoricambi.vercel.app/",
  },
  {
    id: 3,
    slug: "casa-vacanze",
    title: "Casa Vacanze in Affitto",
    description:
      "Gestione e promozione di una Casa Vacanze con backoffice dedicato per ottimizzare prenotazioni e ricavi.",
    image: "/immerso/immerso-desktop.png",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Capacitor",
      "shadcn-ui",
    ],
    category: "Dev",
    demoUrl: "https://immerso-nella-pineta.vercel.app/",
    logoImage: "/immerso/targhetta.jpg",
  },
  {
    id: 2,
    slug: "toolkit",
    title: "ToolKit - Strumenti Online",
    description:
      "Suite completa di strumenti online gratuiti per la produttività quotidiana. Include funzionalità per gestire PDF, manipolare testo, elaborare immagini e eseguire calcoli. Un'applicazione web moderna e user-friendly che semplifica le attività digitali di tutti i giorni.",
    image: "toolkit-app/toolkit-desk.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Dev",
    demoUrl: "https://toolkit-suite.vercel.app/",
  },
  {
    id: 5,
    slug: "diario-personale",
    title: "Diario personale",
    description:
      "Applicazione web per la gestione di diari personali con funzionalità di ricerca e categorizzazione.",
    image: "diary-app/diary-desk.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Dev",
    // githubUrl: "https://github.com/eliazv/minima-diary",
    demoUrl: "https://minima-diary.lovable.app/",
  },
  {
    id: 8,
    slug: "inzona",
    title: "inZona",
    description:
      "App mobile per scoprire tutti gli eventi della Romagna in un'unica piattaforma. Sagre, concerti, mostre e feste vicino a te.",
    image: "/placeholder.svg",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    category: "Dev",
    // demoUrl: "https://inzona.app/",
  },
  {
    id: 6,
    slug: "vendita-online",
    title: "Vendita Online",
    description:
      "Esperienza diretta nella vendita online tramite portali come eBay e Vinted, con gestione di spedizioni, comunicazione clienti e ottimizzazione delle inserzioni.",
    image:
      "https://www.pixartprinting.it/blog/wp-content/uploads/2021/10/Siti_Vendita_On_Line.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: [],
    category: "Altro",
    contactBtn: true,
  },
  {
    id: 7,
    slug: "property-management",
    title: "Property Management",
    description:
      "Gestisco direttamente appartamenti su piattaforme come Airbnb e Booking, occupandomi di sincronizzazione calendari, comunicazione con gli ospiti e ottimizzazione delle performance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3-BLfV4xJDgA05snZ2RAC4-nEk6zOCrmMw&s?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: [],
    category: "Altro",
    contactBtn: true,
  },
];
