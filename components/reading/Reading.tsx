"use client";

import { motion } from "framer-motion";
import { readingItems } from "@/content/reading";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { easeOutExpo } from "@/lib/motion";

const categoryColors: Record<string, string> = {
  Tech: "text-cyan-400",
  AI: "text-orange-400",
  Product: "text-purple-400",
};

export default function Reading(): JSX.Element {
  return (
    <section id="reading" className="py-32 md:py-40">
      <div className="container-editorial">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)] mb-6">
          04 — Reading
        </p>
        <div className="flex items-baseline justify-between mb-16 gap-6 flex-wrap">
          <AnimatedHeading as="h2" className="text-display-lg text-[var(--fg)]">
            Essays & notes.
          </AnimatedHeading>
          <span className="font-mono text-xs text-[var(--fg-muted)]">
            Thoughts on tech, AI, and product.
          </span>
        </div>

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {readingItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 group cursor-pointer"
            >
              {/* Category + Date */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <span className={`font-mono text-[10px] uppercase tracking-[0.25em] ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-muted)]">
                  {item.date}
                </span>
              </div>

              {/* Title + Description */}
              <div className="md:col-span-8">
                <h3 className="text-display-md text-[var(--fg)] leading-tight group-hover:text-[var(--accent)] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[var(--fg-muted)] uppercase tracking-[0.15em] mb-3">
                  {item.publication}
                </p>
                <p className="text-body text-[var(--fg-muted)] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-2 flex items-start justify-end">
                <span className="text-[var(--accent)] text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
