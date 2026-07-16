import { Resource } from "@/lib/types";

const kindLabel: Record<Resource["kind"], string> = {
  book: "Book",
  linkedin: "LinkedIn",
  person: "Who to Follow",
};

function subtitle(resource: Resource): string {
  switch (resource.kind) {
    case "book":
      return resource.author;
    case "linkedin":
      return resource.authorName;
    case "person":
      return resource.role;
  }
}

export default function ContextCard({ resource }: { resource: Resource }) {
  return (
    <div className="rounded border border-line bg-surface px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="rounded bg-canvas border border-line px-2 py-0.5 text-[10px] uppercase tracking-wide text-body">
          {kindLabel[resource.kind]}
        </span>
        <span className="text-body text-xs">{subtitle(resource)}</span>
      </div>
      <div className="text-heading font-medium mt-2">{resource.title}</div>
      <p className="text-body text-sm mt-1">{resource.description}</p>
    </div>
  );
}
