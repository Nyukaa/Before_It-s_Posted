"use client";

import { useMemo, useState } from "react";
import { Opportunity } from "@/lib/types";
import { mockOpportunities } from "@/lib/mock-data";
import OpportunityCard from "@/components/OpportunityCard";
import FilterPanel, { Filters } from "@/components/FilterPanel";
import SubmissionForm from "@/components/SubmissionForm";

const INITIAL_FILTERS: Filters = {
  search: "",
  field: "",
  location: "",
  statuses: [],
};

export default function HomePage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(mockOpportunities);
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [showForm, setShowForm] = useState(false);

  const availableFields = useMemo(
    () => Array.from(new Set(opportunities.map((o) => o.field))).sort(),
    [opportunities]
  );
  const availableLocations = useMemo(
    () => Array.from(new Set(opportunities.map((o) => o.location))).sort(),
    [opportunities]
  );

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((o) => {
      const matchesSearch =
        !filters.search ||
        o.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        o.company.toLowerCase().includes(filters.search.toLowerCase());
      const matchesField = !filters.field || o.field === filters.field;
      const matchesLocation = !filters.location || o.location === filters.location;
      const matchesStatus =
        filters.statuses.length === 0 || filters.statuses.includes(o.status);

      return matchesSearch && matchesField && matchesLocation && matchesStatus;
    });
  }, [opportunities, filters]);

  const handleNewLead = (opportunity: Opportunity) => {
    setOpportunities((prev) => [opportunity, ...prev]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F2]">
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <p className="text-sm text-[#8A8F98] mb-2">The hidden job market</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#14171F]">
          Before It&apos;s Posted
        </h1>
        <p className="text-[#5B6068] mt-3 max-w-xl mx-auto">
          Insider leads on roles before they go public. Share what you&apos;ve heard.
          Get early access to what&apos;s coming.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl text-[#14171F]">
            {filteredOpportunities.length} of {opportunities.length} leads
          </h2>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="px-4 py-2 bg-[#0F7173] text-white text-sm font-medium rounded-md hover:bg-[#0C5B5C] transition-colors"
          >
            {showForm ? "Close" : "Share a lead"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <div className="space-y-4">
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              availableFields={availableFields}
              availableLocations={availableLocations}
            />
          </div>

          <div className="space-y-4">
            {showForm && (
              <SubmissionForm
                onSubmit={handleNewLead}
                onCancel={() => setShowForm(false)}
                availableFields={availableFields}
                availableLocations={availableLocations}
              />
            )}

            {filteredOpportunities.length === 0 ? (
              <div className="bg-white border border-[#E7E5E0] rounded-lg p-8 text-center text-[#8A8F98] text-sm">
                No leads match these filters yet. Try widening your search.
              </div>
            ) : (
              filteredOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
