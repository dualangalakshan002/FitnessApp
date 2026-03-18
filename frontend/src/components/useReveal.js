import { useEffect, useRef } from "react";

/**
 * Attach to a container element. All children with class
 * "reveal", "reveal-l", or "reveal-r" inside it will be
 * observed and toggled to "visible" when they enter the viewport.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".reveal, .reveal-l, .reveal-r");
    targets.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return ref;
}
