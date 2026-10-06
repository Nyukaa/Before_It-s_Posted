import { OpportunityStatus, STATUS_LABELS } from "@/lib/types";

const STATUS_STYLES: Record<OpportunityStatus, { text: string; bg: string; dot: string }> = {
  potential: { text: "text-[#5B6068]", bg: "bg-[#5B6068]/10", dot: "bg-[#5B6068]" },
  expected_soon: { text: "text-[#A3761F]", bg: "bg-[#A3761F]/10", dot: "bg-[#C9922B]" },
  open: { text: "text-[#0F7173]", bg: "bg-[#0F7173]/10", dot: "bg-[#0F7173]" },
  closed: { text: "text-[#8B4A3C]", bg: "bg-[#8B4A3C]/10", dot: "bg-[#8B4A3C]" },
};

export default function StatusTag({ status }: { status: OpportunityStatus }) {
  const styles = STATUS_STYLES[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles.text} ${styles.bg}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
      {STATUS_LABELS[status]}
    </span>
  );
}
