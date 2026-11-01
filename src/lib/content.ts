// The only place that knows where content lives. When Sanity is connected,
// these functions become GROQ queries and the rest of the app stays the same.
import { moves, moveAliases } from "@/content/moves";
import { resources } from "@/content/resources";
import type { Move, Resource, RoleId, TargetId } from "@/content/types";

export function getTimelineMoves(): Move[] {
  return moves
    .filter((m) => m.timelineOrder !== undefined)
    .sort((a, b) => (a.timelineOrder ?? 0) - (b.timelineOrder ?? 0));
}

export function getAllMoves(): Move[] {
  return moves;
}

export function getMove(slug: string): Move | undefined {
  return moves.find((m) => m.slug === slug);
}

export function getAllResources(): Resource[] {
  return resources;
}

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/** Moves whose path includes this resource, with that path's note. */
export function getMovesForResource(slug: string) {
  return moves
    .filter((m) => m.path.some((p) => p.resource === slug))
    .map((m) => {
      const index = m.path.findIndex((p) => p.resource === slug);
      const next = m.path[index + 1];
      return {
        move: m,
        item: m.path[index],
        position: index + 1,
        next: next ? getResource(next.resource) : undefined,
      };
    });
}

/** Map an onboarding answer to a move slug, or null when it isn't written yet. */
export function resolveMoveSlug(from: RoleId, to: TargetId): string | null {
  const direct = moves.find((m) => m.from === from && m.to === to);
  if (direct) return direct.slug;
  return moveAliases[`${from}>${to}`] ?? null;
}
