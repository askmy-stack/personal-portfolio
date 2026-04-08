import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const capabilities = [
  {
    title: "MLOps & Cloud Infrastructure",
    items: [
      "Pipeline design and CI/CD automation",
      "Infrastructure-as-code across AWS, Azure, and GCP",
      "Model training to production deployment",
      "Full observability and monitoring stacks",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    items: [
      "ETL pipelines and real-time streaming (Kafka, Spark)",
      "Data warehousing and lake architectures",
      "Interactive dashboards for business decisions",
      "Cost optimization and performance tuning",
    ],
  },
  {
    title: "AI & Deep Learning Solutions",
    items: [
      "Computer vision, NLP, and time-series forecasting",
      "Rapid prototyping to production-grade systems",
      "Reproducible training pipelines",
      "Model evaluation, versioning, and deployment",
    ],
  },
];

export default function Services() {
  return (
    <section id="capabilities" className="py-24">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="06"
            label="Capabilities"
            subtitle="What I bring to the team"
          />

          <div className="space-y-0">
            {capabilities.map((cap, idx) => (
              <ScrollReveal key={cap.title} delay={idx * 80}>
                <div className="py-6 border-b border-[var(--glass-border)] grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg)]">
                    {cap.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-[var(--fg-secondary)] leading-relaxed"
                      >
                        <span className="text-[var(--accent)] shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={300}>
            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-[var(--fg-secondary)]">
                Open to full-time roles, freelance projects, and research collaborations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] px-6 py-2.5 text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors shrink-0"
                style={{ borderRadius: 4 }}
              >
                Get in touch →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
