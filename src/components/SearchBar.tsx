"use client";

import { useState } from "react";

export default function SearchBar({
  value,
  onChange
}: {
  value: string;
  onChange: (v: string) => void;
}) {

  const [search, setSearch] = useState("")
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search items…"
        className="
          w-full max-w-md
          px-4 py-2
          border border-gray-300
          rounded-md
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

  );
}
