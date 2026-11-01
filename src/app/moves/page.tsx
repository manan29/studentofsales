import type { Metadata } from "next";
import Link from "next/link";
import { getAllMoves, getTimelineMoves } from "@/lib/content";
import { MoveTimeline } from "@/components/MoveTimeline";

export const metadata: Metadata = {
  title: "Career moves",
  description: "Every move in a sales career, from breaking in to leading a sales org.",
};

export default function MovesPage() {
  const timeline = getTimelineMoves();
  const levelUp = getAllMoves().filter((m) => m.timelineOrder === undefined);
  return (
    <main className="page pb-20 pt-12">
      <div className="mb-10 max-w-[860px]">
        <h1 className="display text-[clamp(36px,4.6vw,54px)]">Career moves</h1>
        <p className="mt-3 text-lg text-muted">
          Pick the move you&apos;re making. Not sure?{" "}
          <Link href="/start">Answer two questions</Link>.
        </p>
      </div>
      <MoveTimeline moves={timeline} />
      <section aria-labelledby="levelup-h" className="mt-6 max-w-[860px]">
        <h2 id="levelup-h" className="heading text-2xl">Staying in your role?</h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {levelUp.map((m) => (
            <Link key={m.slug} href={`/moves/${m.slug}`} className="btn btn-secondary font-medium">
              {m.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
