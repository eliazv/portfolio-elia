"use client";

import { useState, useEffect } from "react";
import SimpleProjectCard from "@/components/SimpleProjectCard";
import type { Category, Project } from "@/types/project";
import { projects } from "@/data/projects";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsByCategory: Record<Category, Project[]> = projects.reduce(
    (acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    },
    {} as Record<Category, Project[]>,
  );

  // Mostra solo la categoria "Dev" e nasconde la scritta "Dev" e la sezione "Altro"
  const devProjects = projectsByCategory["Dev"] || [];
  const displayedProjects = showAll ? devProjects : devProjects.slice(0, 3);
  const { containerRef, visibleItems } = useStaggeredAnimation(
    displayedProjects.length,
    150,
  );

  useEffect(() => {
    const handler = () => setShowAll(true);
    window.addEventListener("expandProjects", handler as EventListener);
    return () =>
      window.removeEventListener("expandProjects", handler as EventListener);
  }, []);

  return (
    <section id="projects" className="py-10 bg-secondary/30 section-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading relative inline-block animate-slide-in-top">
            <span className="relative z-10">I miei progetti</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
            {/* <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1 animate-shimmer"></span> */}
          </h2>
          <div className="flex gap-2">
            <a
              href="https://play.google.com/store/apps/dev?id=6125059238513590938"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-md border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/960px-Google_Play_2022_icon.svg.png"
                  alt="Google Play"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                  Google Play
                </span>
              </div>
            </a>
            <a
              href="https://apps.apple.com/us/developer/elia-zavatta/id1831227514"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-md border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                  alt="App Store"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* Mostra solo i progetti della categoria Dev, senza intestazione */}
        {displayedProjects.length > 0 && (
          <div ref={containerRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-700 ${
                    visibleItems[index]
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <SimpleProjectCard project={project} />
                </div>
              ))}
            </div>
            {devProjects.length > 3 && (
              <div className="mt-12 text-center">
                {showAll ? (
                  <Button
                    size="lg"
                    onClick={() => {
                      setShowAll(false);
                      const el = document.getElementById("projects");
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    className="group magnetic-element enhanced-card-hover animate-pulse-glow-reverse bg-background/10 border border-foreground/10 text-foreground"
                  >
                    <span className="inline-flex items-center">
                      Mostra meno
                      <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    </span>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={() => setShowAll(true)}
                    className="group magnetic-element enhanced-card-hover animate-pulse-glow"
                  >
                    <span className="inline-flex items-center">
                      Mostra altri progetti
                      <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
