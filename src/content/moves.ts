import type { Move } from "./types";

// DRAFT NOTES: every `whyNow` and `tryThisWeek` below was drafted as a starting
// point. Rewrite them in your own words before launch.
// Your take on each move lives in src/content/takes/<slug>.md.

const notes = {
  outbound: {
    whyNow: "Read this in your first week. It turns “do more activity” into a daily routine you can stick to.",
    tryThisWeek: "Block the same 90 minutes every morning for outbound, five days in a row, and count real conversations.",
  },
  coldcall: {
    whyNow: "Watch it before your first call block. The opener decides whether you get thirty more seconds.",
    tryThisWeek: "Write three openers, say each out loud ten times, and use the best one on your next ten calls.",
  },
  aetips: {
    whyNow: "A short checklist for your first quarter carrying a number.",
    tryThisWeek: "Pick two of the eight and put them on your calendar for this week.",
  },
  greatdemo: {
    whyNow: "Most first demos tour every feature. This one teaches you to show what the buyer needs to see, and then stop.",
    tryThisWeek: "Rebuild your next demo to open with the one screen that solves the buyer’s main problem.",
  },
  nstd: {
    whyNow: "As deals get bigger, the negotiation starts well before the pricing call.",
    tryThisWeek: "On your next discount ask, name what you hear before you answer.",
  },
  meddicc: {
    whyNow: "The shared language most enterprise teams use to qualify. Read it before you forecast a large deal.",
    tryThisWeek: "Score your three biggest open deals letter by letter and mark where you are guessing.",
  },
  qsl: {
    whyNow: "A five-time CRO on hiring, inspecting deals and coaching. Best read in your first months as a manager.",
    tryThisWeek: "Run one deal review this week where you only ask questions.",
  },
  ampitup: {
    whyNow: "On raising the standard and the pace across a team.",
    tryThisWeek: "Pick one team standard to raise this month and say it out loud at your next team meeting.",
  },
};

export const moves: Move[] = [
  {
    slug: "breaking-into-sales",
    from: "new",
    to: "sdr",
    title: "Breaking into sales",
    blurb: "Land your first sales role and get through the first 90 days.",
    timelineOrder: 1,
    path: [
      { resource: "daily-outbound", ...notes.outbound },
      { resource: "cold-call-openers", ...notes.coldcall },
    ],
  },
  {
    slug: "sdr-to-ae",
    from: "sdr",
    to: "ae",
    title: "SDR → Account Executive",
    blurb: "You've been booking meetings. Now you have to win them.",
    timelineOrder: 2,
    path: [
      { resource: "great-demo", ...notes.greatdemo },
      { resource: "eight-tips-for-aes", ...notes.aetips },
      { resource: "meddicc", ...notes.meddicc },
    ],
  },
  {
    slug: "ae-to-enterprise-ae",
    from: "ae",
    to: "ent",
    title: "AE → Enterprise AE",
    blurb: "Bigger deals, longer cycles, more people in the room.",
    timelineOrder: 3,
    path: [
      { resource: "meddicc", ...notes.meddicc },
      { resource: "never-split-the-difference", ...notes.nstd },
      { resource: "great-demo", ...notes.greatdemo },
    ],
  },
  {
    slug: "ae-to-first-time-manager",
    from: "ae",
    to: "mgr",
    title: "AE → First-time manager",
    blurb: "Your number is now your team's number.",
    timelineOrder: 4,
    path: [
      { resource: "qualified-sales-leader", ...notes.qsl },
      { resource: "amp-it-up", ...notes.ampitup },
    ],
  },
  {
    slug: "manager-to-sales-leader",
    from: "mgr",
    to: "lead",
    title: "Manager → Sales leader",
    blurb: "From running a team to building the system.",
    timelineOrder: 5,
    path: [
      { resource: "amp-it-up", ...notes.ampitup },
      { resource: "qualified-sales-leader", ...notes.qsl },
    ],
  },
  {
    slug: "better-sdr",
    from: "sdr",
    to: "same",
    title: "Getting better as an SDR",
    blurb: "More conversations, better ones, without burning out.",
    path: [
      { resource: "daily-outbound", ...notes.outbound },
      { resource: "cold-call-openers", ...notes.coldcall },
    ],
  },
  {
    slug: "better-ae",
    from: "ae",
    to: "same",
    title: "Getting better as an AE",
    blurb: "Win more of the deals you already have.",
    path: [
      { resource: "eight-tips-for-aes", ...notes.aetips },
      { resource: "great-demo", ...notes.greatdemo },
      { resource: "never-split-the-difference", ...notes.nstd },
    ],
  },
  {
    slug: "better-enterprise-ae",
    from: "ent",
    to: "same",
    title: "Getting better as an Enterprise AE",
    blurb: "Qualify harder, negotiate calmer.",
    path: [
      { resource: "meddicc", ...notes.meddicc },
      { resource: "never-split-the-difference", ...notes.nstd },
    ],
  },
  {
    slug: "better-manager",
    from: "mgr",
    to: "same",
    title: "Getting better as a manager",
    blurb: "Coach more, inspect better.",
    path: [{ resource: "qualified-sales-leader", ...notes.qsl }],
  },
];

/** Combinations that reuse another move's page. */
export const moveAliases: Record<string, string> = {
  "ent>mgr": "ae-to-first-time-manager",
  "se>mgr": "ae-to-first-time-manager",
  "csm>mgr": "ae-to-first-time-manager",
  "revops>mgr": "ae-to-first-time-manager",
  "se>ae": "sdr-to-ae",
  "csm>ae": "sdr-to-ae",
};
