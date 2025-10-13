import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MarafoneRomagnolo from "./pages/projects/MarafoneRomagnolo";
import GloboRicambi from "./pages/projects/GloboRicambi";
import CasaVacanze from "./pages/projects/CasaVacanze";
import ToolKit from "./pages/projects/ToolKit";
import DiarioPersonale from "./pages/projects/DiarioPersonale";
import InZona from "./pages/projects/InZona";
import ContaSpicci from "./pages/projects/Contaspicci";
import Scadenzario from "./pages/projects/Scadenzario";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/progetti/marafone-romagnolo"
            element={<MarafoneRomagnolo />}
          />
          <Route path="/progetti/globo-ricambi" element={<GloboRicambi />} />
          <Route path="/progetti/casa-vacanze" element={<CasaVacanze />} />
          <Route path="/progetti/toolkit" element={<ToolKit />} />
          <Route
            path="/progetti/diario-personale"
            element={<DiarioPersonale />}
          />
          <Route path="/progetti/inzona" element={<InZona />} />
          <Route path="/contaspicci" element={<ContaSpicci />} />
          <Route path="/scadenzario" element={<Scadenzario />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
