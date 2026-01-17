"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CalcolaPercentualeClient() {
  // State for discount tab
  const [prezzo, setPrezzo] = useState<string>("");
  const [sconto, setSconto] = useState<string>("");
  const [risultati, setRisultati] = useState({
    importoSconto: 0,
    prezzoFinale: 0,
  });

  // State for percentage calculator tab
  const [valore1, setValore1] = useState<string>("");
  const [valore2, setValore2] = useState<string>("");
  const [tipoCalcolo, setTipoCalcolo] = useState<string>("originale-percentuale");
  const [risultatoPercentuale, setRisultatoPercentuale] = useState<number | null>(null);

  // Quick percentage calculation
  const [baseValue, setBaseValue] = useState<string>("");
  const [percentValue, setPercentValue] = useState<string>("");
  const [quickResult, setQuickResult] = useState<number | null>(null);

  // Currency
  const [valuta, setValuta] = useState<string>("EUR");

  const simboloValuta = valuta === "USD" ? "$" : valuta === "GBP" ? "£" : "€";

  // Calculate discount
  useEffect(() => {
    if (prezzo && sconto) {
      const prezzoNum = parseFloat(prezzo);
      const scontoNum = parseFloat(sconto);

      if (!isNaN(prezzoNum) && !isNaN(scontoNum) && prezzoNum > 0 && scontoNum >= 0 && scontoNum <= 100) {
        const importoSconto = (prezzoNum * scontoNum) / 100;
        const prezzoFinale = prezzoNum - importoSconto;
        setRisultati({ importoSconto, prezzoFinale });
      }
    }
  }, [prezzo, sconto]);

  // Calculate percentage
  useEffect(() => {
    if (valore1 && valore2) {
      const val1 = parseFloat(valore1);
      const val2 = parseFloat(valore2);

      if (!isNaN(val1) && !isNaN(val2)) {
        switch (tipoCalcolo) {
          case "originale-percentuale":
            setRisultatoPercentuale(val1 * (1 + val2 / 100));
            break;
          case "originale-risultato":
            setRisultatoPercentuale(((val2 - val1) / val1) * 100);
            break;
          case "percentuale-risultato":
            setRisultatoPercentuale(val2 / (1 + val1 / 100));
            break;
        }
      }
    } else {
      setRisultatoPercentuale(null);
    }
  }, [valore1, valore2, tipoCalcolo]);

  // Quick calculation
  useEffect(() => {
    if (baseValue && percentValue) {
      const base = parseFloat(baseValue);
      const percent = parseFloat(percentValue);
      if (!isNaN(base) && !isNaN(percent)) {
        setQuickResult(base * (percent / 100));
      }
    } else {
      setQuickResult(null);
    }
  }, [baseValue, percentValue]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: valuta,
    }).format(value);
  };

  const getLabelsByType = () => {
    switch (tipoCalcolo) {
      case "originale-percentuale":
        return { valore1: "Valore originale", valore2: "Percentuale (%)", risultato: "Risultato finale" };
      case "originale-risultato":
        return { valore1: "Valore originale", valore2: "Risultato finale", risultato: "Percentuale (%)" };
      case "percentuale-risultato":
        return { valore1: "Percentuale (%)", valore2: "Risultato finale", risultato: "Valore originale" };
      default:
        return { valore1: "Valore 1", valore2: "Valore 2", risultato: "Risultato" };
    }
  };

  const handleTipoChange = (value: string) => {
    setTipoCalcolo(value);
    setValore1("");
    setValore2("");
    setRisultatoPercentuale(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Calcolatore Percentuale</h1>
        <p className="text-gray-600">
          Calcola percentuali, sconti e variazioni percentuali tra numeri in modo semplice e veloce.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tool */}
        <div className="lg:col-span-2 space-y-6">
          {/* Currency selector */}
          <div className="flex justify-end">
            <Select value={valuta} onValueChange={setValuta}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Valuta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EUR">Euro (€)</SelectItem>
                <SelectItem value="USD">Dollaro ($)</SelectItem>
                <SelectItem value="GBP">Sterlina (£)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="sconto" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="sconto">Sconto</TabsTrigger>
              <TabsTrigger value="percentuale">Percentuale</TabsTrigger>
              <TabsTrigger value="rapido">Rapido</TabsTrigger>
            </TabsList>

            {/* Tab Sconto */}
            <TabsContent value="sconto">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Calcolatore Sconto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="prezzo">Prezzo originale ({simboloValuta})</Label>
                      <Input
                        id="prezzo"
                        type="number"
                        placeholder="Es. 100"
                        value={prezzo}
                        onChange={(e) => setPrezzo(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sconto">Percentuale di sconto (%)</Label>
                      <Input
                        id="sconto"
                        type="number"
                        placeholder="Es. 20"
                        value={sconto}
                        onChange={(e) => setSconto(e.target.value)}
                        className="mt-1"
                        min="0"
                        max="100"
                      />
                    </div>

                    {/* Quick percentages */}
                    <div className="grid grid-cols-4 gap-2">
                      {[10, 20, 30, 50].map((p) => (
                        <Button
                          key={p}
                          variant="outline"
                          size="sm"
                          onClick={() => setSconto(p.toString())}
                        >
                          {p}%
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-medium mb-4">Risultati</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-500 text-sm">Prezzo originale</p>
                        <p className="text-xl font-medium">
                          {prezzo ? formatCurrency(parseFloat(prezzo)) : "—"}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <ArrowRight className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Sconto ({sconto || 0}%)</p>
                        <p className="text-lg text-red-500 font-medium">
                          - {formatCurrency(risultati.importoSconto)}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-blue-200">
                        <p className="text-gray-500 text-sm">Prezzo finale</p>
                        <p className="text-2xl font-bold text-green-600">
                          {formatCurrency(risultati.prezzoFinale)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Tab Percentuale */}
            <TabsContent value="percentuale">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Calcolatore Percentuale</h2>
                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Cosa vuoi calcolare?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <Button
                        variant={tipoCalcolo === "originale-percentuale" ? "default" : "outline"}
                        onClick={() => handleTipoChange("originale-percentuale")}
                      >
                        Valore Finale
                      </Button>
                      <Button
                        variant={tipoCalcolo === "originale-risultato" ? "default" : "outline"}
                        onClick={() => handleTipoChange("originale-risultato")}
                      >
                        Percentuale
                      </Button>
                      <Button
                        variant={tipoCalcolo === "percentuale-risultato" ? "default" : "outline"}
                        onClick={() => handleTipoChange("percentuale-risultato")}
                      >
                        Valore Originale
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="valore1">{getLabelsByType().valore1}</Label>
                      <Input
                        id="valore1"
                        type="number"
                        placeholder="Es. 100"
                        value={valore1}
                        onChange={(e) => setValore1(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="valore2">{getLabelsByType().valore2}</Label>
                      <Input
                        id="valore2"
                        type="number"
                        placeholder="Es. 10"
                        value={valore2}
                        onChange={(e) => setValore2(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-500 text-sm mb-1">{getLabelsByType().risultato}</p>
                    <p className="text-2xl font-bold">
                      {risultatoPercentuale !== null
                        ? tipoCalcolo === "originale-risultato"
                          ? `${risultatoPercentuale.toFixed(2)}%`
                          : formatCurrency(risultatoPercentuale)
                        : "—"}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Tab Rapido */}
            <TabsContent value="rapido">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Calcolo Rapido</h2>
                <p className="text-gray-600 mb-4">
                  Calcola rapidamente quanto è una percentuale di un numero.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="baseValue">Valore</Label>
                      <Input
                        id="baseValue"
                        type="number"
                        placeholder="Es. 100"
                        value={baseValue}
                        onChange={(e) => setBaseValue(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="percentValue">Percentuale %</Label>
                      <Input
                        id="percentValue"
                        type="number"
                        placeholder="Es. 20"
                        value={percentValue}
                        onChange={(e) => setPercentValue(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[5, 10, 15, 20].map((p) => (
                      <Button
                        key={p}
                        variant="outline"
                        size="sm"
                        onClick={() => setPercentValue(p.toString())}
                      >
                        {p}%
                      </Button>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {baseValue || "0"} × {percentValue || "0"}% =
                      </p>
                      <p className="text-2xl font-bold">
                        {quickResult !== null ? formatCurrency(quickResult) : "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {baseValue || "0"} + {percentValue || "0"}% =
                      </p>
                      <p className="text-2xl font-bold">
                        {baseValue && percentValue
                          ? formatCurrency(
                              parseFloat(baseValue) +
                                (parseFloat(baseValue) * parseFloat(percentValue)) / 100
                            )
                          : "—"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Come funziona
            </h3>
            <div className="space-y-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Sconto:</p>
                <p className="font-mono text-xs">Prezzo × (Sconto ÷ 100)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Valore finale:</p>
                <p className="font-mono text-xs">Originale × (1 + % ÷ 100)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Percentuale:</p>
                <p className="font-mono text-xs">((Finale − Originale) ÷ Originale) × 100</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-green-50 border-green-200">
            <h3 className="font-semibold mb-2 text-green-800">Privacy</h3>
            <p className="text-sm text-green-700">
              Tutti i calcoli vengono eseguiti nel tuo browser. Nessun dato viene inviato a server esterni.
            </p>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Come calcolare le percentuali</h2>
        <p>
          Il calcolo delle percentuali è un&apos;operazione matematica fondamentale usata quotidianamente
          per calcolare sconti, aumenti, tasse e molto altro. Questo strumento ti permette di:
        </p>
        <ul>
          <li><strong>Calcolare lo sconto:</strong> scopri quanto risparmi su un prodotto scontato</li>
          <li><strong>Trovare la percentuale:</strong> calcola che percentuale rappresenta un numero rispetto ad un altro</li>
          <li><strong>Calcolare il valore finale:</strong> aggiungi o sottrai una percentuale a un numero</li>
        </ul>

        <h3>Esempi pratici</h3>
        <p>
          Se un prodotto costa 100€ e ha uno sconto del 20%, il calcolo è: 100 × 0.20 = 20€ di sconto,
          quindi il prezzo finale è 80€.
        </p>
        <p>
          Per calcolare che percentuale è 25 di 200: (25 ÷ 200) × 100 = 12.5%
        </p>
      </section>
    </div>
  );
}
