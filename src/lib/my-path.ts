"use client";
// The visitor's chosen path, kept in their own browser. Moves to Supabase
// once accounts exist; until then it is a per-device convenience only.
import { useEffect, useState } from "react";

const KEY = "sos.myPath";
const EVENT = "sos:mypath";

export type MyPath = { slug: string | null; title: string; from: string; to: string };

export function readMyPath(): MyPath | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as MyPath) : null;
  } catch {
    return null;
  }
}

export function saveMyPath(path: MyPath) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(path));
  } catch {
    /* storage unavailable: the choice just isn't remembered */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useMyPath() {
  const [path, setPath] = useState<MyPath | null>(null);
  useEffect(() => {
    const sync = () => setPath(readMyPath());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return path;
}

export function hrefForPath(path: MyPath) {
  return path.slug
    ? `/moves/${path.slug}`
    : `/moves/not-yet?from=${encodeURIComponent(path.from)}&to=${encodeURIComponent(path.to)}`;
}
