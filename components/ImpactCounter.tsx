"use client";

import { useState, useEffect, useRef } from "react";

interface Metric {
  label: string;
  value: string;
}

export default function ImpactCounter({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <CounterCard key={m.label} metric={m} />
      ))}
    </div>
  );
}

function CounterCard({ metric }: { metric: Metric }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 text-center"
    >
      <div
        className={`text-3xl font-bold font-mono text-[var(--accent)] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {metric.value}
      </div>
      <div className="text-xs text-[var(--muted)] uppercase tracking-widest mt-2">
        {metric.label}
      </div>
    </div>
  );
}
