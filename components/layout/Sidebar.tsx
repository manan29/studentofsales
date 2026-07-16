"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { pathGroups } from "@/content/paths";

function NavTree({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {pathGroups.map((group) => (
        <div key={group.slug}>
          <div className="text-xs font-semibold uppercase tracking-wider text-body mb-2">
            {group.label}
          </div>
          <ul className="flex flex-col gap-1">
            {group.paths.map((path) => {
              const href = `/paths/${group.slug}/${path.slug}`;
              const active = pathname === href;
              return (
                <li key={path.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    className={`block rounded px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-surface text-heading"
                        : "text-body hover:bg-surface hover:text-heading"
                    }`}
                  >
                    {path.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 h-screen w-64 border-r border-line bg-canvas px-5 py-8 overflow-y-auto">
        <Link href="/" className="block text-heading font-bold uppercase tracking-wide mb-8">
          Student of Sales
        </Link>
        <NavTree />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-line bg-canvas px-4 py-3">
        <Link href="/" className="text-heading font-bold uppercase tracking-wide text-sm">
          Student of Sales
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="text-heading border border-line rounded px-3 py-1.5 text-sm"
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-72 h-full bg-canvas border-r border-line px-5 py-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="text-heading font-bold uppercase tracking-wide text-sm">
                Student of Sales
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="text-body hover:text-heading text-sm border border-line rounded px-2 py-1"
              >
                Close
              </button>
            </div>
            <NavTree onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
