import Link from "next/link";
import type { PathItem, Resource } from "@/content/types";
import { curator } from "@/content/site";

export function PathList({ items }: { items: { item: PathItem; resource: Resource }[] }) {
  return (
    <ol className="flex list-none flex-col gap-3 p-0">
      {items.map(({ item, resource }, i) => (
        <li key={resource.slug} className="card flex gap-4 p-5 sm:gap-5 sm:p-6">
          <span aria-hidden="true" className="inline-flex size-[34px] shrink-0 items-center justify-center rounded-full border border-line-strong text-sm font-semibold">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="meta mb-1">{byline(resource)}</p>
            <h3 className="heading text-[23px] leading-tight">
              <Link href={`/resources/${resource.slug}`} className="link-quiet">
                {resource.title}
              </Link>
            </h3>
            <p className="mt-2.5 max-w-[680px] text-base">
              <span className="font-semibold text-accent">Why now </span>
              {item.whyNow}
            </p>
            <div className="mt-3.5 rounded-xl bg-sand-soft px-3.5 py-3 text-[15px]">
              <strong className="font-semibold">Try this week: </strong>
              {item.tryThisWeek}
            </div>
            <p className="meta mt-2">{curator.name.split(" ")[0]}&apos;s pick</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function byline(r: Resource) {
  return [r.format, r.author, r.source].filter(Boolean).join(" · ");
}
