import { useEffect } from "react";

const useScrollAnimation = () => {

  useEffect(() => {

    const elements = document.querySelectorAll(".anim-scroll");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Deja de observar para mejorar rendimiento
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

};

export default useScrollAnimation;