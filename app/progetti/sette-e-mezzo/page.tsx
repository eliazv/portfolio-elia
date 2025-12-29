import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sette e Mezzo Online Gratis - App Gioco 7 e Mezzo con Carte Napoletane",
  description:
    "Gioca a Sette e Mezzo online gratis! App ufficiale del gioco 7 e mezzo con carte napoletane. Scarica l'app per iOS e Android o gioca online. Blackjack italiano offline, mazzi regionali e bonus giornalieri. Il miglior gioco di carte tradizionale italiano!",
  keywords:
    "sette e mezzo online, 7 e mezzo online, app sette e mezzo, gioco sette e mezzo gratis, sette e mezzo carte napoletane, 7 mezzo online gratis, gioco 7 e mezzo, blackjack italiano, sette e mezzo app, carte napoletane online, gioco carte italiano, sette mezzo gratis, 7 e mezzo app gratis, gioco sette e mezzo italiano, carte piacentine online, sette e mezzo offline, gioco carte tradizionale, app carte napoletane, sette e mezzo android, sette e mezzo ios, gioco 7 mezzo smartphone",
  openGraph: {
    title: "Sette e Mezzo Online Gratis - App Gioco 7 e Mezzo",
    description:
      "Gioca a Sette e Mezzo online gratis! App con carte napoletane per iOS e Android. Il classico gioco italiano 7 e mezzo sempre con te!",
    type: "website",
    siteName: "Sette e Mezzo - Gioco di Carte Italiano",
  },
  alternates: {
    canonical: "https://eliazavatta.it/progetti/sette-e-mezzo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SetteEMezzoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Sette e Mezzo - Carte Italiane",
            applicationCategory: "GameApplication",
            operatingSystem: "Android, iOS",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              ratingCount: "500",
            },
            description:
              "Gioca a Sette e Mezzo online gratis! Il classico gioco di carte italiano 7 e mezzo con carte napoletane. App disponibile per iOS e Android con modalità offline.",
            screenshot:
              "https://eliazavatta.it/img/sette-e-mezzo-screenshot.jpg",
            featureList: [
              "Gioco offline senza internet",
              "7 mazzi di carte regionali italiane",
              "Bonus e monete gratis giornaliere",
              "Regole classiche del 7 e mezzo",
              "Statistiche e progressi",
              "Grafica HD ottimizzata",
            ],
            author: {
              "@type": "Person",
              name: "Elia Zavatta",
            },
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </>
  );
}
