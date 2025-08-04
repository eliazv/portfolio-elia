import React from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "@/types/project";

type SimpleProjectCardProps = {
  project: Project;
};

const SimpleProjectCard: React.FC<SimpleProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate(`/progetti/${project.slug}`)}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default SimpleProjectCard;