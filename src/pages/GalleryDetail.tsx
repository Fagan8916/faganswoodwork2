import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { galleryItems } from "@/lib/gallery";
import { products } from "@/lib/products";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GalleryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = galleryItems.find((g) => g.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!item) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="font-serif text-4xl text-foreground mb-4">Piece Not Found</h1>
          <Link to="/#gallery" className="text-primary hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  // Show related pieces of the same type first, then fill with others
  const sameType = galleryItems.filter((g) => g.id !== item.id && g.specs.pieceType === item.specs.pieceType);
  const different = galleryItems.filter((g) => g.id !== item.id && g.specs.pieceType !== item.specs.pieceType);
  const otherItems = [...sameType, ...different].slice(0, 3);

  const navigateLightbox = (dir: number) => {
    setSelectedImage((prev) => (prev + dir + item.images.length) % item.images.length);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={selectedImage}
              src={item.images[selectedImage]}
              alt={item.title}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image gallery */}
            <ScrollReveal>
              <div>
                <div
                  className="overflow-hidden rounded-sm cursor-pointer mb-4"
                  onClick={() => setLightboxOpen(true)}
                >
                  <AspectRatio ratio={4 / 3}>
                    <motion.img
                      key={selectedImage}
                      src={item.images[selectedImage]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AspectRatio>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {item.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`overflow-hidden rounded-sm border-2 transition-colors ${
                        selectedImage === i ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={img}
                          alt={`${item.title} view ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal delay={0.2}>
              <div>
                <span className="inline-block text-xs tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-sm mb-4">
                  {item.specs.pieceType}
                </span>

                <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2">
                  {item.title}
                </h1>
                
                <p className="text-muted-foreground text-lg mb-8">{item.location}</p>

                {item.quote && (
                  <blockquote className="border-l-2 border-primary/40 pl-6 mb-8">
                    <p className="font-serif text-xl italic text-foreground leading-relaxed mb-2">
                      "{item.quote}"
                    </p>
                    {item.author && (
                      <cite className="text-primary text-sm tracking-widest uppercase not-italic">
                        — {item.author}
                      </cite>
                    )}
                  </blockquote>
                )}

                <div className="border-t border-border/30 pt-8 mb-8">
                  <h2 className="font-serif text-2xl text-foreground mb-4">The Story</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <div className="glass-card p-6 mb-8">
                  <h3 className="font-serif text-xl text-foreground mb-4">Specifications</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground text-sm">Piece Type</dt>
                      <dd className="text-foreground text-sm text-right">{item.specs.pieceType}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground text-sm">Timber</dt>
                      <dd className="text-foreground text-sm text-right">{item.specs.timber}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground text-sm">Dimensions</dt>
                      <dd className="text-foreground text-sm text-right">{item.specs.dimensions}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground text-sm">Finish</dt>
                      <dd className="text-foreground text-sm text-right">{item.specs.finish}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground text-sm">Completed</dt>
                      <dd className="text-foreground text-sm text-right">{item.specs.completed}</dd>
                    </div>
                  </dl>
                </div>

                <Link
                  to="/#contact"
                  className="btn-filled-gold w-full text-center block"
                >
                  Commission a Similar Piece
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Related pieces */}
          {otherItems.length > 0 && (
            <div className="mt-28 border-t border-border/20 pt-20">
              <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
                  More From the Portfolio
                </h2>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {otherItems.map((g, i) => (
                  <ScrollReveal key={g.id} delay={i * 0.1}>
                    <Link to={`/gallery/${g.id}`} className="group block glass-card-hover overflow-hidden">
                      <div className="overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                            <img
                              src={g.images[0]}
                              alt={g.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                          />
                        </AspectRatio>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                          {g.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">{g.location}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default GalleryDetail;
