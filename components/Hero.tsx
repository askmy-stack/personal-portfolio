"use client";

import { useState, useEffect, useCallback } from "react";
import TextScramble from "@/components/TextScramble";
import { useCountUp } from "@/hooks/useCountUp";

const terminalLines = [
  { prompt: "~/AK $ ", text: "whoami", delay: 800 },
  { prompt: "> ", text: "Abhinaysai Kamineni", delay: 2000 },
  { prompt: "> ", text: "Data Engineer & MLOps Specialist", delay: 2900 },
];

function StatCounter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const count = useCountUp(value, 1400, delay);
  return (
    <div className="flex flex-col gap-1">
      <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--accent)] leading-none">
        {count}
        {suffix}
      </span>
      <span className="font-mono text-[10px] text-[var(--fg-muted)] uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [lines, setLines] = useState<
    { prompt: string; text: string; typed: string; done: boolean }[]
  >([]);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const typeLines = useCallback(
    (cleanup: {
      timers: ReturnType<typeof setTimeout>[];
      intervals: ReturnType<typeof setInterval>[];
    }) => {
      terminalLines.forEach((line, lineIdx) => {
        const timer = setTimeout(() => {
          setLines((prev) => [
            ...prev,
            { prompt: line.prompt, text: line.text, typed: "", done: false },
          ]);
          let charIdx = 0;
          const interval = setInterval(() => {
            charIdx++;
            setLines((prev) =>
              prev.map((l, i) =>
                i === lineIdx ? { ...l, typed: line.text.slice(0, charIdx) } : l
              )
            );
            if (charIdx >= line.text.length) {
              clearInterval(interval);
              setLines((prev) =>
                prev.map((l, i) => (i === lineIdx ? { ...l, done: true } : l))
              );
            }
          }, 35);
          cleanup.intervals.push(interval);
        }, line.delay);
        cleanup.timers.push(timer);
      });
    },
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = {
      timers: [] as ReturnType<typeof setTimeout>[],
      intervals: [] as ReturnType<typeof setInterval>[],
    };
    typeLines(cleanup);
    return () => {
      cleanup.timers.forEach(clearTimeout);
      cleanup.intervals.forEach(clearInterval);
    };
  }, [typeLines]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle faint grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,241,53,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,241,53,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ghost section number */}
      <span
        className="absolute top-1/2 right-0 -translate-y-1/2 font-[family-name:var(--font-display)] leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(12rem, 22vw, 22rem)", opacity: 0.018, color: "var(--fg)" }}
        aria-hidden="true"
      >
        01
      </span>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-2.5 mb-8"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                style={{ animation: "pulse 2s ease-in-out infinite" }}
              />
              <span className="font-mono text-xs text-[var(--fg-muted)] tracking-widest uppercase">
                Available — May 2026
              </span>
            </div>

            {/* Hero name */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                clipPath: loaded ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s, clip-path 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              <h1
                className="display-heading text-[clamp(3.5rem,9vw,7.5rem)] text-[var(--fg)] leading-[0.95] tracking-[-0.03em]"
              >
                <TextScramble text="ABHINAYSAI" delay={500} />
              </h1>
            </div>

            {/* Subtitle rule */}
            <div
              className="mt-4 mb-6"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 0.55s, transform 0.4s ease 0.55s",
              }}
            >
              <span className="font-mono text-xs tracking-[0.25em] text-[var(--fg-secondary)] uppercase">
                Data Science &amp; MLOps Engineer
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-lg text-[var(--fg-secondary)] max-w-lg leading-relaxed"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 0.65s, transform 0.4s ease 0.65s",
              }}
            >
              I build{" "}
              <span className="text-[var(--fg)] font-medium">production-grade ML systems</span>{" "}
              and{" "}
              <span className="text-[var(--fg)] font-medium">cloud infrastructure</span>{" "}
              that turn raw data into real-world impact.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mt-8"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 0.85s, transform 0.4s ease 0.85s",
              }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] px-7 py-3 font-semibold text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                style={{ borderRadius: 4 }}
              >
                View Projects
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 px-1 py-3 tracking-wide"
              >
                Get in touch —→
              </a>
            </div>
          </div>

          {/* Right column */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.5s ease 0.85s, transform 0.5s ease 0.85s",
            }}
          >
            {/* Terminal block */}
            <div className="glass rounded-sm overflow-hidden border border-[var(--glass-border)]">
              {/* Terminal header */}
              <div className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--glass-border)]">
                <span className="font-mono text-[10px] text-[var(--fg-muted)] tracking-widest uppercase">
                  Terminal
                </span>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--fg-muted)] opacity-30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--fg-muted)] opacity-30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60" />
                </div>
              </div>
              <div className="p-5 font-mono text-sm space-y-1.5 min-h-[110px]">
                {lines.map((line, i) => (
                  <div key={i} className="flex flex-wrap">
                    <span
                      className={
                        i === 0
                          ? "text-[var(--accent)]"
                          : "text-[var(--terminal-green)]"
                      }
                    >
                      {line.prompt}
                    </span>
                    <span className="text-[var(--fg)]">{line.typed}</span>
                    {!line.done && (
                      <span
                        className="inline-block w-2 h-4 bg-[var(--accent)] ml-0.5 align-middle opacity-90"
                        style={{ animation: "blink 0.8s step-end infinite" }}
                      />
                    )}
                  </div>
                ))}
                {lines.length === 0 && (
                  <div className="flex">
                    <span className="text-[var(--accent)]">~/AK $ </span>
                    <span
                      className="inline-block w-2 h-4 bg-[var(--accent)] ml-0.5"
                      style={{ animation: "blink 0.8s step-end infinite" }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Stats — vertical stack */}
            <div
              className="grid grid-cols-3 gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.4s ease 1.3s",
              }}
            >
              <StatCounter value={85} suffix="%" label="Faster Deploys" delay={1300} />
              <StatCounter value={100} suffix="K+" label="Events / sec" delay={1400} />
              <StatCounter value={12} suffix="" label="Certs" delay={1500} />
            </div>

            {/* Resume link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors self-start focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.4s ease 1.5s",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              resume.pdf
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{
          opacity: loaded ? (scrolled ? 0 : 1) : 0,
          transition: "opacity 0.4s ease 1.6s",
        }}
      >
        <div className="w-px h-8 bg-[var(--accent)] opacity-40" />
        <span
          className="font-mono text-[9px] text-[var(--fg-muted)] tracking-[0.3em] uppercase"
          style={{ writingMode: "horizontal-tb" }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}
