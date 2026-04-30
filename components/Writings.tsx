import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const writings = [
  {
    category: "Publication",
    title: "A Platform for Anonymous Tip-Off and Evidence Validation",
    excerpt:
      "Published research on secure evidence collection and validation systems.",
    date: "Published",
    readTime: "Peer-reviewed",
    status: "published" as const,
    href: "#",
  },
  {
    category: "MLOps",
    title: "Building Reproducible ML Pipelines with Docker and Terraform",
    excerpt:
      "Infrastructure-as-code for machine learning — why every ML team needs it.",
    date: "Jan 2026",
    readTime: "8 min",
    status: "draft" as const,
    href: null,
  },
  {
    category: "Deep Learning",
    title: "Lessons from Deploying Deep Learning on Biomedical Imagery",
    excerpt:
      "What I learned working with cryo-ET data at BYU's flagellar motor project.",
    date: "Mar 2025",
    readTime: "12 min",
    status: "draft" as const,
    href: null,
  },
  {
    category: "Cloud",
    title: "Cloud Cost Optimization: What I Learned at Jio",
    excerpt:
      "Strategies that cut cloud spend by 30% without sacrificing performance.",
    date: "Jun 2024",
    readTime: "6 min",
    status: "draft" as const,
    href: null,
  },
  {
    category: "Career",
    title: "From Data Analyst to Data Ops Engineer: A Path Guide",
    excerpt:
      "The skills, certifications, and mindset shifts that made the difference.",
    date: "Feb 2026",
    readTime: "10 min",
    status: "draft" as const,
    href: null,
  },
];

export default function Writings() {
  const published = writings.filter((w) => w.status === "published");
  const drafts = writings.filter((w) => w.status === "draft");

  return (
    <section id="writings" className="py-24">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="07"
            label="Writings"
            subtitle="Thoughts on building data systems that work in the real world"
          />

          {/* Published — feature row */}
          {published.map((article, idx) => (
            <ScrollReveal key={article.title} delay={idx * 80}>
              <div className="border-b border-[var(--glass-border)] py-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--fg-muted)] opacity-40 select-none" aria-hidden="true">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-10)] px-2 py-0.5">
                    {article.category}
                  </span>
                </div>
                <h3 className="display-heading text-2xl md:text-3xl text-[var(--fg)]">
                  {article.title}
                </h3>
                <p className="text-[var(--fg-secondary)] mt-2 max-w-2xl leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="font-mono text-xs text-[var(--fg-muted)]">
                    {article.date} · {article.readTime}
                  </span>
                  {article.href && (
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] text-sm font-medium inline-flex items-center gap-1 hover:text-[var(--accent-hover)] transition-colors"
                    >
                      Read ↗
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Drafts — compact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {drafts.map((article, idx) => (
              <ScrollReveal key={article.title} delay={(published.length + idx) * 80}>
                <div className="relative border-b border-[var(--glass-border)] md:odd:border-r py-6 md:odd:pr-6 md:even:pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-[family-name:var(--font-display)] text-lg text-[var(--fg-muted)] opacity-30 select-none" aria-hidden="true">
                      {String(published.length + idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)]">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[var(--fg)]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--fg-secondary)] mt-1.5 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="font-mono text-xs text-[var(--fg-muted)] mt-3 inline-block">
                    {article.date} · {article.readTime}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
