import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import product8 from "@/assets/product-8.jpeg";
import { Ruler, Droplets, Footprints, PenTool } from "lucide-react";

const features = [
  { icon: Ruler, label: "Custom sizing" },
  { icon: Droplets, label: "Juice grooves optional" },
  { icon: Footprints, label: "Feet or flat base" },
  { icon: PenTool, label: "Monogram engraving" },
];

const ProductShowcaseBoards = () => {
  return (
    <section className="py-28 section-forest relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left on desktop */}
          <ScrollReveal className="order-2 lg:order-1">
            <div>
              <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                Bespoke Boards
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                The Last Board{" "}
                <span className="italic text-gradient">You'll Need</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                End-grain construction. Self-healing surface. Hand-rubbed with 
                food-safe mineral oil and beeswax. Sized to your kitchen, 
                not a factory spec.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <f.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{f.label}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-outline-gold">
                Design Your Board
              </a>
            </div>
          </ScrollReveal>

          {/* Image — right */}
          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="relative">
              <motion.img
                src={product8}
                alt="Overhead shot of handcrafted end-grain chopping boards"
                className="w-full rounded-sm gold-glow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseBoards;
