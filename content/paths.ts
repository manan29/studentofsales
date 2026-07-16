import { PathGroup, Resource, WinLossEntry } from "@/lib/types";

const quotaResources: Resource[] = [
  {
    id: "book-fanatical-prospecting",
    kind: "book",
    title: "Fanatical Prospecting",
    author: "Jeb Blount",
    description: "The playbook for filling your pipeline with relentless, disciplined outreach.",
  },
  {
    id: "li-cold-call-openers",
    kind: "linkedin",
    title: "3 cold call openers that stopped getting hung up on",
    authorName: "Josh Braun",
    description: "A breakdown of openers that earn 10 extra seconds of attention.",
  },
  {
    id: "person-morgan-ingram",
    kind: "person",
    title: "Morgan J Ingram",
    role: "SDR coach & content creator",
    description: "Posts daily on outbound tactics and objection handling for early-career reps.",
  },
];

const promotedResources: Resource[] = [
  {
    id: "book-way-of-the-wolf",
    kind: "book",
    title: "Way of the Wolf",
    author: "Jordan Belfort",
    description: "Straight-line persuasion fundamentals for reps stepping into a closing role.",
  },
  {
    id: "li-first-90-days-ae",
    kind: "linkedin",
    title: "What I wish I knew in my first 90 days as an AE",
    authorName: "Kyle Asay",
    description: "A field-tested checklist for the SDR-to-AE transition.",
  },
  {
    id: "person-jen-allen-knuth",
    kind: "person",
    title: "Jen Allen-Knuth",
    role: "Community-led growth advocate",
    description: "Sharp takes on why traditional discovery calls are breaking down.",
  },
];

const closingResources: Resource[] = [
  {
    id: "book-gap-selling",
    kind: "book",
    title: "Gap Selling",
    author: "Keenan",
    description: "Diagnosing the gap between current and future state to sell on impact, not features.",
  },
  {
    id: "li-mutual-action-plans",
    kind: "linkedin",
    title: "Why mutual action plans save Q4 deals",
    authorName: "Nate Nasralla",
    description: "How to use MAPs to keep multi-threaded enterprise deals from stalling.",
  },
  {
    id: "person-amy-volas",
    kind: "person",
    title: "Amy Volas",
    role: "Enterprise sales hiring & strategy",
    description: "Deep, no-fluff writing on navigating complex enterprise sales cycles.",
  },
];

const managerResources: Resource[] = [
  {
    id: "book-first-90-days",
    kind: "book",
    title: "The First 90 Days",
    author: "Michael D. Watkins",
    description: "A transition framework for stepping into a leadership role without stumbling.",
  },
  {
    id: "li-quota-to-coaching",
    kind: "linkedin",
    title: "Moving from carrying quota to coaching quota",
    authorName: "Scott Leese",
    description: "What actually changes on day one as a first-time sales manager.",
  },
  {
    id: "person-kevin-dorsey",
    kind: "person",
    title: "Kevin \"KD\" Dorsey",
    role: "Sales leadership & coaching",
    description: "Frameworks for building a coaching cadence that scales past one rep.",
  },
];

const marketResources: Resource[] = [
  {
    id: "book-crossing-the-chasm",
    kind: "book",
    title: "Crossing the Chasm",
    author: "Geoffrey Moore",
    description: "How markets mature, and what that means for how you sell into them.",
  },
  {
    id: "li-gtm-ecosystem-shifts",
    kind: "linkedin",
    title: "Reading the GTM ecosystem before your competitors do",
    authorName: "Sangram Vajre",
    description: "Signals worth tracking across funding, hiring, and category shifts.",
  },
  {
    id: "person-maria-pergolino",
    kind: "person",
    title: "Maria Pergolino",
    role: "GTM & marketing strategy",
    description: "Tracks category creation and ecosystem trends across B2B software.",
  },
];

const quotaWinLoss: WinLossEntry[] = [
  {
    id: "wl-quota-1",
    title: "Booked a meeting after 14 dials in one afternoon",
    outcome: "win",
    durationLabel: "9 min",
    summary: "Persistence plus a sharper opener finally cracked a cold, unresponsive account.",
  },
  {
    id: "wl-quota-2",
    title: "Lost the meeting to a gatekeeper script misfire",
    outcome: "loss",
    durationLabel: "6 min",
    summary: "Leading with a pitch instead of a question got the call screened out in seconds.",
  },
];

const promotedWinLoss: WinLossEntry[] = [
  {
    id: "wl-promoted-1",
    title: "First self-sourced deal closed within 60 days",
    outcome: "win",
    durationLabel: "14 min",
    summary: "Carried a deal from a self-generated lead all the way through to signature.",
  },
  {
    id: "wl-promoted-2",
    title: "Deal stalled after skipping economic buyer",
    outcome: "loss",
    durationLabel: "11 min",
    summary: "Champion couldn't get budget approved without a conversation we never had.",
  },
];

const closingWinLoss: WinLossEntry[] = [
  {
    id: "wl-closing-1",
    title: "Multi-threaded a $180k deal through procurement",
    outcome: "win",
    durationLabel: "18 min",
    summary: "Bringing in legal and security early kept the deal from stalling in redlines.",
  },
  {
    id: "wl-closing-2",
    title: "Lost to 'no decision' after single-threading the champion",
    outcome: "loss",
    durationLabel: "13 min",
    summary: "The only internal advocate left the company mid-cycle and the deal went quiet.",
  },
];

const managerWinLoss: WinLossEntry[] = [
  {
    id: "wl-manager-1",
    title: "Turned around a rep's worst quarter with a coaching cadence",
    outcome: "win",
    durationLabel: "16 min",
    summary: "Weekly call reviews rebuilt a struggling rep's pipeline discipline in six weeks.",
  },
  {
    id: "wl-manager-2",
    title: "Lost a top rep after delaying a comp plan conversation",
    outcome: "loss",
    durationLabel: "10 min",
    summary: "Waiting too long to address a comp concern cost the team its best closer.",
  },
];

const marketWinLoss: WinLossEntry[] = [
  {
    id: "wl-market-1",
    title: "Repositioned against a new entrant before they gained share",
    outcome: "win",
    durationLabel: "12 min",
    summary: "Spotting a competitor's funding round early gave the team a two-quarter head start.",
  },
  {
    id: "wl-market-2",
    title: "Missed a category shift and lost renewal messaging",
    outcome: "loss",
    durationLabel: "8 min",
    summary: "Ignored an emerging category term until a competitor owned the narrative.",
  },
];

export const pathGroups: PathGroup[] = [
  {
    slug: "bdr-sdr",
    label: "BDR / SDR",
    paths: [
      {
        slug: "hitting-quota",
        label: "Hitting Quota",
        roadmapHeading: "Hitting Quota",
        roadmapDescription:
          "Build the outbound discipline, messaging, and pipeline habits that get you to number, every month.",
        resources: quotaResources,
        winLossEntries: quotaWinLoss,
      },
      {
        slug: "promoted-to-ae",
        label: "Promoted to Account Exec",
        roadmapHeading: "Promoted to Account Exec",
        roadmapDescription:
          "What it actually takes to earn the jump from booking meetings to owning a full-cycle deal.",
        resources: promotedResources,
        winLossEntries: promotedWinLoss,
      },
    ],
  },
  {
    slug: "account-executive",
    label: "Account Executive",
    paths: [
      {
        slug: "closing-larger-deals",
        label: "Closing Larger Deals",
        roadmapHeading: "Closing Larger Deals",
        roadmapDescription:
          "Navigate multi-threaded, enterprise-scale cycles without losing momentum to procurement.",
        resources: closingResources,
        winLossEntries: closingWinLoss,
      },
      {
        slug: "transitioning-to-manager",
        label: "Transitioning to Manager",
        roadmapHeading: "Transitioning to Manager",
        roadmapDescription:
          "Move from carrying your own number to building the number of an entire team.",
        resources: managerResources,
        winLossEntries: managerWinLoss,
      },
    ],
  },
  {
    slug: "market-intelligence",
    label: "Market Intelligence",
    paths: [
      {
        slug: "ecosystem-growth-radar",
        label: "Ecosystem Growth Radar",
        roadmapHeading: "Ecosystem Growth Radar",
        roadmapDescription:
          "Track the funding, hiring, and category signals that shape how your market sells and buys.",
        resources: marketResources,
        winLossEntries: marketWinLoss,
      },
    ],
  },
];
