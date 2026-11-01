import type { MetadataRoute } from "next";
import { getAllMoves, getAllResources } from "@/lib/content";

const BASE = "https://studentofsales.wiki";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/` },
    { url: `${BASE}/moves` },
    { url: `${BASE}/resources` },
    ...getAllMoves().map((m) => ({ url: `${BASE}/moves/${m.slug}` })),
    ...getAllResources().map((r) => ({ url: `${BASE}/resources/${r.slug}` })),
  ];
}
