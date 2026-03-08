import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { Heart, Home, Building2 } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Planners",
    body: "Registry pieces and gifts that become heirlooms. Custom lazy Susans and boards with monogramming. Sample pieces available for portfolio photography. Commission openings quarterly.",
  },
  {
    icon: Home,
    title: "Interior Designers",
    body: "Bespoke statement pieces sized to your spaces. Timber selection service. White-glove delivery with installation. Trade pricing on multiple pieces.",
  },
  {
    icon: Building2,
    title: "Architects & Developers",
    body: "Custom furniture for residential and hospitality projects. From single signature pieces to small batches. Sustainable sourcing documentation available.",
  },
];

const TradeSection = () => {
  return (
    <section id="trade" className="py-28 section-forest relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
              For Designers & Planners
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Bespoke Partnerships
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Collaborating with wedding planners, interior designers, and architects
              on custom commissions and registry pieces.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.12}>
              <div className="glass-card p-8 text-center h-full">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-5" />
                <h3 className="font-serif text-2xl text-foreground mb-4">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <a href="#contact" className="btn-outline-gold">
              Request Trade Portfolio
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TradeSection;
