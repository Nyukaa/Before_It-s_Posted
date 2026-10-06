export type OpportunityStatus = "potential" | "expected_soon" | "open" | "closed";

export type Opportunity = {
  id: string;
  title: string;
  company: string;
  field: string;
  location: string;
  status: OpportunityStatus;
  insiderNote: string;
  source?: string;
  postedAt: string; // ISO date the lead was shared
};

export const STATUS_ORDER: OpportunityStatus[] = [
  "potential",
  "expected_soon",
  "open",
  "closed",
];

export const STATUS_LABELS: Record<OpportunityStatus, string> = {
  potential: "Potential",
  expected_soon: "Expected soon",
  open: "Open",
  closed: "Closed",
};
