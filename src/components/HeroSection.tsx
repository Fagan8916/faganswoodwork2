import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-chopping-board.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
              Handcrafted Excellence
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
              <span className="text-foreground">Fagan's</span>
              <br />
              <span className="text-gradient">Woodwork</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up-delay-2">
              Each piece is hand-designed with love, care, and meticulous attention to detail. 
              Creating unique, one-of-a-kind works that become treasured heirlooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-2">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                View Collection
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 glass-card text-foreground font-medium hover:bg-secondary/50 transition-all duration-300"
              >
                Custom Orders
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Main image */}
              <img
                src={heroImage}
                alt="Handcrafted wooden chopping board - Fagan's Woodwork signature piece"
                className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl animate-float gold-glow"
                style={{ transform: "rotate(-3deg)" }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 rounded-lg" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm tracking-wider">Discover More</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
