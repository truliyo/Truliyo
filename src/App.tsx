import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import Services from "./components/Services";
import About from "./components/About";
import Media from "./components/Media";
import Blog from "./components/Blog";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import TestimonialsSection from "./components/customerfeedback";

const queryClient = new QueryClient();

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroCarousel />
    <Services />
    <About />
    <Media />
    <Blog />
    {/* <Career /> */}
    <TestimonialsSection />
    <Contact />
    <Address />
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
