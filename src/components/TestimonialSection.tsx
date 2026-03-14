import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "The grain is incredible — photos don't do it justice",
    author: "James, Manchester",
  },
  {
    quote: "Not furniture. Heirlooms in training.",
    author: "Actual customer (every piece comes with a story)",
  },
  {
    quote: "My clients always ask where I found it",
    author: "Interior Designer, London",
  },
];

const TestimonialSection = () => {
  return (
    <section className="section-warm py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
              What Owners Say
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-foreground mb-4">
              "Not furniture.{" "}
              <span className="italic">Heirlooms in training.</span>"
            </h2>
            <p className="text-warm-foreground/60 text-sm">
              — Actual customer (every piece comes with a story)
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials
            .filter((_, i) => i !== 1)
            .map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.15}>
                <div className="glass-card p-8 text-center h-full" style={{ background: "hsl(0 0% 0% / 0.03)", borderColor: "hsl(0 0% 0% / 0.08)" }}>
                  <p className="font-serif text-xl italic text-warm-foreground leading-relaxed mb-4">
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
  );
};

export default TestimonialSection;
