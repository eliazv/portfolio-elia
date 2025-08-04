import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ArrowLeft,
  Calendar,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CasaVacanze: React.FC = () => {
  const navigate = useNavigate();

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

          <h1 className="text-4xl font-bold mb-4">Casa Vacanze in Affitto</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Gestione e promozione di una Casa Vacanze con backoffice dedicato
          </p>
        </div>

        {/* Immagine principale */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
          <img
            src="/immerso/immerso-desktop.png"
            alt="Casa Vacanze"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-start pl-8 rounded-lg">
            <img
              src="/immerso/targhetta.jpg"
              alt="Casa Vacanze logo"
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
            "Capacitor",
            "shadcn-ui",
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
                Una soluzione completa per la gestione e promozione di una Casa
                Vacanze, che combina una vetrina pubblica accattivante con un
                potente sistema di gestione backend per ottimizzare prenotazioni
                e ricavi.
              </p>
            </div>

            {/* Caratteristiche principali */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Caratteristiche principali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Calendario Integrato</h3>
                    <p className="text-sm text-muted-foreground">
                      Gestione disponibilità e prenotazioni
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Dashboard Statistiche</h3>
                    <p className="text-sm text-muted-foreground">
                      Metriche di occupazione e ricavi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Area Privata</h3>
                    <p className="text-sm text-muted-foreground">
                      Backoffice con autenticazione sicura
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">App Mobile</h3>
                    <p className="text-sm text-muted-foreground">
                      Versione mobile con Capacitor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sezione pubblica */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sezione Pubblica</h2>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-foreground/90 leading-relaxed">
                  La sezione pubblica presenta la Casa Vacanze con tutte le
                  informazioni utili agli ospiti, servizi, regole e un form di
                  contatto per richieste di prenotazione diretta. Include
                  galleria fotografica, descrizioni dettagliate degli ambienti e
                  informazioni sui servizi disponibili.
                </p>
              </div>
            </div>

            {/* Backoffice */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Backoffice</h2>
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Il backoffice, accessibile tramite autenticazione, permette la
                  gestione delle prenotazioni, la visualizzazione delle
                  statistiche di occupazione e la sincronizzazione con i portali
                  OTA.
                </p>

                <h4 className="font-semibold mb-2">
                  Funzionalità del backoffice:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                  <li>Dashboard con metriche in tempo reale</li>
                  <li>Gestione calendario e disponibilità</li>
                  <li>Tracking prenotazioni e pagamenti</li>
                  <li>Sincronizzazione con Booking.com e Airbnb</li>
                  <li>Generazione report mensili/annuali</li>
                </ul>
              </div>
            </div>

            {/* Aspetti tecnici */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Implementazione Tecnica
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <h3>🏗️ Architettura</h3>
                <p>
                  Il progetto utilizza React con TypeScript per la parte web e
                  Capacitor per la versione mobile nativa. Il design system è
                  costruito con Tailwind CSS e shadcn-ui per garantire
                  consistenza e rapidità di sviluppo.
                </p>

                <h3>🔧 Sfide risolte</h3>
                <ul>
                  <li>Gestione complessa dello stato delle prenotazioni</li>
                  <li>Sincronizzazione con API esterne (OTA)</li>
                  <li>Ottimizzazione per dispositivi mobili</li>
                  <li>Sistema di autenticazione sicuro</li>
                </ul>

                <h3>💡 Soluzioni adottate</h3>
                <ul>
                  <li>State management con Context API di React</li>
                  <li>Capacitor per funzionalità native mobile</li>
                  <li>Design system consistente e modulare</li>
                  <li>Architettura scalabile e manutenibile</li>
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
                    href="https://immerso-nella-pineta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Visualizza Sito
                  </a>
                </Button>

                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="hover:text-white hover:bg-primary w-full"
                >
                  Contattami per maggiori informazioni
                </Button>
              </div>

              {/* Dettagli tecnici */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Stack tecnologico</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Frontend:</span>
                    <p className="text-muted-foreground">React + TypeScript</p>
                  </div>
                  <div>
                    <span className="font-medium">Mobile:</span>
                    <p className="text-muted-foreground">Capacitor</p>
                  </div>
                  <div>
                    <span className="font-medium">UI Framework:</span>
                    <p className="text-muted-foreground">
                      shadcn-ui + TailwindCSS
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Build Tool:</span>
                    <p className="text-muted-foreground">Vite</p>
                  </div>
                  <div>
                    <span className="font-medium">Deploy:</span>
                    <p className="text-muted-foreground">Vercel</p>
                  </div>
                </div>
              </div>

              {/* Galleria */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Galleria</h4>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/immerso/immerso-desktop.png"
                    alt="Casa Vacanze screenshot 1"
                    className="w-full h-24 object-cover rounded shadow cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() =>
                      window.open("/immerso/immerso-desktop.png", "_blank")
                    }
                  />
                  <img
                    src="/immerso/targhetta.jpg"
                    alt="Casa Vacanze screenshot 2"
                    className="w-full h-24 object-cover rounded shadow cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() =>
                      window.open("/immerso/targhetta.jpg", "_blank")
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

export default CasaVacanze;
