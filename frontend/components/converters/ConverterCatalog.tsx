"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ConverterConfig } from "@/lib/converters";

type Props = {
  converters: ConverterConfig[];
};

export default function ConverterCatalog({ converters }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return converters;
    }

    return converters.filter((converter) => {
      const text = [
        converter.title,
        converter.description,
        converter.from,
        converter.to,
        converter.category,
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(normalized);
    });
  }, [query]);

  const categories = Array.from(
    new Set(filtered.map((converter) => converter.category))
  );

  return (
    <>
      <div className="mx-auto mt-10 max-w-2xl">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Поиск конвертера..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="mt-14 space-y-12">
        {categories.map((category) => {
          const categoryConverters = filtered.filter(
            (converter) => converter.category === category
          );

          return (
            <section key={category}>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                {category}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryConverters.map((converter) => (
                  <Link
                    key={converter.slug}
                    href={`/converters/${converter.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                        {converter.title}
                      </h3>

                      <span className="text-lg text-slate-300 group-hover:text-blue-500">
                        →
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {converter.fromShort} → {converter.toShort}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {converter.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-14 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="font-semibold text-slate-900">
            Ничего не найдено
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Попробуйте изменить поисковый запрос.
          </p>
        </div>
      )}
    </>
  );
}