"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ConverterConfig } from "@/lib/converters";

type ConverterSearchProps = {
  converters: ConverterConfig[];
};

export default function ConverterSearch({
  converters,
}: ConverterSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return converters;
    }

    return converters.filter((converter) => {
      const searchableText = [
        converter.title,
        converter.description,
        converter.from,
        converter.to,
        converter.fromShort,
        converter.toShort,
        converter.slug,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query, converters]);

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition focus-within:border-blue-400 focus-within:shadow-md">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Например: километры, фунты, метры..."
          className="w-full rounded-xl px-4 py-3 outline-none placeholder:text-slate-400"
        />
      </div>

      {query.trim() && (
        <div className="mt-4 text-sm text-slate-500">
          Найдено: {results.length}
        </div>
      )}

      {query.trim() && results.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((converter) => (
            <Link
              key={converter.slug}
              href={`/converters/${converter.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <h3 className="font-semibold">
                {converter.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {converter.fromShort} → {converter.toShort}
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                Открыть →
              </div>
            </Link>
          ))}
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <div className="text-lg font-semibold">
            Ничего не найдено
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Попробуйте другое название или единицу измерения.
          </p>
        </div>
      )}
    </div>
  );
}