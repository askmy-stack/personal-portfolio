export default function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6" aria-hidden="true">
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-[var(--glass-border)]" />
        <span className="font-mono text-[10px] text-[var(--fg-muted)] tracking-widest select-none">
          ·
        </span>
        <div className="flex-1 h-px bg-[var(--glass-border)]" />
      </div>
    </div>
  );
}
