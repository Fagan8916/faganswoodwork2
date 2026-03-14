import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { galleryItems } from "@/lib/gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Truck } from "lucide-react";

const AvailableNowSection = () => {
  const availableItems = galleryItems.filter((item) => item.available);
  const lazySusanCount = availableItems.filter(
    (i) => i.specs.pieceType === "Lazy Susan"
  ).length;
  const boardCount = availableItems.filter(
    (i) => i.specs.pieceType === "Chopping Board"
  ).length;

  const subtitleParts: string[] = [];
  if (lazySusanCount > 0)
    subtitleParts.push(
      `${lazySusanCount} lazy Susan${lazySusanCount > 1 ? "s" : ""}`
    );
  if (boardCount > 0)
    subtitleParts.push(
      `${boardCount} chopping board${boardCount > 1 ? "s" : ""}`
    );

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
              Only {availableItems.length} pieces available
              {subtitleParts.length > 0 && ` — ${subtitleParts.join(" · ")}`}
            </p>
          </div>
        </ScrollReveal>

        {availableItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {availableItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <Link
                  to={`/gallery/${item.id}`}
                  className="group block glass-card-hover overflow-hidden"
                >
                  <div className="overflow-hidden relative">
                    <AspectRatio ratio={4 / 3}>
                      <motion.img
                        src={item.images[0]}
                        alt={`${item.title} — ${item.specs.timber} ${item.specs.pieceType} available now UK`}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AspectRatio>
                    {/* Product type badge */}
                    <span className="absolute top-3 left-3 text-xs tracking-widest uppercase bg-background/80 backdrop-blur-sm text-primary border border-primary/20 px-3 py-1 rounded-full">
                      {item.specs.pieceType}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <span className="inline-block text-xs tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-sm mb-4">
                      {item.badge}
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-primary font-serif text-xl mb-2">
                      £{item.price}
                    </p>

                    {/* Stock urgency */}
                    <p className="text-sm text-muted-foreground mb-4">
                      Last one available
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Urgency badge */}
                    <div className="flex items-center gap-2 text-xs text-primary/80 mb-4">
                      <Truck className="w-3.5 h-3.5" />
                      <span className="tracking-wide">Ships within 48 hours</span>
                    </div>

                    <span className="btn-outline-gold text-xs py-2 px-6">
                      View Full Details
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="text-center max-w-lg mx-auto">
              <p className="text-muted-foreground text-lg mb-6">
                Just sold out — join the waitlist for next quarter's lazy Susans
                and chopping boards
              </p>
              <Link to="/#mailing-list" className="btn-filled-gold">
                Join Waitlist
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default AvailableNowSection;
