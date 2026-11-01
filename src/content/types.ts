// Content model. These shapes mirror what will become Sanity document types,
// so swapping the file-based content for the CMS only touches src/lib/content.ts.

export type ResourceFormat = "Book" | "Post" | "Video" | "Article" | "Podcast";

export type Resource = {
  slug: string;
  title: string;
  /** Leave empty when the author is unknown; the UI then shows only the source. */
  author: string;
  source: string; // e.g. "Amazon", "LinkedIn"
  format: ResourceFormat;
  url: string;
  /** Short neutral description shown in the library. */
  summary: string;
};

export type PathItem = {
  resource: string; // Resource.slug
  /** Why this resource matters at this point of the move. Curator's voice. */
  whyNow: string;
  /** One concrete thing to try after reading. */
  tryThisWeek: string;
};

/** Written in src/content/takes/<move-slug>.md; each "## Heading" becomes a section. */
export type Take = {
  status: "draft" | "published";
  sections: { title: string; html: string }[];
};

export type Move = {
  slug: string;
  from: RoleId;
  to: TargetId;
  title: string;
  blurb: string;
  /** Position on the home-page timeline; omit for "get better where I am" moves. */
  timelineOrder?: number;
  path: PathItem[];
};

/** A move with its take loaded from Markdown (null until written). */
export type MoveWithTake = Move & { take: Take | null };

export type RoleId = "new" | "sdr" | "ae" | "ent" | "se" | "csm" | "revops" | "mgr";
export type TargetId =
  | "sdr" | "se" | "csm" | "revops" | "ae" | "ent" | "mgr" | "lead" | "same" | "unsure";

export type Option = { label: string; sub: string };
