import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const infoCards = [
  { label: "Location", text: "Arlington, Virginia" },
  { label: "Education", text: "MS Data Science, GWU" },
  { label: "Current Role", text: "SRE @ Follett" },
  { label: "Award", text: "Global Leaders in Data Science" },
];

const bioLines = [
  "I see data as the fuel that powers intelligence at scale.",
  "",
  "As a Data Science graduate student at George Washington University,",
  "I work at the intersection of AI, MLOps, and Cloud — designing",
  "automated, production-grade systems that turn raw data into",
  "real-world impact.",
  "",
  "At Jio Platforms, I engineered ML and data pipelines across",
  "hybrid multi-cloud environments, driving 85% faster deployments",
  "and 40% less downtime through CI/CD, K8s, and IaC.",
  "",
  "I'm not just building models — I'm building the systems that",
  "make models reliable, reproducible, and scalable.",
];

function buildParagraphs(lines: string[]): string[] {
  const paragraphs: string[] = [];
  let current = "";
  for (const line of lines) {
    if (line === "") {
      if (current.trim()) {
        paragraphs.push(current.trim());
        current = "";
      }
    } else {
      current += (current ? " " : "") + line;
    }
  }
  if (current.trim()) paragraphs.push(current.trim());
  return paragraphs;
}

export default function About() {
  const paragraphs = buildParagraphs(bioLines);

  return (
    <section id="about" className="py-24">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="01" label="About" />

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Bio prose + timeline */}
            <div>
              <div className="space-y-5">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-[var(--fg-secondary)]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Career timeline spark */}
              <div className="relative h-16 my-8">
                <svg
                  width="100%"
                  height="64"
                  viewBox="0 0 800 64"
                  preserveAspectRatio="none"
                  className="w-full"
                >
                  <line
                    x1="0"
                    y1="32"
                    x2="800"
                    y2="32"
                    stroke="var(--glass-border)"
                    strokeWidth="1"
                  />
                  {[
                    { x: 0, label: "2021" },
                    { x: 200, label: "2023" },
                    { x: 400, label: "2024" },
                    { x: 600, label: "2025" },
                    { x: 800, label: "Now" },
                  ].map((point) => (
                    <g key={point.label}>
                      <circle
                        cx={point.x}
                        cy="32"
                        r="4"
                        fill="var(--accent)"
                      />
                      <text
                        x={point.x}
                        y="56"
                        fill="var(--fg-muted)"
                        fontSize="11"
                        fontFamily="var(--font-mono)"
                        textAnchor="middle"
                      >
                        {point.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Right — Stacked info rows */}
            <div className="space-y-6">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="border-l-2 border-[var(--accent)] pl-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)]">
                    {card.label}
                  </span>
                  <p className="text-sm text-[var(--fg)] font-medium mt-1">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
