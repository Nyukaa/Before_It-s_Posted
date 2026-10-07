# Before It's Posted

## Description

**Before It's Posted** is a web platform that surfaces insider job opportunities before they go public. Users can discover hidden job market leads, filter opportunities by field, location, and status, and contribute new leads to help others find roles early.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, TypeScript)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **State Management:** React Hooks (useState, useMemo)
- **No Backend:** Client-side only with mock data

## Key Features

- **Browse Opportunities:** View job leads with detailed insider notes and source information
- **Smart Filtering:** Filter by job field, location, and opportunity status (Potential → Expected Soon → Open → Closed)
- **Search:** Full-text search across job titles and companies
- **Submit Leads:** Community-driven form to add new job opportunities with custom fields and status tracking
- **Real-time Updates:** New leads appear immediately at the top of the list
- **Anonymous Submissions:** Option to submit leads anonymously or with your source

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main page with filtering and state management
│   └── globals.css        # Tailwind config + custom color definitions
├── components/
│   ├── FilterPanel.tsx    # Field, location, and status filters
│   ├── SubmissionForm.tsx # Form to add new opportunities
│   ├── OpportunityCard.tsx # Individual opportunity display
│   └── StatusTag.tsx      # Status badge component
└── lib/
    ├── types.ts           # TypeScript types (Opportunity, OpportunityStatus)
    └── mock-data.ts       # Initial sample opportunities
```

## What This Project Demonstrates

- **Next.js App Router:** Client-side rendering with modern React patterns
- **Component Composition:** Small, focused, reusable components (props down, callbacks up)
- **React State Management:** Using hooks for form state and filtering logic
- **Tailwind CSS:** Custom color system and responsive design
- **TypeScript:** Type-safe component props and data models
- **UX Focus:** Clean, minimal interface designed for a specific portfolio/demo context

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Context

This is Assignment 5 for **Espoo Career Club** — a frontend prototype of a "hidden job market" platform designed for demo and portfolio purposes. The focus is on UX and clean design, not backend infrastructure.
