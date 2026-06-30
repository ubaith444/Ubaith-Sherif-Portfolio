const coverThemes: Record<string, { label: string; nodes: string[]; bars: number[] }> = {
  agents: { label: "Agent runtime", nodes: ["Plan", "Tools", "Review", "Audit"], bars: [64, 42, 88, 72] },
  workflow: { label: "LangGraph flow", nodes: ["Input", "Node", "Edge", "Checkpoint"], bars: [42, 76, 58, 90] },
  rag: { label: "Retrieval layer", nodes: ["Docs", "Chunks", "Vectors", "Sources"], bars: [72, 54, 92, 68] },
  fastapi: { label: "API boundary", nodes: ["Schema", "Queue", "Stream", "Logs"], bars: [58, 84, 48, 76] },
  systems: { label: "Scale map", nodes: ["Gateway", "Workers", "Cache", "Eval"], bars: [52, 68, 86, 62] },
  enterprise: { label: "Automation OS", nodes: ["Policy", "Webhook", "Approval", "Report"], bars: [80, 46, 74, 88] }
};

export function BlogCover({ type }: { type: string }) {
  const theme = coverThemes[type] ?? coverThemes.agents;

  return (
    <div
      aria-label={`${theme.label} technical article cover illustration`}
      className="relative aspect-[16/9] overflow-hidden rounded-[8px] bg-zinc-950 p-4 text-white"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(59,130,246,0.30),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.22),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.3),rgba(2,6,23,0.9))]" />
      <div className="grid-overlay absolute inset-0 opacity-20" />
      <div className="relative grid h-full grid-cols-[1.05fr_0.95fr] gap-3">
        <div className="rounded-[8px] border border-white/10 bg-white/8 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.18em] text-blue-200">{theme.label}</p>
          <svg className="mt-5 h-[58%] w-full" viewBox="0 0 260 150" aria-hidden="true">
            <path d="M35 76h64M126 38h62M126 112h62M99 76l27-38M99 76l27 36" stroke="#60a5fa" strokeLinecap="round" strokeWidth="4" />
            <path d="M188 38l38 38-38 36" fill="none" stroke="#a78bfa" strokeLinecap="round" strokeWidth="4" />
            {[
              [35, 76],
              [99, 76],
              [126, 38],
              [126, 112],
              [188, 38],
              [188, 112],
              [226, 76]
            ].map(([cx, cy], index) => (
              <circle className="pulse-soft" cx={cx} cy={cy} fill={index % 2 ? "#60a5fa" : "#a78bfa"} key={`${cx}-${cy}`} r="10" />
            ))}
          </svg>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {theme.nodes.map((node) => (
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-blue-100" key={node}>
                {node}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[8px] border border-white/10 bg-black/22 p-3">
            <div className="flex h-28 items-end gap-2">
              {theme.bars.map((height, index) => (
                <span
                  className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-purple-300"
                  key={index}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-white/8 p-3">
            <span className="block h-2 w-20 rounded bg-blue-300" />
            <span className="mt-3 block h-2 w-full rounded bg-white/20" />
            <span className="mt-2 block h-2 w-2/3 rounded bg-purple-300/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
