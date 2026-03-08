import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="font-serif text-4xl text-foreground mb-4">Piece Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id);

  const navigateLightbox = (dir: number) => {
    setSelectedImage((prev) => (prev + dir + product.images.length) % product.images.length);
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
              src={product.images[selectedImage]}
              alt={product.name}
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
            to="/#available"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Available Pieces
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
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AspectRatio>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, i) => (
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
                          alt={`${product.name} view ${i + 1}`}
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
                  {product.badge}
                </span>

                <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                  {product.name}
                </h1>

                <p className="text-primary font-serif text-3xl mb-8">€{product.price}</p>

                <Link
                  to="/#contact"
                  className="btn-filled-gold w-full text-center block mb-8"
                >
                  Request to Purchase
                </Link>

                <div className="border-t border-border/30 pt-8 mb-8">
                  <h2 className="font-serif text-2xl text-foreground mb-4">The Story</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.story}</p>
                </div>

                <div className="glass-card p-6 mb-8">
                  <h3 className="font-serif text-xl text-foreground mb-4">Specifications</h3>
                  <dl className="space-y-3">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground text-sm capitalize">{key}</dt>
                        <dd className="text-foreground text-sm text-right">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="text-muted-foreground text-sm italic text-center border border-border/20 rounded-sm p-4">
                  Only 1 available — each piece is unique and will never be replicated.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Related pieces */}
          {otherProducts.length > 0 && (
            <div className="mt-28">
              <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
                  Other Available Pieces
                </h2>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {otherProducts.map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 0.1}>
                    <Link to={`/product/${p.id}`} className="group block glass-card-hover overflow-hidden">
                      <div className="overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </AspectRatio>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-primary font-serif mt-1">€{p.price}</p>
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

export default ProductDetail;
