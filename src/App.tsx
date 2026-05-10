import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, type ReactNode } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CallbackDialogProvider } from "@/hooks/useCallbackDialog";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import CookieConsent from "./components/CookieConsent.tsx";

const queryClient = new QueryClient();
const Services = lazy(() => import("./pages/Services.tsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const CaseIrisKrasnodar = lazy(() => import("./pages/CaseIrisKrasnodar.tsx"));
const CaseIrisMakhachkala = lazy(() => import("./pages/CaseIrisMakhachkala.tsx"));
const Contacts = lazy(() => import("./pages/Contacts.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const Landing = lazy(() => import("./pages/Landing.tsx"));
const Landing2 = lazy(() => import("./pages/Landing2.tsx"));
const Documents = lazy(() => import("./pages/Documents.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const PageLoader = () => (
  <div className="min-h-screen bg-background" aria-label="Загрузка страницы" />
);

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <CallbackDialogProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={withSuspense(<Services />)} />
            <Route path="/services/:slug" element={withSuspense(<ServiceDetail />)} />
            <Route path="/about" element={withSuspense(<About />)} />
            <Route path="/contacts" element={withSuspense(<Contacts />)} />
            <Route path="/cases/iris-krasnodar" element={withSuspense(<CaseIrisKrasnodar />)} />
            <Route path="/cases/iris-makhachkala" element={withSuspense(<CaseIrisMakhachkala />)} />
            <Route path="/documents" element={withSuspense(<Documents />)} />
            <Route path="/privacy" element={withSuspense(<Privacy />)} />
            <Route path="/landing" element={withSuspense(<Landing />)} />
            <Route path="/landing2" element={withSuspense(<Landing2 />)} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={withSuspense(<NotFound />)} />
          </Routes>
          <CookieConsent />
        </CallbackDialogProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
