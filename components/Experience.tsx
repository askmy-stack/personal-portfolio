import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  {
    company: "Follett Higher Education Group",
    role: "Systems Reliability Associate",
    location: "Washington, DC",
    period: "May 2025 — Present",
    bullets: [
      "Monitoring and maintaining system reliability across production infrastructure",
      "Implementing observability solutions with Prometheus and Grafana dashboards",
      "Collaborating with engineering teams to reduce incident response times",
    ],
  },
  {
    company: "Jio Platforms (Reliance)",
    role: "Data OPs Engineer",
    location: "Navi Mumbai, India",
    period: "Dec 2023 — Jul 2024",
    bullets: [
      "Engineered ML and data pipelines across hybrid multi-cloud environments (AWS, Azure, GCP)",
      "Drove 85% faster deployments through CI/CD automation with Jenkins and GitHub Actions",
      "Achieved 40% less downtime via Kubernetes orchestration and infrastructure-as-code (Terraform)",
      "Built real-time streaming pipelines with Apache Kafka and Spark processing 100K+ events/sec",
      "Implemented observability stack (Prometheus, Grafana, ELK) reducing MTTR by 60%",
    ],
  },
  {
    company: "BYU — Bhatt Lab",
    role: "ML Research Engineer",
    location: "Remote Collaboration",
    period: "Jan 2025 — Apr 2025",
    bullets: [
      "Built automated 3D electron microscopy detection pipeline for bacterial flagellar motors",
      "Compared CenterNet, YOLOv10, and Faster R-CNN — achieved 0.948 mAP@50",
      "Containerized full training pipeline with Docker for reproducible experiments on AWS GPU instances",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader number="03" label="Experience" />
        </ScrollReveal>

        {/* Year watermark */}
        <div className="relative">
          <span
            className="absolute -top-6 right-0 font-[family-name:var(--font-display)] text-[5rem] leading-none text-[var(--fg)] select-none pointer-events-none opacity-[0.03]"
            aria-hidden="true"
          >
            2023–26
          </span>

          {/* Timeline entries */}
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={exp.company} delay={idx * 100}>
                <div className="border-l-2 border-[var(--accent)] pl-6 md:pl-8 relative">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="display-heading text-xl md:text-2xl text-[var(--fg)]">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-[var(--fg-secondary)] mt-1">
                        {exp.role} · {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--fg-muted)] shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-[var(--fg-secondary)] leading-relaxed"
                      >
                        <span className="text-[var(--accent)] shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
