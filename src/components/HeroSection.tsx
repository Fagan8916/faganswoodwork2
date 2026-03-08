import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/product-13.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Premium walnut lazy Susan with natural edge — Fagan's Woodwork"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <motion.p
            className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bespoke Woodcraft · No Two Pieces Alike
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Bespoke Woodcraft for the{" "}
            <span className="italic text-gradient">Discerning</span> Home
          </motion.h1>

          <motion.p
            className="text-primary font-sans tracking-[0.2em] uppercase text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Handmade Lazy Susans & Custom Chopping Boards
          </motion.p>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Every piece is born from a single block of sustainably sourced timber 
            and shaped by hand in our English workshop. No templates. No replicas. 
            Just bespoke woodcraft made for your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link to="/#contact" className="btn-outline-gold">
              Commission Your Piece
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="/#philosophy"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </Link>
    </section>
  );
};

export default HeroSection;
