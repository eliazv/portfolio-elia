"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Info, AlertTriangle } from "lucide-react";

interface BMICategory {
  min: number;
  max: number;
  label: string;
  color: string;
  bgColor: string;
  description: string;
}

const bmiCategories: BMICategory[] = [
  { min: 0, max: 18.5, label: "Sottopeso", color: "text-blue-600", bgColor: "bg-blue-100", description: "Potresti aver bisogno di aumentare il peso" },
  { min: 18.5, max: 25, label: "Normopeso", color: "text-green-600", bgColor: "bg-green-100", description: "Sei nel range di peso ideale" },
  { min: 25, max: 30, label: "Sovrappeso", color: "text-yellow-600", bgColor: "bg-yellow-100", description: "Considera di perdere qualche kg" },
  { min: 30, max: 35, label: "Obesità I grado", color: "text-orange-600", bgColor: "bg-orange-100", description: "Consulta un medico per un piano alimentare" },
  { min: 35, max: 40, label: "Obesità II grado", color: "text-red-500", bgColor: "bg-red-100", description: "È consigliato un supporto medico" },
  { min: 40, max: 100, label: "Obesità III grado", color: "text-red-700", bgColor: "bg-red-200", description: "Consulta urgentemente un medico" },
];

export default function CalcolaBMIClient() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const result = useMemo(() => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Converti cm in m

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      return null;
    }

    const bmi = weightNum / (heightNum * heightNum);
    const category = bmiCategories.find((c) => bmi >= c.min && bmi < c.max) || bmiCategories[5];

    // Calcola peso ideale (range normopeso)
    const minIdealWeight = 18.5 * heightNum * heightNum;
    const maxIdealWeight = 24.9 * heightNum * heightNum;

    return {
      bmi: bmi.toFixed(1),
      category,
      minIdealWeight: minIdealWeight.toFixed(1),
      maxIdealWeight: maxIdealWeight.toFixed(1),
    };
  }, [weight, height]);

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Calcolatore BMI</h1>
        <p className="text-gray-600">
          Calcola il tuo Indice di Massa Corporea (BMI) e scopri se sei nel peso ideale.
          Inserisci peso e altezza per ottenere il risultato.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tool */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Inserisci i tuoi dati</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weight */}
              <div>
                <Label htmlFor="weight" className="text-base">Peso (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Es. 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2 text-lg"
                  min="20"
                  max="300"
                />
                <Slider
                  value={[parseFloat(weight) || 70]}
                  min={30}
                  max={200}
                  step={1}
                  onValueChange={(v) => setWeight(v[0].toString())}
                  className="mt-3"
                />
              </div>

              {/* Height */}
              <div>
                <Label htmlFor="height" className="text-base">Altezza (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Es. 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-2 text-lg"
                  min="100"
                  max="250"
                />
                <Slider
                  value={[parseFloat(height) || 170]}
                  min={120}
                  max={220}
                  step={1}
                  onValueChange={(v) => setHeight(v[0].toString())}
                  className="mt-3"
                />
              </div>

              {/* Age (optional) */}
              <div>
                <Label htmlFor="age" className="text-base">Età (opzionale)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Es. 30"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-2 text-lg"
                  min="10"
                  max="120"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button onClick={handleReset} variant="outline" className="flex-1">
                Reset
              </Button>
            </div>
          </Card>

          {/* Result */}
          {result && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Il tuo risultato</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* BMI Value */}
                <div className={`p-6 rounded-xl ${result.category.bgColor}`}>
                  <p className="text-gray-600 mb-2">Il tuo BMI</p>
                  <p className={`text-5xl font-bold ${result.category.color}`}>
                    {result.bmi}
                  </p>
                  <p className={`text-xl font-medium mt-2 ${result.category.color}`}>
                    {result.category.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {result.category.description}
                  </p>
                </div>

                {/* Ideal Weight */}
                <div className="p-6 rounded-xl bg-gray-50">
                  <p className="text-gray-600 mb-2">Peso ideale per la tua altezza</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {result.minIdealWeight} - {result.maxIdealWeight} kg
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Range di peso per un BMI tra 18.5 e 24.9
                  </p>
                </div>
              </div>

              {/* BMI Scale */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">Scala BMI</p>
                <div className="flex h-4 rounded-full overflow-hidden">
                  <div className="bg-blue-400 flex-1" title="Sottopeso" />
                  <div className="bg-green-400 flex-1" title="Normopeso" />
                  <div className="bg-yellow-400 flex-1" title="Sovrappeso" />
                  <div className="bg-orange-400 flex-1" title="Obesità I" />
                  <div className="bg-red-400 flex-1" title="Obesità II" />
                  <div className="bg-red-600 flex-1" title="Obesità III" />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>16</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35</span>
                  <span>40+</span>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Cos&apos;è il BMI?
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              L&apos;Indice di Massa Corporea (BMI) è un valore che indica se il peso
              di una persona è adeguato alla sua altezza. Si calcola dividendo il
              peso (kg) per l&apos;altezza al quadrato (m²).
            </p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-mono text-sm text-center">
                BMI = peso (kg) / altezza² (m)
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Categorie BMI</h3>
            <ul className="space-y-2 text-sm">
              {bmiCategories.slice(0, 4).map((cat) => (
                <li key={cat.label} className="flex justify-between items-center">
                  <span className={`font-medium ${cat.color}`}>{cat.label}</span>
                  <span className="text-gray-500">
                    {cat.min} - {cat.max === 100 ? "40+" : cat.max}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-amber-50 border-amber-200">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Nota importante
            </h3>
            <p className="text-sm text-amber-700">
              Il BMI è un indicatore generale e non tiene conto di fattori come
              massa muscolare, età, sesso e distribuzione del grasso. Consulta
              un medico per una valutazione completa.
            </p>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Come si calcola il BMI?</h2>
        <p>
          Il BMI (Body Mass Index) o IMC (Indice di Massa Corporea) si calcola
          con una formula semplice: peso in chilogrammi diviso per l&apos;altezza in
          metri al quadrato.
        </p>
        <p>
          Ad esempio, una persona che pesa 70 kg e alta 1.75 m avrà un BMI di:
          70 / (1.75 × 1.75) = 22.9
        </p>

        <h3>Limiti del BMI</h3>
        <p>
          Il BMI è un indicatore utile ma non perfetto. Non distingue tra massa
          grassa e massa magra, quindi:
        </p>
        <ul>
          <li>Gli atleti con molta massa muscolare potrebbero risultare sovrappeso</li>
          <li>Gli anziani potrebbero avere un BMI normale ma troppo grasso corporeo</li>
          <li>Non considera la distribuzione del grasso (addominale vs. periferico)</li>
        </ul>
        <p>
          Per una valutazione più accurata, considera anche la circonferenza vita
          e consulta un professionista della salute.
        </p>
      </section>
    </div>
  );
}
