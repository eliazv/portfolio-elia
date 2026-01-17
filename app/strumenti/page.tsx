import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toolGroups } from "@/lib/tools-data";
import { Button } from "@/components/ui/button";

// JSON-LD per la pagina indice degli strumenti
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Strumenti Online Gratuiti",
  description:
    "Raccolta di strumenti online gratuiti: generatore password, QR code, calcolatori, convertitori e molto altro.",
  url: "https://www.eliazavatta.it/strumenti",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: toolGroups.flatMap((group, groupIndex) =>
      group.tools.map((tool, toolIndex) => ({
        "@type": "ListItem",
        position: groupIndex * 10 + toolIndex + 1,
        item: {
          "@type": "WebApplication",
          name: tool.name,
          description: tool.description,
          url: `https://www.eliazavatta.it/strumenti/${tool.slug}`,
          applicationCategory: "UtilityApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
        },
      }))
    ),
  },
  author: {
    "@type": "Person",
    name: "Elia Zavatta",
    url: "https://www.eliazavatta.it",
  },
};

export default function StrumentiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Strumenti online{" "}
            <span className="text-gradient">gratuiti</span> per le tue esigenze
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Semplici, veloci e facili da usare. Nessuna installazione richiesta.
            Tutti i dati vengono elaborati direttamente nel tuo browser.
          </p>
        </div>
      </section>

      {/* Tools Grid by Category */}
      {toolGroups.map((group) => (
        <section key={group.id} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{group.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/strumenti/${tool.slug}`}
                  className="group bg-white rounded-xl border p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${tool.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${tool.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {tool.name}
                        {tool.isAI && (
                          <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">
                            AI
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-3 flex-grow">
                    {tool.description}
                  </p>
                  <div className="flex justify-end mt-4">
                    <span className="text-sm text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Utilizza <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-3">
            Tutti gli strumenti sono gratuiti
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Il mio obiettivo è rendere accessibili a tutti strumenti online utili
            e di qualità. Non è richiesta alcuna registrazione e tutti i dati
            vengono elaborati direttamente nel browser per la tua privacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/#contatti">
                Hai bisogno di uno strumento personalizzato?
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Scopri i miei servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-16 prose prose-gray max-w-none">
        <h2>Perché usare questi strumenti online?</h2>
        <p>
          Questa raccolta di strumenti online gratuiti è stata creata per
          semplificare le attività quotidiane di professionisti, studenti e
          chiunque abbia bisogno di utility veloci e affidabili. Ogni strumento
          è ottimizzato per funzionare direttamente nel browser, garantendo:
        </p>
        <ul>
          <li>
            <strong>Privacy totale:</strong> i tuoi dati non vengono mai inviati
            a server esterni
          </li>
          <li>
            <strong>Velocità:</strong> elaborazione istantanea senza tempi di
            attesa
          </li>
          <li>
            <strong>Nessuna registrazione:</strong> usa gli strumenti
            immediatamente senza creare account
          </li>
          <li>
            <strong>Compatibilità:</strong> funziona su qualsiasi dispositivo
            con un browser moderno
          </li>
        </ul>
        <p>
          Che tu abbia bisogno di generare una password sicura, creare un QR
          code, calcolare percentuali o convertire valute, troverai lo strumento
          giusto in questa raccolta.
        </p>
      </section>
    </>
  );
}
