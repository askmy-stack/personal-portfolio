"use client";

import { techStack } from "@/content/about";

/**
 * CP1: CSS-only infinite marquee.
 * CP2: GSAP-driven with hover slowdown + per-item click filtering.
 */
export default function TechMarquee(): JSX.Element {
  const loop = [...techStack, ...techStack];

  return (
    <section
      aria-label="Technology stack"
      className="relative py-14 border-y border-[var(--border)] overflow-hidden"
    >
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-mono text-xl md:text-2xl text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
          >
            {tech}
            <span className="ml-12 text-[var(--accent)]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
