import { pathGroups } from "@/content/paths";
import { Path, PathGroup } from "@/lib/types";

export function getAllPathGroups(): PathGroup[] {
  return pathGroups;
}

export function getPath(
  groupSlug: string,
  pathSlug: string
): { group: PathGroup; path: Path } | null {
  const group = pathGroups.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const path = group.paths.find((p) => p.slug === pathSlug);
  if (!path) return null;
  return { group, path };
}

export function getAllPathParams(): { group: string; path: string }[] {
  return pathGroups.flatMap((group) =>
    group.paths.map((path) => ({ group: group.slug, path: path.slug }))
  );
}
