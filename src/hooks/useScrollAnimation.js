import { useEffect } from "react";

const useScrollAnimation = () => {

  useEffect(() => {

    const elementos = document.querySelectorAll(".anim-scroll");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.01,
        rootMargin: "100px 0px",
      }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

};

export default useScrollAnimation;