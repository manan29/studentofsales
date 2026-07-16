import Link from "next/link";
import { getAllPathGroups } from "@/lib/paths";

export default function Home() {
  const groups = getAllPathGroups();

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase tracking-wide">Student of Sales</h1>
      <p className="text-body mt-3 max-w-xl">
        Pick the path that matches where you are right now. Each one aggregates the
        resources, deal post-mortems, and benchmarks relevant to that specific milestone.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {groups.map((group) => {
          const firstPath = group.paths[0];
          return (
            <Link
              key={group.slug}
              href={`/paths/${group.slug}/${firstPath.slug}`}
              className="rounded border border-line bg-surface px-4 py-3 hover:border-body transition-colors"
            >
              <div className="text-heading font-semibold">{group.label}</div>
              <div className="text-body text-sm mt-1">
                {group.paths.map((p) => p.label).join(" · ")}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
