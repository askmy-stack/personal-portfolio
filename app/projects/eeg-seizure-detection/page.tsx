import type { Metadata } from "next";
import Link from "next/link";
import ProjectNav from "@/components/ProjectNav";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactCounter from "@/components/ImpactCounter";

export const metadata: Metadata = {
  title: "EEG Seizure Detection Pipeline | Abhinaysai Kamineni",
  description:
    "Signal processing and classification pipeline for automated epileptic seizure detection from CHB-MIT EEG data.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "impact", label: "Target Metrics" },
  { id: "deep-dive", label: "Deep Dive" },
  { id: "status", label: "Status" },
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

            {/* In-progress badge */}
            <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-mono rounded-full px-3 py-1 mb-4">
              🔬 Currently in development
            </span>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)]">
              EEG Seizure Detection Pipeline
            </h1>
            <p className="text-lg text-[var(--accent)] font-mono mt-3">
              Signal Processing &amp; Classification
            </p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-[var(--muted)]">
              <span><strong className="text-[var(--fg)]">Role:</strong> ML Engineer &amp; Data Pipeline Developer</span>
              <span><strong className="text-[var(--fg)]">Timeline:</strong> Jan 2026 — Present</span>
              <span><strong className="text-[var(--fg)]">Affiliation:</strong> George Washington University</span>
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
              Epileptic seizures affect 50 million people worldwide. The CHB-MIT dataset contains multi-channel EEG recordings from 22 pediatric patients, but automated detection faces severe class imbalance — seizure events represent less than 2% of total recording time — and high inter-patient variability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">Why it matters</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Manual EEG review by neurologists is time-intensive and error-prone. Automated, reliable detection enables real-time monitoring and faster clinical response.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">The challenge</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Extreme class imbalance (~98% non-seizure), 23-channel signals at 256Hz, patient-specific seizure morphologies, and the need for robust cross-patient generalization.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* TARGET METRICS */}
        <section id="impact" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// target metrics'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Target Metrics</h2>
            <div className="mt-8">
              <ImpactCounter
                metrics={[
                  { label: "Target Accuracy", value: "~95%" },
                  { label: "Patients", value: "22" },
                  { label: "Feature Methods", value: "5" },
                  { label: "Status", value: "Active" },
                ]}
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

          {/* Data Pipeline */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Data Pipeline</h3>
            <p className="text-[var(--muted)] mt-2">
              Raw EDF files from the CHB-MIT dataset are parsed channel-by-channel, segmented into fixed-length windows (2s with 50% overlap), and labeled using seizure onset/offset annotations. Channels are standardized per-patient to handle amplitude variation.
            </p>
            <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 mt-4">
              <p className="font-mono text-sm text-[var(--fg)]">
                EDF Files → Channel Extraction → 2s Windowing → Z-Score Normalization → Feature Extraction → Train/Val/Test Split
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Engineering */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Feature Engineering</h3>
            <p className="text-[var(--muted)] mt-2">
              Five complementary feature extraction methods capture different aspects of the EEG signal for classification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                ["Time-domain", "Statistical moments, zero-crossings, line length, Hjorth parameters"],
                ["Frequency-domain", "Band power (delta, theta, alpha, beta, gamma), spectral entropy, peak frequency"],
                ["Wavelet", "Multi-level discrete wavelet transform coefficients and energy distribution"],
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

          {/* Stratification */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Stratified Evaluation</h3>
            <p className="text-[var(--muted)] mt-2">
              Patient-wise stratified splitting ensures no data leakage between train and test sets. SMOTE and class-weighted loss functions address the severe class imbalance, while leave-one-patient-out cross-validation tests generalization.
            </p>
          </ScrollReveal>
        </section>

        {/* STATUS */}
        <section id="status" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// status'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">Current Status</h2>
            <div className="bg-[var(--card)] border border-amber-500/20 rounded-xl p-6 mt-6">
              <p className="text-[var(--fg)]">
                This project is actively being developed as part of Spring 2026 coursework at George Washington University. The data pipeline and feature extraction modules are complete; model training and evaluation are in progress.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-400">✅</span>
                  <span className="text-[var(--fg)]">Data pipeline &amp; preprocessing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-400">✅</span>
                  <span className="text-[var(--fg)]">Feature extraction (5 methods)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400">🔄</span>
                  <span className="text-[var(--fg)]">Model training &amp; hyperparameter tuning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--muted)]">⬜</span>
                  <span className="text-[var(--muted)]">Cross-patient evaluation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--muted)]">⬜</span>
                  <span className="text-[var(--muted)]">Final report &amp; documentation</span>
                </div>
              </div>
            </div>
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
