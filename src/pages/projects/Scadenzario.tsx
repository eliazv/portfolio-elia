import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  Smartphone,
  Monitor,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Scadenzario: React.FC = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Scadenzario | App promemoria scadenze bollette e documenti",
    description:
      "Scadenzario è l'app promemoria scadenze ideata da Elia Zavatta per gestire bollette, documenti, medicinali e pagamenti ricorrenti con notifiche intelligenti su Android e iOS.",
    keywords: [
      "Scadenzario app promemoria",
      "app promemoria bollette",
      "gestione scadenze documenti",
      "promemoria farmaci",
      "app promemoria pagamenti ricorrenti",
    ],
    canonicalUrl: "https://eliazavatta.it/scadenzario",
    og: {
      title: "Scadenzario | App promemoria scadenze smart",
      description:
        "Gestisci bollette, documenti e pagamenti con l'app Scadenzario: notifiche intelligenti, calendario e ricorrenze automatiche.",
      url: "https://eliazavatta.it/scadenzario",
      type: "product",
      image: "https://eliazavatta.it/scadenzario.png",
      locale: "it_IT",
      site_name: "Scadenzario - App promemoria scadenze",
    },
    twitter: {
      card: "summary_large_image",
      title: "Scadenzario | App promemoria scadenze smart",
      description:
        "Promemoria per bollette, farmaci e documenti con Scadenzario, l'app sviluppata da Elia Zavatta per Android e iOS.",
      image: "https://eliazavatta.it/scadenzario.png",
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Scadenzario",
        applicationCategory: "ProductivityApplication",
        applicationSubCategory: "ReminderApplication",
        operatingSystem: "Android, iOS",
        offers: [
          {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        ],
        downloadUrl:
          "https://play.google.com/store/apps/details?id=com.eliazavatta.scadenzario",
        installUrl:
          "https://apps.apple.com/it/app/scadenzario-gestione-memo/id6751818289",
        screenshot: "https://eliazavatta.it/scadenzario.png",
        description:
          "App promemoria per scadenze di bollette, documenti, farmaci e pagamenti ricorrenti con notifiche intelligenti e calendario condiviso.",
        creator: {
          "@type": "Person",
          name: "Elia Zavatta",
          url: "https://eliazavatta.it/",
        },
        keywords: [
          "promemoria scadenze",
          "scadenzario digitale",
          "app gestione bollette",
          "promemoria documenti",
        ],
        featureList: [
          "Notifiche intelligenti e ricorrenze personalizzate",
          "Calendario mensile e vista elenco per priorità",
          "Gestione allegati PDF e foto dei documenti",
          "Sincronizzazione multi-dispositivo",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://eliazavatta.it/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Scadenzario",
            item: "https://eliazavatta.it/scadenzario",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* HERO */}
        <motion.section
          className="text-center mt-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Scadenzario
          </motion.h1>
          <motion.img
            src="/scadenzario.png"
            alt="Scadenzario App Logo"
            className="h-20 w-20 md:h-24 md:w-24 mx-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Stanco di dimenticare bollette, pagamenti o documenti importanti?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Scadenzario è l'app promemoria scadenze per amministrare bollette,
            documenti e pagamenti ricorrenti in modo semplice. Disponibile per
            Android e iOS, offre notifiche intelligenti, calendario condiviso e
            gestione allegati per avere tutto sotto controllo.
          </motion.p>
          <motion.p
            className="text-base text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Nato per chi gestisce casa, studio o attività sul territorio,
            Scadenzario rende facile ricordare scadenze fiscali, farmaci,
            assicurazioni, manutenzioni e appuntamenti condividendo le liste con
            famiglia e colleghi.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-lg sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Google Play */}
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.eliazavatta.scadenzario",
                  "_blank"
                )
              }
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-blue-400 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Scarica su Google Play
            </Button>

            {/* App Store */}
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/it/app/scadenzario-gestione-memo/id6751818289",
                  "_blank"
                )
              }
              className="w-full sm:w-auto border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600 hover:text-indigo-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Scarica su App Store
            </Button>
          </motion.div>

          {/* mockup placeholder */}
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-br from-indigo-100 to-blue-50 rounded-3xl p-8 border border-indigo-200 shadow-lg">
              <CalendarDays className="h-32 w-32 mx-auto text-indigo-500" />
              <p className="text-sm text-gray-500 mt-4">
                Anteprima schermata Scadenzario
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* PROBLEMA & SOLUZIONE */}
        <motion.section
          className="grid md:grid-cols-2 gap-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="border-red-200 bg-red-50 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <h3 className="flex items-center text-2xl font-bold mb-4 text-gray-800">
                  <Shield className="h-8 w-8 text-red-400 mr-3" /> Il problema
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Dimenticare bollette e pagamenti importanti
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Perdere scadenze di documenti e tasse
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Mancanza di promemoria per medicinali
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Gestione disorganizzata di abbonamenti
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="border-indigo-200 bg-indigo-50 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <h3 className="flex items-center text-2xl font-bold mb-4 text-gray-800">
                  <CheckCircle className="h-8 w-8 text-indigo-600 mr-3" /> La
                  soluzione
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                    Tracker completo per ogni tipo di scadenza
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                    Promemoria e notifiche personalizzabili
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                    Ricorrenze automatiche per pagamenti regolari
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                    Organizzazione per categorie e calendario
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* FUNZIONALITÀ PRINCIPALI */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Funzionalità principali
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CalendarDays,
                title: "Tracker Completo",
                desc: "Crea e gestisci scadenze per bollette, affitti, tasse, documenti, abbonamenti, assicurazioni e medicinali.",
              },
              {
                icon: BellRing,
                title: "Promemoria Personalizzabili",
                desc: "Scegli quando ricevere avvisi: giorni prima, il giorno stesso o all'ora esatta.",
              },
              {
                icon: Repeat,
                title: "Ricorrenze Automatiche",
                desc: "Gestisci facilmente scadenze ricorrenti come bollette mensili, affitto, rate o abbonamenti.",
              },
              {
                icon: FileText,
                title: "Organizzazione per Categorie",
                desc: "Suddividi le scadenze per tipo: Casa, Lavoro, Auto, Salute o Documenti.",
              },
              {
                icon: Pill,
                title: "Vista Calendario e Lista",
                desc: "Visualizza le scadenze in calendario intuitivo oppure in elenco ordinato.",
              },
              {
                icon: Search,
                title: "Ricerca Veloce",
                desc: "Trova qualsiasi scadenza in pochi secondi grazie ai filtri per nome, data o tipo.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white border-indigo-100 hover:border-indigo-400 hover:shadow-2xl p-6 text-center rounded-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-blue-50">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <f.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {f.title}
                    </h3>
                    <p className="text-gray-600">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* USP */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Perfetto per
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Promemoria bollette (luce, gas, internet, telefono)",
              "Pagamenti di affitto, mutuo e rate mensili",
              "Scadenze documenti (patente, carta d'identità, passaporto)",
              "Promemoria medicinali, ricette e visite mediche",
              "Abbonamenti (streaming, palestra, software)",
              "Assicurazioni (auto, casa, vita)",
              "Tasse, bollo auto e scadenze fiscali",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center space-x-4 p-4 bg-white border border-indigo-100 rounded-xl hover:shadow-lg hover:border-indigo-300 transition-all duration-300 group-hover:bg-indigo-50">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircle className="h-7 w-7 text-indigo-600 flex-shrink-0 group-hover:text-indigo-700" />
                  </motion.div>
                  <p className="text-gray-700 group-hover:text-gray-900 font-medium">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Domande frequenti
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "L'app è gratuita?",
                a: "Sì, Scadenzario è gratuita e offre tutte le funzionalità base senza costi nascosti. Puoi gestire tutte le tue scadenze gratuitamente.",
              },
              {
                q: "Posso ricevere promemoria personalizzati?",
                a: "Certo! Puoi scegliere quando ricevere gli avvisi: giorni prima, il giorno stesso o all'ora esatta. Le notifiche sono completamente personalizzabili.",
              },
              {
                q: "Serve la connessione internet?",
                a: "No, tutte le funzioni principali funzionano anche offline. Puoi creare, modificare e visualizzare le tue scadenze senza connessione.",
              },
              {
                q: "Posso gestire anche le scadenze lavorative?",
                a: "Sì, puoi creare categorie personalizzate come Casa, Lavoro, Auto, Salute o Documenti per organizzare tutto al meglio.",
              },
              {
                q: "Come funziona il tracker completo?",
                a: "Il tracker ti permette di creare scadenze per qualsiasi cosa: bollette, affitti, tasse, documenti, abbonamenti, assicurazioni e medicinali con titolo, data, categoria e note.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white border border-indigo-100 hover:border-indigo-400 hover:shadow-xl p-6 rounded-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DESCRIZIONE FINALE */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 via-white to-blue-50 rounded-3xl p-8 border border-indigo-100 shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Scadenzario è l'app ideale per chi vuole gestire le proprie
              scadenze in modo semplice, affidabile e sempre aggiornato. Con
              promemoria intelligenti, calendario e ricorrenze automatiche, non
              dimenticherai mai più nulla.
            </p>
            <p className="text-md text-gray-600 mt-4">
              Scarica Scadenzario e tieni sempre sotto controllo bollette,
              pagamenti, documenti e promemoria.
            </p>
          </motion.div>
        </motion.section>

        {/* PRIVACY POLICY BUTTON */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate("/scadenzario/privacy")}
              variant="outline"
              size="lg"
              className="border-indigo-300 hover:bg-indigo-50 hover:border-indigo-500 text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Shield className="mr-2 h-5 w-5" />
              Privacy Policy
            </Button>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Scadenzario;
