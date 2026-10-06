# CLAUDE.md

**Before It's Posted** is a Next.js 16 app that surfaces job opportunities before they go public. Users filter by field/location/status and submit new leads.

## Commands

```bash
npm run dev    # Dev server on http://localhost:3000 (auto-reload)
npm run build  # Production build
npm run lint   # ESLint check
```

## Tech Stack

- Next.js 16 (App Router, Turbopack, TypeScript)
- React 19 + Tailwind CSS 4
- Custom colors in `globals.css`

## Structure

```
src/
├── app/
│   ├── page.tsx        # Home page (client component)
│   └── globals.css     # Colors + Tailwind config
├── components/         # FilterPanel, OpportunityCard, StatusTag, SubmissionForm
└── lib/
    ├── types.ts        # Opportunity type, status enums
    └── mock-data.ts    # Initial data
```

## Data Model

**Opportunity:**
- `id, title, company, field, location, status, insiderNote, source?, postedAt`
- **Statuses:** `potential` → `expected_soon` → `open` → `closed`

**App state** lives in `page.tsx`: opportunities[], filters, showForm

## Colors

Use these directly in Tailwind classes (e.g., `bg-[#0F7173]`):
- Background: `#F6F5F2`
- Primary: `#0F7173` (teal)
- Text: `#14171F` (dark), `#5B6068` (gray)
- Border: `#E7E5E0`

## Project Goals & Rules

- Context: Assignment 5 for Espoo Career Club. This is a frontend prototype
  for a "hidden job market" platform, to be shown in a demo and in my portfolio.
- UX is the priority. Keep the existing visual design (colors, fonts, layout,
  card style). Do not redesign. Make small, targeted UI changes only.
- No backend, no auth, no database. All data stays in mock-data.ts and
  React state.
- Keep components small and focused. Props down, callbacks up.
- Do not add new dependencies without asking me first.
- Before big changes, show a short plan and wait for my approval.
- After each finished task: run `npm run lint` and `npm run build`,
  then suggest a git commit message.
- Explain what you changed in simple words, I am learning Claude Code
  and Next.js.
