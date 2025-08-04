import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ArrowLeft,
  MapPin,
  Star,
  Smartphone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GloboRicambi: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* Header della pagina */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="group mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Torna ai progetti
          </Button>

          <h1 className="text-4xl font-bold mb-4">Globo Ricambi</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Ricambi per auto d'epoca dal 1986 a Gambettola (FC)
          </p>
        </div>

        {/* Immagine principale */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
          <img
            src="/globo/globo-desk.png"
            alt="Globo Ricambi"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-start pl-8 rounded-lg">
            <img
              src="/globo.png"
              alt="Globo Ricambi logo"
              className="w-32 h-32 object-contain rounded-lg shadow-lg bg-white/90 p-4"
            />
          </div>
        </div>

        {/* Tecnologie */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "React",
            "TypeScript",
            "TailwindCSS",
            "Vite",
            "shadcn-ui",
            "Framer Motion",
            "React Router",
          ].map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="animate-pulse-light"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenuto principale */}
          <div className="lg:col-span-2">
            {/* Panoramica */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Panoramica</h2>
              <p className="text-foreground/90 text-lg leading-relaxed">
                Sito web moderno e professionale per Globo Ricambi, azienda
                specializzata in ricambi per auto d'epoca dal 1986 a Gambettola
                (FC). Esperienza utente coinvolgente e ottimizzata per
                raccontare la storia e i servizi dell'azienda.
              </p>
            </div>

            {/* Caratteristiche principali */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Caratteristiche principali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Design Responsive</h3>
                    <p className="text-sm text-muted-foreground">
                      Ottimizzato per tutti i dispositivi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Mappa Interattiva</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrazione con Google Maps
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Recensioni Clienti</h3>
                    <p className="text-sm text-muted-foreground">
                      Carosello di testimonianze
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <ExternalLink className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">SEO Ottimizzato</h3>
                    <p className="text-sm text-muted-foreground">
                      Schema.org e meta tags dinamici
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sezioni del sito */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sezioni del Sito</h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">🏠 Homepage</h3>
                    <p className="text-sm">
                      Presentazione aziendale con hero dinamico e panoramica dei
                      servizi
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">🔧 Prodotti</h3>
                    <p className="text-sm">
                      Catalogo dettagliato delle categorie di ricambi
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">📖 Storia</h3>
                    <p className="text-sm">
                      Racconto della tradizione aziendale dal 1986
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      ⭐ Recensioni
                    </h3>
                    <p className="text-sm">
                      Testimonianze dei clienti e feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Obiettivi del progetto */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Obiettivi del Progetto
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <p>
                  Il sito è stato progettato per essere una vetrina moderna che
                  rispecchi l'esperienza e la professionalità dell'azienda,
                  facilitando il contatto con i clienti e la presentazione dei
                  servizi specializzati.
                </p>

                <h3>🎯 Sfide tecniche affrontate</h3>
                <ul>
                  <li>
                    Ottimizzazione delle performance con molte immagini di
                    prodotti
                  </li>
                  <li>Integrazione fluida con Google Maps API</li>
                  <li>SEO optimization per una Single Page Application</li>
                  <li>
                    Design responsive per un'esperienza ottimale su mobile
                  </li>
                </ul>

                <h3>💡 Soluzioni implementate</h3>
                <ul>
                  <li>Lazy loading delle immagini per performance migliori</li>
                  <li>React Router per navigazione fluida</li>
                  <li>Meta tags dinamici per ottimizzazione SEO</li>
                  <li>Componenti riutilizzabili con shadcn-ui</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted/50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold mb-4">Azioni</h3>

              <div className="space-y-3">
                <Button asChild className="group w-full">
                  <a
                    href="https://globoricambi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Visualizza Sito
                  </a>
                </Button>
              </div>

              {/* Dettagli tecnici */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Dettagli tecnici</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Architettura:</span>
                    <p className="text-muted-foreground">
                      Single Page Application (SPA)
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Framework:</span>
                    <p className="text-muted-foreground">React + TypeScript</p>
                  </div>
                  <div>
                    <span className="font-medium">Styling:</span>
                    <p className="text-muted-foreground">
                      TailwindCSS + shadcn-ui
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Animazioni:</span>
                    <p className="text-muted-foreground">Framer Motion</p>
                  </div>
                  <div>
                    <span className="font-medium">Deploy:</span>
                    <p className="text-muted-foreground">Vercel</p>
                  </div>
                </div>
              </div>

              {/* Galleria */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Screenshot</h4>
                <div className="grid grid-cols-1 gap-2">
                  <img
                    src="/globo/globo-desk.png"
                    alt="Globo Ricambi screenshot"
                    className="w-full h-32 object-cover rounded shadow cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() =>
                      window.open("/globo/globo-desk.png", "_blank")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GloboRicambi;
