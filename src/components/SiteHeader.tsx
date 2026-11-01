import Link from "next/link";
import { MyPathButton } from "./MyPathButton";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="page flex items-center justify-between gap-x-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 py-2 text-ink no-underline hover:text-ink">
          <span aria-hidden="true" className="inline-flex size-[30px] items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-paper">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight max-[420px]:sr-only">Student of Sales</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-x-5 text-[15px]">
          <Link href="/moves" className="py-2.5 font-medium text-ink no-underline hover:text-ink hover:underline">
            Career moves
          </Link>
          <Link href="/resources" className="hidden py-2.5 font-medium text-ink no-underline hover:text-ink hover:underline sm:inline">
            All resources
          </Link>
          <MyPathButton />
        </nav>
      </div>
    </header>
  );
}
