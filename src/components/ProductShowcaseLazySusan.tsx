import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import product3 from "@/assets/product-3.jpeg";

const ProductShowcaseLazySusan = () => {
  return (
    <section id="commissions" className="py-16 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              <motion.img
                src={product3}
                alt="Walnut lazy Susan with natural edge on dining table"
                className="w-full rounded-sm gold-glow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                Signature Collection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Lazy Susans,{" "}
                <span className="italic text-gradient">Reimagined</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From intimate dinners to grand gatherings — rotating centrepieces 
                carved from single blocks of walnut, oak, and olive wood. Each with 
                unique grain patterns, natural edges, and hand-rubbed oil finishes.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary font-serif text-2xl">From €380</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase px-3 py-1 border border-border rounded-sm">
                  Made to Order · 4–6 Weeks
                </span>
              </div>

              <a href="#contact" className="btn-filled-gold">
                View Available Timbers
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseLazySusan;
