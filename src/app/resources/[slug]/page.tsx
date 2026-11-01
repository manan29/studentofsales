import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllResources, getMovesForResource, getNotesForResource, getResource } from "@/lib/content";
import { byline } from "@/components/PathList";
import { CuratorAvatar, curatorCredentials } from "@/components/Curator";
import { curator } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getResource((await params).slug);
  if (!r) return {};
  return { title: r.title, description: r.summary, alternates: { canonical: `/resources/${r.slug}` } };
}

const ctaLabel: Record<string, string> = {
  Amazon: "View on Amazon",
  LinkedIn: "Open on LinkedIn",
};

export default async function ResourcePage({ params }: Props) {
  const resource = getResource((await params).slug);
  if (!resource) notFound();
  const onMoves = getMovesForResource(resource.slug);
  const notes = getNotesForResource(resource.slug);
  const creds = curatorCredentials();

  return (
    <main className="page pb-20 pt-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/resources">All resources</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{resource.title}</span>
      </nav>

      <div className="mt-7 flex flex-wrap items-start gap-x-12 gap-y-8">
        <article className="min-w-0 flex-[2_1_520px]">
          <p className="meta">{byline(resource)}</p>
          <h1 className="display mt-2 text-[clamp(34px,4.2vw,52px)]">{resource.title}</h1>
          <p className="mt-3 max-w-[620px] text-lg text-muted">{resource.summary}</p>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg mt-7"
          >
            {ctaLabel[resource.source] ?? "Open"} ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>

          {notes.map((note) => (
            <figure key={note.moves[0].slug} className="card mt-8 p-6 shadow-[var(--shadow-raised)] sm:p-7">
              <p className="text-sm font-semibold text-accent">
                Why read this now ·{" "}
                {note.moves.map((m, i) => (
                  <span key={m.slug}>
                    {i ? ", " : ""}
                    <Link href={`/moves/${m.slug}`}>{m.title}</Link>
                  </span>
                ))}
              </p>
              <blockquote className="mt-2 font-display text-[22px] font-medium leading-snug tracking-[-0.015em]">
                {note.whyNow}
              </blockquote>
              <div className="mt-5 rounded-xl bg-sand-soft px-4 py-3.5 text-base">
                <strong className="font-semibold">Try this week: </strong>
                {note.tryThisWeek}
              </div>
              <figcaption className="mt-5 flex items-center gap-3">
                <CuratorAvatar />
                <span className="text-[15px] leading-snug">
                  <strong className="font-semibold">{curator.name}</strong>
                  {creds ? (
                    <>
                      <br />
                      <span className="text-muted">{creds}</span>
                    </>
                  ) : null}
                </span>
              </figcaption>
            </figure>
          ))}
        </article>

        {onMoves.length ? (
          <aside className="min-w-0 flex-[1_1_280px] rounded-2xl bg-sand p-6">
            <h2 className="mb-3 text-[13px] font-semibold text-muted">On these paths</h2>
            <ul className="flex list-none flex-col gap-5 p-0">
              {onMoves.map(({ move, position, next }) => (
                <li key={move.slug}>
                  <Link href={`/moves/${move.slug}`} className="font-semibold text-ink hover:text-ink">
                    {move.title}
                  </Link>
                  <p className="meta">
                    Pick {position} of {move.path.length}
                  </p>
                  {next ? (
                    <p className="mt-1.5 text-[15px]">
                      Up next: <Link href={`/resources/${next.slug}`}>{next.title}</Link>
                    </p>
                  ) : (
                    <p className="mt-1.5 text-[15px] text-muted">Last pick on this path.</p>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </main>
  );
}
