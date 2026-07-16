import { WinLossEntry } from "@/lib/types";
import WinLossCard from "@/components/paths/WinLossCard";

export default function WinsLossesBlock({ entries }: { entries: WinLossEntry[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-heading font-semibold uppercase tracking-wide text-sm mb-3">
        Wins &amp; Losses
      </h2>
      <div className="flex flex-col gap-3">
        {entries.map((entry) => (
          <WinLossCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
