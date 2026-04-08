"use client";
import { useEffect, useState } from "react";

export default function NoiseTexture() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setShow(false);
  }, []);
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        mixBlendMode: "overlay",
        opacity: 0.04,
      }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
  );
}
