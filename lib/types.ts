export type ResourceKind = "book" | "linkedin" | "person";

interface BaseResource {
  id: string;
  kind: ResourceKind;
  title: string;
  description: string;
  url?: string;
}

export interface BookResource extends BaseResource {
  kind: "book";
  author: string;
}

export interface LinkedInResource extends BaseResource {
  kind: "linkedin";
  authorName: string;
}

export interface PersonResource extends BaseResource {
  kind: "person";
  role: string;
}

export type Resource = BookResource | LinkedInResource | PersonResource;

export interface WinLossEntry {
  id: string;
  title: string;
  outcome: "win" | "loss";
  durationLabel: string;
  summary: string;
}

export interface Path {
  slug: string;
  label: string;
  roadmapHeading: string;
  roadmapDescription: string;
  resources: Resource[];
  winLossEntries: WinLossEntry[];
}

export interface PathGroup {
  slug: string;
  label: string;
  paths: Path[];
}
