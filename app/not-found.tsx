import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        <div className="glass rounded-xl overflow-hidden">
          {/* Top bar */}
          <div className="px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="flex-1 text-center font-mono text-xs text-[var(--muted)]">
              terminal
            </span>
          </div>
          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p>
              <span className="text-[var(--accent)]">visitor</span>
              <span className="text-[var(--fg)]">@</span>
              <span className="text-[var(--accent-secondary)]">
                abhinaysai.dev
              </span>
              <span className="text-[var(--fg)]">:~$ </span>
              <span className="text-[var(--fg)]">cd /page</span>
            </p>
            <p className="text-red-400 mt-2">
              bash: cd: /page: No such file or directory
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h1
            className="font-heading font-bold text-[var(--fg)]"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            <span className="text-[var(--accent)]">4</span>0
            <span className="text-[var(--accent)]">4</span>
          </h1>
          <p className="text-[var(--muted)] mt-2">
            This page doesn&apos;t exist in this universe.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 bg-[var(--accent)] text-[var(--bg)] rounded-full px-8 py-3 font-medium hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            Return Home →
          </Link>
        </div>
      </div>
    </div>
  );
}
