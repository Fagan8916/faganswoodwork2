const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-foreground tracking-wide mb-1">
              Fagan's Woodwork
            </h3>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              Bespoke Woodcraft · No Two Pieces Alike
            </p>
          </div>

          <nav className="flex items-center gap-8">
            {["Commissions", "The Craft", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "The Craft" ? "process" : item === "Commissions" ? "commissions" : item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-muted-foreground/50 text-xs">
            © {currentYear} Fagan's Woodwork
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground/30 text-xs italic font-serif">
            "Signed and dated on completion. Limited commissions accepted per quarter."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
