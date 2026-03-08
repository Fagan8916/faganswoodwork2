import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/lib/products";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AvailableNowSection = () => {
  return (
    <section id="available" className="py-28 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
              Shop
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Available Now
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              One-of-a-kind pieces ready to ship. Once they're gone, they're gone.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <Link
                to={`/product/${product.id}`}
                className="group block glass-card-hover overflow-hidden"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={4 / 3}>
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </AspectRatio>
                </div>

                <div className="p-6 md:p-8">
                  <span className="inline-block text-xs tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-sm mb-4">
                    {product.badge}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-primary font-serif text-xl mb-4">
                    €{product.price}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <span className="btn-outline-gold text-xs py-2 px-6">
                    View Full Details
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableNowSection;
