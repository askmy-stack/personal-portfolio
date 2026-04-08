"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || coarsePointer) return;

    setVisible(true);
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, [role='button'], [tabindex]")) {
        hoveringRef.current = true;
        setHovering(true);
      }
    };
    const onLeave = () => {
      hoveringRef.current = false;
      setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 2}px, ${pos.current.y - 2}px)`;
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        const size = hoveringRef.current ? 40 : 28;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          background: hovering ? "rgba(200, 241, 53, 0.12)" : "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease",
        }}
      />
    </>
  );
}
