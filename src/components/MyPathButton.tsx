"use client";
import Link from "next/link";
import { hrefForPath, useMyPath } from "@/lib/my-path";

export function MyPathButton() {
  const path = useMyPath();
  if (path) {
    return (
      <Link href={hrefForPath(path)} className="btn btn-secondary min-h-10! rounded-full! px-3.5! text-sm!">
        My path<span className="hidden sm:inline">: {path.title}</span>
      </Link>
    );
  }
  return (
    <Link href="/start" className="btn btn-primary min-h-10!">
      Find my path
    </Link>
  );
}
