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
      "Sviluppatore Web e Mobile Romagna | Cesena | Elia Zavatta Freelance",
    description:
      "Sviluppatore web e mobile freelance con base a Cesena, attivo in tutta la Romagna. Creo siti web performanti, app iOS e Android e soluzioni digitali su misura per aziende e professionisti.",
    keywords: [
      "sviluppatore web romagna",
      "sviluppatore mobile cesena",
      "sviluppatore freelance cesena",
      "creazione app romagna",
      "sviluppo siti web cesena",
      "app mobile ios android romagna",
    ],
    canonicalUrl: "https://eliazavatta.it/",
    og: {
      title:
        "Elia Zavatta | Sviluppatore Web e Mobile in Romagna e a Cesena",
      description:
        "Consulenza e sviluppo di siti web, web app e applicazioni mobile per aziende e professionisti in Romagna.",
      url: "https://eliazavatta.it/",
      type: "website",
      image: "https://eliazavatta.it/og-image.jpg",
      locale: "it_IT",
      "site_name": "Elia Zavatta - Sviluppatore Web e Mobile",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Elia Zavatta | Sviluppatore Web e Mobile in Romagna e a Cesena",
      description:
        "Siti web, web app e app mobile per professionisti e aziende in Romagna.",
      image: "https://eliazavatta.it/og-image.jpg",
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Elia Zavatta",
        jobTitle: "Sviluppatore Web e Mobile Freelance",
        image: "https://eliazavatta.it/og-image.jpg",
        url: "https://eliazavatta.it/",
        description:
          "Sviluppatore freelance specializzato in siti web, web app e applicazioni mobile per PMI e professionisti in Romagna, con base a Cesena.",
        telephone: "+39 393 893 2793",
        sameAs: [
          "https://github.com/eliazv",
          "https://www.linkedin.com/in/eliazavatta/",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cesena",
          addressRegion: "Emilia-Romagna",
          addressCountry: "IT",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Cesena" },
          { "@type": "AdministrativeArea", name: "Romagna" },
          { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Università di Bologna - Campus di Cesena",
          description: "Laurea in Ingegneria e Scienze Informatiche",
        },
        knowsAbout: [
          "Sviluppo siti web",
          "Sviluppo app mobile",
          "React",
          "TypeScript",
          "Node.js",
          "UX/UI",
          "Progressive Web App",
          "Consulenza digitale",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sviluppo siti web su misura",
              serviceType: "Web Development",
            },
            areaServed: "Romagna",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sviluppo app mobile iOS e Android",
              serviceType: "Mobile App Development",
            },
            areaServed: "Cesena",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Elia Zavatta - Sviluppatore Web e Mobile",
        url: "https://eliazavatta.it/",
        description:
          "Servizi di sviluppo web e mobile, consulenza digitale e progettazione UX/UI per aziende e professionisti in Romagna.",
        areaServed: "Romagna",
        serviceType: [
          "Sviluppo siti web full stack",
          "Sviluppo app mobile iOS e Android",
          "Consulenza digitale",
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
