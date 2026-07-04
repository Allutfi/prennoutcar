"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, hasEntered].
 * `hasEntered` flips to true once the element scrolls into the viewport
 * and stays true — suitable for one-shot entrance animations.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, hasEntered] as const;
}
