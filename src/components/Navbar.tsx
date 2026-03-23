import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Philosophy", href: "/#philosophy" },
  {
    label: "Collection",
    href: "/#commissions",
    children: [
      { label: "Lazy Susans", href: "/#commissions" },
      { label: "Chopping Boards", href: "/#boards" },
    ],
  },
  { label: "Available Now", href: "/#available" },
  { label: "Process", href: "/#process" },
  { label: "Trade", href: "/#trade" },
  { label: "Portfolio", href: "/#gallery" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-wide">
          Fagan's Woodwork
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase"
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {dropdownOpen === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-sm min-w-[180px] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setDropdownOpen(null)}
                        className="block px-5 py-2 text-muted-foreground hover:text-primary hover:bg-muted/30 transition-colors text-sm tracking-wider"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 pb-6">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-muted-foreground/70 hover:text-primary transition-colors text-xs tracking-widest uppercase"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
