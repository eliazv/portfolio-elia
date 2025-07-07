import TiltedProjectCard from "@/components/TiltedProjectCard";
import type { Category, Project } from "@/types/project";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
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

  // Mostra solo la categoria "Dev" e nasconde la scritta "Dev" e la sezione "Altro"
  const categoryOrder: Category[] = ["Dev"];

  return (
    <section id="projects" className="py-10 bg-secondary/30 section-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block">
            <span className="relative z-10">I miei progetti</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
          </h2>
        </div>
        {/* Mostra solo i progetti della categoria Dev, senza intestazione */}
        {projectsByCategory["Dev"] && projectsByCategory["Dev"].length > 0 && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in">
              {projectsByCategory["Dev"].map((project) => (
                <TiltedProjectCard
                  key={project.id}
                  project={project}
                  category={"Dev"}
                  scrollToContact={scrollToContact}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
