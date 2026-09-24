"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.06 },
    );
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight) {
        node.classList.add("reveal-ready");
        observer.observe(node);
      }
    });
    return () => {
      observer.disconnect();
      nodes.forEach((node) =>
        node.classList.remove("reveal-ready", "revealed"),
      );
    };
  }, [pathname]);
  return null;
}
