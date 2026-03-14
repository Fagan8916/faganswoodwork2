import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessSection from "@/components/ProcessSection";
import { galleryItems } from "@/lib/gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TreePine, Fingerprint, ShieldCheck, Ban, HelpCircle, Package } from "lucide-react";
import heroImage from "@/assets/product-13.jpeg";
import { Helmet } from "react-helmet-async";

const lazySusanItems = galleryItems.filter(
  (item) => item.specs.pieceType === "Lazy Susan"
).slice(0, 6);

const sizingData = [
  { diameter: "30cm", seats: "4", bestFor: "Intimate dinners", price: "£380" },
  { diameter: "40cm", seats: "6–8", bestFor: "Family meals", price: "£480" },
  { diameter: "50cm", seats: "8–10", bestFor: "Entertaining", price: "£620" },
  { diameter: "Custom", seats: "Any", bestFor: "Your space", price: "Quote" },
];

const painPoints = [
  { icon: Ban, text: "Identical to thousands of others" },
  { icon: HelpCircle, text: "No story or provenance" },
  { icon: Package, text: "Won't last a generation" },
];

const pillars = [
  { icon: TreePine, title: "One Tree, One Piece", desc: "Every lazy Susan comes from a single sustainably sourced slab" },
  { icon: Fingerprint, title: "Signed & Dated", desc: "Hand-signed on the underside with date of completion" },
  { icon: ShieldCheck, title: "Lifetime Restoration", desc: "Send it back any time for refinishing — free of charge" },
];

const testimonials = [
  { quote: "It's the first thing everyone comments on at dinner", author: "Rebecca, Bath" },
  { quote: "The centrepiece of every dinner party", author: "Sarah, London" },
  { quote: "My clients always ask where I found it", author: "Interior Designer, London" },
];

const faqs = [
  { q: "How long does it take?", a: "4–6 weeks from design consultation to delivery. We'll keep you updated with photos throughout the process." },
  { q: "Can I choose the wood?", a: "Yes — we offer a timber selection service. Choose from walnut, ash, oak, pine, or elm, and we'll send you photos of available slabs." },
  { q: "Do you ship UK-wide?", a: "Yes — we offer white-glove delivery across the UK, ensuring your piece arrives safely." },
  { q: "What if I don't like it?", a: "You'll see your slab before we start shaping, and receive progress photos throughout. Every piece is approved before final finishing." },
];

const LazySusan = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Handmade bespoke lazy Susan UK — carved from single timber slab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-6">
              Handmade Lazy Susans UK —{" "}
              <span className="italic text-gradient">Bespoke Rotating Centrepieces</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Carved from single slabs of walnut, oak, ash, or elm. Each one signed, dated, and never repeated. Made in England.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/#contact" className="btn-filled-gold">
                Design Your Lazy Susan
              </Link>
              <Link to="#gallery-grid" className="btn-outline-gold">
                See Available Pieces
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-warm py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-foreground mb-6">
                Mass-Produced Centrepieces Lack Soul
              </h2>
              <p className="text-warm-foreground/60 text-lg max-w-2xl mx-auto">
                Factory-made turntables are functional but forgettable. They don't start conversations. They don't become heirlooms.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((p, i) => (
              <ScrollReveal key={p.text} delay={i * 0.1}>
                <div className="text-center" style={{ color: "hsl(var(--warm-white-foreground))" }}>
                  <p.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-warm-foreground/70">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                A Lazy Susan That Tells a Story
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every Fagan's lazy Susan comes from a single tree — sustainably sourced, hand-selected for character, and shaped without templates.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center h-full">
                  <p.icon className="w-8 h-8 text-primary mx-auto mb-5" />
                  <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="py-28 section-dark">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                Featured Lazy Susans
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {lazySusanItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <Link to={`/gallery/${item.id}`} className="group block glass-card-hover overflow-hidden">
                  <div className="overflow-hidden">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={item.images[0]}
                        alt={`${item.title} — handmade ${item.specs.timber} lazy Susan from Fagan's Woodwork UK`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-primary/70 tracking-widest uppercase mb-2">{item.specs.timber}</p>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.specs.dimensions}</p>
                    <span className="text-primary text-sm tracking-wide">View Details →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                Find Your Perfect Size
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="glass-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left p-4 text-primary tracking-widest uppercase text-xs">Diameter</th>
                    <th className="text-left p-4 text-primary tracking-widest uppercase text-xs">Seats</th>
                    <th className="text-left p-4 text-primary tracking-widest uppercase text-xs hidden sm:table-cell">Best For</th>
                    <th className="text-right p-4 text-primary tracking-widest uppercase text-xs">Price From</th>
                  </tr>
                </thead>
                <tbody>
                  {sizingData.map((row) => (
                    <tr key={row.diameter} className="border-b border-border/10 last:border-0">
                      <td className="p-4 text-foreground font-medium">{row.diameter}</td>
                      <td className="p-4 text-muted-foreground">{row.seats}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell">{row.bestFor}</td>
                      <td className="p-4 text-primary text-right font-serif text-lg">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* Testimonials */}
      <section className="py-28 section-dark">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                What Owners Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.1}>
                <div className="glass-card p-8 text-center h-full">
                  <p className="font-serif text-xl italic text-foreground leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                  <span className="text-primary text-sm tracking-widest uppercase">— {t.author}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08}>
                <div className="glass-card p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 section-forest">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                Ready to Commission Your Lazy Susan?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#contact" className="btn-filled-gold">
                  Start Your Design Consultation
                </Link>
                <Link to="/#available" className="btn-outline-gold">
                  Or browse available pieces →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default LazySusan;
