import type { Project } from "@/types/project";
import { projects } from "@/data/projects";

export type AppEntry = {
  id: number;
  name: string;
  logo: string;
  url: string;
  projectId?: number;
};

// Crea una fonte separata con solo logo + link. Include alcune voci derivate da `projects`.
export const apps: AppEntry[] = [
  // Derivate dai progetti esistenti quando possibile
  ...(projects
    .filter((p) => p.logoImage)
    .map((p) => {
      // preferisci link allo store se presente, altrimenti demoUrl
      const url =
        (p as Project & any).playStoreUrl || p.appStoreUrl || p.demoUrl || "#";
      return {
        id: p.id,
        name: p.title,
        logo: p.logoImage,
        url,
        projectId: p.id,
      } as AppEntry;
    }) as AppEntry[]),

  {
    id: 102,
    name: "Schocken - Pub Dice Game",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1b/2c/b8/1b2cb815-9ff3-52fa-b1f6-8fa7e9507abd/Placeholder.mill/400x400bb-75.webp",
    url: "https://apps.apple.com/it/app/schocken-pub-dice-game/id6757926882",
  },
  {
    id: 103,
    name: "L'Intesa - Parole a Catena",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/33/0e/83/330e839f-3127-5dc6-7ce8-8295594873bf/Placeholder.mill/400x400bb-75.webp",
    url: "https://apps.apple.com/us/app/lintesa-parole-a-catena/id6757360825",
  },
  {
    id: 104,
    name: "Ghigliottina - Parola Comune",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/51/62/d9/5162d97e-185e-d307-7b0a-b5d21cf44fdd/Placeholder.mill/400x400bb-75.webp",
    url: "https://apps.apple.com/it/app/ghigliottina-parola-comune/id6757228862",
  },
  {
    id: 105,
    name: "Segnapunti Carte Italiane",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/79/17/81/7917817e-f00c-c5cb-e004-7fffcba743a2/Placeholder.mill/400x400bb-75.webp",
    url: "https://apps.apple.com/it/app/segnapunti-carte-italiane/id6757228737",
  },
  {
    id: 106,
    name: "SlapCards - Egyptian Rat Screw",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/da/cd/4a/dacd4a61-fed5-5289-f416-a422cb85f392/Placeholder.mill/400x400bb-75.webp",
    url: "https://apps.apple.com/it/app/slapcards-egyptian-rat-screw/id6756782906",
  },
  {
    id: 107,
    name: "Solitaire Club - Card Games",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0d/73/37/0d7337a6-3613-967c-f93c-01907f63a268/Placeholder.mill/400x400bb-75.webp",
    url: "https://apps.apple.com/it/app/solitaire-club-card-games/id6756184382",
  },
];

// Override specific logos (Hostpilot e Scadenzario) con immagini fornite
const HOSTPILOT_LOGO =
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/70/51/a6/7051a624-6294-caf2-a4ec-5fa9726b74ba/Placeholder.mill/400x400bb-75.webp";
const SCADENZARIO_LOGO =
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6a/80/27/6a80279d-abf3-f0f3-ae58-b9297bc7dec7/Placeholder.mill/400x400bb-75.webp";

for (const a of apps) {
  const name = a.name.toLowerCase();
  if (name.includes("hostpilot")) a.logo = HOSTPILOT_LOGO;
  if (name.includes("scadenz") || name.includes("scadenzario"))
    a.logo = SCADENZARIO_LOGO;
}

export default apps;
