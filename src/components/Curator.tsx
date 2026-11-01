import { curator } from "@/content/site";

export function CuratorAvatar({ size = 40 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }}
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink font-semibold text-paper"
    >
      {curator.initials}
    </span>
  );
}

/** "Role · N years in sales", skipping whatever isn't filled in yet. */
export function curatorCredentials() {
  return [curator.role, curator.yearsInSales ? `${curator.yearsInSales} years in sales` : ""]
    .filter(Boolean)
    .join(" · ");
}
