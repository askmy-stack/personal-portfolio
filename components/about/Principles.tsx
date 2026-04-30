"use client";

import { motion } from "framer-motion";
import { principles } from "@/content/about";
import { easeOutExpo } from "@/lib/motion";

export default function Principles(): JSX.Element {
  return (
    <div className="mt-24 md:mt-32 grid grid-cols-1 gap-10 md:gap-14">
      {principles.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: i * 0.1 }}
          className="flex items-start gap-6 md:gap-10"
        >
          <span className="mt-3 md:mt-5 shrink-0 hairline-accent" aria-hidden="true" />
          <p className="text-display-md text-[var(--fg)] leading-[1.15] max-w-[22ch]">
            {p.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
