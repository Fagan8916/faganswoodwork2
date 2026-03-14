import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/gallery/IMG_9897-2.JPG";
import { galleryItems } from "@/lib/gallery";
import {
  XCircle,
  Layers,
  Stamp,
  RefreshCw,
  TreePine,
  PenTool,
  Ruler,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const boardItems = galleryItems.filter(
  (i) => i.specs.pieceType === "Chopping Board"
).slice(0, 6);

const painPoints = [
  { icon: XCircle, text: "Dulls your knives after weeks" },
  { icon: XCircle, text: "Shows ugly knife marks permanently" },
  { icon: XCircle, text: "Won't last more than a few years" },
];

const pillars = [
  {
    icon: Layers,
    title: "End-Grain Construction",
    body: "Fibres stand upright so your blade slides between them — self-healing with every cut.",
  },
  {
    icon: Stamp,
    title: "Signed & Dated",
    body: "Every board is signed on the underside with the timber species, date, and maker's mark.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Restoration",
    body: "If it ever needs care, send it back. I'll re-sand, re-oil, and return it — free, forever.",
  },
];

const sizingData = [
  {
    size: "Small (30×20cm)",
    bestFor: "Prep work, cheese boards",
    price: "£100",
  },
  {
    size: "Medium (40×30cm)",
    bestFor: "Everyday cooking",
    price: "£160",
  },
  {
    size: "Large (50×35cm)",
    bestFor: "Carving, entertaining",
    price: "£240",
  },
  {
    size: "Custom",
    bestFor: "Your exact specification",
    price: "Quote",
  },
];

const testimonials = [
  {
    quote: "The only board I use. Everything else collects dust in the drawer.",
    author: "Michael, Bristol",
  },
  {
    quote: "I bought one for myself, then three more as gifts. Everyone asks where I got it.",
    author: "Laura, Edinburgh",
  },
  {
    quote: "Five years of daily use and it still looks brand new.",
    author: "Tom, Oxford",
  },
];

const faqs = [
  {
    q: "End-grain vs face-grain — what's the difference?",
    a: "End-grain boards are made with the wood fibres standing upright. Your knife slides between the fibres rather than cutting across them, making the surface self-healing and much kinder to your blades. Face-grain boards are beautiful but will show knife marks over time.",
  },
  {
    q: "How do I care for my board?",
    a: "Simply wash with warm soapy water and dry immediately. Re-oil with food-safe mineral oil every few weeks — I include a bottle with every board. Never submerge in water or put in the dishwasher.",
  },
  {
    q: "Can I add juice grooves?",
    a: "Absolutely. Juice grooves are hand-routed in a single pass — no joints, no weak points. They're deep enough to catch juices from a full Sunday roast. Just mention it when you commission your board.",
  },
  {
    q: "What personalisation options are available?",
    a: "I offer hand-engraved names, dates, messages, or monograms. Popular for wedding gifts, housewarmings, and anniversaries. We'll discuss placement and font during the design consultation.",
  },
];

const ChoppingBoard = () => {
  return (
    <>
      <Helmet>
        <title>Handmade Chopping Boards UK | Bespoke End-Grain | Fagan's Woodwork</title>
        <meta
          name="description"
          content="Bespoke end-grain chopping boards handmade from single slabs of English timber. Self-healing surface, personalised engraving, lifetime restoration. Made in England."
        />
        <link rel="canonical" href="https://faganswoodwork.com/chopping-board" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.img
              src={heroImage}
              alt="Handmade end-grain chopping boards — bespoke woodcraft UK"
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
                transition={{ delay: 0.3 }}
              >
                Bespoke Chopping Boards · Handmade in England
              </motion.p>
              <motion.h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Handmade Chopping Boards{" "}
                <span className="italic text-gradient">Built for Life</span>
              </motion.h1>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                End-grain construction. Self-healing surface. Sized to your kitchen.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link to="/#contact" className="btn-filled-gold">
                  Design Your Board
                </Link>
                <Link to="/#available" className="btn-outline-gold">
                  See Available Boards
                </Link>
              </motion.div>
            </div>
          </div>
          <Link
            to="#problem"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Link>
        </section>

        {/* Problem */}
        <section id="problem" className="py-28 section-warm">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                  The Problem
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-foreground mb-6">
                  Mass-Produced Boards Dull Knives and Show Wear
                </h2>
                <p className="text-warm-foreground/70 text-lg leading-relaxed">
                  Factory-made chopping boards are functional but forgettable. They scar
                  permanently, warp over time, and end up in landfill.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {painPoints.map((p, i) => (
                <ScrollReveal key={p.text} delay={i * 0.1}>
                  <div className="text-center">
                    <p.icon className="w-8 h-8 text-destructive/60 mx-auto mb-4" />
                    <p className="text-warm-foreground/80 text-sm">{p.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-28">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                  The Solution
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                  A Chopping Board That Gets Better With Age
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every board is made from sustainably sourced English timber — walnut, oak,
                  ash, or elm — and shaped without templates.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.12}>
                  <div className="glass-card p-8 text-center h-full">
                    <p.icon className="w-8 h-8 text-primary mx-auto mb-5" />
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        {boardItems.length > 0 && (
          <section className="py-28 section-forest">
            <div className="container mx-auto px-6">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                    Gallery
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                    Recent Commissions
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {boardItems.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.1}>
                    <Link
                      to={`/gallery/${item.id}`}
                      className="group block glass-card-hover overflow-hidden"
                    >
                      <div className="overflow-hidden">
                        <motion.img
                          src={item.images[0]}
                          alt={`${item.title} — handmade ${item.specs.timber} chopping board UK`}
                          className="w-full aspect-[4/3] object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {item.specs.timber} · {item.specs.dimensions}
                        </p>
                        <span className="text-primary text-sm tracking-widest uppercase">
                          View Details →
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sizing Guide */}
        <section className="py-28">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                  Sizing
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                  Find Your Perfect Size
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 pr-6 text-sm font-medium text-foreground/80 tracking-wide">
                        Size
                      </th>
                      <th className="py-4 pr-6 text-sm font-medium text-foreground/80 tracking-wide">
                        Best For
                      </th>
                      <th className="py-4 text-sm font-medium text-foreground/80 tracking-wide">
                        Price From
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizingData.map((row) => (
                      <tr key={row.size} className="border-b border-border/50">
                        <td className="py-4 pr-6 text-foreground">{row.size}</td>
                        <td className="py-4 pr-6 text-muted-foreground">
                          {row.bestFor}
                        </td>
                        <td className="py-4 text-primary font-serif text-lg">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-28 section-warm">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                  What Owners Say
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.author} delay={i * 0.12}>
                  <div
                    className="glass-card p-8 text-center h-full"
                    style={{
                      background: "hsl(0 0% 0% / 0.03)",
                      borderColor: "hsl(0 0% 0% / 0.08)",
                    }}
                  >
                    <p className="font-serif text-lg italic text-warm-foreground leading-relaxed mb-4">
                      "{t.quote}"
                    </p>
                    <span className="text-primary text-sm tracking-widest uppercase">
                      — {t.author}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                  FAQ
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
                  Common Questions
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="font-serif text-lg text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-28 section-dark">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                  Ready to Commission Your Chopping Board?
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Tell me about your kitchen, your cooking style, and how you
                  use your board. I'll help you choose the perfect timber, size,
                  and finish.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/#contact" className="btn-filled-gold">
                    Start Your Board Design
                  </Link>
                  <Link to="/#available" className="btn-outline-gold">
                    Or browse available boards →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
};

export default ChoppingBoard;
