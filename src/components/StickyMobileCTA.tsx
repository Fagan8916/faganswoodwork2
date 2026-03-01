import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-background/90 backdrop-blur-xl border-t border-border/30">
      <a
        href="#contact"
        className="btn-filled-gold w-full text-center block"
      >
        Commission Your Piece
      </a>
    </div>
  );
};

export default StickyMobileCTA;
