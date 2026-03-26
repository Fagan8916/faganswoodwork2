import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, search, key } = useLocation();
  const prevKey = useRef(key);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "").split("?")[0];
      let attempts = 0;
      const maxAttempts = 30;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "instant" });
        } else if (attempts < maxAttempts) {
          attempts++;
          requestAnimationFrame(tryScroll);
        }
      };

      tryScroll();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    prevKey.current = key;
  }, [pathname, hash, search, key]);

  return null;
};

export default ScrollToTop;
