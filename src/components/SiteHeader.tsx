import Link from "next/link";
import { MyPathButton } from "./MyPathButton";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 py-2 text-ink no-underline hover:text-ink">
          <span aria-hidden="true" className="inline-flex size-[30px] items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-paper">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Student of Sales</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[15px]">
          <Link href="/moves" className="py-2.5 font-medium text-ink no-underline hover:text-ink hover:underline">
            Career moves
          </Link>
          <Link href="/resources" className="py-2.5 font-medium text-ink no-underline hover:text-ink hover:underline">
            All resources
          </Link>
          <MyPathButton />
        </nav>
      </div>
    </header>
  );
}
