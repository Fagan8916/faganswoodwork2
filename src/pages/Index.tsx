import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductShowcaseLazySusan from "@/components/ProductShowcaseLazySusan";
import ProductShowcaseBoards from "@/components/ProductShowcaseBoards";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ProductShowcaseLazySusan />
      <ProductShowcaseBoards />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
