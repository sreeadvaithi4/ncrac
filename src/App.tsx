import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import TravelAccommodation from "./pages/TravelAccommodation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/committee" element={<OrganizingCommittee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/travel" element={<TravelAccommodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
