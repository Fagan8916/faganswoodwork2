import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, search, key } = useLocation();
  const prevKey = useRef(key);

  useEffect(() => {
    // Always process on location change (key changes on every navigation)
    if (hash) {
      const id = hash.replace("#", "").split("?")[0];
      let attempts = 0;
      const maxAttempts = 30;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts++;
          requestAnimationFrame(tryScroll);
        }
      };

      const timeout = setTimeout(tryScroll, 100);
      return () => clearTimeout(timeout);
    } else if (prevKey.current !== key) {
      window.scrollTo(0, 0);
    }

    prevKey.current = key;
  }, [pathname, hash, search, key]);

  return null;
};

export default ScrollToTop;
