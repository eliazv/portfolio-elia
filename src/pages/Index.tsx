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

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Elia Zavatta - Full Stack Developer";

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
      <Header />
      <main>
        <HeroSection />
        {/* <ServicesSection /> */}
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Index;
