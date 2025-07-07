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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/progetti/1" element={<MarafoneRomagnolo />} />
          <Route path="/progetti/4" element={<GloboRicambi />} />
          <Route path="/progetti/3" element={<CasaVacanze />} />
          <Route path="/progetti/2" element={<ToolKit />} />
          <Route path="/progetti/5" element={<DiarioPersonale />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
