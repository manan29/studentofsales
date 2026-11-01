"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { pendingMoveTitle, roles, targets, targetsFor } from "@/content/site";
import { moveAliases } from "@/content/moves";
import type { RoleId, TargetId } from "@/content/types";
import { hrefForPath, saveMyPath } from "@/lib/my-path";

type MoveRef = { slug: string; from: RoleId; to: TargetId; title: string };

export function Onboarding({ moves }: { moves: MoveRef[] }) {
  const router = useRouter();
  const [from, setFrom] = useState<RoleId | null>(null);
  const step = from ? 2 : 1;

  function choose(to: TargetId) {
    if (!from) return;
    if (to === "unsure") {
      router.push("/moves");
      return;
    }
    const direct = moves.find((m) => m.from === from && m.to === to);
    const slug = direct?.slug ?? moveAliases[`${from}>${to}`] ?? null;
    const known = slug ? moves.find((m) => m.slug === slug) : undefined;
    const title = known?.title ?? pendingMoveTitle(from, to);
    const path = { slug, title, from, to };
    saveMyPath(path);
    router.push(hrefForPath(path));
  }

  return (
    <main className="mx-auto max-w-[760px] px-6 pb-24 pt-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div aria-hidden="true" className="flex w-40 gap-1.5">
          <span className="h-1.5 flex-1 rounded-full bg-ink" />
          <span className={`h-1.5 flex-1 rounded-full ${step === 2 ? "bg-ink" : "bg-[#e2dfd2]"}`} />
        </div>
        <Link href="/moves" className="py-2.5 text-[15px] font-medium text-muted underline underline-offset-4 hover:text-ink">
          Skip, show me all moves
        </Link>
      </div>
      <p className="mt-7 text-sm text-muted">Step {step} of 2</p>

      {step === 1 ? (
        <fieldset className="mt-1.5 border-0 p-0">
          <legend className="display text-[clamp(32px,4vw,46px)] leading-[1.08]">Where are you today?</legend>
          <div className="mt-7 grid gap-2.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))]">
            {(Object.keys(roles) as RoleId[]).map((id) => (
              <OptionButton key={id} label={roles[id].label} sub={roles[id].sub} onClick={() => setFrom(id)} />
            ))}
          </div>
        </fieldset>
      ) : (
        <fieldset className="mt-1.5 border-0 p-0">
          <legend className="display text-[clamp(32px,4vw,46px)] leading-[1.08]">Where do you want to go next?</legend>
          <p className="mt-2.5 text-muted">
            Today: <strong className="font-semibold text-ink">{roles[from!].label}</strong>
          </p>
          <div className="mt-7 grid gap-2.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))]">
            {targetsFor[from!].map((t) => (
              <OptionButton key={t} label={targets[t].label} sub={targets[t].sub} onClick={() => choose(t)} />
            ))}
          </div>
          <button type="button" onClick={() => setFrom(null)} className="btn btn-secondary mt-6 bg-transparent">
            ← Back
          </button>
        </fieldset>
      )}
    </main>
  );
}

function OptionButton({ label, sub, onClick }: { label: string; sub: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="card min-h-[72px] cursor-pointer px-[18px] py-4 text-left text-ink transition-colors hover:border-ink"
    >
      <span className="block text-[17px] font-semibold">{label}</span>
      <span className="mt-0.5 block text-sm text-muted">{sub}</span>
    </button>
  );
}
