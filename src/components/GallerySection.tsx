import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product9 from "@/assets/product-9.jpeg";
import product10 from "@/assets/product-10.jpeg";
import product11 from "@/assets/product-11.jpeg";

const galleryItems = [
  { id: 1, image: product11, caption: "Lazy Susan for Sarah — Dublin", quote: "The grain on our lazy Susan stops conversation. Every guest asks about it.", author: "Sarah M." },
  { id: 2, image: product9, caption: "Centrepiece for James & Anna — Cork", quote: "It's not a cutting board — it's a statement piece that happens to be functional.", author: "James & Anna" },
  { id: 3, image: product1, caption: "Commission for Mark — London", quote: "Fagan understood our vision from the first conversation. The result exceeded it.", author: "Mark D." },
  { id: 4, image: product4, caption: "Board for Claire — Belfast", quote: "We've had ours for three years. It only gets more beautiful with use.", author: "Claire T." },
  { id: 5, image: product6, caption: "End-Grain Board for David & Sophie — Edinburgh", quote: "End-grain construction that heals itself. It's remarkable craftsmanship.", author: "David & Sophie" },
  { id: 6, image: product10, caption: "Lazy Susan for Rachel — Galway", quote: "Signed, dated, and completely unique. Exactly what we wanted.", author: "Rachel K." },
  { id: 7, image: product2, caption: "Workshop piece — Fagan's Woodwork", quote: null, author: null },
  { id: 8, image: product5, caption: "Serving Board for Tom & Lisa — Bristol", quote: "For those who've outgrown IKEA and aren't ready for antiques.", author: "Tom & Lisa" },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-28 relative">
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background/95 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={closeLightbox}>
              <X className="w-8 h-8" />
            </button>
            <button className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors" onClick={(e) => { e.stopPropagation(); navigate(-1); }}>
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors" onClick={(e) => { e.stopPropagation(); navigate(1); }}>
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightbox}
              src={galleryItems[lightbox].image}
              alt={galleryItems[lightbox].caption}
              className="max-w-[90vw] max-h-[80vh] object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-muted-foreground text-sm mt-4 tracking-wide">{galleryItems[lightbox].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Pieces in Their Homes
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A curated selection of commissions, each one signed and never repeated.
            </p>
          </div>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={(i % 3) * 0.1}>
              <div
                className="relative mb-5 break-inside-avoid group cursor-pointer overflow-hidden rounded-sm"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openLightbox(i)}
              >
                <motion.img
                  src={item.image}
                  alt={item.caption}
                  className="w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Caption overlay */}
                <div
                  className={`absolute inset-0 bg-background/85 flex flex-col items-center justify-center p-8 transition-opacity duration-400 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.quote ? (
                    <>
                      <p className="font-serif text-lg italic text-foreground text-center leading-relaxed mb-4">
                        "{item.quote}"
                      </p>
                      <span className="text-primary text-sm tracking-widest uppercase">— {item.author}</span>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-sm tracking-wide">{item.caption}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
