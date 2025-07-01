import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Home, Star, Zap, Users, Trophy } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Sviluppo Software",
      description:
        "Creazione di applicazioni web moderne, siti web responsivi e soluzioni software personalizzate. Utilizzo le tecnologie più aggiornate per garantire performance eccellenti e user experience ottimali.",
      icon: <Code className="h-8 w-8" />,
      primary: true,
      features: [
        "Applicazioni Web React/Next.js",
        "Siti Web Responsivi",
        "API e Backend Development",
        "Database Design",
        "UI/UX Design Moderno",
      ],
      color: "blue",
    },
    {
      id: 2,
      title: "Gestione Affitti Brevi",
      description:
        "Gestione completa di proprietà su Airbnb e Booking.com, dalla sincronizzazione calendari all'ottimizzazione delle performance, comunicazione con gli ospiti e massimizzazione dei ricavi.",
      icon: <Home className="h-8 w-8" />,
      primary: false,
      features: [
        "Gestione Airbnb & Booking.com",
        "Sincronizzazione Calendari",
        "Ottimizzazione Prezzi",
        "Reporting e Analytics",
      ],
      color: "green",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block">
            <span className="relative z-10">I miei servizi</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Offro soluzioni professionali per le tue esigenze digitali e di
            business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                service.primary
                  ? `
                    bg-gradient-to-br from-blue-50/50 to-blue-100/30
                    border-2 border-blue-200/50
                    shadow-[0_10px_40px_rgba(59,130,246,0.15)]
                    hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                  `
                  : `
                    bg-gradient-to-br from-green-50/50 to-green-100/30
                    border-2 border-green-200/50
                    shadow-[0_10px_40px_rgba(34,197,94,0.15)]
                    hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]
                  `
              }`}
            >
              {service.primary && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Principale
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      service.primary
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Caratteristiche principali:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            service.primary ? "bg-blue-500" : "bg-green-500"
                          }`}
                        />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">
              Soluzioni personalizzate per ogni esigenza
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
