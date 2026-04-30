"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * CP1 placeholder for the R3F distorted-sphere shader hero.
 * CSS-only radial gradient blob with slow float animation.
 * CP2 will replace this with React Three Fiber + custom GLSL.
 */
export default function HeroBlob(): JSX.Element {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full h-full pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        animate={
          reduced
            ? undefined
            : {
                scale: [1, 1.08, 0.95, 1],
                rotate: [0, 15, -10, 0],
              }
        }
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(70vw,700px)] aspect-square rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,107,53,0.55) 0%, rgba(255,107,53,0.15) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(50vw,500px)] aspect-square rounded-full blur-[60px] mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 65% 70%, rgba(255,80,30,0.4) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
