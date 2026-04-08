"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -70% 0px" }
    );
    const ids = ["about", "projects", "skills", "experience", "capabilities", "writings", "contact", "certifications"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--glass)] backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Solid accent border bottom — shows on scroll */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "var(--accent)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
          aria-label="AskMyStack — Home"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            {/* Left bracket — monochrome */}
            <path
              d="M10 5 L3 16 L10 27"
              stroke="var(--fg)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right bracket — monochrome */}
            <path
              d="M22 5 L29 16 L22 27"
              stroke="var(--fg)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center node — accent */}
            <circle
              cx="16"
              cy="16"
              r="3"
              fill="var(--accent)"
            />
          </svg>
          <span className="font-mono font-bold text-[var(--fg)] text-sm tracking-tight group-hover:text-[var(--accent)] transition-colors">
            AskMyStack
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded ${
                  isActive ? "text-[var(--accent)]" : "text-[var(--fg-secondary)] hover:text-[var(--fg)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[var(--glass)] border border-[var(--glass-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
          <a
            href="/resume.pdf"
            download
            className="group text-xs font-mono bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm px-4 py-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-medium flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            resume.pdf
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform group-hover:translate-y-0.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm bg-[var(--glass)] border border-[var(--glass-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          aria-label="Open menu"
        >
          <div className="space-y-1.5">
            <span className="block w-4 h-0.5 bg-[var(--fg)]" />
            <span className="block w-4 h-0.5 bg-[var(--fg)]" />
            <span className="block w-4 h-0.5 bg-[var(--fg)]" />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--bg)] flex flex-col">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 5 L3 16 L10 27" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 5 L29 16 L22 27" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="16" r="3" fill="var(--accent)" />
              </svg>
              <span className="font-mono text-base text-[var(--fg)] font-bold">AskMyStack</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[var(--glass)] border border-[var(--glass-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                style={{
                  animation: `fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms forwards`,
                  opacity: 0,
                }}
              >
                <span className="text-[var(--fg-muted)] font-mono text-sm mr-3">0{index + 1}.</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 px-8 pb-12">
            {/* Mobile theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center rounded-sm bg-[var(--glass)] border border-[var(--glass-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}
            <a
              href="/resume.pdf"
              download
              className="group text-sm font-mono bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm px-6 py-2.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            >
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
