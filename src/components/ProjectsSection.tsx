import SimpleProjectCard from "@/components/SimpleProjectCard";
import type { Category, Project } from "@/types/project";
import { projects } from "@/data/projects";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

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
  const devProjects = projectsByCategory["Dev"] || [];
  const { containerRef, visibleItems } = useStaggeredAnimation(devProjects.length, 150);

  return (
    <section id="projects" className="py-10 bg-secondary/30 section-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block animate-slide-in-top">
            <span className="relative z-10">I miei progetti</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1 animate-shimmer"></span>
          </h2>
        </div>
        {/* Mostra solo i progetti della categoria Dev, senza intestazione */}
        {devProjects.length > 0 && (
          <div ref={containerRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {devProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-700 ${
                    visibleItems[index]
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-12 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <SimpleProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
