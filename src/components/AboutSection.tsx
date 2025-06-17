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

interface Skill {
  name: string;
  level: number; // 0-100
}

interface Category {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skills: Category[] = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 75 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "Python", level: 78 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Swift", level: 60 },
      { name: "Kotlin", level: 55 },
    ],
  },
  {
    name: "Other",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 72 },
      { name: "Agile/Scrum", level: 85 },
      { name: "UI/UX Design", level: 80 },
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Chi sono
            </h2>{" "}
            <p className="text-foreground/70 mb-6">
              Sono Elia Zavatta, laureato in Scienze ed Ingegneria Informatica a
              Cesena. Sono un web developer, una persona curiosa che ama capire
              come funzionano le cose. Seguo e studio il mondo della tecnologia
              da sempre.
            </p>
            <p className="text-foreground/70 mb-6">
              Quello che mi motiva di più è metterci le mani dentro: nuovi
              progetti, tecnologie che non conosco, problemi complessi da
              risolvere. Mi piace analizzare come migliorare i processi e
              trovare il modo giusto per semplificare le cose attraverso la
              tecnologia.
            </p>
            <p className="text-foreground/70 mb-8">
              Quando non programmo, gioco a calcio e gestisco altri miei
              progetti come e-commerce e property management.
            </p>
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">50+</span>
                <p className="text-sm text-foreground/70">
                  progetti completati
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">5+</span>
                <p className="text-sm text-foreground/70">anni di esperienza</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">20+</span>
                <p className="text-sm text-foreground/70">
                  clienti soddisfatti
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">10+</span>
                <p className="text-sm text-foreground/70">
                  contributi open source
                </p>
              </div>
            </div> */}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Informazioni di contatto
            </h2>{" "}
            <p className="text-foreground/70 mb-8">
              Hai un progetto interessante in mente? O magari vuoi confrontarti
              su qualche aspetto tecnico? Sono sempre disponibile per una
              chiacchierata e curioso di sentire nuove idee.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <AtSign className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:zavattaelia@gmail.com"
                    className="text-foreground/70 hover:text-primary"
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
                    className="text-foreground/70 hover:text-primary"
                  >
                    +39 393 893 2793
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a
                    href="https://github.com/eliazv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary"
                  >
                    github.com/eliazv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
