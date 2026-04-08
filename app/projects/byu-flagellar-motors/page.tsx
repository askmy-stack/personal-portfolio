import type { Metadata } from "next";
import Link from "next/link";
import ProjectNav from "@/components/ProjectNav";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactCounter from "@/components/ImpactCounter";
import CodeBlock from "@/components/CodeBlock";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "BYU Flagellar Motors | Abhinaysai Kamineni",
  description:
    "Automated 3D electron microscopy detection pipeline using CenterNet, YOLOv10, and Faster R-CNN for locating bacterial flagellar motors in cryo-ET data.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "impact", label: "Impact" },
  { id: "solution", label: "Solution" },
  { id: "deep-dive", label: "Deep Dive" },
  { id: "results", label: "Results" },
];

const augmentationCode = `import albumentations as A

transform = A.Compose([
    A.CLAHE(clip_limit=4.0, p=0.5),
    A.RandomBrightnessContrast(
        brightness_limit=0.2,
        contrast_limit=0.2, p=0.3
    ),
    A.HorizontalFlip(p=0.5),
    A.VerticalFlip(p=0.5),
    A.Rotate(limit=15, p=0.3),
    A.GaussNoise(var_limit=(10, 50), p=0.2),
], bbox_params=A.BboxParams(
    format='coco',
    label_fields=['labels']
))`;

const dockerCode = `FROM nvidia/cuda:11.8.0-devel-ubuntu22.04

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
ENV PYTHONUNBUFFERED=1
ENTRYPOINT ["python", "train.py"]`;

export default function BYUFlagellarMotorsPage() {
  return (
    <>
      <ProjectNav sections={sections} />

      <div className="max-w-4xl mx-auto px-6 lg:ml-32 xl:mx-auto">
        {/* OVERVIEW */}
        <section id="overview" className="py-24">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-6">
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-[var(--accent)] transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-[var(--fg)]">BYU Flagellar Motors</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)]">
              Locating Bacterial Flagellar Motors
            </h1>
            <p className="text-lg text-[var(--accent)] font-mono mt-3">
              Deep Learning for Biomedical Image Analysis
            </p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-[var(--muted)]">
              <span><strong className="text-[var(--fg)]">Role:</strong> ML Engineer &amp; Pipeline Architect</span>
              <span><strong className="text-[var(--fg)]">Timeline:</strong> Jan 2025 — Apr 2025</span>
              <span><strong className="text-[var(--fg)]">Team:</strong> BYU Bhatt Lab</span>
              <span><strong className="text-[var(--fg)]">Affiliation:</strong> George Washington University</span>
            </div>
            <div className="h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl mt-8" />
          </ScrollReveal>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// problem'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">The Problem</h2>
            <p className="text-xl text-[var(--fg)] mt-6 leading-relaxed">
              Bacterial flagellar motors are nanoscale molecular machines — just 45nm in diameter — embedded in noisy 3D cryo-electron tomography (cryo-ET) volumes. Manual annotation is painstakingly slow, and traditional detection methods fail on such small, low-contrast objects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">Why it matters</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Understanding flagellar motor assembly is key to bacterial motility research, antibiotic development, and synthetic biology. Automated detection enables large-scale structural studies previously impossible by hand.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">The challenge</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Extremely small targets (~45nm) in noisy 3D volumes, severe class imbalance (few motors per tomogram), limited annotated training data, and the need for sub-voxel precision in 3D space.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* IMPACT */}
        <section id="impact" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// impact'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Impact</h2>
            <div className="mt-8">
              <ImpactCounter
                metrics={[
                  { label: "mAP@50", value: "0.948" },
                  { label: "Precision", value: "1.00" },
                  { label: "Models Compared", value: "3" },
                  { label: "Reproducible", value: "100%" },
                ]}
              />
            </div>
          </ScrollReveal>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// solution'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">The Solution</h2>
            <p className="text-[var(--fg)] mt-4">
              A fully containerized, end-to-end detection pipeline benchmarking three architectures on the same preprocessed data, ensuring fair and reproducible comparison.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {["Raw Tomograms", "CLAHE + Augmentation", "Model Training", "Evaluation", "Best Model Selection"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-sm font-mono text-[var(--fg)]">
                    <span className="text-[var(--accent)] mr-2">{i + 1}.</span>
                    {step}
                  </div>
                  {i < 4 && <span className="text-[var(--accent)] text-lg">→</span>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* DEEP DIVE */}
        <section id="deep-dive" className="py-24 space-y-16">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// deep-dive'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Deep Dive</h2>
          </ScrollReveal>

          {/* Data Pipeline */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Data Pipeline</h3>
            <p className="text-[var(--muted)] mt-2">
              Raw cryo-ET slices were preprocessed with CLAHE for contrast enhancement, then augmented using Albumentations with geometric and photometric transforms to increase effective training set size while preserving bounding box annotations.
            </p>
            <div className="mt-4">
              <CodeBlock filename="augmentation.py" code={augmentationCode} />
            </div>
          </ScrollReveal>

          {/* Model Comparison */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Model Comparison</h3>
            <p className="text-[var(--muted)] mt-2">
              Three architectures were benchmarked under identical conditions — same data splits, same augmentation, same hardware — to ensure a fair comparison.
            </p>
            <div className="mt-4">
              <ComparisonTable
                headers={["Model", "mAP@50", "Precision", "Recall", "Inference"]}
                rows={[
                  ["CenterNet", "0.948", "1.00", "0.90", "42ms"],
                  ["YOLOv10", "0.912", "0.95", "0.88", "28ms"],
                  ["Faster R-CNN", "0.891", "0.93", "0.85", "68ms"],
                ]}
                highlightColumns={[1, 2]}
              />
            </div>
          </ScrollReveal>

          {/* Infrastructure */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Infrastructure</h3>
            <p className="text-[var(--muted)] mt-2">
              Every model was trained inside Docker containers on AWS GPU instances, ensuring identical environments and full reproducibility from any machine.
            </p>
            <div className="mt-4">
              <CodeBlock filename="Dockerfile" code={dockerCode} />
            </div>
          </ScrollReveal>

          {/* Key Decisions */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Key Decisions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
                <h4 className="font-mono text-sm text-[var(--accent)]">CenterNet as primary</h4>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Anchor-free design naturally suits small, densely packed objects. Highest mAP with perfect precision.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
                <h4 className="font-mono text-sm text-[var(--accent)]">Docker for reproducibility</h4>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Containerized training ensures identical CUDA, library, and data versions across all experiments.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
                <h4 className="font-mono text-sm text-[var(--accent)]">CLAHE over standard norm</h4>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Adaptive histogram equalization preserves local contrast in low-SNR cryo-ET data far better than global normalization.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* RESULTS */}
        <section id="results" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// results'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Results &amp; Reflection</h2>
            <p className="text-[var(--fg)] mt-4">
              CenterNet achieved state-of-the-art detection accuracy on this challenging small-object benchmark, with perfect precision and near-perfect recall.
            </p>
            <div className="space-y-3 mt-6">
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>CenterNet outperformed both YOLO and Faster R-CNN on all key metrics</p>
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>100% reproducible — any researcher can replicate with Docker + our data</p>
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>CLAHE preprocessing was critical for handling low-contrast cryo-ET data</p>
              <p className="text-[var(--fg)]"><span className="text-[var(--accent)] mr-2">→</span>Would explore 3D detection directly on full tomograms instead of 2D slices</p>
              <p className="text-[var(--fg)]"><span className="text-[var(--accent)] mr-2">→</span>Would add active learning to reduce manual annotation burden further</p>
            </div>
            <p className="text-[var(--muted)] mt-6 italic">
              This project reinforced my belief that rigorous benchmarking infrastructure matters as much as model architecture. The best model is only as good as the pipeline that produces it.
            </p>
          </ScrollReveal>
        </section>

        {/* BOTTOM NAV */}
        <div className="flex items-center justify-between py-12 border-t border-[var(--card-border)]">
          <Link href="/#projects" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm">
            ← Back to Projects
          </Link>
          <Link href="/projects/nasa-landslide" className="text-[var(--accent)] hover:opacity-80 transition-opacity text-sm font-medium">
            Next: NASA Landslide →
          </Link>
        </div>
      </div>
    </>
  );
}
