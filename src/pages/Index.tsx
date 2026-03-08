import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductShowcaseLazySusan from "@/components/ProductShowcaseLazySusan";
import AvailableNowSection from "@/components/AvailableNowSection";
import ProductShowcaseBoards from "@/components/ProductShowcaseBoards";
import ProcessSection from "@/components/ProcessSection";
import TradeSection from "@/components/TradeSection";
import GallerySection from "@/components/GallerySection";
import MailingListSection from "@/components/MailingListSection";
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
      <AvailableNowSection />
      <ProductShowcaseBoards />
      <ProcessSection />
      <TradeSection />
      <GallerySection />
      <MailingListSection />
      <ContactSection />
      <FooterSection />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
