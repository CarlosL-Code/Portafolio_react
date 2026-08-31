import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    let intObserver;
    let mutObserver;
    let fallbackTimer;

    const initAnimation = () => {
      intObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              entry.target.classList.add("visible");
              intObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "50px" }
      );

      const observeExisting = () => {
        document.querySelectorAll(".anim-scroll:not(.visible)").forEach(el => {
          intObserver.observe(el);
        });
      };
      
      observeExisting();

      // Usar MutationObserver para componentes cargados perezosamente (lazy)
      mutObserver = new MutationObserver((mutations) => {
        let added = false;
        for (let m of mutations) {
          if (m.addedNodes.length > 0) {
            added = true;
            break;
          }
        }
        if (added) {
          observeExisting();
        }
      });

      mutObserver.observe(document.body, { childList: true, subtree: true });

      // Fallback por seguridad
      fallbackTimer = setTimeout(() => {
        document.querySelectorAll(".anim-scroll:not(.visible)").forEach(el => {
          el.classList.add("visible");
        });
      }, 1500);
    };

    const timeoutId = setTimeout(() => {
      initAnimation();
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      if (intObserver) intObserver.disconnect();
      if (mutObserver) mutObserver.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [location.pathname]);
};

export default useScrollAnimation;