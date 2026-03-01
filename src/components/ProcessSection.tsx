import ScrollReveal from "./ScrollReveal";
import { TreePine, PenTool, Hammer, Truck } from "lucide-react";

const steps = [
  {
    icon: TreePine,
    title: "Selection",
    description: "Sourcing timber from fallen or sustainably harvested trees. Each slab is hand-picked for character.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "You and Fagan discuss dimensions, features, and finishes. Your vision guides every decision.",
  },
  {
    icon: Hammer,
    title: "Craft",
    description: "2–6 weeks of hand shaping, sanding, and finishing. No shortcuts. No machines where hands will do.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Personally delivered or white-glove shipped with care instructions and a signed certificate.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-warm py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
              The Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-foreground">
              From Tree to Table
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal scrollable on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 max-w-5xl md:mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12}>
              <div className="min-w-[260px] md:min-w-0 snap-center relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-primary/20" />
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6 bg-warm/50">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-primary/50 text-xs tracking-widest uppercase mb-2 block">
                    Step {i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-warm-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-warm-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
