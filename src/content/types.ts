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

export type Take = {
  whatChanges: string;
  whatToStop: string;
  first30Days: string;
};

export type Move = {
  slug: string;
  from: RoleId;
  to: TargetId;
  title: string;
  blurb: string;
  /** Position on the home-page timeline; omit for "get better where I am" moves. */
  timelineOrder?: number;
  /** null until the curator has written it; the page then says it's coming. */
  take: Take | null;
  path: PathItem[];
};

export type RoleId = "new" | "sdr" | "ae" | "ent" | "se" | "csm" | "revops" | "mgr";
export type TargetId =
  | "sdr" | "se" | "csm" | "revops" | "ae" | "ent" | "mgr" | "lead" | "same" | "unsure";

export type Option = { label: string; sub: string };
