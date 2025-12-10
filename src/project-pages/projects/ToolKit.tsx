'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ArrowLeft,
  FileText,
  Image,
  Calculator,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ToolKit: React.FC = () => {
  const router = useRouter();

  useSEO({
    title: "ToolKit | Strumenti online gratuiti",
    description:
      "Suite di strumenti online gratuiti per PDF, testo, immagini e calcoli. Web app sviluppata da Elia Zavatta, sviluppatore freelance a Cesena.",
    keywords: [
      "strumenti online gratuiti",
      "web app toolkit",
      "sviluppo web cesena",
    ],
    canonicalUrl: "https://www.eliazavatta.it/progetti/toolkit",
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

          <h1 className="text-4xl font-bold mb-4">
            ToolKit - Strumenti Online
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Suite completa di strumenti online gratuiti per la produttività
            quotidiana
          </p>
        </div>

        {/* Immagine principale */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
          <img
            src="/toolkit-app/toolkit-desk.png"
            alt="ToolKit"
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
                ToolKit è una suite completa di strumenti online gratuiti
                pensata per semplificare le attività digitali quotidiane.
                Include funzionalità per gestire PDF, manipolare testo,
                elaborare immagini e eseguire calcoli, tutto attraverso
                un'interfaccia moderna e user-friendly.
              </p>
            </div>

            {/* Categorie di strumenti */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Categorie di Strumenti
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <FileText className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Gestione PDF</h3>
                    <p className="text-sm text-muted-foreground">
                      Merge, split, compress e convert PDF
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <FileText className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Manipolazione Testo</h3>
                    <p className="text-sm text-muted-foreground">
                      Conteggio parole, formattazione e conversioni
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Image className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Elaborazione Immagini</h3>
                    <p className="text-sm text-muted-foreground">
                      Resize, compress e convert immagini
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Calcolatrici</h3>
                    <p className="text-sm text-muted-foreground">
                      Calcolatrici specializzate per vari scopi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caratteristiche principali */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Caratteristiche Principali
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    🚀 Completamente Gratuito
                  </h3>
                  <p className="text-sm">
                    Tutti gli strumenti sono disponibili gratuitamente senza
                    necessità di registrazione o pagamenti.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    🔒 Privacy Garantita
                  </h3>
                  <p className="text-sm">
                    Tutti i file vengono elaborati localmente nel browser,
                    garantendo la privacy dei tuoi dati.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold mb-2">
                    ⚡ Veloce e Efficiente
                  </h3>
                  <p className="text-sm">
                    Interfaccia ottimizzata per velocità e facilità d'uso, con
                    risultati immediati.
                  </p>
                </div>
              </div>
            </div>

            {/* Filosofia del progetto */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Filosofia del Progetto
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <p>
                  L'obiettivo di ToolKit è fornire strumenti utili per la
                  produttività quotidiana senza la necessità di installare
                  software aggiuntivi o registrarsi a servizi esterni. Ogni
                  strumento è progettato per essere intuitivo e immediatamente
                  utilizzabile.
                </p>

                <h3>🎨 Design e UX</h3>
                <p>
                  L'interfaccia è stata progettata per essere pulita, moderna e
                  facile da usare, con un focus particolare sull'accessibilità e
                  la velocità di utilizzo. Ogni strumento ha la sua area
                  dedicata con istruzioni chiare e feedback immediato.
                </p>

                <h3>🔧 Implementazione Tecnica</h3>
                <ul>
                  <li>Elaborazione client-side per garantire privacy</li>
                  <li>
                    Web Workers per operazioni computazionalmente intensive
                  </li>
                  <li>Design modulare con componenti riutilizzabili</li>
                  <li>File API moderna per gestione file avanzata</li>
                  <li>Performance ottimizzate con Vite</li>
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
                    href="https://toolkit-suite.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Prova ToolKit
                  </a>
                </Button>
              </div>

              {/* Strumenti disponibili */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Strumenti Disponibili</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>PDF Tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Text Utilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image className="h-4 w-4 text-primary" />
                    <span>Image Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-primary" />
                    <span>Calculators</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Quick Tools</span>
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
                    <span className="font-medium">Build Tool:</span>
                    <p className="text-muted-foreground">Vite</p>
                  </div>
                  <div>
                    <span className="font-medium">Styling:</span>
                    <p className="text-muted-foreground">TailwindCSS</p>
                  </div>
                  <div>
                    <span className="font-medium">Processing:</span>
                    <p className="text-muted-foreground">
                      File API + Web Workers
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Deploy:</span>
                    <p className="text-muted-foreground">Vercel</p>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Screenshot</h4>
                <img
                  src="/toolkit-app/toolkit-desk.png"
                  alt="ToolKit screenshot"
                  className="w-full h-32 object-cover rounded shadow cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() =>
                    window.open("/toolkit-app/toolkit-desk.png", "_blank")
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

export default ToolKit;
