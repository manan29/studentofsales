import type { Metadata } from "next";
import Link from "next/link";
import { pendingMoveTitle, roles, targets } from "@/content/site";
import type { RoleId, TargetId } from "@/content/types";
import { getTimelineMoves } from "@/lib/content";

export const metadata: Metadata = { title: "This move isn't written yet", robots: { index: false } };

type Props = { searchParams: Promise<{ from?: string; to?: string }> };

export default async function NotYetPage({ searchParams }: Props) {
  const { from, to } = await searchParams;
  const valid = !!from && from in roles && !!to && to in targets;
  const title = valid ? pendingMoveTitle(from as RoleId, to as TargetId) : "This move";

  return (
    <main className="page pb-20 pt-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/moves">Career moves</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{title}</span>
      </nav>
      <h1 className="display mt-6 text-[clamp(36px,4.6vw,56px)]">{title}</h1>
      <div className="mt-10 rounded-2xl border border-dashed border-[#c9c5b5] bg-white px-7 py-10">
        <h2 className="heading text-2xl">This move isn&apos;t written yet</h2>
        <p className="mt-2 max-w-[580px] text-base text-muted">
          I&apos;d rather leave it empty than fill it with filler. Until it&apos;s ready, the closest moves below may
          help.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/start" className="btn btn-secondary">Change my path</Link>
          <Link href="#newsletter" className="btn btn-primary">Get the weekly note</Link>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-3 text-[15px] font-semibold text-muted">Moves that are ready</h2>
        <div className="flex flex-wrap gap-2.5">
          {getTimelineMoves().map((m) => (
            <Link key={m.slug} href={`/moves/${m.slug}`} className="btn btn-secondary font-medium">
              {m.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
