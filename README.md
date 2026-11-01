# Student of Sales

A plan for your next career move in sales: for each move, a practitioner's take on what changes, a short ordered reading path, and one thing to try each week.

Live at [studentofsales.wiki](https://studentofsales.wiki).

## Stack

- Next.js (App Router) + Tailwind CSS v4, TypeScript
- Hosted on Vercel (every pull request gets a preview link)
- Content lives in `src/content/` for now; it moves to Sanity next

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint && npm run typecheck
```

## Where things are

| What | Where |
|---|---|
| Moves, their paths, "why now" and "try this week" notes | `src/content/moves.ts` |
| Books, posts, videos | `src/content/resources.ts` |
| Your name, role, years in sales, LinkedIn; onboarding options | `src/content/site.ts` |
| Colours, fonts, radius, shadows (the design tokens) | `src/app/globals.css` (`@theme`) |
| Content access (swap to Sanity here only) | `src/lib/content.ts` |

## Environment variables

| Name | Purpose |
|---|---|
| `NEXT_PUBLIC_NEWSLETTER_FORM_ACTION` | Form endpoint from your newsletter tool. Until set, the site says the newsletter is launching soon instead of showing a form. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID. Defaults to the existing `G-KB9H2KSKFR`. |
