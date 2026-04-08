"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "clip" | "rise";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const variantClass =
    variant === "clip" ? "reveal-clip" : variant === "rise" ? "reveal-rise" : "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
