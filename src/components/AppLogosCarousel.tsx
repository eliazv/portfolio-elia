"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { apps as appsData } from "@/data/apps";

// Carosello infinito con libreria react-fast-marquee (gestisce automaticamente loop senza salti)
const AppLogosCarousel: React.FC = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-6 overflow-x-hidden overflow-y-visible">
      <Marquee speed={40} pauseOnHover gradient={false}>
        {appsData.map((app) => (
          <a
            key={app.id}
            href={app.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title={app.name}
            className="flex items-center mr-6 sm:mr-16"
          >
            <img
              src={app.logo}
              alt={app.name}
              className="h-20 w-20 object-contain rounded-md"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.12))" }}
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default AppLogosCarousel;
