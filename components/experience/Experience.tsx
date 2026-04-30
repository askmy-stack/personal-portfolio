import { experience } from "@/content/experience";
import { certifications } from "@/content/certifications";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="py-32 md:py-40">
      <div className="container-editorial">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)] mb-6">
          03 — Experience
        </p>
        <AnimatedHeading as="h2" className="text-display-lg text-[var(--fg)] mb-16">
          Where I’ve shipped.
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-12 space-y-14">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.dates}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-[var(--border)]"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                    {job.dates}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)] mt-2">
                    {job.location}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-display-md text-[var(--fg)] leading-tight">
                    {job.title}
                  </h3>
                  <p className="font-mono text-sm text-[var(--fg-muted)] mt-2">
                    {job.company}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {job.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-body text-[var(--fg-muted)] leading-relaxed pl-5 relative"
                      >
                        <span
                          className="absolute left-0 top-[0.7em] w-2 h-px bg-[var(--accent)]"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24 pt-10 border-t border-[var(--border)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)] mb-8">
            Certifications
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-start justify-between gap-4 py-3 border-b border-[var(--border)]"
              >
                <span className="text-body text-[var(--fg)]">{c.name}</span>
                <span className="font-mono text-xs text-[var(--fg-muted)] shrink-0">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
