import type { Option, RoleId, TargetId } from "./types";

export const curator = {
  name: "Manan Sachdeva",
  initials: "MS",
  /** Fill these in; anything left empty is simply not shown. */
  role: "",
  yearsInSales: "",
  linkedinUrl: "",
};

/** Title for a move that isn't written yet, e.g. "Getting better as a Solutions Engineer". */
export function pendingMoveTitle(from: RoleId, to: TargetId) {
  const label = roles[from].label;
  if (to === "same") return `Getting better as ${/^[AEIOU]/.test(label) ? "an" : "a"} ${label}`;
  return `${label} → ${targets[to].label}`;
}

export const roles: Record<RoleId, Option> = {
  new: { label: "Not in sales yet", sub: "Student or switching careers" },
  sdr: { label: "SDR / BDR", sub: "Booking meetings" },
  ae: { label: "Account Executive", sub: "SMB or mid-market, carrying a number" },
  ent: { label: "Enterprise AE", sub: "Large deals, long cycles" },
  se: { label: "Solutions Engineer", sub: "Demos and the technical sale" },
  csm: { label: "Customer Success", sub: "Retention and expansion" },
  revops: { label: "RevOps", sub: "Systems, data, process" },
  mgr: { label: "Sales manager", sub: "Leading a team" },
};

export const targetsFor: Record<RoleId, TargetId[]> = {
  new: ["sdr", "se", "csm", "revops", "unsure"],
  sdr: ["same", "ae", "unsure"],
  ae: ["same", "ent", "mgr", "unsure"],
  ent: ["same", "mgr", "unsure"],
  se: ["same", "ae", "mgr", "unsure"],
  csm: ["same", "ae", "mgr", "unsure"],
  revops: ["same", "mgr", "unsure"],
  mgr: ["same", "lead", "unsure"],
};

export const targets: Record<TargetId, Option> = {
  sdr: { label: "SDR / BDR", sub: "The most common way in" },
  se: { label: "Solutions Engineer", sub: "If you like the technical side" },
  csm: { label: "Customer Success", sub: "If you like long relationships" },
  revops: { label: "RevOps", sub: "If you like systems and data" },
  ae: { label: "Account Executive", sub: "Own the deal and the number" },
  ent: { label: "Enterprise AE", sub: "Bigger deals, more stakeholders" },
  mgr: { label: "First-time manager", sub: "Lead a team" },
  lead: { label: "Sales leader", sub: "Run the org, not just a team" },
  same: { label: "Get better where I am", sub: "Stay in role, level up" },
  unsure: { label: "Not sure yet", sub: "Show me all the moves" },
};
