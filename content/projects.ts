import type { Project } from "@/lib/types";

export const projects: readonly Project[] = [
  {
    slug: "eeg-seizure-detection",
    title: "EEG Seizure Detection",
    subtitle: "Multi-Architecture Benchmark on Pediatric EEG",
    year: 2026,
    category: "Deep Learning · Neural Signal Processing",
    heroMetric: "AUROC 0.740 across 15+ architectures",
    tags: ["PyTorch", "Mamba/MoE", "LSTM", "Transformer", "CHB-MIT", "MNE"],
    github: "https://github.com/askmy-stack/spring-2026-group2",
    gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
  },
  {
    slug: "byu-flagellar-motors",
    title: "Locating Bacterial Flagellar Motors",
    subtitle: "3D Object Detection in Cryo-Electron Tomography",
    year: 2025,
    category: "Computer Vision · Biomedical Imaging",
    heroMetric: "mAP@50 = 0.948 · Precision = 1.00",
    tags: ["PyTorch", "CenterNet", "YOLOv10", "Faster R-CNN", "Docker", "AWS GPU"],
    github: "https://github.com/askmy-stack/byu-flagellar-motors",
    gradient: "from-cyan-400/20 via-blue-500/10 to-transparent",
  },
  {
    slug: "nasa-landslide",
    title: "NASA Landslide Predictive Analysis",
    subtitle: "Time-Series Modeling with Automated MLOps",
    year: 2024,
    category: "Time-Series · MLOps · Geospatial",
    heroMetric: "70% faster iteration · 100% IaC coverage",
    tags: ["Terraform", "AWS", "Docker", "GitHub Actions", "Jenkins"],
    github: "https://github.com/askmy-stack/nasa-landslide",
    gradient: "from-emerald-400/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "agentic-job-search",
    title: "Hybrid Agentic Job Search Pipeline",
    subtitle: "Local Ollama + Anthropic API for Personal Automation",
    year: 2026,
    category: "Agentic AI · LLM Tooling",
    heroMetric: "Personal AI agent · Hybrid local+cloud architecture",
    tags: ["Go", "Ollama", "Anthropic API", "Tool-use", "Agents"],
    github: "https://github.com/askmy-stack/job-search-pipeline",
    gradient: "from-amber-400/20 via-orange-500/10 to-transparent",
  },
] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
