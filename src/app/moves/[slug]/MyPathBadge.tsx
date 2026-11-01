"use client";
import { useMyPath } from "@/lib/my-path";

export function MyPathBadge({ slug }: { slug: string }) {
  const path = useMyPath();
  if (path?.slug !== slug) return null;
  return (
    <p className="mb-2.5 inline-flex rounded-full border border-line bg-white px-3 py-1 text-[13px] font-semibold">
      Your path
    </p>
  );
}
