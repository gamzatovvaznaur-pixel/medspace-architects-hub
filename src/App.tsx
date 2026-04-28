import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CallbackDialogProvider } from "@/hooks/useCallbackDialog";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import About from "./pages/About.tsx";
import CaseIrisKrasnodar from "./pages/CaseIrisKrasnodar.tsx";
import CaseIrisMakhachkala from "./pages/CaseIrisMakhachkala.tsx";
import Documents from "./pages/Documents.tsx";
import Contacts from "./pages/Contacts.tsx";
import Privacy from "./pages/Privacy.tsx";
import Landing from "./pages/Landing.tsx";
import Landing2 from "./pages/Landing2.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CallbackDialogProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cases/iris-krasnodar" element={<CaseIrisKrasnodar />} />
            <Route path="/cases/iris-makhachkala" element={<CaseIrisMakhachkala />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/landing2" element={<Landing2 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </CallbackDialogProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
