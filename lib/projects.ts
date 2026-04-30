export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  role: string;
  timeline: string;
  featured: boolean;
  gradient: string;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    slug: "byu-flagellar-motors",
    title: "Locating Bacterial Flagellar Motors",
    subtitle: "Deep Learning for Biomedical Image Analysis",
    description:
      "Automated 3D electron microscopy detection pipeline using CenterNet, YOLOv10, and Faster R-CNN. Achieved state-of-the-art detection accuracy on noisy small-object benchmarks.",
    tags: [
      "Python",
      "Docker",
      "AWS GPU",
      "CenterNet",
      "YOLOv10",
      "Faster R-CNN",
      "Deep Learning",
    ],
    metrics: [
      { label: "mAP@50", value: "0.948" },
      { label: "Precision", value: "1.00" },
      { label: "Models Compared", value: "3" },
      { label: "Reproducible", value: "100%" },
    ],
    role: "ML Engineer & Pipeline Architect",
    timeline: "Jan 2025 — Apr 2025",
    featured: true,
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    slug: "nasa-landslide",
    title: "NASA Landslide Predictive Analysis",
    subtitle: "Time Series Modeling for Geospatial Risk Prediction",
    description:
      "Containerized geospatial analytics pipeline with automated ML training and deployment. Terraform-provisioned AWS infrastructure with CI/CD via GitHub Actions.",
    tags: [
      "Terraform",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Time Series",
      "Python",
    ],
    metrics: [
      { label: "Faster Iterations", value: "70%" },
      { label: "IaC Coverage", value: "100%" },
      { label: "Stages Automated", value: "3" },
      { label: "Manual Steps", value: "0" },
    ],
    role: "MLOps & Infrastructure Engineer",
    timeline: "Aug 2024 — Dec 2024",
    featured: true,
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    slug: "eeg-seizure-detection",
    title: "EEG Seizure Detection & Multi-Model Analysis",
    subtitle: "Subject-Independent Seizure Detection Across 15+ Neural Architectures",
    description:
      "End-to-end seizure detection pipeline benchmarking 15+ neural architectures — LSTM variants, Mamba/MoE, CNNs, Transformers, and classical ML — on 916 hours of CHB-MIT pediatric EEG data under strict subject-independent evaluation.",
    tags: [
      "Python",
      "PyTorch",
      "Mamba / MoE",
      "LSTM",
      "Signal Processing",
      "HuggingFace",
      "scikit-learn",
      "LightGBM",
      "Optuna",
    ],
    metrics: [
      { label: "Best AUROC", value: "0.740" },
      { label: "Architectures", value: "15+" },
      { label: "EEG Hours", value: "916" },
      { label: "Patients", value: "24" },
    ],
    role: "ML Engineer & Research Contributor",
    timeline: "Jan 2026 — May 2026",
    featured: false,
    gradient: "from-purple-500/10 to-pink-500/10",
    inProgress: false,
  },
];
