import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/types/project";
import React from "react";

type ProjectCardProps = {
  project: Project;
  openProjectDetails: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  openProjectDetails,
}) => (
  <Card
    key={project.id}
    className="overflow-hidden cursor-pointer transition-all duration-300 w-full min-w-[270px] max-w-[370px] mx-auto hover:shadow-lg group"
    onClick={() => openProjectDetails(project)}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-foreground">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {project.description && project.description.length > 120
          ? `${project.description.substring(0, 120)}...`
          : project.description || ''}
      </p>
    </CardContent>
  </Card>
);

export default ProjectCard;
