import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Maximize } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  technologies: Technology[];
  category: Category;
  githubUrl?: string;
  demoUrl?: string;
  contactBtn?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Maraffa",
    description:
      "Applicazione web che permette di giocare al gioco della maraffa romagnola, con interfaccia moderna e responsive.",
    image:
      "https://shop.dalnegro.com/wp-content/plugins/woocommerce-onpage/storage/cache/b8069a05a64bcbb4d8926c2488ac627e913e8e39.900x.png/dalnegro-mazzo-carte-regionale-napoletane-pro-astuccio-rosso-02.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Sito Appartamento in Affitto",
    description:
      "Ho sviluppato un sito web per il mio appartamento in affitto, completo di galleria fotografica, descrizione dettagliata e form di contatto per le richieste dirette.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    demoUrl: "https://immerso-nella-pineta.lovable.app/",
  },
  {
    id: 3,
    title: "Globo Ricambi",
    description:
      "Sito web vetrina sviluppato per una piccola attività di ricambi auto, con layout moderno e responsivo per presentare i servizi e i contatti.",
    image:
      "https://globoricambi.weebly.com/uploads/1/1/6/5/116531585/img-20200505-154043_orig.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    demoUrl: "https://globo-ricambi-webshop.lovable.app/",
  },
  {
    id: 4,
    title: "Diario",
    description:
      "Applicazione web per la gestione di diari personali con funzionalità di ricerca e categorizzazione.",
    image:
      "https://www.quotus.it/wp-content/uploads/2016/08/quotus-blog-7-buoni-motivi-per-iniziare-subito-a-scrivere-un-diario-personale.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    category: "Web",
    githubUrl: "https://github.com/eliazv/minima-diary",
    demoUrl: "https://minima-diary.lovable.app/",
  },
  {
    id: 5,
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
    id: 6,
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
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: (Category | "All")[] = [
    "All",
    "Web",
    "Altro",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            I miei progetti
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Una selezione dei miei lavori recenti che mostrano le mie competenze
            in vari campi dello sviluppo web e gestione progetti.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-background hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden card-hover border-0"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background/90 transition-colors"
                >
                  <Maximize className="h-4 w-4" />
                </button>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Github className="mr-1 h-4 w-4" /> Codice
                      </a>
                    </Button>
                  )}

                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" /> Sito
                      </a>
                    </Button>
                  )}

                  {project.contactBtn && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="mailto:zavattaelia@gmail.com"
                        className="inline-flex items-center"
                      >
                        Contattami
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-4xl w-full">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="relative w-full h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <DialogDescription className="text-foreground text-base">
                {selectedProject.description}
              </DialogDescription>

              <div className="flex gap-4 mt-6">
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" /> Visualizza codice
                    </a>
                  </Button>
                )}

                {selectedProject.demoUrl && (
                  <Button asChild>
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Visualizza demo
                    </a>
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
