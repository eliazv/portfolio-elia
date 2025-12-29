"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";

const PlayStoreIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
);

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
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
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
                src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/da/bd/25/dabd2565-aca8-0beb-8baf-a473b6195e59/Placeholder.mill/400x400bb-75.webp"
                alt="Sette e Mezzo Logo"
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="font-retro text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl tracking-tight relative"
                style={{ textShadow: "0 2px 12px #000, 0 1px 0 #fff8" }}
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
              Il classico gioco di 7 e Mezzo!{" "}
              <br className="hidden md:block" />
              Blackjack con le carte napoletane offline
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full max-w-3xl mx-auto">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.eliazavatta.settemezzo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border-2 border-purple-200 hover:border-purple-400">
                  <PlayStoreIcon />
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-medium">
                      SCARICA SU
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      Google Play
                    </div>
                  </div>
                </div>
              </motion.a>
              <motion.a
                href="https://apps.apple.com/it/app/id6753985213"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border-2 border-purple-200 hover:border-purple-400">
                  <AppStoreIcon />
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-medium">
                      SCARICA SU
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      App Store
                    </div>
                  </div>
                </div>
              </motion.a>
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
