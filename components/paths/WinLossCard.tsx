import { WinLossEntry } from "@/lib/types";

export default function WinLossCard({ entry }: { entry: WinLossEntry }) {
  const isWin = entry.outcome === "win";

  return (
    <div className="rounded border border-line bg-surface px-4 py-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-heading font-medium">{entry.title}</div>
          <p className="text-body text-sm mt-1">{entry.summary}</p>
        </div>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-xs font-semibold uppercase ${
            isWin ? "bg-win/15 text-win" : "bg-loss/15 text-loss"
          }`}
        >
          {entry.outcome}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-body text-xs">
        <button
          type="button"
          disabled
          className="flex items-center gap-1.5 rounded border border-line px-2.5 py-1 opacity-60 cursor-not-allowed"
          aria-label="Audio not yet available"
        >
          <span aria-hidden>▶</span> Listen
        </button>
        <span>{entry.durationLabel}</span>
        <span className="ml-auto italic">Audio coming soon</span>
      </div>
    </div>
  );
}
