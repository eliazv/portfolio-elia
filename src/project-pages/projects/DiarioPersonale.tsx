'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ArrowLeft,
  BookOpen,
  Search,
  Tag,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const DiarioPersonale: React.FC = () => {
  const router = useRouter();

  useSEO({
    title: "Diario Personale | Web app React",
    description:
      "Web app minimalista per la gestione di diari personali. Progetto React sviluppato da Elia Zavatta, sviluppatore web freelance a Cesena.",
    keywords: [
      "web app react",
      "sviluppo web cesena",
      "applicazione diario personale",
    ],
    canonicalUrl: "https://www.eliazavatta.it/progetti/diario-personale",
  });

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
            onClick={() => router.push("/")}
            className="group mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Torna ai progetti
          </Button>

          <h1 className="text-4xl font-bold mb-4">Diario Personale</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Applicazione web minimalista per la gestione di diari personali
          </p>
        </div>

        {/* Immagine principale */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
          <img
            src="/diary-app/diary-desk.png"
            alt="Diario Personale"
            className="w-full h-full object-cover rounded-md"
          />
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
                Minima Diary è un'applicazione web per la gestione di diari
                personali con funzionalità di ricerca e categorizzazione.
                Progettata con un approccio minimalista, mette al centro
                l'esperienza di scrittura senza distrazioni.
              </p>
            </div>

            {/* Caratteristiche principali */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Caratteristiche principali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Editor Ricco</h3>
                    <p className="text-sm text-muted-foreground">
                      Editor di testo ottimizzato per la scrittura
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Tag className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Categorizzazione</h3>
                    <p className="text-sm text-muted-foreground">
                      Tag e categorie personalizzabili
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Search className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Ricerca Avanzata</h3>
                    <p className="text-sm text-muted-foreground">
                      Trova rapidamente qualsiasi nota
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Privacy Totale</h3>
                    <p className="text-sm text-muted-foreground">
                      Dati salvati solo sul tuo dispositivo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filosofia del design */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Semplicità ed Eleganza
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800 mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    📝 Focus sulla Scrittura
                  </h3>
                  <p className="text-sm">
                    Minima Diary è pensato per chi vuole tenere un diario
                    digitale senza distrazioni, con un'interfaccia pulita e
                    minimalista che mette al centro il contenuto.
                  </p>
                </div>

                <h3>🎯 Funzionalità principali</h3>
                <ul>
                  <li>
                    <strong>Scrittura fluida</strong>: Editor ottimizzato per la
                    scrittura quotidiana
                  </li>
                  <li>
                    <strong>Organizzazione</strong>: Sistema di categorie e tag
                    per organizzare i pensieri
                  </li>
                  <li>
                    <strong>Ricerca</strong>: Trova rapidamente qualsiasi nota o
                    pensiero
                  </li>
                  <li>
                    <strong>Privacy</strong>: Tutti i dati rimangono sul tuo
                    dispositivo
                  </li>
                  <li>
                    <strong>Esportazione</strong>: Esporta le tue note in
                    diversi formati
                  </li>
                  <li>
                    <strong>Auto-salvataggio</strong>: Le modifiche vengono
                    salvate automaticamente
                  </li>
                </ul>
              </div>
            </div>

            {/* Implementazione tecnica */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Implementazione Tecnica
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <h3>🏗️ Architettura</h3>
                <p>
                  Il progetto utilizza React con TypeScript per garantire type
                  safety e manutenibilità del codice. L'archiviazione avviene
                  tramite Local Storage del browser per garantire privacy e
                  velocità.
                </p>

                <h3>🔧 Sfide affrontate</h3>
                <ul>
                  <li>Bilanciamento tra funzionalità e semplicità d'uso</li>
                  <li>Ottimizzazione per la scrittura quotidiana</li>
                  <li>Gestione efficiente di grandi quantità di testo</li>
                  <li>Design responsive per tutti i dispositivi</li>
                </ul>

                <h3>💡 Soluzioni implementate</h3>
                <ul>
                  <li>Local Storage per persistenza dei dati senza server</li>
                  <li>Debouncing per l'auto-salvataggio ottimizzato</li>
                  <li>Design system minimalista con Tailwind CSS</li>
                  <li>Componenti modulari per facilità di manutenzione</li>
                  <li>Interfaccia keyboard-first per scrittori veloci</li>
                </ul>

                <h3>🎨 Principi di Design</h3>
                <p>
                  L'interfaccia segue i principi del design minimalista: ogni
                  elemento ha uno scopo specifico, la tipografia è ottimizzata
                  per la lettura prolungata, e i colori sono scelti per ridurre
                  l'affaticamento visivo.
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
                    href="https://minima-diary.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Prova Minima Diary
                  </a>
                </Button>
              </div>

              {/* Funzionalità chiave */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Funzionalità Chiave</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Editor minimalista</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span>Sistema di tag</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-primary" />
                    <span>Ricerca full-text</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Privacy garantita</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <span>Esportazione note</span>
                  </div>
                </div>
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
                    <span className="font-medium">Styling:</span>
                    <p className="text-muted-foreground">TailwindCSS</p>
                  </div>
                  <div>
                    <span className="font-medium">Storage:</span>
                    <p className="text-muted-foreground">Local Storage</p>
                  </div>
                  <div>
                    <span className="font-medium">Build:</span>
                    <p className="text-muted-foreground">Vite</p>
                  </div>
                  <div>
                    <span className="font-medium">Hosting:</span>
                    <p className="text-muted-foreground">Lovable</p>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Anteprima</h4>
                <img
                  src="/diary-app/diary-desk.png"
                  alt="Diario Personale screenshot"
                  className="w-full h-32 object-cover rounded shadow cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() =>
                    window.open("/diary-app/diary-desk.png", "_blank")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiarioPersonale;
