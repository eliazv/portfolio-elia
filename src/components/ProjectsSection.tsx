import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Maximize, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Custom icons for app stores
const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const AppStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.18 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
);

// Project type definition
type Technology =
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
  | "PHP";
type Category =
  | "Web"
  | "Mobile"
  | "E-commerce"
  | "Property Management"
  | "Altro";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  logoImage?: string; // Nuova proprietà per il logo overlay
  technologies: Technology[];
  category: Category;
  githubUrl?: string;
  demoUrl?: string;
  contactBtn?: boolean;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Marafone Romagnolo",
    description:
      "Marafone Romagnolo è il gioco di carte tradizionale più amato della Romagna, ora disponibile sul tuo smartphone! Vivi tutta l’autenticità del gioco romagnolo con regole fedeli alla tradizione e un’atmosfera che richiama le vere sfide tra amici.",
    image:
      "https://shop.dalnegro.com/wp-content/plugins/woocommerce-onpage/storage/cache/b8069a05a64bcbb4d8926c2488ac627e913e8e39.900x.png/dalnegro-mazzo-carte-regionale-napoletane-pro-astuccio-rosso-02.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80",
    logoImage: "/marafone.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa",
    // appStoreUrl: "https://apps.apple.com/app",
  },
  {
    id: 4,
    title: "Globo Ricambi",
    description:
      "Sito web vetrina sviluppato per una piccola attività di ricambi auto, con layout moderno e responsivo per presentare i servizi e i contatti.",
    image:
      "https://globoricambi.weebly.com/uploads/1/1/6/5/116531585/img-20200505-154043_orig.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    logoImage: "/globo.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    demoUrl: "https://globoricambi.vercel.app/",
  },
  {
    id: 2,
    title: "ToolKit - Strumenti Online",
    description:
      "Suite completa di strumenti online gratuiti per la produttività quotidiana. Include funzionalità per gestire PDF, manipolare testo, elaborare immagini e eseguire calcoli. Un'applicazione web moderna e user-friendly che semplifica le attività digitali di tutti i giorni.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    demoUrl: "https://toolkit-suite.vercel.app/",
  },
  {
    id: 3,
    title: "Casa Vacanze in Affitto",
    description:
      "Ho sviluppato un sito web per una casa vacanze in affitto, completo di galleria fotografica, descrizione dettagliata e form di contatto per le richieste dirette. Inoltre c'è una sezione privata per controllare e le prenotazioni",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    demoUrl: "https://immerso-nella-pineta.lovable.app/",
  },
  {
    id: 5,
    title: "Diario personale",
    description:
      "Applicazione web per la gestione di diari personali con funzionalità di ricerca e categorizzazione.",
    image:
      "https://www.quotus.it/wp-content/uploads/2016/08/quotus-blog-7-buoni-motivi-per-iniziare-subito-a-scrivere-un-diario-personale.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    // githubUrl: "https://github.com/eliazv/minima-diary",
    demoUrl: "https://minima-diary.lovable.app/",
  },
  {
    id: 6,
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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollToContact = () => {
    const contactSection = document.getElementById("informazioni-contatto");
    if (contactSection) {
      // Aggiungi un piccolo delay per assicurarsi che il DOM sia pronto
      setTimeout(() => {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      console.warn("Sezione 'Informazioni di contatto' non trovata");
    }
  };

  const projectsByCategory: Record<Category, Project[]> = projects.reduce(
    (acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    },
    {} as Record<Category, Project[]>
  );

  const categoryOrder: Category[] = ["Web", "Altro"];

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-10 bg-secondary/30 section-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block">
            <span className="relative z-10">I miei progetti</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Una selezione dei miei lavori
          </p>
        </div>{" "}
        {categoryOrder.map(
          (category) =>
            projectsByCategory[category] &&
            projectsByCategory[category].length > 0 && (
              <div
                key={category}
                className={`mb-20 relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
                  category === "Web"
                    ? `
                      bg-gradient-to-br from-green-50/40 via-emerald-50/30 to-green-100/40
                      shadow-[0_0_80px_rgba(34,197,94,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]
                      border border-green-200/50
                      before:absolute before:inset-0 before:rounded-3xl 
                      before:bg-gradient-to-r before:from-green-400/10 before:to-emerald-400/10
                      before:blur-xl before:-z-10
                      hover:shadow-[0_0_120px_rgba(34,197,94,0.35)]
                      hover:scale-[1.02]
                    `
                    : category === "Altro"
                    ? `
                      bg-gradient-to-br from-purple-50/40 via-violet-50/30 to-purple-100/40
                      shadow-[0_0_80px_rgba(147,51,234,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]
                      border border-purple-200/50
                      before:absolute before:inset-0 before:rounded-3xl 
                      before:bg-gradient-to-r before:from-purple-400/10 before:to-violet-400/10
                      before:blur-xl before:-z-10
                      hover:shadow-[0_0_120px_rgba(147,51,234,0.35)]
                      hover:scale-[1.02]
                    `
                    : "bg-gray-50/30"
                }`}
              >
                {" "}
                <h3
                  className={`text-2xl font-bold mb-8 pb-4 relative ${
                    category === "Web"
                      ? `
                        text-green-800 
                        after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1
                        after:bg-gradient-to-r after:from-green-400 after:to-emerald-400
                        after:rounded-full after:shadow-lg after:shadow-green-400/50
                      `
                      : category === "Altro"
                      ? `
                        text-purple-800
                        after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1
                        after:bg-gradient-to-r after:from-purple-400 after:to-violet-400
                        after:rounded-full after:shadow-lg after:shadow-purple-400/50
                      `
                      : "border-b"
                  }`}
                >
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                  {" "}
                  {projectsByCategory[category].map((project) => (
                    <Card
                      key={project.id}
                      className={`overflow-hidden card-hover enhanced-card backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                        category === "Web"
                          ? "hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:border-green-300/50"
                          : category === "Altro"
                          ? "hover:shadow-[0_8px_30px_rgba(147,51,234,0.3)] hover:border-purple-300/50"
                          : "hover:shadow-lg"
                      }`}
                      onClick={() => openProjectDetails(project)}
                    >
                      {" "}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />{" "}
                        {/* Logo overlay */}
                        {project.logoImage && (
                          <div className="absolute inset-0 flex items-center justify-start pl-4 bg-black/30">
                            <img
                              src={project.logoImage}
                              alt={`${project.title} logo`}
                              className="w-20 h-20 object-contain rounded-lg shadow-lg bg-white/90 p-2"
                            />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 text-xs mb-3 line-clamp-2">
                          {project.description}
                        </p>{" "}
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className={`group h-8 ${
                                category === "Web"
                                  ? "hover:border-green-400 hover:text-green-700"
                                  : category === "Altro"
                                  ? "hover:border-purple-400 hover:text-purple-700"
                                  : ""
                              }`}
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github className="mr-1 h-3 w-3 group-hover:rotate-12 transition-transform" />{" "}
                                Codice
                              </a>
                            </Button>
                          )}{" "}
                          {project.demoUrl && (
                            <Button
                              size="sm"
                              asChild
                              className={`group h-8 bg-blue-600 hover:bg-blue-700`}
                            >
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="mr-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />{" "}
                                Sito
                              </a>
                            </Button>
                          )}{" "}
                          {project.playStoreUrl && (
                            <Button
                              size="sm"
                              asChild
                              className="group h-8 bg-green-600 hover:bg-green-700 text-white border-0"
                            >
                              <a
                                href={project.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <PlayStoreIcon className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />{" "}
                                Play Store
                              </a>
                            </Button>
                          )}
                          {project.appStoreUrl && (
                            <Button
                              size="sm"
                              asChild
                              className="group h-8 bg-blue-600 hover:bg-blue-700 text-white border-0"
                            >
                              <a
                                href={project.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <AppStoreIcon className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />{" "}
                                App Store
                              </a>
                            </Button>
                          )}{" "}
                          {project.contactBtn && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                scrollToContact();
                              }}
                              className={`h-8 hover:text-white ${
                                category === "Web"
                                  ? "hover:border-green-400 hover:bg-green-600"
                                  : category === "Altro"
                                  ? "hover:border-purple-400 hover:bg-purple-600"
                                  : ""
                              }`}
                            >
                              Contattami
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
        )}
        <Dialog
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        >
          {selectedProject && (
            <DialogContent className="max-w-4xl w-full">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>{" "}
              <div className="relative w-full h-72 overflow-hidden rounded-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-transform duration-500"
                />
                {/* Logo overlay nel dialogo */}
                {selectedProject.logoImage && (
                  <div className="absolute inset-0 flex items-center justify-start pl-8 bg-black/30 rounded-lg">
                    <img
                      src={selectedProject.logoImage}
                      alt={`${selectedProject.title} logo`}
                      className="w-32 h-32 object-contain rounded-lg shadow-lg bg-white/90 p-4"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="animate-pulse-light"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <DialogDescription className="text-foreground text-base">
                {selectedProject.description}
              </DialogDescription>{" "}
              <div className="flex gap-4 mt-6">
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild className="group">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />{" "}
                      Visualizza codice
                    </a>
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button asChild className="group">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />{" "}
                      Visualizza Sito
                    </a>
                  </Button>
                )}{" "}
                {selectedProject.playStoreUrl && (
                  <Button
                    asChild
                    className="group bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={selectedProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <PlayStoreIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />{" "}
                      Scarica su Play Store
                    </a>
                  </Button>
                )}
                {selectedProject.appStoreUrl && (
                  <Button
                    asChild
                    className="group bg-blue-600 hover:bg-blue-700"
                  >
                    <a
                      href={selectedProject.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <AppStoreIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />{" "}
                      Scarica su App Store
                    </a>
                  </Button>
                )}{" "}
                {selectedProject.contactBtn && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedProject(null); // Chiudi il dialogo prima
                      setTimeout(() => {
                        scrollToContact();
                      }, 100);
                    }}
                    className="hover:text-white hover:bg-primary"
                  >
                    Contattami per maggiori informazioni
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
