import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll(".anim-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
