import type { Metadata } from "next";
import Link from "next/link";
import ProjectNav from "@/components/ProjectNav";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactCounter from "@/components/ImpactCounter";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "EEG Seizure Detection & Multi-Model Analysis | Abhinaysai Kamineni",
  description:
    "Subject-independent seizure detection benchmarking 15+ neural architectures — LSTM, Mamba/MoE, CNNs, Transformers — on 916 hours of CHB-MIT pediatric EEG data.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "impact", label: "Results" },
  { id: "deep-dive", label: "Deep Dive" },
  { id: "results", label: "Reflection" },
];

export default function EEGSeizureDetectionPage() {
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
              <span className="text-[var(--fg)]">EEG Seizure Detection</span>
            </div>

            <span className="inline-block bg-[var(--accent-10)] text-[var(--terminal-green)] text-xs font-mono rounded-sm px-3 py-1 mb-4">
              ✅ Completed — Spring 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)]">
              EEG Seizure Detection &amp; Multi-Model Analysis
            </h1>
            <p className="text-lg text-[var(--accent)] font-mono mt-3">
              Subject-Independent Benchmarking Across 15+ Neural Architectures
            </p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-[var(--muted)]">
              <span><strong className="text-[var(--fg)]">Role:</strong> ML Engineer &amp; Research Contributor</span>
              <span><strong className="text-[var(--fg)]">Timeline:</strong> Jan 2026 — May 2026</span>
              <span><strong className="text-[var(--fg)]">Affiliation:</strong> George Washington University</span>
              <span>
                <a
                  href="https://github.com/askmy-stack/spring-2026-group2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:opacity-80 transition-opacity"
                >
                  GitHub ↗
                </a>
              </span>
            </div>
            <div className="h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl mt-8" />
          </ScrollReveal>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// problem'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">The Problem</h2>
            <p className="text-xl text-[var(--fg)] mt-6 leading-relaxed">
              Epileptic seizures affect 50 million people worldwide. The CHB-MIT Scalp EEG database contains 916 hours of continuous multi-channel recordings from 24 pediatric patients (198 seizures). The core research question: <em className="text-[var(--accent)]">which neural architecture family best detects seizures under strict subject-independent evaluation</em> — where training subjects never appear in the test set?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">Why it matters</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Manual EEG review by neurologists is slow and error-prone. Automated, generalizable detection enables real-time monitoring and faster clinical response — especially for pediatric patients.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">The challenge</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  &lt;2% of recording time contains seizures, 23-channel signals at 256 Hz, patient-specific morphologies, and no overlap between train/test patients — making generalization genuinely hard.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* RESULTS / IMPACT */}
        <section id="impact" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// results'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Results</h2>
            <div className="mt-8">
              <ImpactCounter
                metrics={[
                  { label: "Best AUROC", value: "0.740" },
                  { label: "Architectures", value: "15+" },
                  { label: "EEG Hours", value: "916" },
                  { label: "Patients", value: "24" },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10">
              <h3 className="text-xl font-heading font-semibold text-[var(--fg)] mb-4">Model Leaderboard (Test Set)</h3>
              <ComparisonTable
                headers={["Model", "F1", "AUROC", "Recall", "Architecture"]}
                rows={[
                  ["DeepConvNet", "0.545", "0.740", "0.811", "Deep CNN"],
                  ["Baseline CNN-1D", "0.511", "0.728", "0.923", "1D CNN"],
                  ["Multiscale Attn CNN", "0.523", "0.718", "0.910", "Attn CNN"],
                  ["Multiscale CNN", "0.528", "0.704", "0.834", "Multi-scale CNN"],
                  ["EEGNet (local)", "0.506", "0.706", "0.900", "Compact CNN"],
                ]}
                highlightColumns={[2]}
              />
            </div>
          </ScrollReveal>
        </section>

        {/* DEEP DIVE */}
        <section id="deep-dive" className="py-24 space-y-16">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// deep-dive'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Deep Dive</h2>
          </ScrollReveal>

          {/* Architecture Families */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Architecture Families Benchmarked</h3>
            <p className="text-[var(--muted)] mt-2">
              Eight architecture families were evaluated end-to-end on the same subject-independent data splits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                ["LSTM Variants (m1–m7)", "Vanilla LSTM, BiLSTM, Criss-Cross, CNN-LSTM, Feature BiLSTM, Graph BiLSTM, Attention LSTM"],
                ["Improved LSTMs (im1–im7)", "MixUp augmentation, WarmupCosine LR, EEGAugmentation (time-shift, Gaussian noise, channel dropout)"],
                ["Hierarchical LSTM", "Multi-scale temporal encoding across time granularities before a classification head"],
                ["Mamba / MoE", "State-space sequence models with mixture-of-experts gating for EEG time series"],
                ["HuggingFace CNNs", "Baseline CNN-1D, Enhanced CNN-1D, Multiscale CNN, Multiscale Attention CNN, EEGNet"],
                ["Classical ML (Optuna)", "LightGBM, XGBoost, Random Forest — tuned on 528 hand-crafted features via Optuna"],
                ["Pretrained Models", "ST-EEGFormer, BENDR, BioT, EEGPT — subject to sampling-rate compatibility"],
                ["Meta-Ensemble", "Combines probability outputs via mean, weighted, rank-average, and logistic-stacking strategies"],
              ].map(([title, desc]) => (
                <div key={title} className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-4">
                  <h4 className="font-mono text-sm text-[var(--accent)]">{title}</h4>
                  <p className="text-sm text-[var(--muted)] mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Data Pipeline */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Data Pipeline</h3>
            <p className="text-[var(--muted)] mt-2">
              Raw EDF files are segmented into 2s windows with 50% overlap, z-score normalized per-patient, and labeled from CHB-MIT seizure annotations. Feature tensors (528 features) are separately generated for classical ML models.
            </p>
            <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 mt-4">
              <p className="font-mono text-sm text-[var(--fg)]">
                EDF Files → Channel Extraction → 2s Windows (50% overlap) → Z-Score Norm → Tensor/Feature Tensors → Subject-Split → Train/Val/Test
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Engineering */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Feature Engineering (528 Features)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                ["Time-domain", "Statistical moments, zero-crossings, line length, Hjorth parameters"],
                ["Frequency-domain", "Band power (δ θ α β γ), spectral entropy, peak frequency"],
                ["Wavelet", "Multi-level DWT coefficients and energy distribution"],
                ["Connectivity", "Cross-channel coherence and phase-locking values"],
                ["Nonlinear", "Sample entropy, Lyapunov exponents, correlation dimension"],
              ].map(([title, desc]) => (
                <div key={title} className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-4">
                  <h4 className="font-mono text-sm text-[var(--accent)]">{title}</h4>
                  <p className="text-sm text-[var(--muted)] mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Evaluation Strategy */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Subject-Independent Evaluation</h3>
            <p className="text-[var(--muted)] mt-2">
              No subject seen during training appears in the test set. Early stopping with patience=7 on validation F1. Models are evaluated on F1, AUROC, precision, and recall — with threshold tuned per model on the validation split.
            </p>
          </ScrollReveal>
        </section>

        {/* REFLECTION */}
        <section id="results" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// reflection'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Results &amp; Reflection</h2>
            <p className="text-[var(--fg)] mt-4">
              DeepConvNet achieved the best overall balance of F1 (0.545) and AUROC (0.740). All models show high recall with low precision — consistent with the extreme class imbalance and subject-independent constraint.
            </p>
            <div className="space-y-3 mt-6">
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>15+ architectures benchmarked on identical subject-independent splits</p>
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>Unified checkpoint schema — all models saved, loadable, and reproducible</p>
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>Meta-ensemble combining all model outputs via 4 strategies</p>
              <p className="text-[var(--fg)]"><span className="text-[var(--accent)] mr-2">→</span>Pretrained models (BENDR, EEGPT, BioT) require sfreq resampling or fine-tuning to 256 Hz</p>
              <p className="text-[var(--fg)]"><span className="text-[var(--accent)] mr-2">→</span>Would explore patient-adaptive fine-tuning to push precision above current ceiling</p>
            </div>
            <p className="text-[var(--muted)] mt-6 italic">
              This project showed that architectural choice matters less than evaluation rigor — subject-independent splits are brutally honest, and high AUROC with low precision is a real clinical challenge, not just a benchmark artifact.
            </p>
          </ScrollReveal>
        </section>

        {/* BOTTOM NAV */}
        <div className="flex items-center justify-between py-12 border-t border-[var(--card-border)]">
          <Link href="/projects/nasa-landslide" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm">
            ← NASA Landslide
          </Link>
          <Link href="/#projects" className="text-[var(--accent)] hover:opacity-80 transition-opacity text-sm font-medium">
            Back to All Projects →
          </Link>
        </div>
      </div>
    </>
  );
}
