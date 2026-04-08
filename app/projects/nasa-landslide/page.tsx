import type { Metadata } from "next";
import Link from "next/link";
import ProjectNav from "@/components/ProjectNav";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactCounter from "@/components/ImpactCounter";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "NASA Landslide Predictive Analysis | Abhinaysai Kamineni",
  description:
    "Containerized geospatial ML pipeline with full CI/CD and Terraform IaC for NASA landslide risk prediction.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "impact", label: "Impact" },
  { id: "solution", label: "Solution" },
  { id: "deep-dive", label: "Deep Dive" },
  { id: "results", label: "Results" },
];

const ghaCode = `name: ML Pipeline CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.11"
      - run: pip install -r requirements.txt
      - run: pytest tests/ -v --cov=src

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/nasa-landslide:latest`;

const dockerGdalCode = `FROM osgeo/gdal:ubuntu-full-3.8.0

WORKDIR /app
RUN apt-get update && apt-get install -y python3-pip
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ ./src/
COPY data/config.yaml ./config.yaml
ENTRYPOINT ["python3", "src/pipeline.py"]`;

const terraformCode = `provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "data" {
  bucket = "nasa-landslide-\${var.env}"
  tags   = { Project = "nasa-landslide" }
}

resource "aws_ecr_repository" "pipeline" {
  name = "nasa-landslide-pipeline"
}

resource "aws_ecs_task_definition" "train" {
  family                   = "landslide-train"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "4096"
  memory                   = "16384"
  container_definitions    = jsonencode([{
    name  = "train"
    image = aws_ecr_repository.pipeline.repository_url
    logConfiguration = {
      logDriver = "awslogs"
    }
  }])
}`;

export default function NASALandslidePage() {
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
              <span className="text-[var(--fg)]">NASA Landslide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)]">
              NASA Landslide Predictive Analysis
            </h1>
            <p className="text-lg text-[var(--accent)] font-mono mt-3">
              Time Series Modeling for Geospatial Risk
            </p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-[var(--muted)]">
              <span><strong className="text-[var(--fg)]">Role:</strong> MLOps &amp; Infrastructure Engineer</span>
              <span><strong className="text-[var(--fg)]">Timeline:</strong> Aug 2024 — Dec 2024</span>
              <span><strong className="text-[var(--fg)]">Affiliation:</strong> George Washington University</span>
            </div>
            <div className="h-48 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl mt-8" />
          </ScrollReveal>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="py-24">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--muted)]">{'// problem'}</span>
            <h2 className="text-3xl font-heading font-bold text-[var(--fg)] mt-2">The Problem</h2>
            <p className="text-xl text-[var(--fg)] mt-6 leading-relaxed">
              Landslide prediction requires fusing heterogeneous geospatial data — satellite imagery, soil moisture, precipitation, slope, and land cover — into a coherent ML pipeline. Most academic approaches run as one-off scripts with no reproducibility, no CI/CD, and no infrastructure-as-code.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">Why it matters</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Landslides kill thousands yearly and cause billions in damage. Accurate, operationalized prediction models can save lives through early warning systems.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="font-heading font-semibold text-[var(--fg)]">The challenge</h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Complex GDAL dependencies, large raster datasets, multi-stage processing pipelines, and the need for fully automated, reproducible infrastructure from development to deployment.
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
                  { label: "Faster Iterations", value: "70%" },
                  { label: "Infrastructure as Code", value: "100%" },
                  { label: "Stages Automated", value: "3" },
                  { label: "Manual Steps", value: "0" },
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
              A fully containerized geospatial ML pipeline with GitHub Actions CI/CD, Docker for environment isolation (including GDAL), and Terraform for provisioning all AWS infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {["Data Ingestion", "GDAL Processing", "Feature Engineering", "Model Training", "Terraform Deploy"].map((step, i) => (
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

          {/* CI/CD */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">CI/CD Pipeline</h3>
            <p className="text-[var(--muted)] mt-2">
              GitHub Actions handles testing, building, and pushing Docker images on every commit. The pipeline runs unit tests, validates data schemas, and builds production containers.
            </p>
            <div className="mt-4">
              <CodeBlock filename=".github/workflows/pipeline.yml" code={ghaCode} />
            </div>
          </ScrollReveal>

          {/* Containerization */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Containerization</h3>
            <p className="text-[var(--muted)] mt-2">
              GDAL is notoriously difficult to install consistently. Using the official osgeo/gdal base image ensures identical geospatial library versions across all environments.
            </p>
            <div className="mt-4">
              <CodeBlock filename="Dockerfile" code={dockerGdalCode} />
            </div>
          </ScrollReveal>

          {/* IaC */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Infrastructure as Code</h3>
            <p className="text-[var(--muted)] mt-2">
              All AWS resources — S3 buckets, ECR repositories, ECS task definitions — are provisioned via Terraform. No manual console clicks, ever.
            </p>
            <div className="mt-4">
              <CodeBlock filename="main.tf" code={terraformCode} />
            </div>
          </ScrollReveal>

          {/* Key Decisions */}
          <ScrollReveal>
            <h3 className="text-xl font-heading font-semibold text-[var(--fg)]">Key Decisions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
                <h4 className="font-mono text-sm text-[var(--accent)]">Terraform over CloudFormation</h4>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Multi-cloud portability, better state management, and HCL is more readable than JSON/YAML for infrastructure definitions.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
                <h4 className="font-mono text-sm text-[var(--accent)]">GitHub Actions + Jenkins hybrid</h4>
                <p className="text-sm text-[var(--muted)] mt-2">
                  GHA for lightweight CI (tests, builds). Jenkins for heavier orchestration jobs that require GPU access or long-running training.
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
              The fully automated pipeline reduced iteration time by 70% and eliminated all manual infrastructure steps, making the project reproducible from a single git clone.
            </p>
            <div className="space-y-3 mt-6">
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>Zero manual steps from code push to deployed model</p>
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>Terraform state enables safe, incremental infrastructure changes</p>
              <p className="text-[var(--fg)]"><span className="text-green-400 mr-2">✅</span>Docker solved the &quot;GDAL works on my machine&quot; problem permanently</p>
              <p className="text-[var(--fg)]"><span className="text-[var(--accent)] mr-2">→</span>Would add model registry (MLflow) for versioned model tracking</p>
              <p className="text-[var(--fg)]"><span className="text-[var(--accent)] mr-2">→</span>Would implement A/B testing for model deployment rollouts</p>
            </div>
            <p className="text-[var(--muted)] mt-6 italic">
              This project cemented my conviction that MLOps infrastructure is not overhead — it&apos;s the foundation that makes ML research reproducible and deployable.
            </p>
          </ScrollReveal>
        </section>

        {/* BOTTOM NAV */}
        <div className="flex items-center justify-between py-12 border-t border-[var(--card-border)]">
          <Link href="/projects/byu-flagellar-motors" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm">
            ← BYU Flagellar Motors
          </Link>
          <Link href="/projects/eeg-seizure-detection" className="text-[var(--accent)] hover:opacity-80 transition-opacity text-sm font-medium">
            Next: EEG Seizure Detection →
          </Link>
        </div>
      </div>
    </>
  );
}
