const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-gradient mb-1">
              Fagan's Woodwork
            </h3>
            <p className="text-muted-foreground text-sm">
              Handcrafted with love & precision
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Fagan's Woodwork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
