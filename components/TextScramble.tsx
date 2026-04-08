"use client";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number; // ms before starting
}

export default function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  // Initialize with real text — random scramble only runs client-side in useEffect
  // This prevents React hydration mismatch (server and client must match on first render)
  const [display, setDisplay] = useState(text);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setDisplay(text);
      return;
    }

    let resolved = 0;
    let resolveInterval: ReturnType<typeof setInterval>;

    const start = () => {
      resolveInterval = setInterval(() => {
        resolved++;
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (i < resolved) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (resolved >= text.length) {
          clearInterval(resolveInterval);
          setDisplay(text);
        }
      }, 60);
    };

    const delayTimer = setTimeout(start, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(resolveInterval);
    };
  }, [text, delay]);

  return (
    <span
      className={className}
      aria-label={text}
      aria-live="off"
    >
      {reducedMotion ? text : display}
    </span>
  );
}
