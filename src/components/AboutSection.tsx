
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Layout, Smartphone } from 'lucide-react';

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
    name: 'Frontend',
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'TypeScript', level: 85 }
    ]
  },
  {
    name: 'Backend',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 78 },
      { name: 'PHP', level: 70 },
      { name: 'SQL', level: 82 }
    ]
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 70 },
      { name: 'Swift', level: 60 },
      { name: 'Kotlin', level: 55 }
    ]
  },
  {
    name: 'Other',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 72 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'UI/UX Design', level: 80 }
    ]
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Chi sono</h2>
            <p className="text-foreground/70 mb-6">
              Sono uno sviluppatore full-stack appassionato di tecnologia e innovazione. Con oltre 5 anni di esperienza nel settore, ho lavorato con diverse tecnologie e framework per creare soluzioni web e mobile di alta qualità.
            </p>
            <p className="text-foreground/70 mb-6">
              Il mio approccio allo sviluppo si concentra sulla creazione di esperienze utente intuitive e performanti, combinando design accattivante e codice pulito ed efficiente.
            </p>
            <p className="text-foreground/70 mb-8">
              Quando non sto programmando, mi dedico all'apprendimento di nuove tecnologie, alla partecipazione a hackathon e alla condivisione delle mie conoscenze attraverso articoli e contributi open source.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">50+</span>
                <p className="text-sm text-foreground/70">progetti completati</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">5+</span>
                <p className="text-sm text-foreground/70">anni di esperienza</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">20+</span>
                <p className="text-sm text-foreground/70">clienti soddisfatti</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">10+</span>
                <p className="text-sm text-foreground/70">contributi open source</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((category, index) => (
                <Card key={index} className="card-hover border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-foreground/70">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
