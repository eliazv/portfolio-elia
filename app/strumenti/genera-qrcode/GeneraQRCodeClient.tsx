"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { QrCode, Download, RefreshCw, Link, Mail, Phone, FileText } from "lucide-react";
import { toast } from "sonner";

export default function GeneraQRCodeClient() {
  const [qrType, setQrType] = useState<string>("url");
  const [url, setUrl] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailSubject, setEmailSubject] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [size, setSize] = useState<string>("300");
  const [color, setColor] = useState<string>("#000000");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [loading, setLoading] = useState<boolean>(false);
  const [qrImage, setQrImage] = useState<string | null>(null);

  const generateQRContent = (): string => {
    switch (qrType) {
      case "url":
        return url;
      case "text":
        return text;
      case "email":
        let emailContent = `mailto:${email}`;
        if (emailSubject) emailContent += `?subject=${encodeURIComponent(emailSubject)}`;
        return emailContent;
      case "phone":
        return `tel:${phone}`;
      default:
        return "";
    }
  };

  const generateQRCode = async () => {
    const content = generateQRContent();

    if (!content) {
      toast.error("Inserisci il contenuto per generare il QR Code");
      return;
    }

    setLoading(true);

    // Usa l'API gratuita di qrserver
    const encodedContent = encodeURIComponent(content);
    const colorHex = color.replace("#", "");
    const bgColorHex = bgColor.replace("#", "");

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedContent}&size=${size}x${size}&color=${colorHex}&bgcolor=${bgColorHex}`;

    setQrImage(qrCodeUrl);
    setLoading(false);
    toast.success("QR Code generato con successo!");
  };

  const downloadQRCode = async () => {
    if (!qrImage) return;

    try {
      const response = await fetch(qrImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `qrcode-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Download avviato!");
    } catch {
      toast.error("Errore durante il download");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Generatore QR Code</h1>
        <p className="text-gray-600">
          Crea QR Code personalizzati per URL, testo, email o numeri di telefono.
          Completamente gratuito e senza registrazione.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tool */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <Tabs value={qrType} onValueChange={setQrType} className="mb-6">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="url" className="flex items-center gap-1">
                  <Link className="h-4 w-4" />
                  <span className="hidden sm:inline">URL</span>
                </TabsTrigger>
                <TabsTrigger value="text" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Testo</span>
                </TabsTrigger>
                <TabsTrigger value="email" className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">Telefono</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="url" className="mt-4">
                <div>
                  <Label htmlFor="url">URL del sito web</Label>
                  <Input
                    id="url"
                    placeholder="https://esempio.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </TabsContent>

              <TabsContent value="text" className="mt-4">
                <div>
                  <Label htmlFor="text">Testo</Label>
                  <Textarea
                    id="text"
                    placeholder="Inserisci il testo che vuoi codificare"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </TabsContent>

              <TabsContent value="email" className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="email">Indirizzo email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="esempio@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email-subject">Oggetto (opzionale)</Label>
                  <Input
                    id="email-subject"
                    placeholder="Oggetto dell'email"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </TabsContent>

              <TabsContent value="phone" className="mt-4">
                <div>
                  <Label htmlFor="phone">Numero di telefono</Label>
                  <Input
                    id="phone"
                    placeholder="+39 123 456 7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* Customization */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-4">Personalizzazione</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="size">Dimensione</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="150">150 x 150</SelectItem>
                      <SelectItem value="200">200 x 200</SelectItem>
                      <SelectItem value="300">300 x 300</SelectItem>
                      <SelectItem value="400">400 x 400</SelectItem>
                      <SelectItem value="500">500 x 500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="color">Colore QR</Label>
                  <div className="flex mt-1 gap-2">
                    <Input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-12 p-1 h-10"
                    />
                    <Input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bg-color">Sfondo</Label>
                  <div className="flex mt-1 gap-2">
                    <Input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-12 p-1 h-10"
                    />
                    <Input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <Button
              onClick={generateQRCode}
              disabled={loading}
              className="w-full mt-6"
              size="lg"
            >
              {loading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Generazione...
                </>
              ) : (
                <>
                  <QrCode className="mr-2 h-5 w-5" />
                  Genera QR Code
                </>
              )}
            </Button>

            {/* Result */}
            {qrImage && (
              <div className="mt-6 flex flex-col items-center">
                <div className="border p-4 bg-gray-50 rounded-lg">
                  <Image
                    src={qrImage}
                    alt="QR Code generato"
                    width={parseInt(size)}
                    height={parseInt(size)}
                    unoptimized
                  />
                </div>
                <Button onClick={downloadQRCode} variant="outline" className="mt-4">
                  <Download className="mr-2 h-5 w-5" />
                  Scarica QR Code
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Cosa puoi fare con i QR Code</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Condividere rapidamente URL di siti web
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Aggiungere contatti alla rubrica
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Condividere messaggi o informazioni
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Avviare chiamate telefoniche
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Inviare email precompilate
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Suggerimenti</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Mantieni il contenuto breve per una scansione affidabile</li>
              <li>• Usa colori con buon contrasto</li>
              <li>• Testa sempre il QR Code prima di usarlo</li>
              <li>• Scegli una dimensione adeguata all&apos;uso</li>
            </ul>
          </Card>

          <Card className="p-6 bg-green-50 border-green-200">
            <h3 className="font-semibold mb-2 text-green-800">Gratuito e illimitato</h3>
            <p className="text-sm text-green-700">
              Genera tutti i QR Code che vuoi senza limiti. Non è richiesta registrazione.
            </p>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Come funziona un QR Code?</h2>
        <p>
          Un QR Code (Quick Response Code) è un codice a barre bidimensionale che può
          memorizzare informazioni come URL, testo, numeri di telefono e indirizzi email.
          Può essere scansionato con la fotocamera di qualsiasi smartphone moderno.
        </p>

        <h3>Usi comuni dei QR Code</h3>
        <ul>
          <li><strong>Marketing:</strong> link a siti web, landing page, social media</li>
          <li><strong>Biglietti da visita:</strong> condivisione rapida dei contatti</li>
          <li><strong>Ristoranti:</strong> menu digitali accessibili da tavolo</li>
          <li><strong>Eventi:</strong> biglietti elettronici e check-in</li>
          <li><strong>Prodotti:</strong> informazioni aggiuntive e manuali</li>
        </ul>
      </section>
    </div>
  );
}
