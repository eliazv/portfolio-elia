import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  CheckCircle,
  Shield,
  BarChart3,
  Monitor,
  Zap,
  Lock,
  LineChart,
  Home,
  Users,
  TrendingUp,
  Smartphone,
  Star,
  Quote,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Hostpilot: React.FC = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Hostpilot | Channel manager affitti brevi e case vacanza",
    description:
      "Hostpilot è il channel manager per affitti brevi ideato da Elia Zavatta: sincronizza Airbnb, Booking.com e portali OTA, automatizza tasse di soggiorno e messaggi agli ospiti con dashboard intuitiva.",
    keywords: [
      "Hostpilot channel manager",
      "gestione affitti brevi romagna",
      "software affitti brevi cesena",
      "channel manager italiano",
      "app gestione case vacanza",
    ],
    canonicalUrl: "https://eliazavatta.it/hostpilot",
    og: {
      title: "Hostpilot | Channel manager per affitti brevi",
      description:
        "Software per host e property manager: sincronizzazione calendari, automazioni fiscali e dashboard centralizzata.",
      url: "https://eliazavatta.it/hostpilot",
      type: "product",
      image: "https://eliazavatta.it/hostpilot.svg",
      locale: "it_IT",
      site_name: "Hostpilot - Gestione affitti brevi",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hostpilot | Channel manager per affitti brevi",
      description:
        "Gestisci annunci, prezzi e comunicazioni degli affitti brevi con Hostpilot, la piattaforma sviluppata da Elia Zavatta.",
      image: "https://eliazavatta.it/hostpilot.svg",
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Hostpilot",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "PropertyManagementApplication",
        operatingSystem: "Web, iOS",
        offers: [
          {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        ],
        screenshot: "https://eliazavatta.it/hostpilot.svg",
        description:
          "Channel manager per affitti brevi che centralizza calendari, messaggi agli ospiti, gestione tasse di soggiorno e performance analytics.",
        creator: {
          "@type": "Person",
          name: "Elia Zavatta",
          url: "https://eliazavatta.it/",
        },
        keywords: [
          "channel manager affitti brevi",
          "gestione case vacanza",
          "software property manager",
          "sincronizzazione calendari OTA",
        ],
        featureList: [
          "Sincronizzazione calendari Airbnb, Booking.com e portali OTA",
          "Calcolo automatico tasse di soggiorno e imposta di bollo",
          "Dashboard multi-proprietà con analisi performance",
          "Applicazione mobile e web per host e collaboratori",
        ],
        applicationSuite: "Soluzioni digitali Elia Zavatta",
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
            name: "Hostpilot",
            item: "https://eliazavatta.it/hostpilot",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* HERO */}
        <motion.section
          className="text-center mt-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.img
              src="/hostpilot.svg"
              alt="Hostpilot Logo"
              className="h-20 w-20 md:h-24 md:w-24"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              HostPilot
            </motion.h1>
          </div>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            il channel manager per affitti brevi senza stress
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Hostpilot è il channel manager per affitti brevi per property
            manager e host. Sincronizzi calendari e tariffe su Airbnb,
            Booking.com e portali OTA, automatizzi messaggi e adempimenti
            fiscali da un'unica dashboard.
          </motion.p>
          <motion.p
            className="text-base text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Dalla tassa di soggiorno alla gestione ospiti, Hostpilot supporta
            chi affitta case vacanza con analytics, automazioni e un'app mobile
            dedicata alla collaborazione del team.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-lg sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Web App Button */}
            <Button
              size="lg"
              onClick={() =>
                window.open("https://hostpilot.vercel.app/", "_blank")
              }
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Vai all'App Web
            </Button>

            {/* App Store Button */}
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/hostpilot-gestione-affitti/id6752573527",
                  "_blank"
                )
              }
              className="w-full sm:w-auto border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Scarica su App Store
            </Button>
          </motion.div>

          {/* App Screenshots Carousel */}
          <motion.div
            className="mt-16 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <motion.div
                className="flex"
                animate={{
                  x: [0, -100 * 5], // 5 screenshots
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/45/12/e2/4512e2d9-fe9b-86af-17f8-3492b57e74fe/Screenshot_2025-09-29_183634.png/300x0w.webp",
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/9e/ce/7c9ecec0-3761-715f-a4a8-294c50cc71bb/Screenshot_2025-09-29_183724.png/300x0w.webp",
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f5/54/74/f554742b-d7d8-b17f-a390-19ed881b59d0/Screenshot_2025-09-29_183823.png/300x0w.webp",
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d5/73/5d/d5735d0d-a2aa-28be-4885-76d12145874f/Screenshot_2025-09-29_183802.png/300x0w.webp",
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a0/4c/53/a04c537c-cbc6-a060-4b20-e40a5c1e9fa3/Screenshot_2025-09-29_183846.png/300x0w.webp",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                    />
                  </motion.div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/45/12/e2/4512e2d9-fe9b-86af-17f8-3492b57e74fe/Screenshot_2025-09-29_183634.png/300x0w.webp",
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/9e/ce/7c9ecec0-3761-715f-a4a8-294c50cc71bb/Screenshot_2025-09-29_183724.png/300x0w.webp",
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f5/54/74/f554742b-d7d8-b17f-a390-19ed881b59d0/Screenshot_2025-09-29_183823.png/300x0w.webp",
                ].map((src, i) => (
                  <motion.div
                    key={`duplicate-${i}`}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={src}
                      alt={`Screenshot duplicate ${i + 1}`}
                      className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Scopri l'interfaccia intuitiva di HostPilot
            </p>
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
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Sincronizzazioni manuali tra piattaforme
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Calcoli fiscali complessi
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Gestione ospiti disorganizzata
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Mancanza di insight finanziari
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
            <Card className="border-blue-200 bg-blue-50 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <h3 className="flex items-center text-2xl font-bold mb-4 text-gray-800">
                  <CheckCircle className="h-8 w-8 text-blue-500 mr-3" /> La
                  soluzione
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Piattaforma unificata per tutto
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Gestione finanziaria automatica
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Analytics avanzati per decisioni
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Massimizzazione profitti
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* FUNZIONALITÀ CHIAVE */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Channel Manager",
                desc: "Sincronizzazione automatica con Airbnb, Booking.com, Vrbo, Expedia. Calendario unificato iCal per evitare doppie prenotazioni.",
              },
              {
                icon: BarChart3,
                title: "Gestione Finanziaria",
                desc: "Calcolo automatico tasse italiane  (cedolare secca, soggiorno). Report su ROI, commissioni e profitti. Conformità fiscale completa.",
              },
              {
                icon: Zap,
                title: "Automazioni Smart",
                desc: "Notifiche automatiche per check-in/out, pulizia e manutenzione. Workflow senza stress e gestione ospiti integrata.",
              },
              {
                icon: TrendingUp,
                title: "Analytics Avanzati",
                desc: "Dashboard KPI real-time. Trend stagionali, previsioni e confronto anno su anno.",
              },
              {
                icon: Home,
                title: "Multi-Proprietà",
                desc: "Calendari separati per ogni immobile. Tariffe e orari personalizzabili.",
              },
              {
                icon: Smartphone,
                title: "Cross-Platform",
                desc: "App mobile, web e desktop. Sincronizzazione cloud e backup sicuro.",
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
                <Card className="bg-white border-blue-100 hover:border-blue-400 hover:shadow-2xl p-6 text-center rounded-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-cyan-50">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <f.icon className="h-12 w-12 text-blue-500 mx-auto mb-4 group-hover:text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                      {f.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TESTIMONIANZE - TEMPORANEAMENTE NASCOSTO */}
        {/*
        <motion.section
          className="mb-24 bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-16 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Cosa dicono i nostri clienti
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Scopri come HostPilot ha trasformato la gestione degli affitti
              brevi per host e property manager
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Rossi",
                role: "Host di 5 appartamenti",
                content:
                  "HostPilot ha semplificato tutto! Non devo più controllare manualmente ogni piattaforma. Le tasse si calcolano da sole e i report finanziari sono fantastici.",
                rating: 5,
              },
              {
                name: "Luca Bianchi",
                role: "Property Manager",
                content:
                  "La gestione multi-proprietà è eccezionale. Calendari separati, notifiche automatiche e analytics dettagliati. Ha aumentato i nostri profitti del 25%.",
                rating: 5,
              },
              {
                name: "Giulia Verdi",
                role: "Host alle prime armi",
                content:
                  "Ero confusa all'inizio, ma HostPilot mi ha guidato passo dopo passo. Ora gestisco tutto con tranquillità e professionalità.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl p-6 rounded-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-blue-200 mb-4" />
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        */}

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
              "Host alle prime armi",
              "Property manager con più unità",
              "Gestori di B&B e case vacanze",
              "Agenzie e investitori in affitti brevi",
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
                <div className="flex items-center space-x-4 p-4 bg-white border border-blue-100 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 group-hover:bg-blue-50">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircle className="h-7 w-7 text-blue-500 flex-shrink-0 group-hover:text-blue-600" />
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
                q: "HostPilot supporta tutte le piattaforme di prenotazione?",
                a: "Sì, HostPilot si sincronizza automaticamente con Airbnb, Booking.com, Vrbo, Expedia e molte altre piattaforme, oltre alle prenotazioni dirette.",
              },
              {
                q: "È conforme alla normativa italiana?",
                a: "Assolutamente sì. HostPilot gestisce automaticamente la cedolare secca, le tasse di soggiorno e la registrazione ospiti secondo le leggi italiane.",
              },
              {
                q: "Posso gestire più proprietà?",
                a: "Sì, HostPilot è progettato per multi-proprietà con calendari separati, tariffe personalizzate e gestione portfolio completa.",
              },
              {
                q: "C'è un'app mobile?",
                a: "Sì, HostPilot è disponibile su mobile, web e desktop con sincronizzazione cloud e backup automatico.",
              },
              {
                q: "Come vengono gestiti i miei dati?",
                a: "HostPilot rispetta la privacy degli utenti. Consulta la nostra Informativa sulla Privacy per dettagli completi.",
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
                <Card className="bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl p-6 rounded-xl transition-all duration-300">
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

        {/* Privacy Link */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              onClick={() => navigate("/hostpilot/privacy")}
              className="border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Leggi l'Informativa sulla Privacy
            </Button>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Hostpilot;
