"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroBlob from "./HeroBlob";
import { heroStats, heroSubtitles } from "@/content/about";
import { siteConfig } from "@/content/site";
import { easeOutExpo } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero(): JSX.Element {
  const [subIndex, setSubIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setSubIndex((i) => (i + 1) % heroSubtitles.length);
    }, 3000);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* 3D placeholder blob (CP2: swap for R3F HeroSphere) */}
      <div className="absolute inset-0 z-0">
        <HeroBlob />
      </div>

      <div className="container-editorial relative z-10">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)]">
            {siteConfig.location}
          </span>
        </motion.div>

        {/* Name — display xl */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.3 }}
          className="text-display-xl text-[var(--fg)] leading-[0.9]"
        >
          {siteConfig.alias}
        </motion.h1>

        {/* Rotating subtitle */}
        <div className="mt-8 h-10 md:h-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={subIndex}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="absolute inset-0 font-mono text-base md:text-lg text-[var(--fg-muted)] tracking-wide"
            >
              {heroSubtitles[subIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-[var(--border)] max-w-3xl"
        >
          {heroStats.map((stat, i) => (
            <span
              key={stat}
              className="font-mono text-xs md:text-sm text-[var(--fg)] tracking-wide"
            >
              {stat}
              {i < heroStats.length - 1 && (
                <span className="ml-6 text-[var(--fg-muted)]">·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)] rotate-90 origin-center translate-y-6">
            scroll
          </span>
          <span className="w-px h-12 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
