import Link from "next/link";
import { projects } from "@/lib/projects";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import MagneticCard from "@/components/MagneticCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            number="04"
            label="Projects"
            subtitle="End-to-end systems, not just notebooks"
          />
        </ScrollReveal>

        {/* Grid — last card spans full width if odd count */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 100}
              className={
                projects.length % 2 !== 0 && index === projects.length - 1
                  ? "md:col-span-2"
                  : ""
              }
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Per-project visual header config
const projectVisuals: Record<string, { bg: string; iconPath: string; iconColor: string; label: string }> = {
  "byu-flagellar-motors": {
    bg: "from-lime-500/10 via-emerald-500/5 to-transparent",
    iconColor: "text-lime-400/50",
    label: "Deep Learning · Biomedical Imaging",
    iconPath: `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z`,
  },
  "nasa-landslide": {
    bg: "from-yellow-500/8 via-orange-500/5 to-transparent",
    iconColor: "text-yellow-400/50",
    label: "MLOps · Cloud Infrastructure",
    iconPath: `M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z`,
  },
  "eeg-seizure-detection": {
    bg: "from-emerald-500/8 via-teal-500/5 to-transparent",
    iconColor: "text-emerald-400/50",
    label: "EEG · Multi-Model Benchmarking",
    iconPath: `M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z`,
  },
};

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const visibleTags = project.tags.slice(0, 5);
  const remainingCount = project.tags.length - 5;
  const visual = projectVisuals[project.slug];

  return (
    <MagneticCard>
      <div className="group border-l-2 border-transparent hover:border-l-4 hover:border-[var(--accent)] transition-all duration-300 overflow-hidden h-full flex flex-col bg-[var(--card)] rounded-sm">
        {/* Visual header — gradient mesh with icon */}
        <div className={`relative h-36 bg-gradient-to-br ${visual?.bg ?? project.gradient} overflow-hidden`}>
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Large faint icon */}
          <svg
            viewBox="0 0 24 24"
            className={`absolute bottom-2 right-4 w-24 h-24 ${visual?.iconColor ?? "text-white/10"}`}
            fill="currentColor"
          >
            <path d={visual?.iconPath} />
          </svg>
          {/* Ghost project number */}
          <span
            className="absolute top-3 right-4 font-[family-name:var(--font-display)] text-5xl text-[var(--fg)] opacity-[0.12] select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Domain label */}
          <div className="absolute top-4 left-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)] bg-[rgba(0,0,0,0.4)] px-2.5 py-1 rounded-md backdrop-blur-sm">
              {visual?.label}
            </span>
          </div>
          {/* Gradient fade to card body */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[rgba(12,12,14,0.6)] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Status + title */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="display-heading text-xl md:text-2xl text-[var(--fg)]">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--accent)] font-mono mt-1">
                {project.subtitle}
              </p>
            </div>
            {project.inProgress ? (
              <span className="shrink-0 text-xs font-mono bg-[rgba(250,204,21,0.1)] text-[var(--warning)] px-2.5 py-1">
                In Progress
              </span>
            ) : (
              <span className="shrink-0 text-xs font-mono bg-[var(--accent-10)] text-[var(--terminal-green)] rounded-lg px-2.5 py-1">
                Completed
              </span>
            )}
          </div>

          <p className="text-sm text-[var(--fg-secondary)] mt-3 leading-relaxed line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 font-mono text-xs text-[var(--fg-secondary)]">
            {project.metrics.map((m) => (
              <span key={m.label}>
                <span className="text-[var(--accent)]">{m.label}</span> {m.value}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-[11px] text-[var(--fg-muted)]">
            {visibleTags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && <span className="mr-1.5">·</span>}
                {tag}
              </span>
            ))}
            {remainingCount > 0 && <span className="ml-1">+{remainingCount}</span>}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--glass-border)]">
            {!project.inProgress && (
              <Link
                href={`/projects/${project.slug}`}
                className="text-[var(--accent)] text-sm font-medium hover:text-[var(--accent-hover)] transition-colors inline-flex items-center gap-1.5"
              >
                Read More{" "}
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </Link>
            )}
            <a
              href={
                project.slug === "eeg-seizure-detection"
                  ? "https://github.com/askmy-stack/spring-2026-group2"
                  : `https://github.com/askmy-stack/${project.slug}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors inline-flex items-center gap-1"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </MagneticCard>
  );
}
