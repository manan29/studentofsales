"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Resource } from "@/content/types";

type Row = Resource & { moves: { slug: string; title: string }[] };

export function Library({ rows }: { rows: Row[] }) {
  const formats = useMemo(() => Array.from(new Set(rows.map((r) => r.format))), [rows]);
  const [format, setFormat] = useState<string>("All");
  const shown = format === "All" ? rows : rows.filter((r) => r.format === format);

  return (
    <>
      <div role="group" aria-label="Filter by format" className="mt-8 flex flex-wrap gap-2">
        {["All", ...formats].map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={format === f}
            onClick={() => setFormat(f)}
            className={`btn ${format === f ? "btn-primary" : "btn-secondary font-medium"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {shown.length} {shown.length === 1 ? "resource" : "resources"}
      </p>
      <ul className="mt-3 flex list-none flex-col gap-3 p-0">
        {shown.map((r) => (
          <li key={r.slug} className="card flex flex-wrap items-start justify-between gap-x-6 gap-y-2 p-5">
            <div className="min-w-0 flex-[1_1_360px]">
              <p className="meta">{[r.format, r.author, r.source].filter(Boolean).join(" · ")}</p>
              <h2 className="heading mt-0.5 text-xl">
                <Link href={`/resources/${r.slug}`} className="link-quiet">{r.title}</Link>
              </h2>
              <p className="mt-1 text-[15px] text-muted">{r.summary}</p>
            </div>
            {r.moves.length ? (
              <p className="flex-[0_1_280px] text-sm text-muted">
                On:{" "}
                {r.moves.map((m, i) => (
                  <span key={m.slug}>
                    {i ? ", " : ""}
                    <Link href={`/moves/${m.slug}`}>{m.title}</Link>
                  </span>
                ))}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
