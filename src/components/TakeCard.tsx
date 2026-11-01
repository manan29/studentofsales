import type { Take } from "@/content/types";
import { curator } from "@/content/site";
import { CuratorAvatar, curatorCredentials } from "./Curator";

export function TakeCard({ take }: { take: Take | null }) {
  const creds = curatorCredentials();
  return (
    <section aria-labelledby="take-h" className="card mt-10 p-6 shadow-[var(--shadow-raised)] sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <CuratorAvatar />
        <div className="leading-snug">
          <h2 id="take-h" className="heading text-[22px]">My take on this move</h2>
          <p className="text-sm text-muted">
            {curator.name}
            {creds ? ` · ${creds}` : ""}
          </p>
        </div>
        {take?.status === "draft" ? (
          <span className="ml-auto rounded-full border border-dashed border-accent px-3 py-1 text-[13px] font-semibold text-accent">
            Draft, preview only
          </span>
        ) : null}
      </div>
      {take ? (
        <div className="mt-6 flex max-w-[720px] flex-col gap-7">
          {take.sections.map((s) => (
            <div key={s.title}>
              <h3 className="mb-2 text-[15px] font-semibold text-accent">{s.title}</h3>
              <div className="prose-take" dangerouslySetInnerHTML={{ __html: s.html }} />
            </div>
          ))}
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
