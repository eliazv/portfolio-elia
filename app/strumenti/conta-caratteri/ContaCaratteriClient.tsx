"use client";

import { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Trash2, FileText, AlignLeft, Hash, Type } from "lucide-react";
import { toast } from "sonner";

export default function ContaCaratteriClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmedText = text.trim();

    // Caratteri
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;

    // Parole
    const words = trimmedText ? trimmedText.split(/\s+/).filter(Boolean).length : 0;

    // Frasi (punto, punto esclamativo, punto interrogativo)
    const sentences = trimmedText
      ? (trimmedText.match(/[.!?]+/g) || []).length
      : 0;

    // Paragrafi (doppio a capo o singolo a capo)
    const paragraphs = trimmedText
      ? trimmedText.split(/\n\s*\n|\n/).filter((p) => p.trim()).length
      : 0;

    // Righe
    const lines = text ? text.split("\n").length : 0;

    // Tempo di lettura (media 200 parole/minuto)
    const readingTime = Math.ceil(words / 200);

    // Tempo di pronuncia (media 150 parole/minuto)
    const speakingTime = Math.ceil(words / 150);

    return {
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      lines,
      readingTime,
      speakingTime,
    };
  }, [text]);

  const handleCopy = async () => {
    if (!text) {
      toast.error("Nessun testo da copiare");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Testo copiato!");
    } catch {
      toast.error("Errore durante la copia");
    }
  };

  const handleClear = () => {
    setText("");
    toast.success("Testo cancellato");
  };

  const statCards = [
    {
      label: "Caratteri",
      value: stats.characters,
      icon: Type,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Caratteri (no spazi)",
      value: stats.charactersNoSpaces,
      icon: Hash,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      label: "Parole",
      value: stats.words,
      icon: AlignLeft,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Frasi",
      value: stats.sentences,
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      label: "Paragrafi",
      value: stats.paragraphs,
      icon: FileText,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      label: "Righe",
      value: stats.lines,
      icon: AlignLeft,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Conta Caratteri e Parole</h1>
        <p className="text-gray-600">
          Conta caratteri, parole, frasi e paragrafi nel tuo testo
          istantaneamente. Perfetto per scrittori, studenti e professionisti.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tool */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="font-medium">Inserisci il tuo testo</label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-1" />
                  Copia
                </Button>
                <Button variant="outline" size="sm" onClick={handleClear}>
                  <Trash2 className="h-4 w-4 mr-1" />
                  Cancella
                </Button>
              </div>
            </div>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Incolla o scrivi il tuo testo qui..."
              className="min-h-[300px] text-base resize-y"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="p-4 flex items-center gap-3"
                >
                  <div className={`${stat.bgColor} p-2 rounded-lg`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Reading Time */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Tempo stimato</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Lettura</span>
                <span className="font-medium">
                  {stats.readingTime === 0
                    ? "< 1 min"
                    : `${stats.readingTime} min`}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pronuncia</span>
                <span className="font-medium">
                  {stats.speakingTime === 0
                    ? "< 1 min"
                    : `${stats.speakingTime} min`}
                </span>
              </div>
            </div>
          </Card>

          {/* Tips */}
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Limiti comuni</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">Twitter/X</span>
                <span className="font-medium">280 caratteri</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Meta Description</span>
                <span className="font-medium">155-160 caratteri</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Title Tag SEO</span>
                <span className="font-medium">50-60 caratteri</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Instagram Bio</span>
                <span className="font-medium">150 caratteri</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">LinkedIn Post</span>
                <span className="font-medium">3000 caratteri</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">SMS</span>
                <span className="font-medium">160 caratteri</span>
              </li>
            </ul>
          </Card>

          {/* Privacy */}
          <Card className="p-6 bg-green-50 border-green-200">
            <h2 className="font-semibold mb-2 text-green-800">
              Privacy garantita
            </h2>
            <p className="text-sm text-green-700">
              Il testo viene analizzato localmente nel tuo browser. Nessun dato
              viene inviato a server esterni.
            </p>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Perché contare caratteri e parole?</h2>
        <p>
          Il conteggio di caratteri e parole è essenziale in molti contesti:
        </p>
        <ul>
          <li>
            <strong>Social Media:</strong> Twitter/X limita a 280 caratteri,
            Instagram a 2200 per le didascalie. Rispettare questi limiti è
            fondamentale.
          </li>
          <li>
            <strong>SEO:</strong> Le meta description dovrebbero essere tra 150
            e 160 caratteri, i title tag tra 50 e 60 caratteri.
          </li>
          <li>
            <strong>Scrittura accademica:</strong> Tesi, saggi e articoli spesso
            hanno requisiti specifici di lunghezza.
          </li>
          <li>
            <strong>Copywriting:</strong> I copywriter devono spesso rispettare
            limiti precisi per annunci, email e landing page.
          </li>
        </ul>

        <h2>Come viene calcolato il tempo di lettura?</h2>
        <p>
          Il tempo di lettura è calcolato considerando una velocità media di 200
          parole al minuto, che è la velocità tipica di un lettore adulto. Il
          tempo di pronuncia usa invece 150 parole al minuto, considerando le
          pause naturali nel parlato.
        </p>
      </section>
    </div>
  );
}
