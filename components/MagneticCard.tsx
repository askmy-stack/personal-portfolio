"use client";
import { useRef, useState, useCallback, useEffect, ReactNode } from "react";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticCard({ children, className = "" }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(!reducedMotion && finePointer);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);
      const rotateY = offsetX * 5;   // max ±5deg
      const rotateX = -offsetY * 5;
      const translateX = offsetX * 6;
      const translateY = offsetY * 6;
      ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px)`;
    });
  }, [enabled]);

  const onMouseEnter = useCallback(() => {
    if (!enabled || !ref.current) return;
    ref.current.style.willChange = "transform";
    ref.current.style.transition = "none";
  }, [enabled]);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    cancelAnimationFrame(rafRef.current);
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translate(0, 0)";
    setTimeout(() => {
      if (ref.current) ref.current.style.willChange = "auto";
    }, 500);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
