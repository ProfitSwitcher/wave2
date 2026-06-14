import { useEffect, useRef } from "react";

/**
 * Observes elements and adds a "reveal" class when they enter the viewport.
 * Uses IntersectionObserver with a 10% threshold. Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
}
