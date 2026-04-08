interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
  highlightColumns?: number[];
}

export default function ComparisonTable({
  headers,
  rows,
  highlightColumns = [],
}: ComparisonTableProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl overflow-hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--card-border)]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-mono text-xs text-[var(--accent)] uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-[var(--card-border)] last:border-0 ${
                ri % 2 === 1 ? "bg-[var(--card-border-20)]" : ""
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${
                    highlightColumns.includes(ci)
                      ? "text-[var(--accent)] font-bold font-mono"
                      : "text-[var(--fg)]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
