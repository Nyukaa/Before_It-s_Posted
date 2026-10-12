import { OpportunityStatus, STATUS_LABELS } from "@/lib/types";

const STATUS_STYLES: Record<OpportunityStatus, { text: string; bg: string; dot: string }> = {
  potential: { text: "text-espoo-peach", bg: "bg-espoo-peach/10", dot: "bg-espoo-peach" },
  expected_soon: { text: "text-[#A3761F]", bg: "bg-[#A3761F]/10", dot: "bg-[#C9922B]" },
  open: { text: "text-espoo-blue", bg: "bg-espoo-blue/10", dot: "bg-espoo-blue" },
  closed: { text: "text-espoo-navy", bg: "bg-espoo-navy/10", dot: "bg-espoo-navy" },
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
