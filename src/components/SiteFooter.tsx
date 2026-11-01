import Link from "next/link";
import { curator } from "@/content/site";
import { Newsletter } from "./Newsletter";

export function SiteFooter() {
  return (
    <>
      <Newsletter />
      <footer className="border-t border-line">
        <div className="page flex flex-wrap justify-between gap-x-6 gap-y-3 py-7 text-sm text-muted">
          <span>Student of Sales · by {curator.name}</span>
          <span className="flex flex-wrap gap-5">
            <Link href="/moves">Career moves</Link>
            <Link href="/resources">All resources</Link>
            {curator.linkedinUrl ? <a href={curator.linkedinUrl}>LinkedIn</a> : null}
          </span>
        </div>
      </footer>
    </>
  );
}
