import type { Project } from "@/types/project";

// Custom icons (PlayStoreIcon, AppStoreIcon) rimangono nel componente UI, qui solo i dati

export const projects: Project[] = [
  {
    id: 1,
    slug: "marafone-romagnolo",
    title: "Marafone Romagnolo",
    description:
      "App mobile ispirata a un tradizionale gioco di carte romagnolo, con modalità multiplayer online e single player contro l'IA",
    image:
      "https://shop.dalnegro.com/wp-content/plugins/woocommerce-onpage/storage/cache/b8069a05a64bcbb4d8926c2488ac627e913e8e39.900x.png/dalnegro-mazzo-carte-regionale-napoletane-pro-astuccio-rosso-02.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80",
    logoImage: "/images/projects/marafone.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Dev",
    demoUrl: "https://marafone-romagnolo.it/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa",
    // appStoreUrl: "https://apps.apple.com/app",
  },
  {
    id: 2,
    slug: "sette-e-mezzo",
    title: "Sette e Mezzo",
    description:
      "Il classico gioco di carte italiano 7 e mezzo. Gioca offline con carte napoletane, piacentine e altri mazzi regionali. Il vero blackjack italiano!",
    image:
      "https://shop.dalnegro.com/wp-content/plugins/woocommerce-onpage/storage/cache/b8069a05a64bcbb4d8926c2488ac627e913e8e39.900x.png/dalnegro-mazzo-carte-regionale-napoletane-pro-astuccio-rosso-02.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80",
    logoImage:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ac/81/47/ac8147ec-b495-8f4f-1b49-c69906b18317/Placeholder.mill/400x400bb-75.webp",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Dev",
    demoUrl: "/progetti/sette-e-mezzo",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.eliazavatta.settemezzo",
    appStoreUrl: "https://apps.apple.com/it/app/id6753985213",
  },
  {
    id: 3,
    slug: "globo-ricambi",
    title: "Globo Ricambi",
    description:
      "Sito web moderno e professionale per Globo Ricambi, azienda specializzata in ricambi per auto d'epoca",
    image: "/images/projects/globo/globo-desk.png",
    logoImage: "/images/projects/globo.png",
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
    id: 4,
    slug: "casa-vacanze",
    title: "Casa Vacanze in Affitto",
    description:
      "Sito Web per promozione e gestione di una Casa Vacanze, con backoffice dedicato per controllare prenotazioni e ricavi",
    image: "/images/projects/immerso/immerso-desktop.png",
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
    logoImage: "/images/projects/immerso/targhetta.jpg",
  },
  // {
  //   id: 4,
  //   slug: "contaspicci",
  //   title: "ContaSpicci",
  //   description:
  //     "App mobile per la gestione delle finanze personali. Permette di monitorare entrate, spese e investimenti, con grafici intuitivi e statistiche automatiche. Semplice, potente e completamente offline-friendly.",
  //   image: "sfondo.jpg",
  //   technologies: [],
  //   category: "Dev",
  //   demoUrl: "/contaspicci",
  //   logoImage: "/contaspicci.jpg",
  // },
  {
    id: 5,
    slug: "scadenzario",
    title: "Scadenzario",
    description:
      "App per gestire promemoria e scadenze di bollette, documenti, medicinali e abbonamenti. Interfaccia minimale con notifiche smart e backup automatico. Ideale per chi vuole avere tutto sotto controllo.",
    image: "/images/projects/scadenzario.png",
    technologies: [],
    category: "Dev",
    demoUrl: "/scadenzario",
    logoImage: "/images/projects/scadenzario.png",
  },
  {
    id: 6,
    slug: "hostpilot",
    title: "Hostpilot",
    description:
      "Piattaforma intelligente per gestire affitti e prenotazioni, con dashboard centralizzata, sincronizzazione calendari e automazioni per host professionali.",
    image: "/images/projects/hostpilot.svg",
    technologies: ["React", "TypeScript", "Node.js"],
    category: "Dev",
    demoUrl: "/hostpilot",
    logoImage: "/images/projects/hostpilot.svg",
  },

  // {
  //   id: 2,
  //   slug: "toolkit",
  //   title: "ToolKit - Strumenti Online",
  //   description:
  //     "Suite completa di strumenti online gratuiti per la produttività quotidiana. Include funzionalità per gestire PDF, manipolare testo, elaborare immagini e eseguire calcoli. Un'applicazione web moderna e user-friendly che semplifica le attività digitali di tutti i giorni.",
  //   image: "toolkit-app/toolkit-desk.png",
  //   technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
  //   category: "Dev",
  //   demoUrl: "https://toolkit-suite.vercel.app/",
  // },
  // {
  //   id: 5,
  //   slug: "diario-personale",
  //   title: "Diario personale",
  //   description:
  //     "Applicazione web per la gestione di diari personali con funzionalità di ricerca e categorizzazione.",
  //   image: "diary-app/diary-desk.png",
  //   technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
  //   category: "Dev",
  //   // githubUrl: "https://github.com/eliazv/minima-diary",
  //   demoUrl: "https://minima-diary.lovable.app/",
  // },
  // {
  //   id: 8,
  //   slug: "inzona",
  //   title: "inZona",
  //   description:
  //     "App mobile per scoprire tutti gli eventi della Romagna in un'unica piattaforma. Sagre, concerti, mostre e feste vicino a te.",
  //   image: "/placeholder.svg",
  //   technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
  //   category: "Dev",
  //   // demoUrl: "https://inzona.app/",
  // },
  // {
  //   id: 6,
  //   slug: "vendita-online",
  //   title: "Vendita Online",
  //   description:
  //     "Esperienza diretta nella vendita online tramite portali come eBay e Vinted, con gestione di spedizioni, comunicazione clienti e ottimizzazione delle inserzioni.",
  //   image:
  //     "https://www.pixartprinting.it/blog/wp-content/uploads/2021/10/Siti_Vendita_On_Line.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   technologies: [],
  //   category: "Altro",
  //   contactBtn: true,
  // },
  // {
  //   id: 7,
  //   slug: "property-management",
  //   title: "Property Management",
  //   description:
  //     "Gestisco direttamente appartamenti su piattaforme come Airbnb e Booking, occupandomi di sincronizzazione calendari, comunicazione con gli ospiti e ottimizzazione delle performance.",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3-BLfV4xJDgA05snZ2RAC4-nEk6zOCrmMw&s?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   technologies: [],
  //   category: "Altro",
  //   contactBtn: true,
  // },
];
