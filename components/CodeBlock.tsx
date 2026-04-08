interface CodeBlockProps {
  code: string;
  filename: string;
}

export default function CodeBlock({ code, filename }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="glass rounded-xl overflow-hidden">
      {/* Top bar */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-[var(--glass-border)]">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="flex-1 text-center font-mono text-xs text-[var(--muted)]">
          {filename}
        </span>
      </div>
      {/* Code area */}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-[var(--muted)] inline-block mr-4 w-6 text-right shrink-0">
              {i + 1}
            </span>
            <span className="text-[var(--fg)]">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
