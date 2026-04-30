import { projects } from "@/content/projects";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import WorkRow from "./WorkRow";

export default function SelectedWork(): JSX.Element {
  return (
    <section id="work" className="py-32 md:py-40">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)] mb-6">
              01 — Selected Work
            </p>
            <AnimatedHeading as="h2" className="text-display-lg text-[var(--fg)]">
              Systems that shipped.
            </AnimatedHeading>
          </div>
          <p className="hidden md:block font-mono text-xs text-[var(--fg-muted)] max-w-[18rem] leading-relaxed">
            End-to-end projects spanning computer vision, time-series, MLOps, and agentic AI.
          </p>
        </div>

        <div>
          {projects.map((p, i) => (
            <WorkRow key={p.slug} project={p} index={i} />
          ))}
          <div className="h-px bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}
