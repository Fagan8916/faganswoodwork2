import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "One Tree, One Piece",
    body: "Each item is crafted from a single, hand-selected slab. We source fallen and sustainably harvested timber, honouring the natural character of every grain.",
  },
  {
    title: "No Replicas",
    body: "Every creation is one-of-a-kind - signed and dated on completion. Limited commissions accepted per quarter to ensure each piece receives our full devotion.",
  },
  {
    title: "Lifetime Craft",
    body: "Hand-planed, not machine-sanded. Built to last generations. If it ever needs care, we'll restore it - because heirlooms deserve that promise.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-warm py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-foreground">
              The Fagan Standard
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="text-center md:text-left">
                <div className="w-12 h-px bg-primary mb-6 mx-auto md:mx-0" />
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-warm-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-warm-foreground/70 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-warm-foreground/50 italic font-serif text-lg mt-16 max-w-xl mx-auto">
            "Not furniture. Heirlooms in training."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhilosophySection;
