# Elia Zavatta - Portfolio

Portfolio professionale di **Elia Zavatta**, sviluppatore full-stack specializzato in React, Next.js e TypeScript. Sito web moderno con animazioni interattive, effetti 3D e SEO ottimizzato.

🌐 **Live:** [https://eliazavatta.it](https://eliazavatta.it)

---

## ✨ Caratteristiche

- ⚡ **Next.js 16** con App Router e Static Export
- 🎨 **UI/UX avanzata** con animazioni Framer Motion
- 🎯 **Custom cursor** con particle trail effect
- 🌈 **Particle system** interattivo con canvas API
- 💎 **Effetto iridescente** WebGL con shader GLSL
- 📱 **Responsive design** ottimizzato per tutti i dispositivi
- 🎭 **Dark/Light mode** con next-themes
- 🔍 **SEO ottimizzato** con Schema.org e JSON-LD
- ♿ **Accessibilità** con semantic HTML e ARIA labels
- 🎪 **shadcn/ui** + Radix UI per componenti accessibili
- 📊 **TypeScript strict** per type safety completo

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 16 (React 18.3)
- **Linguaggio:** TypeScript 5.5 (strict mode)
- **Styling:** TailwindCSS 3.4 + CSS-in-JS
- **Animazioni:** Framer Motion 12
- **UI Library:** shadcn/ui + Radix UI
- **3D Graphics:** Three.js + OGL

### Tools & Libraries

- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **SEO:** next-sitemap
- **Carousel:** Embla Carousel

---

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ (consigliato 20+)
- npm o yarn

### Installazione

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio-elia.git
cd portfolio-elia

# Installa dipendenze
npm install

# Avvia dev server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

---

## 📜 Comandi Disponibili

```bash
npm run dev          # Avvia development server (porta 3000)
npm run build        # Build produzione + genera sitemap
npm run start        # Avvia production server
npm run lint         # Linting ESLint
npx tsc --noEmit     # Type checking TypeScript
```

---

## 📂 Struttura Progetto

```
portfolio-elia/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout con metadata SEO
│   ├── page.tsx                  # Homepage con structured data
│   ├── api/ai-context/           # API endpoint per AI context
│   ├── progetti/[slug]/          # Pagine dettaglio progetti dinamiche
│   ├── hostpilot/                # Landing page Hostpilot
│   ├── contaspicci/              # Landing page ContaSpicci
│   └── privacy/                  # Pagine privacy policy
│
├── src/
│   ├── components/               # Componenti React
│   │   ├── ui/                   # shadcn/ui components (30+)
│   │   ├── HeroSection.tsx       # Hero con gradient e CTA
│   │   ├── ProjectsSection.tsx   # Griglia progetti filtrabili
│   │   ├── ContactSection.tsx    # Form contatto con validazione
│   │   ├── InteractiveParticles.tsx  # Particle system canvas
│   │   ├── CustomCursor.tsx      # Custom cursor con trail
│   │   ├── Iridescence.tsx       # WebGL shader effect
│   │   └── ...
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useScrollAnimation.ts # Intersection Observer hook
│   │   ├── useSEO.ts             # SEO metadata hook
│   │   └── use-mobile.tsx        # Responsive breakpoint hook
│   │
│   ├── lib/
│   │   ├── utils.ts              # Utility functions (cn, etc.)
│   │   └── seo-utils.ts          # Schema.org generators
│   │
│   ├── data/
│   │   └── projects.ts           # Configurazione progetti
│   │
│   ├── types/
│   │   └── project.ts            # TypeScript interfaces
│   │
│   └── project-pages/            # Componenti pagine progetti
│       ├── projects/             # Pagine singoli progetti
│       └── legal/                # Privacy policy pages
│
├── public/                       # Assets statici
│   ├── projects/                 # Immagini progetti
│   └── ...
│
├── tailwind.config.ts            # Configurazione Tailwind
├── next.config.mjs               # Next.js config (static export)
├── next-sitemap.config.cjs       # Sitemap configuration
├── tsconfig.json                 # TypeScript strict config
└── package.json
```

---

## 🎨 Componenti Principali

### InteractiveParticles

Particle system interattivo con canvas API che reagisce al movimento del mouse.

```tsx
<InteractiveParticles />
```

### CustomCursor

Cursore personalizzato con trail effect e rilevamento automatico del tipo di elemento (link, button, input).

```tsx
<CustomCursor />
```

### Iridescence

Effetto iridescente WebGL con shader GLSL personalizzati per sfondi animati.

```tsx
<Iridescence />
```

---

## 🔍 SEO & Performance

### SEO Ottimizzato

- ✅ **Metadata completi** in ogni pagina
- ✅ **Schema.org JSON-LD** (Person, LocalBusiness, ProfessionalService)
- ✅ **Sitemap XML** automatica
- ✅ **robots.txt** generato
- ✅ **Open Graph** per social media
- ✅ **Twitter Card** integration
- ✅ **Geo-targeting** (Cesena, Romagna)
- ✅ **50+ keywords** strategici

### Performance

- ⚡ **Static export** su Vercel
- ⚡ **Gzip compression** abilitata
- ⚡ **Code splitting** automatico
- ⚡ **requestAnimationFrame** per animazioni
- ⚡ **Lazy loading** con Intersection Observer
- ⚡ **Font optimization** con next/font

---

## 🌐 Deploy

### Vercel (Consigliato)

```bash
# Deploy automatico da main branch
git push origin main

# O manualmente
vercel --prod
```

### Build Statico

```bash
npm run build
# Output in /out directory
```

Il sito è configurato per static export (`output: "export"`) e può essere deployato su qualsiasi hosting statico (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## 🔧 Configurazione

### Variabili Ambiente

Crea un file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://eliazavatta.it
```

### TypeScript Strict

Il progetto usa **TypeScript strict mode** per massima type safety:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## 📦 Progetti Showcased

- **Hostpilot** - Channel manager per strutture ricettive
- **ContaSpicci** - App mobile gestione spese
- **Globo Ricambi** - E-commerce ricambi auto
- **Marafone Romagnolo** - Card game multiplayer online
- **Sette e Mezzo** - App mobile card game (iOS/Android)
- **In Zona** - Piattaforma social discovery
- **Diario Personale** - App journaling privata
- **Scadenzario** - App gestione scadenze

---

## 📝 License

© 2025 Elia Zavatta. Tutti i diritti riservati.

Questo progetto è un portfolio personale. Il codice è disponibile per riferimento e apprendimento. Per utilizzo commerciale, contattami.

---

## 📧 Contatti

- **Email:** info@eliazavatta.it
- **Sito:** [https://eliazavatta.it](https://eliazavatta.it)
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)
- **LinkedIn:** [linkedin.com/in/elia-zavatta](https://linkedin.com/in/elia-zavatta)

---

## 🙏 Credits

- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [OGL](https://github.com/oframe/ogl)

---
