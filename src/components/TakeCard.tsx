import type { Take } from "@/content/types";
import { curator } from "@/content/site";
import { CuratorAvatar, curatorCredentials } from "./Curator";

export function TakeCard({ take }: { take: Take | null }) {
  const creds = curatorCredentials();
  return (
    <section aria-labelledby="take-h" className="card mt-10 p-6 shadow-[var(--shadow-raised)] sm:p-8">
      <div className="flex items-center gap-3">
        <CuratorAvatar />
        <div className="leading-snug">
          <h2 id="take-h" className="heading text-[22px]">My take on this move</h2>
          <p className="text-sm text-muted">
            {curator.name}
            {creds ? ` · ${creds}` : ""}
          </p>
        </div>
      </div>
      {take ? (
        <div className="mt-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          <TakePart title="What actually changes" body={take.whatChanges} />
          <TakePart title="What to stop doing" body={take.whatToStop} />
          <TakePart title="Your first 30 days" body={take.first30Days} />
        </div>
      ) : (
        <p className="mt-5 text-muted">
          I&apos;m still writing this one: what actually changes, what to stop doing, and your first 30 days.
          The reading path below is ready now.
        </p>
      )}
    </section>
  );
}

function TakePart({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="mb-1.5 text-[15px] font-semibold text-accent">{title}</h3>
      <p className="text-base">{body}</p>
    </div>
  );
}
