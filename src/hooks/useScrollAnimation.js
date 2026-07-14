import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll(".anim-scroll");

    // Fallback de seguridad: si por alguna razón el observer no dispara, 
    // forzamos la visibilidad después de 1 segundo para evitar que la página quede en blanco.
    const fallbackTimer = setTimeout(() => {
      elementos.forEach((el) => {
        if (!el.classList.contains("visible")) {
          el.classList.add("visible");
        }
      });
    }, 1500);

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

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;