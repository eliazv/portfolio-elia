import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project, Category } from "@/types/project";
import React from "react";

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

type ProjectCardProps = {
  project: Project;
  category: Category;
  openProjectDetails: (project: Project) => void;
  scrollToContact: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  category,
  openProjectDetails,
  scrollToContact,
}) => (
  <Card
    key={project.id}
    className={`overflow-hidden card-hover enhanced-card backdrop-blur-sm cursor-pointer transition-all duration-300 w-full min-w-[270px] max-w-[370px] mx-auto ${
      category === "Dev"
        ? "hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:border-green-300/50"
        : category === "Altro"
        ? "hover:shadow-[0_8px_30px_rgba(147,51,234,0.3)] hover:border-purple-300/50"
        : "hover:shadow-lg"
    }`}
    onClick={() => openProjectDetails(project)}
  >
    <div className="relative h-40 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-2xl"
      />
    </div>
    <CardContent className="p-4">
      <div className="inline-block bg-neutral-200/90 px-4 py-2 rounded-lg shadow-lg text-neutral-900 mb-4">
        <h3 className="text-lg font-semibold m-0 p-0 leading-tight">
          {project.title}
        </h3>
      </div>
      <div className="flex gap-2">
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className={`group h-8 ${
              category === "Dev"
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
        )}
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
        )}
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
        )}
        {project.contactBtn && (
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              scrollToContact();
            }}
            className={`h-8 hover:text-white ${
              category === "Dev"
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
);

export default ProjectCard;
