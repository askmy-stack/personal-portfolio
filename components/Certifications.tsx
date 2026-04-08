import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const certs = [
  { name: "AWS Cloud Practitioner", provider: "AWS" },
  { name: "AWS Certified AI Practitioner", provider: "AWS" },
  { name: "Azure Data Scientist Associate", provider: "Azure" },
  { name: "Azure Data Engineer Associate", provider: "Azure" },
  { name: "Databricks Lakehouse Fundamentals", provider: "Databricks" },
  { name: "Terraform Associate", provider: "HashiCorp" },
  { name: "Advanced Data Analytics", provider: "Google" },
  { name: "Business Intelligence", provider: "Google" },
  { name: "Project Management", provider: "Google" },
  { name: "Data Analytics", provider: "Google" },
  { name: "RHEL Automation with Ansible (RH294)", provider: "Red Hat" },
  { name: "System Administration II (RH134)", provider: "Red Hat" },
];

const providerColors: Record<string, string> = {
  AWS: "text-[#FF9900]",
  Azure: "text-[#0078D4]",
  Databricks: "text-[#FF3621]",
  HashiCorp: "text-[#7B42BC]",
  Google: "text-[var(--terminal-green)]",
  "Red Hat": "text-[#EE0000]",
};

function groupByProvider() {
  const groups: Record<string, string[]> = {};
  const order: string[] = [];
  for (const cert of certs) {
    if (!groups[cert.provider]) {
      groups[cert.provider] = [];
      order.push(cert.provider);
    }
    groups[cert.provider].push(cert.name);
  }
  return order.map((provider) => ({
    provider,
    count: groups[provider].length,
    names: groups[provider],
  }));
}

export default function Certifications() {
  const grouped = groupByProvider();

  return (
    <section id="certifications" className="py-24">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="05" label="Certifications" />

          <div className="space-y-0">
            {grouped.map((group, idx) => (
              <ScrollReveal key={group.provider} delay={idx * 60}>
                <div className="py-5 border-b border-[var(--glass-border)] grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 items-baseline">
                  <div className="flex items-baseline gap-2">
                    <h3
                      className={`text-sm font-semibold ${providerColors[group.provider] || "text-[var(--accent)]"}`}
                    >
                      {group.provider}
                    </h3>
                    <span className="font-mono text-[10px] text-[var(--fg-muted)]">
                      ({group.count})
                    </span>
                  </div>
                  <div className="space-y-1">
                    {group.names.map((name) => (
                      <p
                        key={name}
                        className="text-sm text-[var(--fg-secondary)] leading-relaxed"
                      >
                        <span className="text-[var(--fg-muted)] mr-2">—</span>
                        {name}
                      </p>
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
