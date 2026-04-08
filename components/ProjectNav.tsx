"use client";

import { useState, useEffect } from "react";

interface Section {
  id: string;
  label: string;
}

export default function ProjectNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop — fixed sidebar */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-center gap-3 group"
          >
            <span
              className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                active === s.id
                  ? "bg-[var(--accent)] border-[var(--accent)] scale-125"
                  : "border-[var(--muted)] group-hover:border-[var(--accent)]"
              }`}
            />
            <span
              className={`text-xs font-mono transition-all duration-300 ${
                active === s.id
                  ? "text-[var(--accent)] opacity-100"
                  : "text-[var(--muted)] opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile — horizontal pills */}
      <nav className="lg:hidden sticky top-16 z-30 bg-[var(--bg-80)] backdrop-blur border-b border-[var(--card-border)]">
        <div className="flex overflow-x-auto gap-2 px-4 py-2 no-scrollbar">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`whitespace-nowrap text-xs font-mono rounded-full px-3 py-1.5 transition-all ${
                active === s.id
                  ? "bg-[var(--accent)] text-[var(--bg)]"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
