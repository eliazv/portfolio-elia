"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Upload,
  Download,
  Trash2,
  FileImage,
  Check,
} from "lucide-react";
import { toast } from "sonner";

interface CompressedImage {
  id: string;
  name: string;
  originalSize: number;
  compressedSize: number;
  originalUrl: string;
  compressedUrl: string;
  reduction: number;
}

export default function ComprimiImmaginiClient() {
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [quality, setQuality] = useState(80);
  const [, setProcessing] = useState(false);

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const compressImage = useCallback(
    async (file: File): Promise<CompressedImage> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
              reject(new Error("Canvas context not available"));
              return;
            }

            ctx.drawImage(img, 0, 0);

            // Determina il formato di output
            const outputFormat = file.type === "image/png" ? "image/png" : "image/jpeg";
            const qualityValue = outputFormat === "image/png" ? undefined : quality / 100;

            canvas.toBlob(
              (blob) => {
                if (!blob) {
                  reject(new Error("Compression failed"));
                  return;
                }

                const compressedUrl = URL.createObjectURL(blob);
                const reduction = Math.round(
                  ((file.size - blob.size) / file.size) * 100
                );

                resolve({
                  id: Math.random().toString(36).substring(7),
                  name: file.name,
                  originalSize: file.size,
                  compressedSize: blob.size,
                  originalUrl: e.target?.result as string,
                  compressedUrl,
                  reduction: Math.max(0, reduction),
                });
              },
              outputFormat,
              qualityValue
            );
          };
          img.onerror = () => reject(new Error("Failed to load image"));
          img.src = e.target?.result as string;
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
    },
    [quality]
  );

  const handleDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).filter((f) =>
        f.type.startsWith("image/")
      );
      await processFiles(files);
    },
    [compressImage]
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    await processFiles(files);
  };

  const processFiles = async (files: File[]) => {
    if (files.length === 0) return;

    setProcessing(true);
    const newImages: CompressedImage[] = [];

    for (const file of files) {
      try {
        const compressed = await compressImage(file);
        newImages.push(compressed);
      } catch (error) {
        toast.error(`Errore con ${file.name}`);
      }
    }

    setImages((prev) => [...prev, ...newImages]);
    setProcessing(false);

    if (newImages.length > 0) {
      toast.success(`${newImages.length} immagini compresse!`);
    }
  };

  const downloadImage = (image: CompressedImage) => {
    const link = document.createElement("a");
    link.href = image.compressedUrl;
    link.download = `compressed_${image.name}`;
    link.click();
  };

  const downloadAll = () => {
    images.forEach((img) => downloadImage(img));
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const clearAll = () => {
    images.forEach((img) => {
      URL.revokeObjectURL(img.compressedUrl);
    });
    setImages([]);
  };

  const totalOriginal = images.reduce((sum, img) => sum + img.originalSize, 0);
  const totalCompressed = images.reduce((sum, img) => sum + img.compressedSize, 0);
  const totalReduction = totalOriginal > 0
    ? Math.round(((totalOriginal - totalCompressed) / totalOriginal) * 100)
    : 0;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Comprimi Immagini</h1>
        <p className="text-gray-600">
          Riduci le dimensioni delle tue immagini senza perdere qualità visibile.
          Supporta JPEG, PNG e WEBP. Tutto avviene nel tuo browser.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tool */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quality Slider */}
          <Card className="p-6">
            <Label className="text-base font-medium">
              Qualità: {quality}%
            </Label>
            <Slider
              value={[quality]}
              min={10}
              max={100}
              step={5}
              onValueChange={(v) => setQuality(v[0])}
              className="mt-3"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Più leggero</span>
              <span>Migliore qualità</span>
            </div>
          </Card>

          {/* Drop Zone */}
          <Card
            className="p-8 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <div className="text-center">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-700">
                Trascina le immagini qui
              </p>
              <p className="text-gray-500 mt-1">
                oppure clicca per selezionare i file
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Supporta JPEG, PNG, WEBP
              </p>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </Card>

          {/* Results */}
          {images.length > 0 && (
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Immagini compresse ({images.length})
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={downloadAll}>
                    <Download className="h-4 w-4 mr-1" />
                    Scarica tutto
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearAll}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Rimuovi tutto
                  </Button>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-green-700">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">
                    Risparmiato {formatBytes(totalOriginal - totalCompressed)} ({totalReduction}%)
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  {formatBytes(totalOriginal)} → {formatBytes(totalCompressed)}
                </p>
              </div>

              {/* Image List */}
              <div className="space-y-3">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-white rounded border overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.compressedUrl}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{image.name}</p>
                      <p className="text-sm text-gray-500">
                        {formatBytes(image.originalSize)} → {formatBytes(image.compressedSize)}
                        <span className="text-green-600 ml-2">
                          -{image.reduction}%
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadImage(image)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeImage(image.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FileImage className="h-5 w-5 text-teal-600" />
              Vantaggi
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Siti web più veloci
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Risparmio spazio di archiviazione
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Email più leggere
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Upload più rapidi sui social
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-green-50 border-green-200">
            <h3 className="font-semibold mb-2 text-green-800">
              Privacy garantita
            </h3>
            <p className="text-sm text-green-700">
              Le immagini vengono elaborate interamente nel tuo browser.
              Nessun file viene caricato sui nostri server.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Consigli</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Per il web, qualità 70-80% è ottimale</li>
              <li>• I PNG con trasparenza perdono meno qualità</li>
              <li>• Immagini grandi si comprimono meglio</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2>Perché comprimere le immagini?</h2>
        <p>
          Le immagini non ottimizzate sono una delle cause principali di siti web
          lenti. Comprimere le immagini riduce il peso dei file mantenendo una
          qualità visiva accettabile, migliorando:
        </p>
        <ul>
          <li><strong>Velocità del sito:</strong> pagine che caricano più velocemente</li>
          <li><strong>SEO:</strong> Google premia i siti veloci nei risultati di ricerca</li>
          <li><strong>User experience:</strong> utenti più soddisfatti</li>
          <li><strong>Costi hosting:</strong> meno banda utilizzata</li>
        </ul>

        <h3>Come funziona la compressione?</h3>
        <p>
          Questo strumento utilizza la compressione lossy (con perdita) per JPEG e
          la compressione lossless per PNG. Il cursore della qualità ti permette
          di trovare il giusto equilibrio tra dimensione del file e qualità visiva.
        </p>
      </section>
    </div>
  );
}
