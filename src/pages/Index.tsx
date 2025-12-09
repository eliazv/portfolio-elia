import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title:
      "Sviluppatore Web e Mobile Freelance Cesena | Esperto React | Elia Zavatta",
    description:
      "Sviluppatore web e mobile freelance senior a Cesena. Esperto React, sviluppo siti web, e-commerce, app iOS e Android per aziende e startup in Romagna. Consulente IT professionista disponibile anche da remoto.",
    keywords: [
      // Keywords principali
      "sviluppatore web freelance cesena",
      "programmatore freelance forli",
      "sviluppatore app mobile rimini",
      "sviluppatore React cesena",
      // Keywords senior/esperto
      "esperto sviluppatore senior romagna",
      "sviluppatore professionista cesena",
      "programmatore esperto ravenna",
      // Consulenza
      "consulente IT freelance cesena",
      "consulenza digitale romagna",
      "consulente sviluppo software",
      // E-commerce
      "sviluppo e-commerce romagna",
      "creazione negozio online cesena",
      // Servizi specifici
      "sviluppo siti web cesena",
      "realizzazione siti web aziende forli",
      "creazione siti web piccole imprese",
      "sviluppo software su misura cesena",
      // App mobile
      "sviluppo app startup romagna",
      "sviluppatore iOS Android cesena",
      "app mobile aziende rimini",
      // Full stack e tecnologie
      "sviluppatore full stack cesena",
      "programmatore React freelance rimini",
      "sviluppatore Node.js romagna",
      // Remoto
      "sviluppatore remoto emilia romagna",
      "programmatore freelance remoto italia",
      // Long-tail
      "sviluppatore freelance per piccole imprese cesena",
      "programmatore React per startup romagna",
      "realizzare app mobile per aziende forli",
    ],
    canonicalUrl: "https://www.eliazavatta.it/",
    og: {
      title:
        "Elia Zavatta | Sviluppatore Web Freelance Senior Cesena | Esperto React",
      description:
        "Sviluppatore freelance esperto a Cesena: siti web, e-commerce, app iOS e Android per aziende e startup in Romagna. Consulente IT professionista disponibile anche da remoto.",
      url: "https://www.eliazavatta.it/",
      type: "website",
      image: "https://www.eliazavatta.it/og-image.jpg",
      locale: "it_IT",
      site_name: "Elia Zavatta - Sviluppatore Web e Mobile Freelance",
    },
    twitter: {
      card: "summary_large_image",
      title: "Elia Zavatta | Sviluppatore Web Freelance Senior Cesena",
      description:
        "Sviluppatore freelance esperto: siti web, e-commerce, app mobile per aziende e startup in Romagna. Consulente IT professionista.",
      image: "https://www.eliazavatta.it/og-image.jpg",
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Elia Zavatta",
        jobTitle: "Sviluppatore Web e Mobile Freelance Senior",
        image: "https://www.eliazavatta.it/og-image.jpg",
        url: "https://www.eliazavatta.it/",
        description:
          "Sviluppatore freelance esperto e professionista specializzato in siti web, e-commerce, app iOS e Android per aziende, startup e PMI a Cesena, Rimini, Forlì, Ravenna e Cervia. Consulente IT disponibile anche da remoto.",
        telephone: "+39 393 893 2793",
        sameAs: [
          "https://github.com/eliazv",
          "https://www.linkedin.com/in/eliazavatta/",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cesena",
          addressRegion: "Emilia-Romagna",
          postalCode: "47521",
          addressCountry: "IT",
        },
        areaServed: [
          { "@type": "City", name: "Cesena" },
          { "@type": "City", name: "Rimini" },
          { "@type": "City", name: "Forlì" },
          { "@type": "City", name: "Ravenna" },
          { "@type": "City", name: "Cervia" },
          { "@type": "City", name: "Faenza" },
          { "@type": "AdministrativeArea", name: "Romagna" },
          { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
          { "@type": "Country", name: "Italia" },
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Università di Bologna - Campus di Cesena",
          description: "Laurea in Ingegneria e Scienze Informatiche",
        },
        knowsAbout: [
          "Sviluppo siti web",
          "Sviluppo e-commerce",
          "Sviluppo app mobile",
          "React",
          "React Native",
          "Next.js",
          "TypeScript",
          "Node.js",
          "UX/UI",
          "Progressive Web App",
          "Consulenza digitale",
          "Sviluppo software su misura",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sviluppo siti web su misura",
              description:
                "Realizzazione siti web professionali per aziende e PMI",
              serviceType: "Web Development",
            },
            areaServed: ["Cesena", "Rimini", "Forlì", "Ravenna", "Romagna"],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sviluppo e-commerce",
              description: "Creazione negozi online e piattaforme e-commerce",
              serviceType: "E-commerce Development",
            },
            areaServed: ["Romagna", "Emilia-Romagna"],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sviluppo app mobile iOS e Android",
              description:
                "Creazione applicazioni mobile native e cross-platform",
              serviceType: "Mobile App Development",
            },
            areaServed: ["Cesena", "Rimini", "Forlì", "Ravenna", "Cervia"],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consulenza IT e digitale",
              description: "Consulenza tecnica per startup e aziende",
              serviceType: "IT Consulting",
            },
            areaServed: "Italia",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Elia Zavatta - Sviluppatore Web e Mobile Freelance",
        url: "https://www.eliazavatta.it/",
        description:
          "Servizi professionali di sviluppo web, mobile, e-commerce e consulenza IT per aziende, startup e PMI in Romagna. Disponibile anche da remoto.",
        priceRange: "€€",
        areaServed: [
          { "@type": "City", name: "Cesena" },
          { "@type": "City", name: "Rimini" },
          { "@type": "City", name: "Forlì" },
          { "@type": "City", name: "Ravenna" },
          { "@type": "City", name: "Cervia" },
          { "@type": "City", name: "Faenza" },
          { "@type": "AdministrativeArea", name: "Romagna" },
        ],
        serviceType: [
          "Sviluppo siti web",
          "Sviluppo e-commerce",
          "Sviluppo app mobile",
          "Sviluppo software su misura",
          "Consulenza IT",
          "Sviluppo React",
          "Sviluppo full stack",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cesena",
          addressRegion: "Emilia-Romagna",
          postalCode: "47521",
          addressCountry: "IT",
        },
        telephone: "+39 393 893 2793",
        sameAs: [
          "https://github.com/eliazv",
          "https://www.linkedin.com/in/eliazavatta/",
        ],
      },
    ],
  });

  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.pathname === window.location.pathname
      ) {
        e.preventDefault();

        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <div>
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ServicesSection />
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Colonna sinistra: Chi sono */}
                <div>
                  <AboutSection />
                </div>
                {/* Colonna destra: Contattami */}
                <div>
                  <ContactSection />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <ScrollToTop />
      <Analytics />
    </div>
  );
};

export default Index;
