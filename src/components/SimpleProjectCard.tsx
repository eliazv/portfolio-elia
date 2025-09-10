import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types/project";

type SimpleProjectCardProps = {
  project: Project;
};

const SimpleProjectCard: React.FC<SimpleProjectCardProps> = ({ project }) => {
  const handleCardClick = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-accent/20"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* App icon overlay - always visible and bigger */}
        {project.logoImage && (
          <div className="absolute bottom-4 left-4 transition-all duration-300 transform group-hover:scale-110">
            <div className="bg-white rounded-xl p-2 shadow-xl border border-white/30 backdrop-blur-sm">
              <img
                src={project.logoImage}
                alt={`${project.title} icon`}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demoUrl && (
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
              <ExternalLink className="h-4 w-4 text-gray-700" />
            </div>
          )}
          {project.githubUrl && (
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
              <Github className="h-4 w-4 text-gray-700" />
            </div>
          )}
        </div>
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
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
