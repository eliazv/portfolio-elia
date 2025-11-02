import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Download,
  CheckCircle,
  Shield,
  BarChart3,
  Wallet,
  PieChart,
  Zap,
  Lock,
  LineChart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContaSpicci: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* HERO */}
        <section className="text-center mt-8 mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent">
            ContaSpicci
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            Gestisci spese e investimenti con un’unica app
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            L’app tutto-in-uno per tenere traccia delle tue finanze personali,
            budget mensili e portafoglio investimenti — in modo semplice,
            elegante e 100% offline.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12 w-full max-w-lg sm:max-w-2xl mx-auto">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.eliazavatta.contaspicci"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1"
            >
              <img
                src="/playstore.png"
                alt="Scarica su Google Play"
                className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl transition-transform hover:scale-[1.03]"
                style={{ minWidth: 180, minHeight: 60 }}
              />
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com/it/app/scadenzario-gestione-memo/id6751818289" // <-- sostituisci con il tuo link reale
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1"
            >
              <img
                src="/appstore.png"
                alt="Scarica su App Store"
                className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl transition-transform hover:scale-[1.03]"
                style={{ minWidth: 180, minHeight: 60 }}
              />
            </a>
          </div>

          {/* mockup */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-br from-emerald-100 to-lime-100 rounded-3xl p-8 border border-emerald-200 shadow-lg">
              <Smartphone className="h-32 w-32 mx-auto text-emerald-500" />
              <p className="text-sm text-gray-500 mt-4">
                Anteprima schermata ContaSpicci
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMA & SOLUZIONE */}
        <section className="grid md:grid-cols-2 gap-8 mb-24">
          <Card className="border-red-200 bg-red-50 p-6 hover:shadow-md transition-all">
            <CardContent className="p-0">
              <h3 className="flex items-center text-2xl font-bold mb-3 text-gray-800">
                <Shield className="h-8 w-8 text-red-400 mr-3" /> Il problema
              </h3>
              <p className="text-gray-600 text-lg">
                Troppi conti sparsi, app complicate e nessuna visione chiara del
                tuo denaro. Ti sei mai chiesto dove finiscono i tuoi soldi ogni
                mese?
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50 p-6 hover:shadow-md transition-all">
            <CardContent className="p-0">
              <h3 className="flex items-center text-2xl font-bold mb-3 text-gray-800">
                <CheckCircle className="h-8 w-8 text-emerald-500 mr-3" /> La
                soluzione
              </h3>
              <p className="text-gray-600 text-lg">
                ContaSpicci ti permette di gestire spese, risparmi e asset in
                un’unica dashboard chiara, sicura e completamente offline.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FUNZIONALITÀ CHIAVE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Funzionalità principali
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Tracciamento spese",
                desc: "Aggiungi transazioni in pochi secondi e categorizzale in modo intelligente.",
              },
              {
                icon: PieChart,
                title: "Gestione portafoglio",
                desc: "Monitora azioni, ETF, criptovalute e asset con grafici e andamento storico.",
              },
              {
                icon: BarChart3,
                title: "Statistiche dettagliate",
                desc: "Analizza spese mensili, entrate e rendimenti con grafici interattivi.",
              },
              {
                icon: LineChart,
                title: "Pianificazione finanziaria",
                desc: "Crea budget mensili, imposta obiettivi e tieni sotto controllo le spese.",
              },
              {
                icon: Lock,
                title: "Privacy assoluta",
                desc: "Nessuna connessione o tracciamento. I dati restano solo sul tuo dispositivo.",
              },
              {
                icon: Zap,
                title: "Esperienza veloce e fluida",
                desc: "UI moderna e ottimizzata, con dark mode e performance eccezionali.",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="bg-white border-emerald-100 hover:border-emerald-400 hover:shadow-xl p-6 text-center rounded-2xl transition-all"
              >
                <CardContent className="p-0">
                  <f.icon className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* USP */}
        <section className="mb-24 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Perché scegliere ContaSpicci
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Tutto offline: privacy garantita",
              "Design moderno e intuitivo",
              "Analisi dettagliate con grafici",
              "Supporto multi-valuta e dark mode",
              "Nessun abbonamento o pubblicità",
              "Perfetta per studenti e professionisti",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-4 bg-white border border-emerald-100 rounded-xl hover:shadow-md transition-all"
              >
                <CheckCircle className="h-7 w-7 text-emerald-500 flex-shrink-0" />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Domande frequenti
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "L’app è gratuita?",
                a: "ContaSpicci è gratuita per tutti gli utenti, con funzionalità complete offline.",
              },
              {
                q: "I miei dati sono al sicuro?",
                a: "Sì. Tutti i dati restano sul tuo dispositivo, senza sincronizzazioni o tracciamento cloud.",
              },
              {
                q: "Posso monitorare i miei investimenti?",
                a: "Sì. Puoi aggiungere azioni, ETF, crypto e altri asset, visualizzando grafici e rendimenti.",
              },
              {
                q: "Serve un account per usarla?",
                a: "No. Puoi iniziare subito, senza login o registrazione.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="bg-white border border-emerald-100 hover:border-emerald-400 p-6 rounded-xl transition-all"
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PRIVACY POLICY BUTTON */}
        <section className="mb-24 text-center">
          <Button
            onClick={() => navigate("/contaspicci/privacy")}
            variant="outline"
            size="lg"
            className="border-emerald-300 hover:bg-emerald-50 hover:border-emerald-500 text-emerald-700 font-semibold"
          >
            <Shield className="mr-2 h-5 w-5" />
            Privacy Policy
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContaSpicci;
