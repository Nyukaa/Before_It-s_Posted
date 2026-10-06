import { useState } from "react";
import { Opportunity } from "@/lib/types";

type SubmissionFormProps = {
  onSubmit: (opportunity: Opportunity) => void;
  onCancel: () => void;
};

export default function SubmissionForm({ onSubmit, onCancel }: SubmissionFormProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [field, setField] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !company.trim() || !note.trim()) return;

    onSubmit({
      id: crypto.randomUUID(),
      title,
      company,
      field: field || "Other",
      location: location || "Unspecified",
      status: "potential",
      insiderNote: note,
      postedAt: new Date().toISOString().slice(0, 10),
    });

    setTitle("");
    setCompany("");
    setField("");
    setLocation("");
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
          className="px-3 py-2 border border-[#E7E5E0] rounded-md text-sm focus:outline-none focus:border-[#0F7173]"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          required
          className="px-3 py-2 border border-[#E7E5E0] rounded-md text-sm focus:outline-none focus:border-[#0F7173]"
        />
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          placeholder="Field (e.g. Tech, Marketing)"
          className="px-3 py-2 border border-[#E7E5E0] rounded-md text-sm focus:outline-none focus:border-[#0F7173]"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="px-3 py-2 border border-[#E7E5E0] rounded-md text-sm focus:outline-none focus:border-[#0F7173]"
        />
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Why do you think this position will open up soon? What's the source?"
        required
        rows={3}
        className="w-full px-3 py-2 border border-[#E7E5E0] rounded-md text-sm resize-none focus:outline-none focus:border-[#0F7173]"
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
