import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Smartphone,
  Users,
  Trophy,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const MarafoneRomagnolo: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Marafone Romagnolo | App gioco carte tradizionale",
    description:
      "App mobile del Marafone Romagnolo, il gioco di carte tradizionale della Romagna. Sviluppata da Elia Zavatta, sviluppatore app mobile freelance a Cesena.",
    keywords: [
      "marafone romagnolo app",
      "gioco carte romagna",
      "sviluppo app mobile cesena",
    ],
    canonicalUrl: "https://www.eliazavatta.it/progetti/marafone-romagnolo",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate("/#contact");
  };

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

          <h1 className="text-4xl font-bold mb-4">Marafone Romagnolo</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Il gioco di carte tradizionale della Romagna, ora sul tuo smartphone
          </p>
        </div>

        {/* Immagine principale */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
          <img
            src="https://shop.dalnegro.com/wp-content/plugins/woocommerce-onpage/storage/cache/b8069a05a64bcbb4d8926c2488ac627e913e8e39.900x.png/dalnegro-mazzo-carte-regionale-napoletane-pro-astuccio-rosso-02.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80"
            alt="Marafone Romagnolo"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-start pl-8 rounded-lg">
            <img
              src="/marafone.jpg"
              alt="Marafone Romagnolo logo"
              className="w-32 h-32 object-contain rounded-lg shadow-lg bg-white/90 p-4"
            />
          </div>
        </div>

        {/* Tecnologie */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["React", "TypeScript", "TailwindCSS", "Vite"].map((tech) => (
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
                Marafone Romagnolo è il gioco di carte tradizionale più amato
                della Romagna, ora disponibile sul tuo smartphone! Vivi tutta
                l'autenticità del gioco romagnolo con regole fedeli alla
                tradizione e un'atmosfera che richiama le vere sfide tra amici.
              </p>
            </div>

            {/* Caratteristiche principali */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Caratteristiche principali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Multiplayer Online</h3>
                    <p className="text-sm text-muted-foreground">
                      Gioca con amici o sconosciuti da tutto il mondo
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Tradizione Autentica</h3>
                    <p className="text-sm text-muted-foreground">
                      Regole fedeli al gioco tradizionale romagnolo
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Mobile Ottimizzato</h3>
                    <p className="text-sm text-muted-foreground">
                      Interfaccia progettata per dispositivi mobili
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Social Gaming</h3>
                    <p className="text-sm text-muted-foreground">
                      Chat e interazioni sociali integrate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Descrizione dettagliata */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Il Progetto</h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <h3>🎮 Un'esperienza autentica</h3>
                <p>
                  Marafone Romagnolo porta la tradizione delle carte romagnole
                  direttamente sul tuo smartphone. Sviluppato con React e
                  TypeScript, offre un'esperienza di gioco fluida e coinvolgente
                  che rispetta le regole tradizionali del gioco.
                </p>

                <h3>🏆 Caratteristiche tecniche</h3>
                <ul>
                  <li>
                    <strong>Multiplayer</strong>: Sistema di matchmaking per
                    trovare avversari
                  </li>
                  <li>
                    <strong>Real-time</strong>: Partite in tempo reale con
                    sincronizzazione istantanea
                  </li>
                  <li>
                    <strong>Responsive</strong>: Ottimizzato per tutti i
                    dispositivi
                  </li>
                  <li>
                    <strong>Progressive Web App</strong>: Installabile come app
                    nativa
                  </li>
                </ul>

                <h3>🎯 Obiettivi del progetto</h3>
                <p>
                  L'obiettivo principale è preservare e diffondere la tradizione
                  del gioco romagnolo attraverso la tecnologia moderna,
                  permettendo ai giocatori di divertirsi ovunque si trovino
                  mantenendo l'autenticità dell'esperienza tradizionale.
                </p>
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
                    href="https://marafone-romagnolo.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Visualizza Sito
                  </a>
                </Button>

                <Button
                  asChild
                  className="group bg-green-600 hover:bg-green-700 w-full"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.eliazavatta.maraffa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <PlayStoreIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Scarica su Play Store
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
                      Progressive Web App con React
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Piattaforma:</span>
                    <p className="text-muted-foreground">Web e Android</p>
                  </div>
                  <div>
                    <span className="font-medium">Stato:</span>
                    <p className="text-muted-foreground">
                      Disponibile su Play Store
                    </p>
                  </div>
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

export default MarafoneRomagnolo;
