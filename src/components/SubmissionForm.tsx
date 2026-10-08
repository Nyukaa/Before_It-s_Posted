import { useState } from "react";
import {
  Opportunity,
  OpportunityStatus,
  STATUS_LABELS,
  STATUS_ORDER,
} from "@/lib/types";

type SubmissionFormProps = {
  readonly onSubmit: (opportunity: Opportunity) => void;
  readonly onCancel: () => void;
  readonly availableFields: string[];
  readonly availableLocations: string[];
};

export default function SubmissionForm({
  onSubmit,
  onCancel,
  availableFields,
  availableLocations,
}: SubmissionFormProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [field, setField] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<OpportunityStatus>("potential");
  const [anonymousSource, setAnonymousSource] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !company.trim() || !note.trim()) return;

    onSubmit({
      id: crypto.randomUUID(),
      title,
      company,
      field: field || "Other",
      location: location || "Unspecified",
      status,
      insiderNote: note,
      source: anonymousSource || undefined,
      postedAt: new Date().toISOString().slice(0, 10),
    });

    setTitle("");
    setCompany("");
    setField("");
    setLocation("");
    setStatus("potential");
    setAnonymousSource("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E7E5E0] rounded-lg p-5 space-y-3"
    >
      <h3 className="font-serif text-lg text-[#14171F]">Share a lead</h3>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job title"
          required
          className="px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] placeholder-[#8A8F98] bg-white focus:outline-none focus:border-[#0F7173] focus:border-2"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          required
          className="px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] placeholder-[#8A8F98] bg-white focus:outline-none focus:border-[#0F7173] focus:border-2"
        />
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] bg-white appearance-none focus:outline-none focus:border-[#0F7173] focus:border-2 cursor-pointer"
        >
          <option value="">Field</option>
          {availableFields.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] bg-white appearance-none focus:outline-none focus:border-[#0F7173] focus:border-2 cursor-pointer"
        >
          <option value="">Location</option>
          {availableLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Why do you think this position will open up soon? What's the source?"
        required
        rows={3}
        className="w-full px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] placeholder-[#8A8F98] bg-white resize-none focus:outline-none focus:border-[#0F7173] focus:border-2"
      />

      <div className="flex items-center gap-2">
        <label htmlFor="status" className="text-sm text-[#5B6068] whitespace-nowrap">
          Status:
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as OpportunityStatus)}
          className="flex-1 px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] bg-white appearance-none focus:outline-none focus:border-[#0F7173] focus:border-2 cursor-pointer"
        >
          {STATUS_ORDER.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={anonymousSource}
        onChange={(e) => setAnonymousSource(e.target.value)}
        placeholder="Anonymous lead (optional)"
        className="w-full px-3 py-2 border-2 border-[#D0CCC8] rounded-md text-sm text-[#14171F] placeholder-[#8A8F98] bg-white focus:outline-none focus:border-[#0F7173] focus:border-2"
      />

      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm text-[#5B6068] hover:text-[#14171F]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#14171F] text-white text-sm font-medium rounded-md hover:bg-[#2B2E36] transition-colors"
        >
          Submit lead
        </button>
      </div>
    </form>
  );
}
