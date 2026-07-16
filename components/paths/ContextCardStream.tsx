import { Resource } from "@/lib/types";
import ContextCard from "@/components/paths/ContextCard";

export default function ContextCardStream({ resources }: { resources: Resource[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-heading font-semibold uppercase tracking-wide text-sm mb-3">
        Curated Resources
      </h2>
      <div className="flex flex-col gap-3">
        {resources.map((resource) => (
          <ContextCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}
