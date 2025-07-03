export type Technology =
  | "React"
  | "Node.js"
  | "TypeScript"
  | "MongoDB"
  | "Next.js"
  | "TailwindCSS"
  | "GraphQL"
  | "Flutter"
  | "Firebase"
  | "WordPress"
  | "Vite"
  | "PHP"
  | "Capacitor"
  | "shadcn-ui"
  | "Framer Motion"
  | "React Router";

export type Category =
  | "Dev"
  | "Mobile"
  | "E-commerce"
  | "Property Management"
  | "Altro";

export interface Project {
  id: number;
  title: string;
  description?: string; // opzionale, per retrocompatibilità
  image: string;
  logoImage?: string;
  technologies: Technology[];
  category: Category;
  githubUrl?: string;
  demoUrl?: string;
  contactBtn?: boolean;
  playStoreUrl?: string;
  appStoreUrl?: string;
  details?: {
    overview?: string; // markdown
    features?: string[];
    description?: string; // markdown per descrizione estesa generica
    publicSection?: string; // markdown - solo per progetti specifici come Immerso
    privateSection?: string; // markdown - solo per progetti specifici come Immerso
    gallery?: string[];
    links?: { label: string; url: string }[];
    // altri campi custom
  };
}
