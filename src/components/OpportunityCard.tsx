import { Opportunity, OpportunityStatus } from "@/lib/types";
import StatusTag from "./StatusTag";

const BORDER_COLORS: Record<OpportunityStatus, string> = {
  potential: "border-l-espoo-peach",
  expected_soon: "border-l-[#C9922B]",
  open: "border-l-espoo-blue",
  closed: "border-l-espoo-navy",
};

export default function OpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {
  const formattedDate = new Date(opportunity.postedAt).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
    },
  );

  return (
    <article
      className={`bg-white border border-espoo-pink border-l-4 ${BORDER_COLORS[opportunity.status]} rounded-lg p-5`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-espoo-navy leading-snug">
            {opportunity.title}
          </h3>
          <p className="text-sm text-espoo-blue mt-0.5">
            {opportunity.company} · {opportunity.field} · {opportunity.location}
          </p>
        </div>
        <StatusTag status={opportunity.status} />
      </div>

      <p className="text-sm text-espoo-navy mt-3 leading-relaxed">
        {opportunity.insiderNote}
      </p>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-espoo-pink">
        <span className="text-xs text-espoo-peach">
          {opportunity.source ?? "Anonymous lead"}
        </span>
        <span className="text-xs text-espoo-peach">{formattedDate}</span>
      </div>
    </article>
  );
}
