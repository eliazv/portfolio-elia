import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-border">
          <a
            href="#"
            className="text-2xl font-bold font-heading text-gradient mb-4 md:mb-0"
          >
            Elia Zavatta
          </a>

          <div className="flex space-x-6">
            <a
              href="https://wa.me/393938932793"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.193 1.6 6.033L0 24l6.188-1.572A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.803 17.197c-.243.683-1.42 1.34-2.01 1.42-.514.073-1.18.104-3.96-1.26-3.34-1.47-5.51-5.08-5.68-5.32-.17-.24-1.35-1.8-1.35-3.44 0-1.64.85-2.45 1.15-2.79.3-.34.65-.43.86-.43.22 0 .43.002.62.01.2.01.47-.076.74.57.3.68 1.02 2.36 1.11 2.54.09.17.15.38.03.61-.13.26-.2.42-.4.65-.2.23-.42.51-.6.68-.2.17-.4.36-.17.71.23.34 1.02 1.68 2.2 2.72 1.52 1.34 2.8 1.75 3.14 1.89.34.13.54.11.74-.07.2-.17.85-.98 1.08-1.32.23-.34.46-.28.77-.17.3.1 1.9.89 2.23 1.05.34.17.57.26.65.4.08.14.08.72-.16 1.4z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/eliazavatta/"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:info@eliazavatta.it"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elia Zavatta. Tutti i diritti
            riservati.
          </p>

          <div className="flex space-x-8">
            <a
              href="#home"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Progetti
            </a>
            <a
              href="#about"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Contatti
            </a>
          </div>
        </div>
      </div>

      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
        aria-label="Torna su"
      >
        <ArrowUp className="h-5 w-5" />
      </button> */}
    </footer>
  );
};

export default Footer;
