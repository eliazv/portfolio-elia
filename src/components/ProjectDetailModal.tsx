import React from "react";
import ReactMarkdown from "react-markdown";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  scrollToContact: () => void;
}

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

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  scrollToContact,
}) => {
  if (!project) return null;
  return (
    <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
      {/* Header sticky con titolo e X */}
      <div className="sticky top-0 z-20 bg-background/95 border-b border-border flex items-center justify-between px-6 py-4">
        <DialogTitle className="text-2xl font-bold m-0 p-0">
          {project.title}
        </DialogTitle>
        <button
          onClick={onClose}
          aria-label="Chiudi"
          className="text-2xl font-bold text-foreground/70 hover:text-foreground/100 transition-colors px-2"
        >
          ×
        </button>
      </div>
      {/* Corpo scrollabile */}
      <div className="max-h-[70vh] overflow-y-auto px-6 pb-6 pt-4">
        <div className="relative w-full h-72 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-transform duration-500"
          />
          {/* Logo overlay nel dialogo */}
          {project.logoImage && (
            <div className="absolute inset-0 flex items-center justify-start pl-8 rounded-lg">
              <img
                src={project.logoImage}
                alt={`${project.title} logo`}
                className="w-32 h-32 object-contain rounded-lg shadow-lg bg-white/90 p-4"
              />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 my-4">
          {project.technologies.map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="animate-pulse-light"
            >
              {tech}
            </Badge>
          ))}
        </div>
        {/* Overview */}
        {project.details?.overview && (
          <DialogDescription className="text-foreground text-base mb-2">
            {project.details.overview}
          </DialogDescription>
        )}
        {/* Features */}
        {project.details?.features && project.details.features.length > 0 && (
          <ul className="mb-4 list-disc list-inside text-foreground/80">
            {project.details.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
        {/* Descrizione estesa generica (markdown) */}
        {project.details?.description && (
          <div className="mb-4">
            <div className="prose prose-sm max-w-none text-foreground/90 [&>h1]:text-lg [&>h1]:font-bold [&>h1]:mb-2 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:mb-2 [&>h3]:text-sm [&>h3]:font-medium [&>h3]:mb-1 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1 [&>p]:mb-2">
              <ReactMarkdown>{project.details.description}</ReactMarkdown>
            </div>
          </div>
        )}
        {/* Sezione pubblica (solo per progetti specifici come Immerso) */}
        {project.details?.publicSection && (
          <div className="mb-2">
            <h4 className="font-semibold mt-4 mb-1 text-foreground">
              Sezione pubblica
            </h4>
            <div className="prose prose-sm max-w-none text-foreground/90 [&>h1]:text-lg [&>h1]:font-bold [&>h1]:mb-2 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:mb-2 [&>h3]:text-sm [&>h3]:font-medium [&>h3]:mb-1 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1 [&>p]:mb-2">
              <ReactMarkdown>{project.details.publicSection}</ReactMarkdown>
            </div>
          </div>
        )}
        {/* Sezione privata (solo per progetti specifici come Immerso) */}
        {project.details?.privateSection && (
          <div className="mb-2">
            <h4 className="font-semibold mt-4 mb-1 text-foreground">
              Backoffice
            </h4>
            <div className="prose prose-sm max-w-none text-foreground/90 [&>h1]:text-lg [&>h1]:font-bold [&>h1]:mb-2 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:mb-2 [&>h3]:text-sm [&>h3]:font-medium [&>h3]:mb-1 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1 [&>p]:mb-2">
              <ReactMarkdown>{project.details.privateSection}</ReactMarkdown>
            </div>
          </div>
        )}
        {/* Gallery */}
        {project.details?.gallery && project.details.gallery.length > 1 && (
          <div className="flex gap-2 mt-4 mb-2">
            {project.details.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={project.title + " gallery " + idx}
                className="w-24 h-16 object-cover rounded shadow"
              />
            ))}
          </div>
        )}
        {/* Links aggiuntivi */}
        {project.details?.links && project.details.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.details.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {/* Fallback descrizione se non c'è overview/details */}
        {!project.details && project.description && (
          <DialogDescription className="text-foreground text-base">
            {project.description}
          </DialogDescription>
        )}
        <div className="flex gap-4 mt-6">
          {project.githubUrl && (
            <Button variant="outline" asChild className="group">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />{" "}
                Visualizza codice
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild className="group">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />{" "}
                Visualizza Sito
              </a>
            </Button>
          )}
          {project.playStoreUrl && (
            <Button asChild className="group bg-green-600 hover:bg-green-700">
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <PlayStoreIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />{" "}
                Scarica su Play Store
              </a>
            </Button>
          )}
          {project.appStoreUrl && (
            <Button asChild className="group bg-blue-600 hover:bg-blue-700">
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <AppStoreIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />{" "}
                Scarica su App Store
              </a>
            </Button>
          )}
          {project.contactBtn && (
            <Button
              variant="outline"
              onClick={() => {
                onClose();
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
      </div>
    </DialogContent>
  );
};

export default ProjectDetailModal;
