import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    looking_for: "Lazy Susan",
    size: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Commission Request Sent",
      description: "Thank you. I'll respond within 48 hours with timber options and a timeline.",
    });
    setTimeout(() => {
      setFormData({ name: "", email: "", looking_for: "Lazy Susan", size: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 section-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                Get Started
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
                Begin Your Commission
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Tell me what you're envisioning. I'll respond within 48 hours 
                with timber options and a timeline.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Thank You
                </h3>
                <p className="text-muted-foreground">
                  Your commission request has been received. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80 tracking-wide">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80 tracking-wide">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="looking_for" className="text-sm font-medium text-foreground/80 tracking-wide">
                      What are you looking for?
                    </label>
                    <select
                      id="looking_for"
                      name="looking_for"
                      value={formData.looking_for}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border/50 bg-muted/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <option value="Lazy Susan">Lazy Susan</option>
                      <option value="Chopping Board">Chopping Board</option>
                      <option value="Something Else">Something Else</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="size" className="text-sm font-medium text-foreground/80 tracking-wide">
                      Size Requirements
                    </label>
                    <Input
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      placeholder="e.g. 40cm diameter"
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80 tracking-wide">
                    Tell me about your vision
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Wood type, style, special requirements, occasion..."
                    required
                    rows={5}
                    className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-6 text-sm tracking-widest uppercase"
                  >
                    {isSubmitting ? "Sending..." : "Send Commission Request"}
                  </Button>

                  <span className="text-muted-foreground text-sm">or</span>

                  <a
                    href="tel:+353000000000"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm tracking-wide"
                  >
                    <Phone className="w-4 h-4" />
                    Prefer to talk? Call me
                  </a>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
