const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Crafted with <span className="text-gradient">Passion</span>
            </h2>
          </div>
          
          {/* Glass card content */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Every Piece Tells a Story
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Fagan's Woodwork, we believe that true craftsmanship is born from passion, 
                  patience, and an unwavering commitment to excellence. Each creation begins 
                  with carefully selected timber and transforms through hours of dedicated handwork.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From the initial design sketch to the final polish, every step is performed 
                  by hand, ensuring that no two pieces are ever identical. This is not mass 
                  production—this is art you can use, beauty you can touch, and heritage 
                  you can pass down.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Feature highlights */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">✦</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Hand-Designed</h4>
                    <p className="text-muted-foreground text-sm">Every piece uniquely sketched and planned</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">♡</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Made with Love</h4>
                    <p className="text-muted-foreground text-sm">Care and attention in every detail</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">◈</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">One of a Kind</h4>
                    <p className="text-muted-foreground text-sm">No two pieces are ever the same</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
