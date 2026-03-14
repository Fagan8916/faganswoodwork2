import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import GalleryDetail from "./pages/GalleryDetail";
import LazySusan from "./pages/LazySusan";
import ChoppingBoard from "./pages/ChoppingBoard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Redirect old product routes to gallery */}
            <Route path="/product/:id" element={<RedirectToGallery />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
            <Route path="/lazy-susan" element={<LazySusan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

// Redirect old product URLs to gallery pages
const RedirectToGallery = () => {
  const id = window.location.pathname.split("/product/")[1];
  const idMap: Record<string, string> = {
    "winter-walnut-lazy-susan": "live-edge-round",
    "oak-cookie-lazy-susan": "oak-cookie-lazy-susan",
    "ash-bowtie-lazy-susan": "ash-bowtie-lazy-susan",
  };
  return <Navigate to={`/gallery/${idMap[id] || id}`} replace />;
};

export default App;
