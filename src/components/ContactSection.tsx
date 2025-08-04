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
  return (
    <section
      id="contact"
      className="py-16 section-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Colonna sinistra: contatti */}
          <div id="informazioni-contatto" className="mb-10 lg:mb-0">
            <div className="rounded-3xl bg-white/10 backdrop-blur-md shadow-xl p-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Contattami
              </h2>
              <p className="text-foreground/70 mb-8">
                Hai un progetto interessante in mente? O magari vuoi
                confrontarti su qualche aspetto tecnico? <br />
                Sono sempre disponibile per una chiacchierata e curioso di
                sentire nuove idee.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <AtSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a
                      href="mailto:zavattaelia@gmail.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      zavattaelia@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Telefono</h4>
                    <a
                      href="tel:+393938932793"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      +39 393 893 2793
                    </a>
                  </div>
                </div>
              </div>
              {/* Social icons */}
              <div className="flex flex-wrap gap-5 mt-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/393938932793"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group rounded-full bg-white hover:bg-green-100 border border-green-400 transition-colors p-3 shadow-md flex items-center justify-center"
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
                  className="group rounded-full bg-white hover:bg-blue-100 border border-blue-400 transition-colors p-3 shadow-md flex items-center justify-center"
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
                  className="group rounded-full bg-white hover:bg-red-100 border border-red-400 transition-colors p-3 shadow-md flex items-center justify-center"
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
                <a
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
                </a>
              </div>
            </div>
          </div>
          {/* Colonna destra: riepilogo competenze */}
          {/* <div>
            <div className="rounded-3xl bg-white/10 backdrop-blur-md shadow-xl p-8 flex flex-col gap-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Competenze
              </h3>
              <p className="text-foreground/70 mb-4">
                Sviluppo web moderno con focus su React, TypeScript, Node.js e
                Python. Esperienza full-stack, UI/UX curata e attenzione alle
                best practice. Utilizzo quotidiano di Docker, Git e metodologie
                agili.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    {tech.icon}
                    <span className="text-xs mt-1 text-foreground/70">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
