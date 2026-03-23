import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { galleryItems } from "@/lib/gallery";

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-28 relative">
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
              <Link
                to={`/gallery/${item.id}`}
                className="relative mb-5 break-inside-avoid group cursor-pointer overflow-hidden rounded-sm block"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.img
                  src={item.images[0]}
                  alt={`${item.title} - handmade ${item.specs.timber} ${item.specs.pieceType} from Fagan's Woodwork UK`}
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
                      <span className="text-primary text-sm tracking-widest uppercase"> - {item.author}</span>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-sm tracking-wide">{item.title} - {item.location}</p>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
