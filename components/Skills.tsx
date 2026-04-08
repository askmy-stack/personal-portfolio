import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "R", "Java", "Scala", "Bash", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face",
      "Computer Vision", "NLP", "Time Series", "Feature Engineering",
    ],
  },
  {
    title: "Data & Pipelines",
    skills: [
      "Apache Spark", "Kafka", "Airflow", "Databricks",
      "PostgreSQL", "MongoDB", "Redis", "Snowflake", "ETL",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Azure", "GCP", "Docker", "Kubernetes",
      "Terraform", "Ansible", "Helm",
    ],
  },
  {
    title: "CI/CD & Observability",
    skills: [
      "GitHub Actions", "Jenkins", "ArgoCD",
      "Prometheus", "Grafana", "ELK Stack",
    ],
  },
  {
    title: "Research & Tools",
    skills: [
      "Jupyter", "MLflow", "Weights & Biases", "LaTeX",
      "Pandas", "NumPy", "Matplotlib", "Seaborn",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="02"
            label="Skills"
            subtitle="Technical proficiency across the stack"
          />

          <div className="mt-12 space-y-0">
            {skillCategories.map((cat, idx) => (
              <ScrollReveal key={cat.title} delay={idx * 60}>
                <div className="py-6 border-b border-[var(--glass-border)] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 items-baseline">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg)]">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
