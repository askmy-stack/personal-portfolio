"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/lib/constants";

const subjects = [
  "Full-time Opportunity",
  "Freelance Project",
  "Research Collaboration",
  "Just Saying Hi",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.subject) errs.subject = "Please select a subject";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
      const body = encodeURIComponent(
        `Hi Abhinaysai,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(
        `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
        "_self"
      );
      setTimeout(() => {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: siteConfig.email,
        },
        publicKey
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("idle");
      setErrors({ message: "Failed to send. Please email me directly." });
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-[var(--glass-border)] px-0 py-3 text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:border-[var(--accent)] focus:outline-none transition text-sm";

  return (
    <section id="contact" className="py-32">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="08" label="Contact" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-4">
            {/* Form */}
            <div>
              {status === "sent" ? (
                <div className="py-12">
                  {/* Lime checkmark */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-6"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="23"
                      stroke="var(--accent)"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 24l7 7 13-13"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="display-heading text-2xl text-[var(--fg)]">
                    Message received.
                  </h3>
                  <p className="text-[var(--fg-secondary)] mt-2">
                    We&apos;ll talk soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[var(--accent)] text-sm font-medium hover:text-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)] mb-1 block"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputBase}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)] mb-1 block"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={inputBase}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject pills */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)] mb-3 block">
                      Subject
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm({ ...form, subject: s })}
                          className={`text-xs px-4 py-2 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
                            form.subject === s
                              ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]"
                              : "bg-transparent text-[var(--fg-secondary)] border-[var(--glass-border)] hover:border-[var(--accent)] hover:text-[var(--fg)]"
                          }`}
                          style={{ borderRadius: 4 }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    {errors.subject && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)] mb-1 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Your message..."
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputBase} resize-none border border-[var(--glass-border)] px-4 focus:border-[var(--accent)]`}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[var(--accent)] text-[var(--bg)] px-8 py-3 text-sm font-semibold tracking-wide hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                    style={{ borderRadius: 4 }}
                  >
                    {status === "sending" ? "SENDING..." : "SEND MESSAGE →"}
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-8 lg:pt-8">
              <div className="border-l-2 border-[var(--accent)] pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)]">
                  Based in
                </span>
                <p className="text-sm text-[var(--fg)] font-medium mt-1">
                  {siteConfig.location}
                </p>
              </div>

              <div className="flex gap-6">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-mono">LinkedIn</span>
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-mono">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
