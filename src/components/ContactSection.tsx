"use client";
import {
  AtSign,
  PhoneCall,
} from "lucide-react";
import {
  useScrollAnimation,
} from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div id="contact" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className="space-y-8">
        {/* Header with accent line */}
        <div
          className={`relative transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 relative inline-block animate-slide-in-top">
            <span className="relative z-10">Contatti</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
          </h2>

          {/* Main content card */}
          <div
            className={`bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-8 mt-8 border border-accent/10 backdrop-blur-sm shadow-lg enhanced-card-hover transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Intro message with better styling */}
            <div
              className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8 border border-primary/20 enhanced-card-hover animate-morphing-border transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <p
                className={`text-foreground/90 leading-relaxed text-lg animate-reveal-text ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "0.8s" }}
              >
                Hai un{" "}
                <span className="font-semibold text-primary">
                  progetto interessante
                </span>{" "}
                in mente? O magari vuoi confrontarti su qualche aspetto tecnico?
              </p>
              <p
                className={`text-foreground/80 mt-2 animate-reveal-text ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "1s" }}
              >
                Sono sempre disponibile per una{" "}
                <span className="font-semibold text-accent">chiacchierata</span>{" "}
                e curioso di sentire nuove idee.
              </p>
            </div>
            <div className="space-y-6 mb-8">
              <div
                className={`flex items-start gap-4 transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "1.2s" }}
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary magnetic-element animate-pulse-glow">
                  <AtSign className="h-6 w-6" />
                </div>
                <div>
                  <h4
                    className="text-lg font-medium animate-reveal-text"
                    style={{ animationDelay: "1.4s" }}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:info@eliazavatta.it"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 magnetic-element hover-lift"
                  >
                    info@eliazavatta.it
                  </a>
                </div>
              </div>
              <div
                className={`flex items-start gap-4 transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "1.4s" }}
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary magnetic-element animate-pulse-glow">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div>
                  <h4
                    className="text-lg font-medium animate-reveal-text"
                    style={{ animationDelay: "1.6s" }}
                  >
                    Telefono
                  </h4>
                  <a
                    href="tel:+393938932793"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 magnetic-element hover-lift"
                  >
                    +39 393 893 2793
                  </a>
                </div>
              </div>
            </div>
            {/* Social icons */}
            <div
              className={`flex flex-wrap gap-5 mt-6 transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1.6s" }}
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/393938932793"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group rounded-full bg-white hover:bg-green-100 border border-green-400 transition-all duration-300 p-3 shadow-md flex items-center justify-center magnetic-element animate-float-gentle enhanced-card-hover"
                style={{ animationDelay: "1.8s" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-7 h-7 text-green-600 group-hover:scale-110 transition-transform"
                  style={{
                    filter:
                      "invert(38%) sepia(99%) saturate(749%) hue-rotate(88deg) brightness(92%) contrast(92%)",
                  }}
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/eliazavatta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group rounded-full bg-white hover:bg-blue-100 border border-blue-400 transition-all duration-300 p-3 shadow-md flex items-center justify-center magnetic-element animate-float-wave enhanced-card-hover"
                style={{ animationDelay: "2s" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-7 h-7 text-blue-700 group-hover:scale-110 transition-transform"
                  style={{
                    filter:
                      "invert(32%) sepia(99%) saturate(749%) hue-rotate(180deg) brightness(92%) contrast(92%)",
                  }}
                />
              </a>
              {/* Email */}
              <a
                href="mailto:info@eliazavatta.it"
                aria-label="Email"
                className="group rounded-full bg-white hover:bg-red-100 border border-red-400 transition-all duration-300 p-3 shadow-md flex items-center justify-center magnetic-element animate-float-gentle enhanced-card-hover"
                style={{ animationDelay: "2.2s" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                  alt="Email"
                  className="w-7 h-7 text-red-600 group-hover:scale-110 transition-transform"
                  style={{
                    filter:
                      "invert(32%) sepia(99%) saturate(749%) hue-rotate(0deg) brightness(92%) contrast(92%)",
                  }}
                />
              </a>
              {/* Instagram */}
              {/* <a
              href="https://www.instagram.com/eliazavatta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group rounded-full bg-white hover:bg-gradient-to-tr hover:from-pink-400 hover:via-red-400 hover:to-yellow-400 border border-pink-400 transition-colors p-3 shadow-md flex items-center justify-center"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="w-7 h-7 text-pink-500 group-hover:scale-110 transition-transform"
                style={{
                  filter:
                    "invert(32%) sepia(99%) saturate(749%) hue-rotate(320deg) brightness(92%) contrast(92%)",
                }}
              />
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
