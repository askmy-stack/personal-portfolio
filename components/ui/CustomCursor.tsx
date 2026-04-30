"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor(): JSX.Element | null {
  const reduced = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pointerFine, setPointerFine] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 350, mass: 0.3 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setPointerFine(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setPointerFine(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!pointerFine || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]';
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.(interactiveSelector)) setHovering(true);
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.(interactiveSelector)) setHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [pointerFine, reduced, visible, x, y]);

  if (!pointerFine || reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "var(--accent)",
        mixBlendMode: "difference",
        width: hovering ? 32 : 8,
        height: hovering ? 32 : 8,
        opacity: visible ? 1 : 0,
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
      }}
    />
  );
}
