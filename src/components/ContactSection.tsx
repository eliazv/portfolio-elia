import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AtSign,
  Code,
  Database,
  Github,
  Layout,
  MapPin,
  PhoneCall,
  Smartphone,
} from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const techStack = [
  {
    name: "React",
    icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/react/react-original-wordmark.svg"
        alt="React"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "HTML5",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <img
        src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
        alt="Tailwind"
        className="h-8 w-8"
      />
    ),
  },
];

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: techRef, visibleItems: techVisible } =
    useStaggeredAnimation(techStack.length, 100);

  return (
    <div id="contact" ref={elementRef}>
      <div className="space-y-8">
        {/* Header with accent line */}
        <div
          className={`relative transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 animate-text-focus-in"
            style={{ animationDelay: isVisible ? "0.2s" : "none" }}
          >
            Contattami
          </h2>
          <div
            className={`w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${
              isVisible ? "w-16" : "w-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          ></div>

          {/* Main content card */}
          <div
            className={`bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-8 mt-8 border border-accent/10 backdrop-blur-sm shadow-lg enhanced-card-hover transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Intro message with better styling */}
            <div
              className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8 border border-primary/20 enhanced-card-hover animate-morphing-border transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <p
                className={`text-foreground/90 leading-relaxed text-lg animate-reveal-text ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "0.8s" }}
              >
                Hai un{" "}
                <span className="font-semibold text-primary">
                  progetto interessante
                </span>{" "}
                in mente? O magari vuoi confrontarti su qualche aspetto tecnico?
              </p>
              <p
                className={`text-foreground/80 mt-2 animate-reveal-text ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "1s" }}
              >
                Sono sempre disponibile per una{" "}
                <span className="font-semibold text-accent">chiacchierata</span>{" "}
                e curioso di sentire nuove idee.
              </p>
            </div>
            <div className="space-y-6 mb-8">
              <div
                className={`flex items-start gap-4 transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "1.2s" }}
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary magnetic-element animate-pulse-glow">
                  <AtSign className="h-6 w-6" />
                </div>
                <div>
                  <h4
                    className="text-lg font-medium animate-reveal-text"
                    style={{ animationDelay: "1.4s" }}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:zavattaelia@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 magnetic-element hover-lift"
                  >
                    zavattaelia@gmail.com
                  </a>
                </div>
              </div>
              <div
                className={`flex items-start gap-4 transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "1.4s" }}
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary magnetic-element animate-pulse-glow">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div>
                  <h4
                    className="text-lg font-medium animate-reveal-text"
                    style={{ animationDelay: "1.6s" }}
                  >
                    Telefono
                  </h4>
                  <a
                    href="tel:+393938932793"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 magnetic-element hover-lift"
                  >
                    +39 393 893 2793
                  </a>
                </div>
              </div>
            </div>
            {/* Social icons */}
            <div
              className={`flex flex-wrap gap-5 mt-6 transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1.6s" }}
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/393938932793"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group rounded-full bg-white hover:bg-green-100 border border-green-400 transition-all duration-300 p-3 shadow-md flex items-center justify-center magnetic-element animate-float-gentle enhanced-card-hover"
                style={{ animationDelay: "1.8s" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-7 h-7 text-green-600 group-hover:scale-110 transition-transform"
                  style={{
                    filter:
                      "invert(38%) sepia(99%) saturate(749%) hue-rotate(88deg) brightness(92%) contrast(92%)",
                  }}
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/eliazavatta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group rounded-full bg-white hover:bg-blue-100 border border-blue-400 transition-all duration-300 p-3 shadow-md flex items-center justify-center magnetic-element animate-float-wave enhanced-card-hover"
                style={{ animationDelay: "2s" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-7 h-7 text-blue-700 group-hover:scale-110 transition-transform"
                  style={{
                    filter:
                      "invert(32%) sepia(99%) saturate(749%) hue-rotate(180deg) brightness(92%) contrast(92%)",
                  }}
                />
              </a>
              {/* Email */}
              <a
                href="mailto:zavattaelia@gmail.com"
                aria-label="Email"
                className="group rounded-full bg-white hover:bg-red-100 border border-red-400 transition-all duration-300 p-3 shadow-md flex items-center justify-center magnetic-element animate-float-gentle enhanced-card-hover"
                style={{ animationDelay: "2.2s" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                  alt="Email"
                  className="w-7 h-7 text-red-600 group-hover:scale-110 transition-transform"
                  style={{
                    filter:
                      "invert(32%) sepia(99%) saturate(749%) hue-rotate(0deg) brightness(92%) contrast(92%)",
                  }}
                />
              </a>
              {/* Instagram */}
              {/* <a
              href="https://www.instagram.com/eliazavatta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group rounded-full bg-white hover:bg-gradient-to-tr hover:from-pink-400 hover:via-red-400 hover:to-yellow-400 border border-pink-400 transition-colors p-3 shadow-md flex items-center justify-center"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="w-7 h-7 text-pink-500 group-hover:scale-110 transition-transform"
                style={{
                  filter:
                    "invert(32%) sepia(99%) saturate(749%) hue-rotate(320deg) brightness(92%) contrast(92%)",
                }}
              />
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
