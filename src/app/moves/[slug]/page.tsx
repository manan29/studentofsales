import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllMoves, getMove, getResource, getTimelineMoves } from "@/lib/content";
import { TakeCard } from "@/components/TakeCard";
import { PathList } from "@/components/PathList";
import { MyPathBadge } from "./MyPathBadge";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllMoves().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const move = getMove((await params).slug);
  if (!move) return {};
  return { title: move.title, description: move.blurb, alternates: { canonical: `/moves/${move.slug}` } };
}

export default async function MovePage({ params }: Props) {
  const move = getMove((await params).slug);
  if (!move) notFound();

  const items = move.path.flatMap((item) => {
    const resource = getResource(item.resource);
    return resource ? [{ item, resource }] : [];
  });
  const others = getTimelineMoves().filter((m) => m.slug !== move.slug);

  return (
    <main className="page pb-20 pt-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/moves">Career moves</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{move.title}</span>
      </nav>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div className="min-w-0 flex-[2_1_520px]">
          <MyPathBadge slug={move.slug} />
          <h1 className="display text-[clamp(36px,4.6vw,56px)]">{move.title}</h1>
          <p className="mt-3.5 max-w-[620px] text-[19px] text-muted">{move.blurb}</p>
        </div>
        <Link href="/start" className="btn btn-secondary">Change my path</Link>
      </div>

      <TakeCard take={move.take} />

      <h2 className="heading mt-12 text-[28px]">The path</h2>
      <p className="mb-4 mt-1 text-[15px] text-muted">
        Read in this order · {items.length} {items.length === 1 ? "pick" : "picks"}
      </p>
      <PathList items={items} />

      {others.length ? (
        <div className="mt-12">
          <h2 className="mb-3 text-[15px] font-semibold text-muted">Other moves</h2>
          <div className="flex flex-wrap gap-2.5">
            {others.map((m) => (
              <Link key={m.slug} href={`/moves/${m.slug}`} className="btn btn-secondary font-medium">
                {m.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </main>
  );
}
