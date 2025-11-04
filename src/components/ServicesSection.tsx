import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Home, Star, Zap, Users, Trophy } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Sviluppo Web & App",
      description:
        "Sviluppo di <span class='font-bold text-blue-600'>siti web</span> e <span class='font-bold text-blue-600'>app mobile</span> da zero, oltre a modifiche e implementazioni su progetti esistenti per aziende e professionisti.",
      icon: <Code className="h-8 w-8" />,
      primary: true,
      imageUrl:
        "https://wallpapers.com/images/featured/coding-background-9izlympnd0ovmpli.jpg",
      features: [
        "<span class='font-bold text-blue-600'>Siti Web</span> e <span class='font-bold text-blue-600'>App</span> da Zero",
        "Modifiche a Siti Esistenti",
        "Nuove Funzionalità",
        "Manutenzione e Aggiornamenti",
        "Ottimizzazione Performance",
        "UI/UX Design Moderno",
      ],
      color: "blue",
    },
    {
      id: 2,
      title: "Host Affitti Brevi",
      description:
        "Gestione completa di proprietà su " +
        "<span class='font-bold text-green-600'>Airbnb</span> e " +
        "<span class='font-bold text-green-600'>Booking.com</span>, " +
        "dalla sincronizzazione calendari all'ottimizzazione delle performance, comunicazione con gli ospiti e " +
        "<span class='font-bold text-green-600'>massimizzazione dei ricavi</span> ",

      icon: <Home className="h-8 w-8" />,
      primary: false,
      imageUrl:
        "https://www.shutterstock.com/image-photo/new-york-usa-22-september-600nw-2523504849.jpg",
      features: [
        "Gestione <span class='font-bold text-green-600'>Airbnb</span> & <span class='font-bold text-green-600'>Booking.com</span>",
        "Sincronizzazione Calendari",
        "Ottimizzazione Prezzi",
        "Reporting e Analytics",
      ],
      color: "green",
    },
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(
    services.length,
    150
  );

  return (
    <section id="services" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block">
            <span className="relative z-10">I miei servizi</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-green-500/30 -rotate-1"></span>
          </h2>
        </div>

        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer enhanced-card-hover magnetic-element animate-float-gentle border border-transparent hover:border-accent/20 backdrop-blur-sm transform transition-all duration-700 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                {/* Service image */}
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-20 object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Overlay con effetto shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                {/* Service icon overlay */}
                <div className="absolute bottom-4 left-4 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:translate-y-[-4px]">
                  <div
                    className={`p-3 rounded-xl ${
                      service.primary
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    } shadow-xl border border-white/30 backdrop-blur-sm group-hover:shadow-2xl group-hover:bg-white/95 transition-all duration-500 animate-morphing-border`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Badge for primary service */}
                {service.primary && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Principale
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-4 relative">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p
                  className="text-foreground/70 text-md leading-relaxed line-clamp-8"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>

                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-xs text-primary font-medium flex items-center gap-1">
                    Scopri di più
                    <Zap className="h-3 w-3" />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
