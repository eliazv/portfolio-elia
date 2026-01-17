"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy, RefreshCcw, KeyRound, Check, Shield, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export default function GeneraPasswordClient() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({ score: 0, label: "", color: "" });

  const generatePassword = useCallback(() => {
    let charset = "";
    let result = "";

    if (options.uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) charset += "0123456789";
    if (options.symbols) charset += "!@#$%^&*()_+{}:\"<>?|[];',./`~";

    if (charset === "") {
      charset = "abcdefghijklmnopqrstuvwxyz";
    }

    // Usa crypto.getRandomValues per maggiore sicurezza
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      result += charset.charAt(array[i] % charset.length);
    }

    setPassword(result);
    setCopied(false);
    calculateStrength(result);
  }, [length, options]);

  const calculateStrength = (pwd: string) => {
    let score = 0;

    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (pwd.length >= 16) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    let label = "";
    let color = "";

    if (score <= 2) {
      label = "Debole";
      color = "text-red-500";
    } else if (score <= 4) {
      label = "Media";
      color = "text-yellow-500";
    } else if (score <= 5) {
      label = "Forte";
      color = "text-green-500";
    } else {
      label = "Molto forte";
      color = "text-emerald-600";
    }

    setStrength({ score, label, color });
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast.success("Password copiata negli appunti!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Errore durante la copia");
    }
  };

  const handleOptionChange = (option: keyof typeof options) => {
    const newOptions = { ...options, [option]: !options[option] };

    if (Object.values(newOptions).some(Boolean)) {
      setOptions(newOptions);
    } else {
      toast.error("Devi selezionare almeno un tipo di carattere");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Generatore di Password Sicure</h1>
        <p className="text-gray-600">
          Crea password forti e sicure per proteggere i tuoi account e dati personali.
          Le password sono generate localmente nel tuo browser.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tool */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border p-6">
            {/* Generated Password */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-3 block">
                La tua password generata
              </Label>
              <div className="flex gap-2">
                <Input
                  value={password}
                  readOnly
                  className="font-mono text-lg tracking-wider"
                />
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </Button>
                <Button
                  onClick={generatePassword}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                >
                  <RefreshCcw className="h-5 w-5" />
                </Button>
              </div>

              {/* Strength indicator */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      strength.score <= 2
                        ? "bg-red-500"
                        : strength.score <= 4
                        ? "bg-yellow-500"
                        : strength.score <= 5
                        ? "bg-green-500"
                        : "bg-emerald-600"
                    }`}
                    style={{ width: `${(strength.score / 7) * 100}%` }}
                  />
                </div>
                <span className={`text-sm font-medium ${strength.color}`}>
                  {strength.label}
                </span>
              </div>
            </div>

            {/* Length Slider */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-3 block">
                Lunghezza password: <span className="text-blue-600">{length}</span> caratteri
              </Label>
              <Slider
                value={[length]}
                min={8}
                max={64}
                step={1}
                onValueChange={(value) => setLength(value[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>8</span>
                <span>16</span>
                <span>32</span>
                <span>48</span>
                <span>64</span>
              </div>
            </div>

            {/* Character Options */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-4 block">
                Tipi di caratteri
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="uppercase" className="cursor-pointer">
                    Maiuscole (A-Z)
                  </Label>
                  <Switch
                    id="uppercase"
                    checked={options.uppercase}
                    onCheckedChange={() => handleOptionChange("uppercase")}
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="lowercase" className="cursor-pointer">
                    Minuscole (a-z)
                  </Label>
                  <Switch
                    id="lowercase"
                    checked={options.lowercase}
                    onCheckedChange={() => handleOptionChange("lowercase")}
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="numbers" className="cursor-pointer">
                    Numeri (0-9)
                  </Label>
                  <Switch
                    id="numbers"
                    checked={options.numbers}
                    onCheckedChange={() => handleOptionChange("numbers")}
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="symbols" className="cursor-pointer">
                    Simboli (!@#$%)
                  </Label>
                  <Switch
                    id="symbols"
                    checked={options.symbols}
                    onCheckedChange={() => handleOptionChange("symbols")}
                  />
                </div>
              </div>
            </div>

            <Button onClick={generatePassword} className="w-full" size="lg">
              <RefreshCcw className="h-4 w-4 mr-2" />
              Genera nuova password
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tips */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Consigli per password sicure
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <KeyRound className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Usa almeno 12 caratteri per una buona sicurezza</span>
              </li>
              <li className="flex gap-2">
                <KeyRound className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Combina lettere maiuscole, minuscole, numeri e simboli</span>
              </li>
              <li className="flex gap-2">
                <KeyRound className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Evita informazioni personali (nomi, date, etc.)</span>
              </li>
              <li className="flex gap-2">
                <KeyRound className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Usa una password diversa per ogni servizio</span>
              </li>
              <li className="flex gap-2">
                <KeyRound className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Considera l&apos;uso di un password manager</span>
              </li>
            </ul>
          </div>

          {/* Privacy note */}
          <div className="bg-green-50 rounded-xl border border-green-200 p-6">
            <h2 className="font-semibold mb-2 flex items-center gap-2 text-green-800">
              <Shield className="h-5 w-5" />
              Privacy garantita
            </h2>
            <p className="text-sm text-green-700">
              Le password sono generate interamente nel tuo browser usando
              l&apos;API Crypto. Nessun dato viene inviato a server esterni.
            </p>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
            <h2 className="font-semibold mb-2 flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Importante
            </h2>
            <p className="text-sm text-amber-700">
              Salva la password in un luogo sicuro prima di chiudere questa
              pagina. Una volta chiusa, non potrai recuperarla.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Come creare una password sicura?</h2>
        <p>
          Una password sicura è la prima linea di difesa contro gli accessi non
          autorizzati ai tuoi account. Ecco cosa rende una password veramente
          sicura:
        </p>
        <ul>
          <li>
            <strong>Lunghezza:</strong> almeno 12 caratteri, idealmente 16 o
            più. Ogni carattere aggiuntivo aumenta esponenzialmente la
            difficoltà di un attacco brute-force.
          </li>
          <li>
            <strong>Complessità:</strong> combina lettere maiuscole, minuscole,
            numeri e simboli speciali per massimizzare l&apos;entropia della password.
          </li>
          <li>
            <strong>Unicità:</strong> non riutilizzare mai la stessa password
            per servizi diversi. Se un servizio viene compromesso, gli altri
            restano al sicuro.
          </li>
          <li>
            <strong>Casualità:</strong> evita parole del dizionario, date di
            nascita, nomi di familiari o pattern prevedibili come
            &quot;123456&quot; o &quot;qwerty&quot;.
          </li>
        </ul>

        <h2>Perché usare un generatore di password?</h2>
        <p>
          Gli esseri umani sono prevedibili nella creazione di password. Tendiamo
          a usare parole che ricordiamo facilmente, il che le rende vulnerabili
          agli attacchi dizionario. Un generatore di password casuali elimina
          questo problema creando combinazioni imprevedibili che sono
          praticamente impossibili da indovinare.
        </p>
        <p>
          Questo generatore usa l&apos;API Web Crypto del browser, che fornisce
          numeri casuali crittograficamente sicuri, garantendo password di alta
          qualità per la protezione dei tuoi account.
        </p>
      </section>
    </div>
  );
}
