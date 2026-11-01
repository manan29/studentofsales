import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page pb-24 pt-16">
      <h1 className="display text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-muted">That page doesn&apos;t exist, or it moved.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/start" className="btn btn-primary">Find my path</Link>
        <Link href="/moves" className="btn btn-secondary">See all moves</Link>
      </div>
    </main>
  );
}
