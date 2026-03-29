import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Phone, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry_type: "commission",
    looking_for: "Lazy Susan",
    size: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Pre-fill from URL query params (e.g. /?type=purchase&piece=Name#contact)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const piece = params.get("piece");
    const type = params.get("type");
    if (piece || type) {
      setFormData((prev) => ({
        ...prev,
        enquiry_type: type === "purchase" ? "purchase" : "commission",
        message: piece
          ? type === "purchase"
            ? `I'd like to purchase the ${piece}.`
            : `I'd like to commission something similar to the ${piece}.`
          : prev.message,
      }));
    }
  }, [location.search]);

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
    try {
      const { error } = await supabase
        .from("contact_enquiries" as any)
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          enquiry_type: formData.enquiry_type,
          looking_for: formData.looking_for || null,
          size: formData.size || null,
          message: formData.message.trim(),
        } as any);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: isPurchase ? "Purchase Request Sent" : "Commission Request Sent",
        description: "Thank you. I'll respond within 48 hours.",
      });
      // Fire-and-forget Slack notification
      supabase.functions.invoke('notify-slack', {
        body: {
          type: 'contact_enquiry',
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          enquiry_type: formData.enquiry_type,
          looking_for: formData.looking_for || null,
          size: formData.size || null,
          message: formData.message.trim(),
        },
      }).catch(console.error);
      setTimeout(() => {
        setFormData({ name: "", email: "", enquiry_type: "commission", looking_for: "Lazy Susan", size: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Contact form error:", err);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPurchase = formData.enquiry_type === "purchase";

  return (
    <section id="contact" className="py-28 section-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-sans tracking-[0.4em] uppercase text-xs mb-4">
                Get in Touch
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
                Let's Talk
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Whether you'd like to purchase an available piece or commission
                something entirely new - I'd love to hear from you.
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
                  Your {isPurchase ? "purchase" : "commission"} request has been received. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Enquiry type toggle */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 tracking-wide">
                    I'd like to…
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, enquiry_type: "purchase" }))}
                      className={`py-3 px-4 rounded-sm border text-sm tracking-wide transition-all ${
                        isPurchase
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/50 text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      Buy an Available Piece
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, enquiry_type: "commission" }))}
                      className={`py-3 px-4 rounded-sm border text-sm tracking-wide transition-all ${
                        !isPurchase
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/50 text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      Commission Something New
                    </button>
                  </div>
                </div>

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

                {!isPurchase && (
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
                )}

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80 tracking-wide">
                    {isPurchase ? "Your message" : "Tell me about your vision"}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      isPurchase
                        ? "Which piece are you interested in? Any questions about the piece?"
                        : "Wood type, style, special requirements, occasion..."
                    }
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
                    {isSubmitting
                      ? "Sending..."
                      : isPurchase
                      ? "Buy This Piece"
                      : "Start My Commission"}
                  </Button>

                  <span className="text-muted-foreground text-sm">or</span>

                  <a
                    href="tel:+353000000000"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary transition-colors text-sm tracking-wide"
                  >
                    <Phone className="w-4 h-4" />
                    Prefer to talk? Call me
                  </a>
                </div>

                {/* Etsy shop link */}
                <div className="mt-8 pt-6 border-t border-border/30 text-center">
                  <p className="text-muted-foreground text-sm mb-3">
                    You can also purchase directly from my Etsy shop
                  </p>
                  <a
                    href="https://faganswoodwork.etsy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#F1641E] hover:bg-[#D35400] text-white rounded-sm text-sm tracking-widest uppercase transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit My Etsy Shop
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
