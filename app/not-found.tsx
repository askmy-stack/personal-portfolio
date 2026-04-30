import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Lost in latent space",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="container-editorial">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)] mb-6">
          404 · not found
        </p>
        <h1 className="text-display-xl text-[var(--fg)] leading-[0.9]">
          Lost in <span className="text-[var(--accent)]">latent space.</span>
        </h1>
        <p className="text-body-lg text-[var(--fg-muted)] mt-8 max-w-xl">
          This route doesn’t exist — or maybe it hasn’t been trained yet. Head home and try
          another path.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-12 font-mono text-sm text-[var(--accent)] hover:text-[var(--fg)] transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </section>
  );
}
