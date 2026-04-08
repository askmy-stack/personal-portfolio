"use client";

import { useState, useEffect } from "react";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer>
        {/* CTA Banner */}
        <div
          className="relative overflow-hidden py-16 px-6 border-t border-[var(--glass-border)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,241,53,0.06) 0%, transparent 60%)",
          }}
        >
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="display-heading text-3xl md:text-4xl text-[var(--fg)]">
              Ready to Build{" "}
              <span className="text-[var(--accent)]">Together</span>?
            </h2>
            <p className="text-[var(--fg-secondary)] mt-4 text-lg max-w-xl mx-auto">
              Open to full-time roles in Data Engineering &amp; MLOps
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] px-7 py-3 text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                style={{ borderRadius: 4 }}
              >
                Get in touch →
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 font-mono text-sm border border-[var(--glass-border)] text-[var(--fg-secondary)] px-7 py-3 font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                style={{ borderRadius: 4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                resume.pdf
              </a>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="border-t border-[var(--glass-border)]">
          <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Contact */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                Contact
              </h3>
              <div className="border-l-2 border-[var(--accent)] pl-3">
                <span className="text-sm text-[var(--fg-secondary)] font-mono">
                  {siteConfig.location}
                </span>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                Explore
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                Follow
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors font-mono"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors font-mono"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                Status
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                  style={{ animation: "pulse 2s ease-in-out infinite" }}
                />
                <span className="text-sm text-[var(--fg)]">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--glass-border)]">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-[var(--fg-muted)]">
              © {new Date().getFullYear()} {siteConfig.name}
            </span>
            <span className="text-xs font-mono text-[var(--fg-muted)]">
              Next.js · Tailwind CSS · TypeScript
            </span>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 w-10 h-10 bg-[var(--card)] border border-[var(--glass-border)] text-[var(--accent)] flex items-center justify-center hover:border-[var(--accent)] transition-all z-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ borderRadius: 4 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
