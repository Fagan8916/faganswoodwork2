import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import boardImage from "@/assets/gallery/IMG_9897-2.JPG";
import { Ruler, Droplets, Footprints, PenTool } from "lucide-react";

const features = [
  { icon: Ruler, label: "Custom sizing" },
  { icon: Droplets, label: "Juice grooves optional" },
  { icon: Footprints, label: "Feet or flat base" },
  { icon: PenTool, label: "Personalised engraving available" },
];

const ProductShowcaseBoards = () => {
  return (
    <section id="boards" className="py-28 section-forest relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left on desktop */}
          <ScrollReveal className="order-2 lg:order-1">
            <div>
              <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                Signature Collection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Chopping Boards{" "}
                <span className="italic text-gradient">Built for Life</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                End-grain construction that heals itself. Hand-rubbed with
                food-safe mineral oil and beeswax. Sized to your kitchen, not a
                factory spec.
              </p>
              <p className="text-primary/80 text-sm tracking-widest uppercase mb-8">
                From £100 — made to order in 4–6 weeks
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <f.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial card */}
              <div
                className="glass-card p-6 mb-8"
                style={{
                  background: "hsl(0 0% 100% / 0.03)",
                  borderColor: "hsl(0 0% 100% / 0.08)",
                }}
              >
                <p className="font-serif text-base italic text-muted-foreground leading-relaxed mb-2">
                  "The only board I use. Everything else collects dust in the
                  drawer."
                </p>
                <span className="text-primary/70 text-xs tracking-widest uppercase">
                  — Michael, Bristol
                </span>
              </div>

              {/* Risk reversal */}
              <p className="text-muted-foreground text-sm italic mb-8">
                Lifetime restoration included. If it ever needs care, I'll fix it
                free.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link to="/#contact" className="btn-outline-gold">
                  Design Your Board
                </Link>
                <Link
                  to="/#available"
                  className="btn-outline-gold text-sm py-3 px-6"
                >
                  See Available Boards →
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Entertaining often?{" "}
                <Link
                  to="/#commissions"
                  className="text-primary hover:underline"
                >
                  See lazy Susans →
                </Link>
              </p>
            </div>
          </ScrollReveal>

          {/* Image — right */}
          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="relative">
              <motion.img
                src={boardImage}
                alt="Custom end-grain chopping boards handmade in UK — personalised engraving available"
                className="w-full rounded-sm gold-glow"
                loading="lazy"
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
