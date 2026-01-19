"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import StoreButton from "./StoreButton";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-32 md:pt-28"
        itemScope
        itemType="https://schema.org/Game"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <meta itemProp="name" content="Sette e Mezzo Online" />
        <meta
          itemProp="description"
          content="Il classico gioco di carte italiano 7 e mezzo con carte napoletane"
        />
        <meta itemProp="genre" content="Gioco di Carte" />
        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Pattern di carte decorativo */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 text-white text-9xl transform rotate-12">
            ♠
          </div>
          <div className="absolute bottom-20 right-10 text-white text-9xl transform -rotate-12">
            ♥
          </div>
          <div className="absolute top-1/3 right-1/4 text-white text-7xl transform rotate-45">
            ♦
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-white text-7xl transform -rotate-45">
            ♣
          </div>
        </div>

        <div className="container px-0 mx-auto text-center relative z-10">
          {/* Logo + Title Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ac/81/47/ac8147ec-b495-8f4f-1b49-c69906b18317/Placeholder.mill/400x400bb-75.webp"
                alt="Sette e Mezzo Logo"
                className="w-44 h-44 md:w-40 md:h-40 rounded-3xl"
              />
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="font-black text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl tracking-wider relative"
                style={{
                  textShadow:
                    "0 4px 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6), 0 0 40px rgba(255,255,255,0.3)",
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                }}
                itemProp="name"
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    rotate: [0, -3, 3, -3, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  SETTE
                </motion.span>
                <br />
                <span className="whitespace-nowrap">
                  E{" "}
                  <motion.span
                    className="inline-block"
                    animate={{
                      rotate: [0, 5, -5, 5, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    MEZZO
                  </motion.span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Apple Award Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <img
                src="https://developer.apple.com/app-store/app-store-awards-2023/images/transparent_awards_logo.png"
                alt="App Store Awards"
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-semibold text-sm md:text-base">
                🏆 Primo in Casinò e Carte - Dicembre 2025
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p
              className="font-game text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-semibold relative"
              style={{ textShadow: "0 2px 8px #000, 0 1px 0 #fff8" }}
            >
              Il classico gioco di 7 e Mezzo! <br className="hidden md:block" />
              Blackjack con le carte napoletane offline
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
              <StoreButton
                href="https://play.google.com/store/apps/details?id=com.eliazavatta.settemezzo"
                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/960px-Google_Play_2022_icon.svg.png"
                iconAlt="Google Play"
                label="Google Play"
                size="large"
              />
              <StoreButton
                href="https://apps.apple.com/it/app/id6753985213"
                icon="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                iconAlt="App Store"
                label="App Store"
                size="large"
              />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.div
              className="flex justify-center mt-8 cursor-pointer"
              onClick={() => {
                const el = document.getElementById("features");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Scorri alla sezione funzionalità"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  const el = document.getElementById("features");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m0 0l-6-6m6 6l6-6"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
