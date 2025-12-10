/**
 * Utility per generazione JSON-LD strutturato per SEO AI-friendly
 */

type FAQItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  url: string;
};

type SoftwareAppData = {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  price?: string;
  priceCurrency?: string;
  author: string;
  image?: string;
  url?: string;
};

type ProductData = {
  name: string;
  description: string;
  category?: string;
  author: string;
  image?: string;
  url?: string;
};

/**
 * Genera JSON-LD per FAQPage
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Genera JSON-LD per BreadcrumbList
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Genera JSON-LD per SoftwareApplication (app mobile/web)
 */
export function generateSoftwareAppSchema(data: SoftwareAppData) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.name,
    description: data.description,
    applicationCategory: data.applicationCategory,
    operatingSystem: data.operatingSystem || "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: data.price || "0",
      priceCurrency: data.priceCurrency || "EUR",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Person",
      name: data.author,
      url: "https://www.eliazavatta.it/",
    },
    ...(data.image && { image: data.image }),
    ...(data.url && { url: data.url }),
  };
}

/**
 * Genera JSON-LD per Product (progetti/servizi)
 */
export function generateProductSchema(data: ProductData) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    ...(data.category && { category: data.category }),
    brand: {
      "@type": "Person",
      name: data.author,
      url: "https://www.eliazavatta.it/",
    },
    ...(data.image && { image: data.image }),
    ...(data.url && { url: data.url }),
  };
}

/**
 * Genera JSON-LD per Person (autore)
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elia Zavatta",
    url: "https://www.eliazavatta.it/",
    jobTitle: "Sviluppatore Web e Mobile Freelance",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cesena",
      addressRegion: "Emilia-Romagna",
      addressCountry: "IT",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Mobile Development",
      "Web Development",
      "E-commerce",
    ],
  };
}

/**
 * Combina più schemi JSON-LD in un @graph
 */
export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

/**
 * Serializza schema JSON-LD come stringa (da usare in dangerouslySetInnerHTML)
 */
export function serializeJSONLD(schema: object): string {
  return JSON.stringify(schema);
}

/**
 * FAQ predefinite per progetti
 */
export const commonProjectFAQs = {
  contact: {
    question: "Come posso richiedere un progetto simile?",
    answer:
      "Contattami tramite il form nella sezione Contatti o scrivi a info@eliazavatta.it. Rispondo entro 24 ore.",
  },
  timeline: {
    question: "Quanto tempo serve per sviluppare un progetto simile?",
    answer:
      "Dipende dalla complessità, ma in media 2-4 settimane per progetti web e 4-8 settimane per app mobile complete.",
  },
  cost: {
    question: "Quanto costa un progetto di questo tipo?",
    answer:
      "Il costo varia in base alle funzionalità richieste. Contattami per un preventivo personalizzato gratuito.",
  },
};
