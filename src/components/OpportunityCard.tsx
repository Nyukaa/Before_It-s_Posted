import { Opportunity, OpportunityStatus } from "@/lib/types";
import StatusTag from "./StatusTag";

const BORDER_COLORS: Record<OpportunityStatus, string> = {
  potential: "border-l-[#5B6068]",
  expected_soon: "border-l-[#C9922B]",
  open: "border-l-[#0F7173]",
  closed: "border-l-[#8B4A3C]",
};

export default function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const formattedDate = new Date(opportunity.postedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  return (
    <article
      className={`bg-white border border-[#E7E5E0] border-l-4 ${BORDER_COLORS[opportunity.status]} rounded-lg p-5`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-[#14171F] leading-snug">
            {opportunity.title}
          </h3>
          <p className="text-sm text-[#5B6068] mt-0.5">
            {opportunity.company} · {opportunity.field} · {opportunity.location}
          </p>
        </div>
        <StatusTag status={opportunity.status} />
      </div>

      <p className="text-sm text-[#2B2E36] mt-3 leading-relaxed">
        {opportunity.insiderNote}
      </p>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EDEBE6]">
        <span className="text-xs text-[#8A8F98]">
          {opportunity.source ?? "Anonymous lead"}
        </span>
        <span className="text-xs text-[#8A8F98]">{formattedDate}</span>
      </div>
    </article>
  );
}
