// Loads the curator's take for a move from src/content/takes/<slug>.md.
// Server-only: runs at build time, so publishing a take = committing the file.
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import type { Take } from "@/content/types";

const DIR = path.join(process.cwd(), "src/content/takes");

/** Drafts are visible on previews and locally, never on the live site. */
const SHOW_DRAFTS = process.env.VERCEL_ENV !== "production";

export function getTake(slug: string): Take | null {
  const file = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { meta, body } = splitFrontmatter(fs.readFileSync(file, "utf8"));
  const status = meta.status === "published" ? "published" : "draft";
  if (status === "draft" && !SHOW_DRAFTS) return null;

  const sections = body
    .split(/^## /m)
    .slice(1)
    .map((chunk) => {
      const newline = chunk.indexOf("\n");
      const title = (newline === -1 ? chunk : chunk.slice(0, newline)).trim();
      const text = stripComments(newline === -1 ? "" : chunk.slice(newline + 1)).trim();
      return { title, html: text ? (marked.parse(text, { async: false }) as string) : "" };
    })
    .filter((s) => s.title && s.html);

  return sections.length ? { status, sections } : null;
}

function splitFrontmatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  const meta: Record<string, string> = {};
  if (!match) return { meta, body: raw };
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { meta, body: raw.slice(match[0].length) };
}

function stripComments(s: string) {
  return s.replace(/<!--[\s\S]*?-->/g, "");
}
