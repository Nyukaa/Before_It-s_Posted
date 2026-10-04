import { OpportunityStatus, STATUS_LABELS, STATUS_ORDER } from "@/lib/types";

export type Filters = {
  search: string;
  field: string;
  location: string;
  statuses: OpportunityStatus[];
};

type FilterPanelProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  availableFields: string[];
  availableLocations: string[];
};

export default function FilterPanel({
  filters,
  onChange,
  availableFields,
  availableLocations,
}: FilterPanelProps) {
  const toggleStatus = (status: OpportunityStatus) => {
    const isActive = filters.statuses.includes(status);
    onChange({
      ...filters,
      statuses: isActive
        ? filters.statuses.filter((s) => s !== status)
        : [...filters.statuses, status],
    });
  };

  return (
    <div className="bg-white border border-[#E7E5E0] rounded-lg p-4 space-y-4">
      <input
        type="text"
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
        placeholder="Search by title or company"
        className="w-full px-3 py-2 border border-[#E7E5E0] rounded-md text-sm focus:outline-none focus:border-[#0F7173]"
      />

      <div className="grid grid-cols-2 gap-3">
        <select
          value={filters.field}
          onChange={(e) => onChange({ ...filters, field: e.target.value })}
          className="px-3 py-2 border border-[#E7E5E0] rounded-md text-sm bg-white focus:outline-none focus:border-[#0F7173]"
        >
          <option value="">All fields</option>
          {availableFields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>

        <select
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="px-3 py-2 border border-[#E7E5E0] rounded-md text-sm bg-white focus:outline-none focus:border-[#0F7173]"
        >
          <option value="">All locations</option>
          {availableLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {STATUS_ORDER.map((status) => {
          const isActive = filters.statuses.includes(status);
          return (
            <button
              key={status}
              type="button"
              onClick={() => toggleStatus(status)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isActive
                  ? "bg-[#14171F] text-white border-[#14171F]"
                  : "bg-white text-[#5B6068] border-[#E7E5E0] hover:border-[#14171F]"
              }`}
            >
              {STATUS_LABELS[status]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
