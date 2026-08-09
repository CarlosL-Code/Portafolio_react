import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait a brief moment for the DOM to update after route change
    const initAnimation = () => {
      const elementos = document.querySelectorAll(".anim-scroll");

      // Fallback de seguridad
      const fallbackTimer = setTimeout(() => {
        elementos.forEach((el) => {
          if (!el.classList.contains("visible")) {
            el.classList.add("visible");
          }
        });
      }, 800); // Reducido a 800ms para que sea más responsivo si falla el observer

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "50px",
        }
      );

      elementos.forEach((el) => observer.observe(el));

      return { observer, fallbackTimer };
    };

    // Small delay to ensure new elements from route change are in the DOM
    const timeoutId = setTimeout(() => {
      const { observer, fallbackTimer } = initAnimation();
      
      // Cleanup on unmount or next route change
      return () => {
        clearTimeout(fallbackTimer);
        if (observer) observer.disconnect();
      };
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]); // Dependencia clave: vuelve a ejecutarse al cambiar de ruta
};

export default useScrollAnimation;