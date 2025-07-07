import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Project, Category } from "@/types/project";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

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

type TiltedProjectCardProps = {
  project: Project;
  category: Category;
  scrollToContact: () => void;
};

const TiltedProjectCard: React.FC<TiltedProjectCardProps> = ({
  project,
  category,
  scrollToContact,
}) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });
  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.12);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{ height: "300px", width: "100%" }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/progetti/${project.id}`)}
    >
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{ width: "100%", height: "300px", rotateX, rotateY, scale }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 object-cover rounded-2xl will-change-transform [transform:translateZ(0)] border border-neutral-200 shadow-lg"
          style={{ width: "100%", height: "300px" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full p-4 z-10 [transform:translateZ(40px)]"
          style={{ opacity: 1 }}
        >
          <div className="flex items-center gap-2 [transform:translateZ(40px)] whitespace-nowrap overflow-x-auto">
            <span className="inline-block bg-neutral-400/70 px-3 py-1.5 rounded-[22px]  text-white text-base font-bold tracking-tight whitespace-nowrap drop-shadow-lg border border-white/10">
              {project.title}
            </span>
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className={`group h-8 bg-white/90 text-black border-white/30 hover:bg-white hover:text-green-700 ${
                  category === "Dev"
                    ? "hover:border-green-400"
                    : category === "Altro"
                    ? "hover:border-purple-400"
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
                className="group h-8 min-w-[50px] max-w-[100px] w-auto p-0 flex items-center justify-center bg-blue-500/90 hover:bg-blue-500/90 rounded-[22px] shadow-lg border border-white/10"
                style={{ height: "2.25rem" }}
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-auto h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
                </a>
              </Button>
            )}
            {project.playStoreUrl && (
              <Button
                size="sm"
                asChild
                className="group h-8 min-w-[50px] max-w-[100px] w-auto p-0 flex items-center justify-center bg-green-500/90 hover:bg-green-600/90 rounded-[22px] shadow-lg border border-white/10"
                style={{ height: "2.25rem" }}
              >
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-auto h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlayStoreIcon className="h-5 w-5 group-hover:scale-110 transition-transform text-white" />
                </a>
              </Button>
            )}
            {project.appStoreUrl && (
              <Button
                size="sm"
                asChild
                className="group h-8 bg-blue-600/90 hover:bg-blue-700/90 text-white border-0"
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
                className={`h-8 hover:text-white bg-white/90 text-black border-white/30 hover:bg-green-600/90 ${
                  category === "Dev"
                    ? "hover:border-green-400"
                    : category === "Altro"
                    ? "hover:border-purple-400 hover:bg-purple-600/90"
                    : ""
                }`}
              >
                Contattami
              </Button>
            )}
          </div>
          {/* Descrizione su tooltip/freccia */}
        </motion.div>
      </motion.div>
      <motion.figcaption
        className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
        style={{ x, y, opacity, rotate: rotateFigcaption }}
      >
        {project.description}
      </motion.figcaption>
    </figure>
  );
};

export default TiltedProjectCard;
