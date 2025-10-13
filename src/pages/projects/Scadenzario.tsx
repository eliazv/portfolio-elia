import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarDays,
  BellRing,
  FileText,
  Wallet,
  Pill,
  Repeat,
  CheckCircle,
  Shield,
  Download,
  Zap,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Scadenzario: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* HERO */}
        <section className="text-center mt-8 mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">
            Scadenzario
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            Bollette, documenti, medicinali. Promemoria smart per tutto ciò che
            conta.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Mai più scadenze dimenticate. Gestisci bollette, pagamenti,
            documenti e farmaci con notifiche intelligenti e una vista
            calendario chiara e intuitiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12 w-full max-w-lg sm:max-w-2xl mx-auto">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.eliazavatta.scadenzario"
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

          {/* mockup placeholder */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-br from-indigo-100 to-blue-50 rounded-3xl p-8 border border-indigo-200 shadow-lg">
              <CalendarDays className="h-32 w-32 mx-auto text-indigo-500" />
              <p className="text-sm text-gray-500 mt-4">
                Anteprima schermata Scadenzario
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
                Bollette, visite, documenti, tasse: troppe scadenze da
                ricordare. Un attimo di distrazione e rischi di dimenticare
                qualcosa di importante.
              </p>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50 p-6 hover:shadow-md transition-all">
            <CardContent className="p-0">
              <h3 className="flex items-center text-2xl font-bold mb-3 text-gray-800">
                <CheckCircle className="h-8 w-8 text-indigo-600 mr-3" /> La
                soluzione
              </h3>
              <p className="text-gray-600 text-lg">
                Scadenzario raccoglie tutto in un’unica app: bollette,
                documenti, medicinali, abbonamenti e pagamenti, con promemoria
                personalizzabili e calendario smart.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FUNZIONALITÀ PRINCIPALI */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Funzionalità principali
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CalendarDays,
                title: "Vista Calendario",
                desc: "Visualizza tutte le scadenze in un calendario intuitivo e colorato.",
              },
              {
                icon: BellRing,
                title: "Notifiche Smart",
                desc: "Ricevi promemoria intelligenti e personalizzabili per ogni scadenza.",
              },
              {
                icon: Repeat,
                title: "Ricorrenze Automatiche",
                desc: "Gestisci pagamenti e abbonamenti ricorrenti con un solo tap.",
              },
              {
                icon: FileText,
                title: "Documenti e Bollette",
                desc: "Archivia e gestisci i tuoi documenti importanti in modo sicuro e ordinato.",
              },
              {
                icon: Pill,
                title: "Promemoria Farmaci",
                desc: "Tieniti sempre aggiornato sulle terapie e le visite mediche.",
              },
              {
                icon: Search,
                title: "Ricerca e Filtri",
                desc: "Trova rapidamente scadenze e promemoria per nome, data o categoria.",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="bg-white border-indigo-100 hover:border-indigo-400 hover:shadow-xl p-6 text-center rounded-2xl transition-all"
              >
                <CardContent className="p-0">
                  <f.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
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
            Perché scegliere Scadenzario
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Interfaccia semplice e intuitiva",
              "Notifiche smart e personalizzabili",
              "Gestione bollette, farmaci e documenti",
              "Vista calendario chiara e organizzata",
              "Nessuna pubblicità invasiva",
              "Disponibile in italiano e inglese",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-4 bg-white border border-indigo-100 rounded-xl hover:shadow-md transition-all"
              >
                <CheckCircle className="h-7 w-7 text-indigo-600 flex-shrink-0" />
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
                a: "Sì, Scadenzario è gratuita e offre tutte le funzionalità base senza costi nascosti.",
              },
              {
                q: "Posso ricevere promemoria personalizzati?",
                a: "Certo! Puoi impostare notifiche ricorrenti e personalizzarle in base alle tue esigenze.",
              },
              {
                q: "Serve la connessione internet?",
                a: "No, tutte le funzioni principali funzionano anche offline.",
              },
              {
                q: "Posso gestire anche le scadenze lavorative?",
                a: "Sì, puoi creare categorie personalizzate (Casa, Lavoro, Auto, ecc.) per organizzare tutto.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="bg-white border border-indigo-100 hover:border-indigo-400 p-6 rounded-xl transition-all"
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
      </main>

      <Footer />
    </div>
  );
};

export default Scadenzario;
