import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
{/* TODO: Rotate between lazy Susan and chopping board images */}
import heroImage from "@/assets/product-13.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Handmade walnut lazy Susan with natural live edge - bespoke woodcraft UK"
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
            Handmade Lazy Susans & Chopping Boards From{" "}
            <span className="italic text-gradient">English Timber</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Each piece - whether a rotating centrepiece for your table or a daily
            workhorse for your kitchen - is born from one tree, shaped by hand in
            my English workshop, and signed on completion. No templates. No
            replicas. Just yours.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link to="/#contact" className="btn-filled-gold">
              Design Your Lazy Susan
            </Link>
            <Link to="/#boards" className="btn-outline-gold">
              Design Your Chopping Board
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <Link
              to="/#process"
              className="text-primary hover:text-primary/80 text-sm tracking-widest uppercase transition-colors"
            >
              See How It Works →
            </Link>
          </motion.div>

          {/* Testimonial cards */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 max-w-2xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="glass-card p-6 flex-1">
              <p className="font-serif text-base italic text-muted-foreground leading-relaxed mb-2">
                "The centrepiece of every dinner party"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary/70 text-xs tracking-widest uppercase">
                  - Sarah, London
                </span>
                <span className="text-xs text-primary/50 border border-primary/20 px-2 py-0.5 rounded-full">
                  Lazy Susan
                </span>
              </div>
            </div>
            <div className="glass-card p-6 flex-1">
              <p className="font-serif text-base italic text-muted-foreground leading-relaxed mb-2">
                "The only board I use daily"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary/70 text-xs tracking-widest uppercase">
                  - Michael, Bristol
                </span>
                <span className="text-xs text-primary/50 border border-primary/20 px-2 py-0.5 rounded-full">
                  Chopping Board
                </span>
              </div>
            </div>
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
