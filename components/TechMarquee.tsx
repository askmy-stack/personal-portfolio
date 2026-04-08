"use client";

const techs = [
  "Python", "SQL", "AWS", "Azure", "GCP", "Docker", "Kubernetes",
  "Terraform", "Apache Spark", "Kafka", "Airflow", "PostgreSQL",
  "Jenkins", "Prometheus", "Grafana", "Databricks", "MongoDB", "Redis",
];

export default function TechMarquee() {
  const items = techs;

  return (
    <section className="w-full py-6 overflow-hidden relative">
      {/* Glass strip background */}
      <div className="absolute inset-0 bg-[var(--glass)] border-y border-[var(--glass-border)]" />

      {/* Edge masks */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

      <div className="relative group flex overflow-hidden [&:hover>div]:![animation-play-state:paused]">
        <div
          className="flex shrink-0 items-center"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {items.map((tech, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-mono text-sm text-[var(--fg-secondary)] whitespace-nowrap px-3">
                {tech}
              </span>
              <span className="text-[var(--accent)] opacity-40 text-xs">→</span>
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 items-center"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {items.map((tech, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-mono text-sm text-[var(--fg-secondary)] whitespace-nowrap px-3">
                {tech}
              </span>
              <span className="text-[var(--accent)] opacity-40 text-xs">→</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
