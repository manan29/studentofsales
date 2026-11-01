import type { Metadata } from "next";
import { getAllMoves, getAllResources } from "@/lib/content";
import { Library } from "./Library";

export const metadata: Metadata = {
  title: "All resources",
  description: "Every book, post and video on Student of Sales, with the career moves each one belongs to.",
};

export default function ResourcesPage() {
  const moves = getAllMoves();
  const rows = getAllResources().map((r) => ({
    ...r,
    moves: moves.filter((m) => m.path.some((p) => p.resource === r.slug)).map((m) => ({ slug: m.slug, title: m.title })),
  }));
  return (
    <main className="page pb-20 pt-12">
      <h1 className="display text-[clamp(36px,4.6vw,54px)]">All resources</h1>
      <p className="mt-3 max-w-[620px] text-lg text-muted">
        The full library. For a short, ordered path with notes, start from a career move instead.
      </p>
      <Library rows={rows} />
    </main>
  );
}
