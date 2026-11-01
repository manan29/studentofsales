import Link from "next/link";
import { getAllResources, getTimelineMoves } from "@/lib/content";
import { curator } from "@/content/site";
import { MoveTimeline } from "@/components/MoveTimeline";
import { CuratorAvatar, curatorCredentials } from "@/components/Curator";

export default function HomePage() {
  const moves = getTimelineMoves();
  const total = getAllResources().length;
  const creds = curatorCredentials();

  return (
    <main>
      <section className="page pb-12 pt-16 sm:pt-20">
        <div className="max-w-[820px]">
          <h1 className="display text-[clamp(38px,5.4vw,64px)]">
            Skip the noise. Get a plan for your next career move in sales.
          </h1>
          <p className="mt-5 max-w-[600px] text-[19px] text-muted">
            Tell us where you are and where you want to go. Get a practitioner&apos;s take on what changes, a short
            reading path, and one thing to try each week.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/start" className="btn btn-primary btn-lg">Find my path</Link>
            <Link href="#moves" className="btn btn-lg px-2! font-semibold text-ink hover:text-ink hover:underline">
              Or browse all moves ↓
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6 text-[15px] text-muted">
            <span className="flex items-center gap-2.5">
              <CuratorAvatar size={34} />
              <span>
                Written by <strong className="font-semibold text-ink">{curator.name}</strong>
                {creds ? ` · ${creds}` : ""}
              </span>
            </span>
            <span aria-hidden="true" className="text-line-strong">|</span>
            <span>
              {moves.length} career moves · {total} hand-picked resources
            </span>
          </div>
        </div>
      </section>

      <section id="moves" aria-labelledby="moves-h" className="page scroll-mt-6 pb-20 pt-8">
        <div className="mb-10 max-w-[860px]">
          <h2 id="moves-h" className="heading text-[clamp(30px,3.6vw,42px)] tracking-[-0.03em]">
            The moves in a sales career
          </h2>
          <p className="mt-3 text-lg text-muted">
            Each one comes with my take on what changes, what to read, and what to try.
          </p>
        </div>
        <MoveTimeline moves={moves} />
      </section>

      <section className="border-y border-line bg-sand">
        <div className="page flex flex-wrap items-start gap-x-16 gap-y-8 py-16">
          <h2 className="heading min-w-0 flex-[1_1_300px] text-[34px] tracking-[-0.03em]">
            Not another
            <br />
            reading list.
          </h2>
          <ul className="flex min-w-0 flex-[2_1_480px] list-none flex-wrap gap-4 p-0">
            <Point title="A take, not a list" body="Every move starts with what actually changes, from someone who's made it." />
            <Point title="Short, in order" body="3–5 picks per move, each with a note on why it matters now." />
            <Point title="Something to do" body="Each pick ends with one thing to try this week." />
          </ul>
        </div>
      </section>

      <section className="page flex flex-wrap items-center justify-between gap-5 py-14">
        <div className="min-w-0 flex-[1_1_360px]">
          <h2 className="heading text-2xl">Looking for something specific?</h2>
          <p className="mt-1 text-base text-muted">The full library sits behind the moves.</p>
        </div>
        <Link href="/resources" className="btn btn-secondary">Browse all {total} resources</Link>
      </section>
    </main>
  );
}

function Point({ title, body }: { title: string; body: string }) {
  return (
    <li className="card flex-[1_1_200px] p-5">
      <strong className="block font-semibold">{title}</strong>
      <span className="text-[15px] text-muted">{body}</span>
    </li>
  );
}
