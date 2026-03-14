import ScrollReveal from "./ScrollReveal";

const mainQuote = {
  quote: "Not furniture. Heirlooms in training.",
  author: "Actual customer (every piece comes with a story)",
};

const gridTestimonials = [
  {
    quote: "The grain is incredible — photos don't do it justice",
    author: "James, Manchester",
    product: "Lazy Susan",
  },
  {
    quote: "The centrepiece of every dinner party",
    author: "Sarah, London",
    product: "Lazy Susan",
  },
  {
    quote: "The only board I use. Everything else stays in the drawer.",
    author: "Michael, Bristol",
    product: "Chopping Board",
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
              "{mainQuote.quote.split(". ")[0]}.{" "}
              <span className="italic">{mainQuote.quote.split(". ")[1]}</span>"
            </h2>
            <p className="text-warm-foreground/60 text-sm">
              — {mainQuote.author}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gridTestimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.15}>
              <div
                className="glass-card p-8 text-center h-full"
                style={{
                  background: "hsl(0 0% 0% / 0.03)",
                  borderColor: "hsl(0 0% 0% / 0.08)",
                }}
              >
                <p className="font-serif text-xl italic text-warm-foreground leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <span className="text-primary text-sm tracking-widest uppercase block mb-3">
                  — {t.author}
                </span>
                <span className="inline-block text-xs tracking-widest uppercase text-primary/60 border border-primary/20 px-3 py-1 rounded-full">
                  {t.product}
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
