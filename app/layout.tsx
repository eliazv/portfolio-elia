import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

// Metadata completa per SEO ottimizzato
export const metadata: Metadata = {
  metadataBase: new URL('https://www.eliazavatta.it'),
  title: {
    default: 'Sviluppatore Web e Mobile Freelance Cesena | Esperto React | Elia Zavatta',
    template: '%s | Elia Zavatta - Sviluppatore Freelance',
  },
  description:
    'Sviluppatore web e mobile freelance senior a Cesena. Esperto React, sviluppo siti web, e-commerce, app iOS e Android per aziende e startup in Romagna. Consulente IT professionista disponibile anche da remoto.',
  keywords: [
    // Keywords principali
    'sviluppatore web freelance cesena',
    'programmatore freelance forli',
    'sviluppatore app mobile rimini',
    'sviluppatore React cesena',
    // Keywords senior/esperto
    'esperto sviluppatore senior romagna',
    'sviluppatore professionista cesena',
    'programmatore esperto ravenna',
    // Consulenza
    'consulente IT freelance cesena',
    'consulenza digitale romagna',
    'consulente sviluppo software',
    // E-commerce
    'sviluppo e-commerce romagna',
    'creazione negozio online cesena',
    // Servizi specifici
    'sviluppo siti web cesena',
    'realizzazione siti web aziende forli',
    'creazione siti web piccole imprese',
    'sviluppo software su misura cesena',
    // App mobile
    'sviluppo app startup romagna',
    'sviluppatore iOS Android cesena',
    'app mobile aziende rimini',
    // Full stack e tecnologie
    'sviluppatore full stack cesena',
    'programmatore React freelance rimini',
    'sviluppatore Node.js romagna',
    // Remoto
    'sviluppatore remoto emilia romagna',
    'programmatore freelance remoto italia',
    // Long-tail
    'sviluppatore freelance per piccole imprese cesena',
    'programmatore React per startup romagna',
    'realizzare app mobile per aziende forli',
  ],
  authors: [{ name: 'Elia Zavatta' }],
  creator: 'Elia Zavatta',
  publisher: 'Elia Zavatta',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.eliazavatta.it/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.eliazavatta.it/',
    title: 'Elia Zavatta | Sviluppatore Web Freelance Senior Cesena | Esperto React',
    description:
      'Sviluppatore freelance esperto a Cesena: siti web, e-commerce, app iOS e Android per aziende e startup in Romagna. Consulente IT professionista disponibile anche da remoto.',
    siteName: 'Elia Zavatta - Sviluppatore Web e Mobile Freelance',
    images: [
      {
        url: 'https://www.eliazavatta.it/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elia Zavatta - Sviluppatore Web e Mobile Freelance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elia Zavatta | Sviluppatore Web Freelance Senior Cesena',
    description:
      'Sviluppatore freelance esperto: siti web, e-commerce, app mobile per aziende e startup in Romagna. Consulente IT professionista.',
    images: ['https://www.eliazavatta.it/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code', // Aggiorna con il tuo codice
  },
  other: {
    'geo.region': 'IT-ER',
    'geo.placename': 'Cesena',
    'geo.position': '44.1391;12.2431',
    ICBM: '44.1391, 12.2431',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Elia Zavatta',
      jobTitle: 'Sviluppatore Web e Mobile Freelance Senior',
      image: 'https://www.eliazavatta.it/og-image.jpg',
      url: 'https://www.eliazavatta.it/',
      description:
        'Sviluppatore freelance esperto e professionista specializzato in siti web, e-commerce, app iOS e Android per aziende, startup e PMI a Cesena, Rimini, Forlì, Ravenna e Cervia. Consulente IT disponibile anche da remoto.',
      telephone: '+39 393 893 2793',
      email: 'info@eliazavatta.it',
      sameAs: [
        'https://github.com/eliazv',
        'https://www.linkedin.com/in/eliazavatta/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cesena',
        addressRegion: 'Emilia-Romagna',
        postalCode: '47521',
        addressCountry: 'IT',
      },
      areaServed: [
        { '@type': 'City', name: 'Cesena' },
        { '@type': 'City', name: 'Rimini' },
        { '@type': 'City', name: 'Forlì' },
        { '@type': 'City', name: 'Ravenna' },
        { '@type': 'City', name: 'Cervia' },
        { '@type': 'City', name: 'Faenza' },
        { '@type': 'AdministrativeArea', name: 'Romagna' },
        { '@type': 'AdministrativeArea', name: 'Emilia-Romagna' },
        { '@type': 'Country', name: 'Italia' },
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Università di Bologna - Campus di Cesena',
        description: 'Laurea in Ingegneria e Scienze Informatiche',
      },
      knowsAbout: [
        'Sviluppo siti web',
        'Sviluppo e-commerce',
        'Sviluppo app mobile',
        'React',
        'React Native',
        'Next.js',
        'TypeScript',
        'Node.js',
        'UX/UI',
        'Progressive Web App',
        'Consulenza digitale',
        'Sviluppo software su misura',
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo siti web su misura',
            description: 'Realizzazione siti web professionali per aziende e PMI',
            serviceType: 'Web Development',
          },
          areaServed: ['Cesena', 'Rimini', 'Forlì', 'Ravenna', 'Romagna'],
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo e-commerce',
            description: 'Creazione negozi online e piattaforme e-commerce',
            serviceType: 'E-commerce Development',
          },
          areaServed: ['Romagna', 'Emilia-Romagna'],
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo app mobile iOS e Android',
            description: 'Creazione applicazioni mobile native e cross-platform',
            serviceType: 'Mobile App Development',
          },
          areaServed: ['Cesena', 'Rimini', 'Forlì', 'Ravenna', 'Cervia'],
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consulenza IT e digitale',
            description: 'Consulenza tecnica per startup e aziende',
            serviceType: 'IT Consulting',
          },
          areaServed: 'Italia',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Elia Zavatta - Sviluppatore Web e Mobile Freelance',
      url: 'https://www.eliazavatta.it/',
      description:
        'Servizi professionali di sviluppo web, mobile, e-commerce e consulenza IT per aziende, startup e PMI in Romagna. Disponibile anche da remoto.',
      priceRange: '€€',
      areaServed: [
        { '@type': 'City', name: 'Cesena' },
        { '@type': 'City', name: 'Rimini' },
        { '@type': 'City', name: 'Forlì' },
        { '@type': 'City', name: 'Ravenna' },
        { '@type': 'City', name: 'Cervia' },
        { '@type': 'City', name: 'Faenza' },
        { '@type': 'AdministrativeArea', name: 'Romagna' },
      ],
      serviceType: [
        'Sviluppo siti web',
        'Sviluppo e-commerce',
        'Sviluppo app mobile',
        'Sviluppo software su misura',
        'Consulenza IT',
        'Sviluppo React',
        'Sviluppo full stack',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cesena',
        addressRegion: 'Emilia-Romagna',
        postalCode: '47521',
        addressCountry: 'IT',
      },
      telephone: '+39 393 893 2793',
      sameAs: [
        'https://github.com/eliazv',
        'https://www.linkedin.com/in/eliazavatta/',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" type="image/png" href="/EZlogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e56fa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
