"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (!query.trim()) {
      router.push("/converters");
      return;
    }

    router.push(
      `/converters?search=${encodeURIComponent(query.trim())}`
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <div className="flex rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Что хотите посчитать или перевести?"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
        >
          Найти
        </button>
      </div>
    </div>
  );
}