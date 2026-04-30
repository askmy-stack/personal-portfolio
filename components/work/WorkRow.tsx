"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { easeOutExpo } from "@/lib/motion";

interface Props {
  project: Project;
  index: number;
}

export default function WorkRow({ project, index }: Props): JSX.Element {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="group relative"
    >
      <Link
        href={`/work/${project.slug}`}
        className="block py-10 md:py-14 border-t border-[var(--border)] group-hover:border-[var(--accent)] transition-colors"
      >
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline">
          {/* Number */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-mono text-xs text-[var(--fg-muted)]">{num}</span>
          </div>

          {/* Title + subtitle */}
          <div className="col-span-10 md:col-span-6">
            <h3 className="text-display-md text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-[var(--fg-muted)] mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Meta */}
          <div className="col-span-7 md:col-span-3 mt-2 md:mt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
              {project.category}
            </p>
            <p className="font-mono text-xs text-[var(--fg-muted)] mt-1">
              {project.heroMetric}
            </p>
          </div>

          {/* Year + arrow */}
          <div className="col-span-5 md:col-span-2 flex items-center justify-end gap-4 mt-2 md:mt-0">
            <span className="font-mono text-xs text-[var(--fg-muted)]">
              {project.year}
            </span>
            <span className="text-[var(--accent)] text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
