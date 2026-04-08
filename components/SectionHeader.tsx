import React from "react";

interface SectionHeaderProps {
  number: string;
  label: string;
  subtitle?: string;
}

export default function SectionHeader({ number, label, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-16">
      {/* Ghost number behind content */}
      <span
        className="absolute -top-8 left-0 font-[family-name:var(--font-display)] text-[9rem] leading-none text-[var(--fg)] select-none pointer-events-none"
        style={{ opacity: 0.035 }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Numbered label row */}
      <div className="flex items-center gap-4 relative z-10">
        <span
          className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase"
        >
          {number}
        </span>
        <div
          className="flex-1 h-px bg-[var(--accent)]"
          style={{ animation: "lineReveal 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        />
      </div>

      {/* Main label */}
      <h2
        className="display-heading text-4xl md:text-5xl text-[var(--fg)] mt-3 relative z-10"
      >
        {label}
      </h2>

      {subtitle && (
        <p className="text-[var(--fg-muted)] mt-3 text-sm tracking-wide relative z-10">
          {subtitle}
        </p>
      )}
    </div>
  );
}
