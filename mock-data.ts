import { Opportunity } from "./types";

export const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "Northwind Studio",
    field: "Tech",
    location: "Helsinki",
    status: "expected_soon",
    insiderNote:
      "Their lead frontend dev just gave notice. Team is quietly scoping a replacement before the public posting goes up.",
    source: "Former colleague, now at Northwind",
    postedAt: "2026-09-28",
  },
  {
    id: "2",
    title: "Growth Marketing Lead",
    company: "Fjord Analytics",
    field: "Marketing",
    location: "Remote (EU)",
    status: "potential",
    insiderNote:
      "Series A just closed. Founder mentioned wanting a dedicated growth hire within the quarter during a podcast interview.",
    source: "Public podcast + LinkedIn signal",
    postedAt: "2026-09-25",
  },
  {
    id: "3",
    title: "Guest Experience Manager",
    company: "Lumi Hotels",
    field: "Tourism",
    location: "Rovaniemi",
    status: "open",
    insiderNote:
      "Internal job board posting went live this morning, two days before it hits external sites.",
    source: "Internal referral",
    postedAt: "2026-10-01",
  },
  {
    id: "4",
    title: "Backend Engineer (Payments)",
    company: "Tide & Co",
    field: "Tech",
    location: "Espoo",
    status: "expected_soon",
    insiderNote:
      "New payments product launching in Q1. Engineering manager has been informally asking around for referrals.",
    source: "Engineering manager, direct message",
    postedAt: "2026-09-30",
  },
  {
    id: "5",
    title: "Social Media Strategist",
    company: "Birch & Pine Co.",
    field: "Marketing",
    location: "Helsinki",
    status: "closed",
    insiderNote:
      "Role was filled internally last week, but may reopen if the chosen candidate doesn't relocate in time.",
    source: "HR contact",
    postedAt: "2026-09-18",
  },
  {
    id: "6",
    title: "Junior Data Analyst",
    company: "Polar Insights",
    field: "Tech",
    location: "Turku",
    status: "potential",
    insiderNote:
      "Team is overloaded and has mentioned headcount requests in two consecutive all-hands meetings.",
    source: "Current employee",
    postedAt: "2026-09-29",
  },
  {
    id: "7",
    title: "Tour Operations Coordinator",
    company: "Aurora Trails",
    field: "Tourism",
    location: "Rovaniemi",
    status: "open",
    insiderNote:
      "Posted on their careers page but not yet syndicated to job boards — a short early window before volume applications start.",
    source: "Company careers page",
    postedAt: "2026-10-02",
  },
];
