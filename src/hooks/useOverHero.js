import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Detecta si el header sigue superpuesto sobre la sección Hero (foto oscura
// fija, independiente del tema claro/oscuro) para forzar un estilo oscuro
// que no choque visualmente con ella.
const useOverHero = () => {
  const [overHero, setOverHero] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let intObserver;
    let mutObserver;

    const observeHero = () => {
      const hero = document.querySelector(".hero");
      if (!hero) return false;

      intObserver = new IntersectionObserver(
        ([entry]) => setOverHero(entry.isIntersecting),
        { threshold: 0, rootMargin: "0px 0px -85% 0px" }
      );
      intObserver.observe(hero);
      return true;
    };

    if (!observeHero()) {
      // La ruta puede estar cargando el Hero de forma perezosa (Suspense).
      mutObserver = new MutationObserver(() => {
        if (observeHero()) {
          mutObserver.disconnect();
        }
      });
      mutObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      intObserver?.disconnect();
      mutObserver?.disconnect();
      setOverHero(false);
    };
  }, [location.pathname]);

  return overHero;
};

export default useOverHero;
