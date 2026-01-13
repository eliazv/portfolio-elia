"use client";

import { Brain, Smartphone, Trophy, Zap, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const featuresSet1 = [
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600" />,
      title: "Gioca Ovunque (Offline)",
      description:
        "Non serve internet! Goditi partite rapide al gioco di carte 7 e mezzo in treno, in aereo o nei momenti di relax senza consumare dati.",
      highlight: "Offline",
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: "Mazzi Italiani Autentici",
      description:
        "Gioca con le tue carte preferite! Scegli tra mazzi di carte Napoletane, Piacentine, Siciliane, Trevisane, Sarde, Toscane e Romagnole.",
      highlight: "7 Mazzi",
    },
  ];

  const featuresSet2 = [
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: "Bonus e Monete Gratis",
      description:
        "Inizia con un generoso pacchetto di monete e ricevi premi ogni giorno per non restare mai fuori dai giochi di casinò.",
      highlight: "Bonus Giornalieri",
    },
    {
      icon: <Heart className="h-12 w-12 text-purple-600" />,
      title: "Regole Classiche",
      description:
        "L'obiettivo è avvicinarsi il più possibile al punteggio di 7 e mezzo senza sballare. Attento al Re di Denari (la Matta)!",
      highlight: "Tradizionale",
    },
  ];

  const featuresSet3 = [
    {
      icon: <Trophy className="h-12 w-12 text-purple-600" />,
      title: "Statistiche e Strategia",
      description:
        "Monitora le tue vittorie e affina la tua tecnica per battere il banco. Riuscirai a diventare il campione del tavolo?",
      highlight: "Stats",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-purple-600" />,
      title: "Grafica HD",
      description:
        "Un'interfaccia pulita, animazioni fluide e tavoli realistici per un'esperienza di gioco autentica.",
      highlight: "HD",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-10 px-4 bg-gradient-to-b from-amber-50/50 to-white overflow-hidden"
    >
      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-game text-base md:text-lg text-center text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ti senti fortunato? Metti alla prova la tua abilità con{" "}
            <strong>Sette e Mezzo</strong>, il leggendario{" "}
            <strong>gioco di carte online</strong> della tradizione italiana.
            Che tu lo consideri il vero <strong>Blackjack Italiano</strong> o il
            passatempo delle feste, l'emozione della sfida contro il banco è a
            portata di tap. Gioca <strong>gratis online</strong> o scarica l'
            <strong>app per Android e iOS</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-retro text-3xl md:text-4xl text-center text-purple-700 mb-8">
            Perché scegliere la nostra App Sette e Mezzo?
          </h2>
        </motion.div>

        {/* Prima sezione: Prime 2 features + Screenshot */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
          <div className="flex-1 grid grid-cols-1 gap-6">
            {featuresSet1.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-game font-bold text-lg text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-game text-md text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex-1 max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-4 shadow-2xl border border-purple-200"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/03/9e/f4/039ef4ef-f139-4836-6f78-cf205485490f/1.png/300x650bb.webp"
                alt="Screenshot del gioco Sette e Mezzo"
                className="object-cover w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Seconda sezione: Altre 2 features + Screenshot */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-20">
          <div className="flex-1 grid grid-cols-1 gap-6">
            {featuresSet2.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-game font-bold text-lg text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-game text-md text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex-1 max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-4 shadow-2xl border border-purple-200"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/50/04/d4/5004d442-229e-c2e2-d1fa-c14e54cec9a6/sette_e_mezzo_screen.png/300x650bb.webp"
                alt="Partita in corso"
                className="object-cover w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Terza sezione: Ultime 2 features + Statistiche */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
          <div className="flex-1 grid grid-cols-1 gap-6">
            {featuresSet3.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-game font-bold text-lg text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-game text-md text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex-1 max-w-xs md:max-w-sm mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-4 shadow-2xl border border-purple-200"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/28/74/e8/2874e8e7-8f7e-8694-8997-ee812a5c4589/3.png/300x650bb.webp"
                alt="Screenshot del gioco Sette e Mezzo"
                className="object-cover w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Sezione CTA finale */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-retro text-2xl md:text-3xl text-gray-800 mb-6 text-center">
              Scarica l'App Sette e Mezzo Gratis!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="font-retro text-4xl md:text-5xl text-purple-600 mb-2">
                  100%
                </div>
                <div className="font-game text-gray-700">
                  Gratis - Gioco Completo
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="font-retro text-4xl md:text-5xl text-purple-600 mb-2">
                  📱
                </div>
                <div className="font-game text-gray-700">
                  App iOS & Android Offline
                </div>
              </motion.div>
            </div>
            <p className="font-game text-sm md:text-base text-center text-gray-600 leading-relaxed">
              Gioca a <strong>Sette e Mezzo online gratis</strong> direttamente
              dal browser o scarica l'<strong>app gratuita</strong> per giocare
              ovunque con le tue <strong>carte napoletane</strong> preferite.
              Disponibile anche con carte piacentine, siciliane, trevisane e
              altri mazzi regionali. Il miglior{" "}
              <strong>gioco di 7 e mezzo</strong> per smartphone!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
