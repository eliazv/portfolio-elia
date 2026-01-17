"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  Briefcase,
  Building2,
  ArrowLeftRight,
  Info,
  TrendingUp,
  TrendingDown,
  Euro,
  Clock,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

// ============================================
// COSTANTI E CONFIGURAZIONE FISCALE 2025
// ============================================

// Scaglioni IRPEF 2025
const SCAGLIONI_IRPEF = [
  { min: 0, max: 28000, aliquota: 0.23 },
  { min: 28000, max: 50000, aliquota: 0.35 },
  { min: 50000, max: Infinity, aliquota: 0.43 },
];

// Addizionali medie (stima)
const ADDIZIONALE_REGIONALE_MEDIA = 0.0173; // 1.73%
const ADDIZIONALE_COMUNALE_MEDIA = 0.008; // 0.8%

// Contributi INPS dipendente
const ALIQUOTA_INPS_DIPENDENTE = 0.0919; // 9.19%

// Cuneo fiscale 2025 (esonero contributivo)
const CUNEO_FISCALE = [
  { maxReddito: 25000, esonero: 0.07 }, // 7% per redditi fino a 25k
  { maxReddito: 35000, esonero: 0.06 }, // 6% per redditi 25k-35k
];

// Detrazioni lavoro dipendente 2025
const calcolaDetrazioneLavoroDipendente = (reddito: number): number => {
  if (reddito <= 15000) {
    return 1955;
  } else if (reddito <= 28000) {
    return 1910 + 1190 * ((28000 - reddito) / 13000);
  } else if (reddito <= 50000) {
    return 1910 * ((50000 - reddito) / 22000);
  }
  return 0;
};

// Bonus 100€ (ex Renzi) - solo per redditi 8.500-15.000
const calcolaBonus100 = (reddito: number): number => {
  if (reddito >= 8500 && reddito <= 15000) {
    return 1200; // 100€ x 12 mesi
  }
  return 0;
};

// Regime Forfettario
const REGIMI_FORFETTARI = {
  startup: { nome: "Forfettario Start-up (5%)", aliquota: 0.05 },
  standard: { nome: "Forfettario Standard (15%)", aliquota: 0.15 },
};

// Coefficienti di redditività per codice ATECO (principali)
const COEFFICIENTI_REDDITIVITA = [
  { codice: "web", nome: "Sviluppo Web / IT / Consulenza", coefficiente: 0.78 },
  { codice: "design", nome: "Design / Grafica / Creativi", coefficiente: 0.78 },
  {
    codice: "marketing",
    nome: "Marketing / Comunicazione",
    coefficiente: 0.78,
  },
  { codice: "formazione", nome: "Formazione / Coaching", coefficiente: 0.78 },
  { codice: "commercio", nome: "Commercio all'ingrosso", coefficiente: 0.4 },
  {
    codice: "commercio_dettaglio",
    nome: "Commercio al dettaglio",
    coefficiente: 0.4,
  },
  {
    codice: "artigianato",
    nome: "Artigianato / Manifattura",
    coefficiente: 0.67,
  },
  { codice: "ristorazione", nome: "Ristorazione / Bar", coefficiente: 0.4 },
  { codice: "immobiliare", nome: "Attività Immobiliari", coefficiente: 0.86 },
  { codice: "altro", nome: "Altro / Servizi Generici", coefficiente: 0.78 },
];

// INPS Gestione Separata
const ALIQUOTA_INPS_SEPARATA = 0.2607; // 26.07%

// ============================================
// FUNZIONI DI CALCOLO
// ============================================

// Calcolo IRPEF
const calcolaIRPEF = (imponibile: number): number => {
  let irpef = 0;
  let rimanente = imponibile;

  for (const scaglione of SCAGLIONI_IRPEF) {
    if (rimanente <= 0) break;
    const imponibileScaglione = Math.min(
      rimanente,
      scaglione.max - scaglione.min,
    );
    irpef += imponibileScaglione * scaglione.aliquota;
    rimanente -= imponibileScaglione;
  }

  return irpef;
};

// TFR (Trattamento di Fine Rapporto)
const ALIQUOTA_TFR = 0.0691; // 6.91% della RAL

// Calcolo stipendio netto dipendente
const calcolaNettoRAL = (
  ral: number,
  mensilita: number,
  carichiDiFamiglia: boolean,
): {
  nettoAnnuo: number;
  nettoMensile: number;
  inps: number;
  irpefLorda: number;
  detrazioni: number;
  addizionali: number;
  bonus100: number;
  tfr: number;
  costoAzienda: number;
} => {
  // Contributi INPS dipendente
  let aliquotaInpsEffettiva = ALIQUOTA_INPS_DIPENDENTE;

  // Applica cuneo fiscale
  for (const fascia of CUNEO_FISCALE) {
    if (ral <= fascia.maxReddito) {
      aliquotaInpsEffettiva -= fascia.esonero;
      break;
    }
  }
  aliquotaInpsEffettiva = Math.max(aliquotaInpsEffettiva, 0);

  const inps = ral * aliquotaInpsEffettiva;

  // Imponibile fiscale
  const imponibileFiscale = ral - inps;

  // IRPEF lorda
  const irpefLorda = calcolaIRPEF(imponibileFiscale);

  // Detrazioni
  let detrazioni = calcolaDetrazioneLavoroDipendente(imponibileFiscale);
  if (carichiDiFamiglia) {
    // Stima forfettaria per carichi di famiglia
    detrazioni += 800;
  }

  // IRPEF netta (non può essere negativa)
  const irpefNetta = Math.max(0, irpefLorda - detrazioni);

  // Addizionali
  const addizionaliRegionali = imponibileFiscale * ADDIZIONALE_REGIONALE_MEDIA;
  const addizionaliComunali = imponibileFiscale * ADDIZIONALE_COMUNALE_MEDIA;
  const addizionali = addizionaliRegionali + addizionaliComunali;

  // Bonus 100€
  const bonus100 = calcolaBonus100(imponibileFiscale);

  // TFR accantonato (non è nel netto ma è un beneficio)
  const tfr = ral * ALIQUOTA_TFR;

  // Netto annuo
  const nettoAnnuo = ral - inps - irpefNetta - addizionali + bonus100;

  // Netto mensile
  const nettoMensile = nettoAnnuo / mensilita;

  // Costo azienda (RAL + contributi aziendali ~31% + TFR)
  const costoAzienda = ral * 1.31 + tfr;

  return {
    nettoAnnuo,
    nettoMensile,
    inps,
    irpefLorda,
    detrazioni,
    addizionali,
    bonus100,
    tfr,
    costoAzienda,
  };
};

// Calcolo freelancer forfettario
const calcolaNettoForfettario = (
  fatturato: number,
  coefficienteRedditivita: number,
  regimeFiscale: "startup" | "standard",
  speseAnnuali: number,
): {
  nettoAnnuo: number;
  nettoMensile: number;
  imponibile: number;
  inps: number;
  imposta: number;
  percentualeNetto: number;
} => {
  // Imponibile = fatturato × coefficiente
  const imponibile = fatturato * coefficienteRedditivita;

  // INPS Gestione Separata
  const inps = imponibile * ALIQUOTA_INPS_SEPARATA;

  // Base imponibile per imposta (imponibile - INPS anno precedente, approssimato)
  const baseImponibile = imponibile - inps * 0.5; // Approssimazione deduzione INPS

  // Imposta sostitutiva
  const aliquota = REGIMI_FORFETTARI[regimeFiscale].aliquota;
  const imposta = Math.max(0, baseImponibile * aliquota);

  // Netto
  const nettoAnnuo = fatturato - inps - imposta - speseAnnuali;
  const nettoMensile = nettoAnnuo / 12;

  // Percentuale netto
  const percentualeNetto = (nettoAnnuo / fatturato) * 100;

  return {
    nettoAnnuo,
    nettoMensile,
    imponibile,
    inps,
    imposta,
    percentualeNetto,
  };
};

// Calcolo inverso: da netto desiderato a fatturato necessario
const calcolaFatturatoNecessario = (
  nettoDesiderato: number,
  coefficienteRedditivita: number,
  regimeFiscale: "startup" | "standard",
  speseAnnuali: number,
): number => {
  const aliquota = REGIMI_FORFETTARI[regimeFiscale].aliquota;

  // Formula semplificata (approssimazione)
  // Netto = Fatturato - INPS - Imposta - Spese
  // Netto = F - (F × coeff × INPS) - (F × coeff × aliquota × 0.87) - Spese
  // Netto + Spese = F × (1 - coeff × INPS - coeff × aliquota × 0.87)
  // F = (Netto + Spese) / (1 - coeff × (INPS + aliquota × 0.87))

  const coeffTotale =
    1 - coefficienteRedditivita * (ALIQUOTA_INPS_SEPARATA + aliquota * 0.87);
  const fatturato = (nettoDesiderato + speseAnnuali) / coeffTotale;

  return fatturato;
};

// Calcolo tariffa oraria
const calcolaTariffaOraria = (
  fatturatoAnnuo: number,
  oreGiornaliere: number,
  giorniFerie: number,
): { tariffaOraria: number; tariffaGiornaliera: number } => {
  const giorniLavorativi = 365 - 104 - giorniFerie; // 365 - weekend - ferie
  const oreLavorativeAnno = giorniLavorativi * oreGiornaliere;

  return {
    tariffaOraria: fatturatoAnnuo / oreLavorativeAnno,
    tariffaGiornaliera: fatturatoAnnuo / giorniLavorativi,
  };
};

// ============================================
// COMPONENTE PRINCIPALE
// ============================================

export default function CalcolaStipendioClient() {
  // Tab attivo
  const [activeTab, setActiveTab] = useState("dipendente");

  // === DIPENDENTE ===
  const [ral, setRal] = useState<string>("30000");
  const [mensilita, setMensilita] = useState<string>("13");
  const [carichiDiFamiglia, setCarichiDiFamiglia] = useState(false);

  // === FREELANCER ===
  const [modalitaFreelancer, setModalitaFreelancer] = useState<
    "fatturato" | "netto"
  >("netto");
  const [fatturatoFreelancer, setFatturatoFreelancer] =
    useState<string>("50000");
  const [nettoDesideratoFreelancer, setNettoDesideratoFreelancer] =
    useState<string>("2000");
  const [regimeFreelancer, setRegimeFreelancer] = useState<
    "startup" | "standard"
  >("standard");
  const [coefficienteFreelancer, setCoefficienteFreelancer] =
    useState<string>("web");
  const [speseFreelancer, setSpeseFreelancer] = useState<string>("2000");
  const [oreGiornaliereFreelancer, setOreGiornaliereFreelancer] =
    useState<number>(6);
  const [giorniFerieFreelancer, setGiorniFerieFreelancer] =
    useState<number>(30);

  // === CONFRONTO ===
  const [ralConfronto, setRalConfronto] = useState<string>("35000");

  // Calcoli dipendente
  const risultatoDipendente = useMemo(() => {
    const ralNum = parseFloat(ral) || 0;
    const mensNum = parseInt(mensilita) || 13;
    return calcolaNettoRAL(ralNum, mensNum, carichiDiFamiglia);
  }, [ral, mensilita, carichiDiFamiglia]);

  // Calcoli freelancer
  const risultatoFreelancer = useMemo(() => {
    const coeff =
      COEFFICIENTI_REDDITIVITA.find((c) => c.codice === coefficienteFreelancer)
        ?.coefficiente || 0.78;
    const spese = parseFloat(speseFreelancer) || 0;

    if (modalitaFreelancer === "fatturato") {
      const fatt = parseFloat(fatturatoFreelancer) || 0;
      const calcolo = calcolaNettoForfettario(
        fatt,
        coeff,
        regimeFreelancer,
        spese,
      );
      const tariffe = calcolaTariffaOraria(
        fatt,
        oreGiornaliereFreelancer,
        giorniFerieFreelancer,
      );
      return { ...calcolo, ...tariffe, fatturato: fatt };
    } else {
      const nettoMensile = parseFloat(nettoDesideratoFreelancer) || 0;
      const nettoAnnuo = nettoMensile * 12;
      const fatturatoNecessario = calcolaFatturatoNecessario(
        nettoAnnuo,
        coeff,
        regimeFreelancer,
        spese,
      );
      const calcolo = calcolaNettoForfettario(
        fatturatoNecessario,
        coeff,
        regimeFreelancer,
        spese,
      );
      const tariffe = calcolaTariffaOraria(
        fatturatoNecessario,
        oreGiornaliereFreelancer,
        giorniFerieFreelancer,
      );
      return { ...calcolo, ...tariffe, fatturato: fatturatoNecessario };
    }
  }, [
    modalitaFreelancer,
    fatturatoFreelancer,
    nettoDesideratoFreelancer,
    coefficienteFreelancer,
    regimeFreelancer,
    speseFreelancer,
    oreGiornaliereFreelancer,
    giorniFerieFreelancer,
  ]);

  // Calcoli confronto
  const risultatoConfronto = useMemo(() => {
    const ralNum = parseFloat(ralConfronto) || 0;
    const dipendente = calcolaNettoRAL(ralNum, 13, false);

    // Netto effettivo del dipendente considerando il TFR come risparmio forzato
    const nettoEffettivoAnnuo = dipendente.nettoAnnuo + dipendente.tfr;
    const nettoEffettivoMensile = nettoEffettivoAnnuo / 13;

    // Per pareggiare il netto effettivo del dipendente (netto + TFR accantonato)
    const fatturatoNecessario = calcolaFatturatoNecessario(
      nettoEffettivoAnnuo,
      0.78,
      "standard",
      2000,
    );
    const freelancer = calcolaNettoForfettario(
      fatturatoNecessario,
      0.78,
      "standard",
      2000,
    );

    return {
      dipendente: {
        ...dipendente,
        nettoEffettivoAnnuo,
        nettoEffettivoMensile,
      },
      freelancer: { ...freelancer, fatturato: fatturatoNecessario },
      differenzaFatturato: fatturatoNecessario - ralNum,
      targetNettoAnnuo: nettoEffettivoAnnuo,
    };
  }, [ralConfronto]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatCurrencyDecimal = (value: number): string => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Calcolatore RAL / Partita IVA
        </h1>
        <p className="text-gray-600">
          Calcola il tuo stipendio netto, simula la Partita IVA forfettaria e
          confronta le due opzioni. Dati aggiornati al 2025.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="dipendente" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span className="hidden sm:inline">Dipendente</span>
          </TabsTrigger>
          <TabsTrigger value="freelancer" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">Freelancer</span>
          </TabsTrigger>
          <TabsTrigger value="confronto" className="flex items-center gap-2">
            <ArrowLeftRight className="h-4 w-4" />
            <span className="hidden sm:inline">Confronto</span>
          </TabsTrigger>
        </TabsList>

        {/* ==================== TAB DIPENDENTE ==================== */}
        <TabsContent value="dipendente">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Da RAL a Stipendio Netto
                </h2>

                <div className="space-y-6">
                  {/* RAL Input */}
                  <div>
                    <Label htmlFor="ral" className="text-base">
                      RAL (Retribuzione Annua Lorda)
                    </Label>
                    <div className="flex gap-2 mt-2">
                      <div className="relative flex-1">
                        <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="ral"
                          type="number"
                          value={ral}
                          onChange={(e) => setRal(e.target.value)}
                          className="pl-9 text-lg"
                          placeholder="30000"
                        />
                      </div>
                    </div>
                    {/* Quick RAL buttons */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {[20000, 25000, 30000, 35000, 40000, 50000].map((v) => (
                        <Button
                          key={v}
                          variant={ral === v.toString() ? "default" : "outline"}
                          size="sm"
                          onClick={() => setRal(v.toString())}
                        >
                          {(v / 1000).toFixed(0)}k
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Mensilità */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Mensilità</Label>
                      <Select value={mensilita} onValueChange={setMensilita}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12">12 mensilità</SelectItem>
                          <SelectItem value="13">13 mensilità</SelectItem>
                          <SelectItem value="14">14 mensilità</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Carichi di famiglia</Label>
                      <div className="flex gap-2 mt-1">
                        <Button
                          variant={!carichiDiFamiglia ? "default" : "outline"}
                          size="sm"
                          className="flex-1"
                          onClick={() => setCarichiDiFamiglia(false)}
                        >
                          No
                        </Button>
                        <Button
                          variant={carichiDiFamiglia ? "default" : "outline"}
                          size="sm"
                          className="flex-1"
                          onClick={() => setCarichiDiFamiglia(true)}
                        >
                          Sì
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Risultati Dipendente */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <h3 className="font-semibold mb-4 text-lg">Risultati</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Netto Mensile</p>
                    <p className="text-3xl font-bold text-green-600">
                      {formatCurrency(risultatoDipendente.nettoMensile)}
                    </p>
                    <p className="text-xs text-gray-400">
                      su {mensilita} mensilità
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Netto Annuo</p>
                    <p className="text-3xl font-bold text-green-600">
                      {formatCurrency(risultatoDipendente.nettoAnnuo)}
                    </p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">RAL</span>
                    <span className="font-medium">
                      {formatCurrency(parseFloat(ral) || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      Contributi INPS
                    </span>
                    <span className="text-red-600">
                      - {formatCurrency(risultatoDipendente.inps)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      IRPEF (lorda)
                    </span>
                    <span className="text-red-600">
                      - {formatCurrency(risultatoDipendente.irpefLorda)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      Detrazioni lavoro
                    </span>
                    <span className="text-green-600">
                      + {formatCurrency(risultatoDipendente.detrazioni)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      Addizionali (stima)
                    </span>
                    <span className="text-red-600">
                      - {formatCurrency(risultatoDipendente.addizionali)}
                    </span>
                  </div>
                  {risultatoDipendente.bonus100 > 0 && (
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        Bonus 100€
                      </span>
                      <span className="text-green-600">
                        + {formatCurrency(risultatoDipendente.bonus100)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 pt-3 border-t-2 border-blue-300">
                    <span className="font-semibold">Netto Annuo</span>
                    <span className="font-bold text-xl text-green-600">
                      {formatCurrency(risultatoDipendente.nettoAnnuo)}
                    </span>
                  </div>
                </div>

                {/* TFR e costo azienda */}
                <div className="mt-4 space-y-2">
                  <div className="p-3 bg-blue-100/50 rounded-lg">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-800 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <strong>TFR accantonato</strong>
                        <span className="text-blue-600 text-xs">(6,91%)</span>
                      </span>
                      <span className="font-semibold text-blue-800">
                        {formatCurrency(risultatoDipendente.tfr)}/anno
                      </span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Non è nel netto mensile, ma lo ricevi a fine rapporto o
                      come anticipo
                    </p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg text-sm">
                    <p className="text-gray-600">
                      <strong>Costo per l&apos;azienda:</strong>{" "}
                      {formatCurrency(risultatoDipendente.costoAzienda)}/anno
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card className="p-4 bg-amber-50 border-amber-200">
                <div className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Disclaimer</p>
                    <p>
                      Questo è un calcolo indicativo. Le addizionali regionali e
                      comunali variano. Consulta un commercialista per calcoli
                      precisi.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-blue-600" />
                  Scaglioni IRPEF 2025
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Fino a 28.000€</span>
                    <span className="font-medium">23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>28.001€ - 50.000€</span>
                    <span className="font-medium">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Oltre 50.000€</span>
                    <span className="font-medium">43%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-green-50 border-green-200">
                <h4 className="font-semibold mb-2 text-green-800">Privacy</h4>
                <p className="text-sm text-green-700">
                  Tutti i calcoli avvengono nel tuo browser. Nessun dato viene
                  salvato o inviato a server esterni.
                </p>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ==================== TAB FREELANCER ==================== */}
        <TabsContent value="freelancer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-emerald-600" />
                  Calcolatore Partita IVA Forfettaria
                </h2>

                {/* Toggle modalità */}
                <div className="mb-6">
                  <Label className="mb-2 block">Cosa vuoi calcolare?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={
                        modalitaFreelancer === "netto" ? "default" : "outline"
                      }
                      onClick={() => setModalitaFreelancer("netto")}
                      className="w-full"
                    >
                      <Euro className="h-4 w-4 mr-2" />
                      Da netto desiderato
                    </Button>
                    <Button
                      variant={
                        modalitaFreelancer === "fatturato"
                          ? "default"
                          : "outline"
                      }
                      onClick={() => setModalitaFreelancer("fatturato")}
                      className="w-full"
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Da fatturato
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Input principale */}
                  {modalitaFreelancer === "netto" ? (
                    <div>
                      <Label htmlFor="nettoDesiderato" className="text-base">
                        Quanto vuoi guadagnare al mese (netto)?
                      </Label>
                      <div className="relative mt-2">
                        <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="nettoDesiderato"
                          type="number"
                          value={nettoDesideratoFreelancer}
                          onChange={(e) =>
                            setNettoDesideratoFreelancer(e.target.value)
                          }
                          className="pl-9 text-lg"
                          placeholder="2000"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[1500, 2000, 2500, 3000, 4000, 5000].map((v) => (
                          <Button
                            key={v}
                            variant={
                              nettoDesideratoFreelancer === v.toString()
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              setNettoDesideratoFreelancer(v.toString())
                            }
                          >
                            {formatCurrency(v)}/mese
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="fatturato" className="text-base">
                        Fatturato annuo previsto
                      </Label>
                      <div className="relative mt-2">
                        <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="fatturato"
                          type="number"
                          value={fatturatoFreelancer}
                          onChange={(e) =>
                            setFatturatoFreelancer(e.target.value)
                          }
                          className="pl-9 text-lg"
                          placeholder="50000"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[30000, 40000, 50000, 60000, 70000, 85000].map((v) => (
                          <Button
                            key={v}
                            variant={
                              fatturatoFreelancer === v.toString()
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() => setFatturatoFreelancer(v.toString())}
                          >
                            {(v / 1000).toFixed(0)}k
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regime fiscale */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Regime Fiscale</Label>
                      <Select
                        value={regimeFreelancer}
                        onValueChange={(v) =>
                          setRegimeFreelancer(v as "startup" | "standard")
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">
                            Start-up (5%) - primi 5 anni
                          </SelectItem>
                          <SelectItem value="standard">
                            Standard (15%)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Settore di attività</Label>
                      <Select
                        value={coefficienteFreelancer}
                        onValueChange={setCoefficienteFreelancer}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {COEFFICIENTI_REDDITIVITA.map((c) => (
                            <SelectItem key={c.codice} value={c.codice}>
                              {c.nome} ({(c.coefficiente * 100).toFixed(0)}%)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Spese */}
                  <div>
                    <Label htmlFor="spese">
                      Spese annuali fisse (opzionale)
                    </Label>
                    <p className="text-xs text-gray-500 mb-1">
                      Commercialista, software, attrezzature, ecc.
                    </p>
                    <div className="relative">
                      <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="spese"
                        type="number"
                        value={speseFreelancer}
                        onChange={(e) => setSpeseFreelancer(e.target.value)}
                        className="pl-9"
                        placeholder="2000"
                      />
                    </div>
                  </div>

                  {/* Ore e ferie */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Ore fatturabili/giorno: {oreGiornaliereFreelancer}
                      </Label>
                      <Slider
                        value={[oreGiornaliereFreelancer]}
                        onValueChange={(v) => setOreGiornaliereFreelancer(v[0])}
                        min={4}
                        max={8}
                        step={0.5}
                        className="mt-3"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Sii realistico: nessuno fattura 8h al giorno
                      </p>
                    </div>
                    <div>
                      <Label className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Giorni di ferie/malattia: {giorniFerieFreelancer}
                      </Label>
                      <Slider
                        value={[giorniFerieFreelancer]}
                        onValueChange={(v) => setGiorniFerieFreelancer(v[0])}
                        min={15}
                        max={60}
                        step={5}
                        className="mt-3"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Risultati Freelancer */}
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <h3 className="font-semibold mb-4 text-lg">Risultati</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {modalitaFreelancer === "netto" && (
                    <div className="bg-white rounded-lg p-4 shadow-sm col-span-2 md:col-span-1">
                      <p className="text-sm text-gray-500">
                        Fatturato Necessario
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatCurrency(risultatoFreelancer.fatturato)}
                      </p>
                      <p className="text-xs text-gray-400">/anno</p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Netto Mensile</p>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(risultatoFreelancer.nettoMensile)}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Netto Annuo</p>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(risultatoFreelancer.nettoAnnuo)}
                    </p>
                  </div>
                </div>

                {/* Tariffe */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-emerald-200">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Tariffa Oraria Minima
                    </p>
                    <p className="text-3xl font-bold text-emerald-600">
                      {formatCurrencyDecimal(risultatoFreelancer.tariffaOraria)}
                    </p>
                    <p className="text-xs text-gray-400">/ora</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Day Rate</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {formatCurrency(risultatoFreelancer.tariffaGiornaliera)}
                    </p>
                    <p className="text-xs text-gray-400">/giorno</p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Fatturato</span>
                    <span className="font-medium">
                      {formatCurrency(risultatoFreelancer.fatturato)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">
                      Imponibile (
                      {(
                        (COEFFICIENTI_REDDITIVITA.find(
                          (c) => c.codice === coefficienteFreelancer,
                        )?.coefficiente || 0.78) * 100
                      ).toFixed(0)}
                      %)
                    </span>
                    <span className="font-medium">
                      {formatCurrency(risultatoFreelancer.imponibile)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      INPS (26,07%)
                    </span>
                    <span className="text-red-600">
                      - {formatCurrency(risultatoFreelancer.inps)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      Imposta ({regimeFreelancer === "startup" ? "5%" : "15%"})
                    </span>
                    <span className="text-red-600">
                      - {formatCurrency(risultatoFreelancer.imposta)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      Spese fisse
                    </span>
                    <span className="text-red-600">
                      - {formatCurrency(parseFloat(speseFreelancer) || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 pt-3 border-t-2 border-emerald-300">
                    <span className="font-semibold">Netto Annuo</span>
                    <span className="font-bold text-xl text-green-600">
                      {formatCurrency(risultatoFreelancer.nettoAnnuo)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Ti resta in tasca il:</span>
                    <span className="font-bold text-emerald-600">
                      {risultatoFreelancer.percentualeNetto.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar Freelancer */}
            <div className="space-y-4">
              <Card className="p-4 bg-amber-50 border-amber-200">
                <div className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Limite Forfettario</p>
                    <p>
                      Il regime forfettario ha un limite di 85.000€ di fatturato
                      annuo. Superato questo limite si passa al regime
                      ordinario.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-emerald-600" />
                  Coefficiente di redditività
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Nel forfettario, le spese non si deducono singolarmente. Lo
                  Stato applica una deduzione forfettaria in base al tuo
                  settore.
                </p>
                <div className="text-xs text-gray-500">
                  <p>
                    Es. Coefficiente 78% = 22% del fatturato è considerato
                    &quot;spese&quot; e non tassato.
                  </p>
                </div>
              </Card>

              <Card className="p-4 bg-green-50 border-green-200">
                <h4 className="font-semibold mb-2 text-green-800">Privacy</h4>
                <p className="text-sm text-green-700">
                  I dati non vengono salvati. Il calcolo avviene interamente nel
                  tuo browser.
                </p>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ==================== TAB CONFRONTO ==================== */}
        <TabsContent value="confronto">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5 text-violet-600" />
                Confronto Dipendente vs Freelancer
              </h2>
              <p className="text-gray-600 mb-6">
                Scopri quanto dovresti fatturare come freelancer per ottenere lo
                stesso netto effettivo di un dipendente, considerando il TFR
                come risparmio forzato.
              </p>

              <div>
                <Label htmlFor="ralConfronto" className="text-base">
                  Inserisci la RAL da confrontare
                </Label>
                <div className="flex gap-2 mt-2">
                  <div className="relative flex-1">
                    <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="ralConfronto"
                      type="number"
                      value={ralConfronto}
                      onChange={(e) => setRalConfronto(e.target.value)}
                      className="pl-9 text-lg"
                      placeholder="35000"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[25000, 30000, 35000, 40000, 50000, 60000].map((v) => (
                    <Button
                      key={v}
                      variant={
                        ralConfronto === v.toString() ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setRalConfronto(v.toString())}
                    >
                      {(v / 1000).toFixed(0)}k
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Risultati confronto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Dipendente */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">Dipendente</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">RAL</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(parseFloat(ralConfronto) || 0)}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">Netto Mensile</p>
                    <p className="text-3xl font-bold text-green-600">
                      {formatCurrency(
                        risultatoConfronto.dipendente.nettoMensile,
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Netto Annuo</p>
                    <p className="text-xl font-semibold text-green-600">
                      {formatCurrency(risultatoConfronto.dipendente.nettoAnnuo)}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">TFR accantonato</p>
                    <p className="text-lg font-semibold text-blue-700">
                      {formatCurrency(risultatoConfronto.dipendente.tfr)} / anno
                    </p>
                    <p className="text-xs text-gray-500">
                      Netto effettivo (netto + TFR):{" "}
                      {formatCurrency(
                        risultatoConfronto.dipendente.nettoEffettivoAnnuo,
                      )}{" "}
                      (
                      {formatCurrency(
                        risultatoConfronto.dipendente.nettoEffettivoMensile,
                      )}
                      /mese su 13)
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t space-y-1 text-sm text-gray-600">
                  <p>+ Ferie pagate</p>
                  <p>+ Malattia coperta</p>
                  <p>+ TFR accantonato</p>
                  <p>+ Contributi pensione più alti</p>
                </div>
              </Card>

              {/* Card Freelancer */}
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-lg font-semibold">
                    Freelancer Equivalente
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Fatturato necessario
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(risultatoConfronto.freelancer.fatturato)}
                    </p>
                    <p className="text-xs text-gray-500">
                      + {formatCurrency(risultatoConfronto.differenzaFatturato)}{" "}
                      rispetto alla RAL
                    </p>
                  </div>
                  <div className="pt-4 border-t space-y-1">
                    <p className="text-sm text-gray-500">Netto Mensile</p>
                    <p className="text-3xl font-bold text-green-600">
                      {formatCurrency(
                        risultatoConfronto.freelancer.nettoMensile,
                      )}
                    </p>
                    <p className="text-xs text-gray-500">
                      Obiettivo:{" "}
                      {formatCurrency(risultatoConfronto.targetNettoAnnuo / 13)}
                      /mese (netto effettivo equivalente)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Netto Annuo</p>
                    <p className="text-xl font-semibold text-green-600">
                      {formatCurrency(risultatoConfronto.freelancer.nettoAnnuo)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Calcolato per pareggiare netto + TFR del dipendente
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t space-y-1 text-sm text-gray-600">
                  <p>- Niente ferie pagate</p>
                  <p>- Niente malattia</p>
                  <p>- Devi gestirti la pensione</p>
                  <p>+ Più flessibilità</p>
                  <p>+ Possibilità di guadagnare di più</p>
                </div>
              </Card>
            </div>

            {/* Insight finale */}
            <Card className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-violet-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Il punto chiave
                  </h4>
                  <p className="text-gray-700">
                    Con una RAL di{" "}
                    <strong>
                      {formatCurrency(parseFloat(ralConfronto) || 0)}
                    </strong>
                    , per avere lo stesso netto effettivo da freelancer dovresti
                    fatturare circa{" "}
                    <strong className="text-violet-700">
                      {formatCurrency(risultatoConfronto.freelancer.fatturato)}
                    </strong>{" "}
                    all&apos;anno, non semplicemente{" "}
                    {formatCurrency(parseFloat(ralConfronto) || 0)} di
                    fatturato.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Il TFR del dipendente vale come risparmio forzato: va
                    considerato nel confronto insieme a tasse, INPS e assenza di
                    ferie/malattia pagate.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Come calcolare lo stipendio netto in Italia</h2>
        <p>
          Il calcolo dello stipendio netto in Italia può sembrare complesso, ma
          segue regole precise. Dalla RAL (Retribuzione Annua Lorda) si
          sottraggono i contributi INPS, l&apos;IRPEF (con le sue detrazioni) e
          le addizionali regionali e comunali.
        </p>

        <h3>Scaglioni IRPEF 2025</h3>
        <p>
          Dal 2024, gli scaglioni IRPEF sono stati semplificati a tre fasce: 23%
          fino a 28.000€, 35% da 28.001€ a 50.000€, e 43% oltre i 50.000€.
        </p>

        <h3>Partita IVA Forfettaria: quanto resta davvero?</h3>
        <p>
          Con il regime forfettario, paghi un&apos;imposta sostitutiva del 15%
          (o 5% per i primi 5 anni) sul reddito imponibile. A questo si aggiunge
          l&apos;INPS Gestione Separata al 26,07%. In media, con un coefficiente
          di redditività del 78% (tipico per consulenti e sviluppatori), ti
          resta circa il 65-70% del fatturato.
        </p>

        <h3>Dipendente vs Freelancer: quale conviene?</h3>
        <p>
          Non esiste una risposta universale. Il dipendente ha più tutele (ferie
          pagate, malattia, TFR), mentre il freelancer ha più flessibilità e
          potenziale di guadagno. Come regola generale, per pareggiare lo stesso
          netto di un dipendente, un freelancer deve fatturare circa il 40-50%
          in più della RAL equivalente.
        </p>
      </section>
    </div>
  );
}
