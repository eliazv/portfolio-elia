import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types/project";

type SimpleProjectCardProps = {
  project: Project;
};

const SimpleProjectCard: React.FC<SimpleProjectCardProps> = ({ project }) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Impedisce la propagazione se si clicca su un link interno
    if ((e.target as HTMLElement).closest('a[href^="http"]')) {
      return;
    }

    if (project.demoUrl) {
      window.open(project.demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer enhanced-card-hover magnetic-element animate-float-gentle border border-transparent hover:border-accent/20 backdrop-blur-sm"
      onClick={handleCardClick}
      style={{
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${4 + Math.random() * 2}s`,
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px] group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Overlay con effetto shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

        {/* App icon overlay - spostato in alto a sinistra e sempre visibile */}
        {project.logoImage && (
          <div className="absolute  bottom-4 left-4 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:translate-y-[-4px]">
            <div className="bg-white rounded-xl p-2 shadow-xl border border-white/30 backdrop-blur-sm group-hover:shadow-2xl group-hover:bg-white/95 transition-all duration-500 animate-morphing-border">
              <img
                src={project.logoImage}
                alt={`${project.title} icon`}
                className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        )}

        {/* Icone link - spostate o rimosse per non sovrapporsi con il logo */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 magnetic-element animate-pulse-glow"
            >
              <ExternalLink className="h-4 w-4 text-gray-700" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 magnetic-element animate-pulse-glow"
            >
              <Github className="h-4 w-4 text-gray-700" />
            </a>
          )}
        </div>
      </div>

      <div className="p-4 relative">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed line-clamp-5">
          {project.description}
        </p>

        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="text-xs text-primary font-medium flex items-center gap-1">
            Visita il sito
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleProjectCard;
