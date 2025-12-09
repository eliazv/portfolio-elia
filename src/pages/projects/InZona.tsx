import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Smartphone,
  Users,
  Trophy,
  Search,
  MapPin,
  Star,
  Download,
  ExternalLink,
  Mail,
  Phone,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Zap,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

// TODO header non si vede
const InZona: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: "inZona | App eventi Romagna",
    description:
      "App mobile per scoprire eventi, sagre, concerti e feste in Romagna. Progetto sviluppato da Elia Zavatta, sviluppatore app mobile a Cesena.",
    keywords: [
      "app eventi romagna",
      "sviluppo app mobile cesena",
      "app sagre romagna",
    ],
    canonicalUrl: "https://www.eliazavatta.it/progetti/inzona",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate("/#contact");
  };

  return (
    <div className="min-h-screen bg-[#040533] text-white">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* Header della pagina */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="group mb-6 text-white hover:text-[#3EA7FF] hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Torna ai progetti
          </Button>
        </div>

        {/* 1. Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#3EA7FF] bg-clip-text text-transparent">
            inZona
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Tutti gli eventi della tua Romagna, in un'unica app
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Scopri sagre, concerti, mostre e feste vicino a te
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-[#3EA7FF] hover:bg-[#2d8ae6] text-white px-8 py-3 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Scarica l'app
            </Button>
            <Button
              variant="outline"
              className="border-[#3EA7FF] text-[#3EA7FF] hover:bg-[#3EA7FF] hover:text-white px-8 py-3 text-lg"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Guarda il demo
            </Button>
          </div>

          {/* Mockup placeholder */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-br from-[#3EA7FF]/20 to-[#7DFF3E]/20 rounded-3xl p-8 backdrop-blur-sm border border-[#3EA7FF]/30">
              <Smartphone className="h-32 w-32 mx-auto text-[#3EA7FF]" />
              <p className="text-sm text-gray-400 mt-4">
                Screenshot dell'app inZona
              </p>
            </div>
          </div>
        </section>

        {/* 2. Problema & Soluzione */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="bg-red-500/10 border-red-500/30 p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Il problema</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Eventi sparsi su decine di siti, pagine Facebook e volantini. Ti
                sei mai chiesto: 'Cosa c'è stasera a Cesena?'
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-500/10 border-green-500/30 p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">La soluzione</h3>
              </div>
              <p className="text-gray-300 text-lg">
                inZona aggrega automaticamente tutti gli eventi in Romagna, li
                filtra per te e ti mostra solo quello che ti interessa, in tempo
                reale.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 3. Funzionalità Chiave */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Funzionalità Chiave
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-[#3EA7FF]/30 p-6 text-center hover:bg-white/10 transition-colors">
              <CardContent className="p-0">
                <Search className="h-12 w-12 text-[#3EA7FF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Scopri</h3>
                <p className="text-gray-300">
                  Elenco giornaliero di sagre, concerti, mercatini e molto
                  altro.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-[#3EA7FF]/30 p-6 text-center hover:bg-white/10 transition-colors">
              <CardContent className="p-0">
                <MapPin className="h-12 w-12 text-[#3EA7FF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Mappa Interattiva
                </h3>
                <p className="text-gray-300">
                  Visualizza tutti gli eventi su mappa, filtra per distanza e
                  categoria.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-[#3EA7FF]/30 p-6 text-center hover:bg-white/10 transition-colors">
              <CardContent className="p-0">
                <Star className="h-12 w-12 text-[#3EA7FF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Preferiti & Proposte
                </h3>
                <p className="text-gray-300">
                  Salva i tuoi eventi preferiti e suggerisci novità in pochi
                  tap.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 5. Vantaggi per l'Utente */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Vantaggi per l'Utente
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-[#7DFF3E]/30">
              <CheckCircle className="h-8 w-8 text-[#7DFF3E] flex-shrink-0" />
              <p className="text-gray-300">
                Niente login: apri e scopri subito
              </p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-[#7DFF3E]/30">
              <CheckCircle className="h-8 w-8 text-[#7DFF3E] flex-shrink-0" />
              <p className="text-gray-300">Aggiornamenti quotidiani</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-[#7DFF3E]/30">
              <CheckCircle className="h-8 w-8 text-[#7DFF3E] flex-shrink-0" />
              <p className="text-gray-300">
                Design pensato per il mobile, dark mode nativa
              </p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-[#7DFF3E]/30">
              <CheckCircle className="h-8 w-8 text-[#7DFF3E] flex-shrink-0" />
              <p className="text-gray-300">
                Zero banner invasivi: l'app rimane leggera
              </p>
            </div>
          </div>
        </section>

        {/* 6. Per gli Organizzatori */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#3EA7FF]/10 to-[#7DFF3E]/10 rounded-2xl p-8 border border-[#3EA7FF]/30">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Per gli Organizzatori
            </h2>
            <p className="text-xl text-center text-gray-300 mb-8">
              Metti in evidenza i tuoi eventi
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-[#3EA7FF] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">
                  Featured Listings
                </h3>
                <p className="text-sm text-gray-300">
                  Posizionati in cima alle ricerche
                </p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-[#3EA7FF] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Dashboard PRO</h3>
                <p className="text-sm text-gray-300">
                  Eventi illimitati e approvazione istantanea
                </p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-[#3EA7FF] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Statistiche</h3>
                <p className="text-sm text-gray-300">
                  Click, salvataggi e interazioni in tempo reale
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-[#3EA7FF] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Supporto PRO</h3>
                <p className="text-sm text-gray-300">
                  Assistenza dedicata per organizzatori
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-[#7DFF3E] hover:bg-[#6ee635] text-black font-semibold px-8 py-3">
                Scopri i piani PRO
              </Button>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Domande Frequenti
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white/5 border-[#3EA7FF]/30 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-white mb-3">
                  È gratis?
                </h3>
                <p className="text-gray-300">Sì, per tutti gli utenti.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-[#3EA7FF]/30 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Perché serve un account?
                </h3>
                <p className="text-gray-300">
                  Solo per proporre eventi o abbonarsi al piano PRO.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-[#3EA7FF]/30 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Quali fonti usate?
                </h3>
                <p className="text-gray-300">
                  CesenaToday, RiminiToday, VisitCesenatico, enti locali e molto
                  altro.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 10. Footer & Contatti */}
        {/* <section className="text-center mb-20">
          <div className="bg-gradient-to-r from-[#3EA7FF]/10 to-[#7DFF3E]/10 rounded-2xl p-8 border border-[#3EA7FF]/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Resta aggiornato
            </h2>
            <p className="text-gray-300 mb-6">
              Seguici per aggiornamenti live e novità sull'app
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="border-[#3EA7FF] text-[#3EA7FF] hover:bg-[#3EA7FF] hover:text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#3EA7FF] text-[#3EA7FF] hover:bg-[#3EA7FF] hover:text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#3EA7FF] text-[#3EA7FF] hover:bg-[#3EA7FF] hover:text-white"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                YouTube
              </Button>
            </div>

            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4" />
                info@inzona.app
              </p>
              <p className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                +39 123 456 7890
              </p>
            </div>
          </div>
        </section> */}

        {/* Tecnologie */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Tecnologie utilizzate
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Flutter"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-[#3EA7FF]/20 text-[#3EA7FF] border-[#3EA7FF]/30 px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InZona;
