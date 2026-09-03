import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    let intObserver;
    let mutObserver;
    let fallbackTimer;
    let debounceTimer;

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
        { threshold: 0, rootMargin: "100px" }
      );

      const observeExisting = () => {
        document.querySelectorAll(".anim-scroll:not(.visible)").forEach(el => {
          intObserver.observe(el);
        });
      };
      
      observeExisting();

      mutObserver = new MutationObserver((mutations) => {
        let added = false;
        for (let m of mutations) {
          if (m.addedNodes.length > 0) {
            added = true;
            break;
          }
        }
        if (added) {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
             observeExisting();
          }, 300);
        }
      });

      mutObserver.observe(document.body, { childList: true, subtree: true });

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
      clearTimeout(debounceTimer);
      if (intObserver) intObserver.disconnect();
      if (mutObserver) mutObserver.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [location.pathname]);
};

export default useScrollAnimation;