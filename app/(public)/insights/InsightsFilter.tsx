"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CATEGORIES = [
  { value: "", label: "All Categories" },
  { value: "PRESS_RELEASE", label: "Press Release" },
  { value: "BLOG", label: "Blog" },
  { value: "NEWS", label: "News" },
  { value: "UPDATE", label: "Update" },
];

export default function InsightsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(
    searchParams.get("category") || ""
  );

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (category) params.set("category", category);

    router.push(`/insights?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <input
        type="text"
        placeholder="Search insights..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-1/2 rounded border px-4 py-2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-56 rounded border px-4 py-2"
      >
        {CATEGORIES.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>

      <button
        onClick={applyFilters}
        className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800"
      >
        Filter
      </button>
    </div>
  );
}
