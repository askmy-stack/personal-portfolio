export interface ReadingItem {
  title: string;
  publication: string;
  date: string;
  category: "Tech" | "AI" | "Product";
  url: string;
  description: string;
}

export const readingItems: readonly ReadingItem[] = [
  {
    title: "The Rise of Agentic AI: From Prompts to Autonomous Systems",
    publication: "Personal Essay",
    date: "2026",
    category: "AI",
    url: "#",
    description: "Exploring the shift from static LLM prompts to goal-directed agents that plan, execute, and iterate. Lessons from building a hybrid local+cloud job search pipeline.",
  },
  {
    title: "Mamba vs. Transformer: A Signal Processing Perspective",
    publication: "Technical Deep Dive",
    date: "2026",
    category: "AI",
    url: "#",
    description: "Why state-space models matter for long time-series in healthcare. Benchmarking Mamba, MoE, and hybrid architectures on 916 hours of pediatric EEG data.",
  },
  {
    title: "Shipping ML to Real Users: A Production Checklist",
    publication: "Engineering Notes",
    date: "2025",
    category: "Tech",
    url: "#",
    description: "The boring parts that matter: containerized training, version-pinned environments, observability at 3am, and infrastructure-as-code for 99.9% pipeline reliability.",
  },
  {
    title: "Building for Biologists: 3D Detection in Cryo-ET",
    publication: "Case Study",
    date: "2025",
    category: "Product",
    url: "#",
    description: "How CenterNet and YOLOv10 help structural biologists locate bacterial flagellar motors. Bridging computer vision research with wet lab workflows.",
  },
  {
    title: "Product Thinking for ML Engineers",
    publication: "Essay",
    date: "2025",
    category: "Product",
    url: "#",
    description: "Metrics without context are vanity. Moving from \"I trained a model\" to \"I shipped value to real users\" requires first-principles product thinking.",
  },
] as const;
