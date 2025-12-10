import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
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
    </div>
  );
}
