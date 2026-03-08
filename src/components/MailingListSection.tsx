import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MailingListSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will connect to backend
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    toast({ title: "You're on the list", description: "We'll be in touch when something special drops." });
    setTimeout(() => { setEmail(""); setSubmitted(false); }, 4000);
  };

  return (
    <section className="py-24 section-dark relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
              Stay Close
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Be First to Know
            </h2>
            <p className="text-muted-foreground mb-10">
              New pieces drop irregularly and sell quickly. Join the list for early
              access to available work before they're gone.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm tracking-wide">You're on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary flex-1"
                />
                <Button type="submit" className="px-8 tracking-widest uppercase text-xs">
                  Notify Me
                </Button>
              </form>
            )}

            <p className="text-muted-foreground/40 text-xs mt-6 italic">
              No spam. Unsubscribe anytime. We only write when there's something worth showing.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MailingListSection;
