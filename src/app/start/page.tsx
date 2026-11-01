import type { Metadata } from "next";
import { getAllMoves } from "@/lib/content";
import { Onboarding } from "./Onboarding";

export const metadata: Metadata = {
  title: "Find my path",
  description: "Two questions: where you are today and where you want to go next.",
};

export default function StartPage() {
  // Pass only what the client needs to resolve answers to a move.
  const moves = getAllMoves().map((m) => ({ slug: m.slug, from: m.from, to: m.to, title: m.title }));
  return <Onboarding moves={moves} />;
}
