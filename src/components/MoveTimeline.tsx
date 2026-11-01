import Link from "next/link";
import type { Move } from "@/content/types";

export function MoveTimeline({ moves }: { moves: Move[] }) {
  return (
    <ol className="max-w-[860px] list-none p-0">
      {moves.map((m, i) => (
        <li key={m.slug} className="flex gap-6">
          <div aria-hidden="true" className="flex w-10 shrink-0 flex-col items-center">
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong bg-white text-[15px] font-semibold shadow-[var(--shadow-card)]">
              {i + 1}
            </span>
            {i < moves.length - 1 ? <span className="mt-1.5 w-px flex-1 bg-line-strong" /> : null}
          </div>
          <div className="min-w-0 flex-1 pb-10 pt-1">
            <h3 className="heading text-[26px]">
              <Link href={`/moves/${m.slug}`} className="text-ink no-underline hover:text-ink hover:underline">
                {m.title}
              </Link>
            </h3>
            <p className="mt-1.5 max-w-[560px] text-muted">{m.blurb}</p>
            <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <Link href={`/moves/${m.slug}`} className="btn btn-secondary" aria-label={`See this move: ${m.title}`}>
                See this move →
              </Link>
              <span className="text-sm text-muted">
                {m.take ? "My take · " : ""}
                {m.path.length} {m.path.length === 1 ? "pick" : "picks"}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
