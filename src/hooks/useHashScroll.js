import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return undefined;

    const id = hash.slice(1);
    let mutObserver;
    let fallbackTimer;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (tryScroll()) return undefined;

    // El destino puede venir de una sección cargada perezosamente (lazy),
    // así que esperamos a que aparezca en el DOM.
    mutObserver = new MutationObserver(() => {
      if (tryScroll()) {
        mutObserver.disconnect();
        clearTimeout(fallbackTimer);
      }
    });
    mutObserver.observe(document.body, { childList: true, subtree: true });

    fallbackTimer = setTimeout(() => {
      mutObserver.disconnect();
    }, 3000);

    return () => {
      mutObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [location.pathname, location.hash]);
};

export default useHashScroll;
