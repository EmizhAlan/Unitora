"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ConverterConfig } from "@/lib/converters";
import { converters } from "@/lib/converters";
import InnerLayout from "@/components/InnerLayout";

const categoryInfo = [
  {
    name: "Длина",
    description: "Километры, мили, метры, футы и другие единицы.",
    icon: "↔",
  },
  {
    name: "Вес",
    description: "Килограммы, фунты, граммы, унции и тонны.",
    icon: "⚖",
  },
  {
    name: "Температура",
    description: "Цельсий, Фаренгейт и Кельвин.",
    icon: "°",
  },
  {
    name: "Объём",
    description: "Литры, миллилитры, галлоны и другие единицы.",
    icon: "◫",
  },
  {
    name: "Время",
    description: "Секунды, минуты, часы и дни.",
    icon: "◷",
  },
  {
    name: "Скорость",
    description: "Километры в час, мили в час, узлы и другие.",
    icon: "↗",
  },
  {
    name: "Площадь",
    description: "Квадратные метры, гектары, акры и другие.",
    icon: "▦",
  },
  {
    name: "Данные",
    description: "Байты, килобайты, мегабайты, гигабайты.",
    icon: "◈",
  },
];

export default function ConvertersPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return converters;
    return converters.filter((converter) => {
      const text = [
        converter.title,
        converter.description,
        converter.from,
        converter.to,
        converter.category,
        converter.fromShort,
        converter.toShort,
      ]
        .join(" ")
        .toLowerCase();
      return text.includes(normalized);
    });
  }, [query]);

  const categories = Array.from(
    new Set(filtered.map((c) => c.category))
  );

  return (
    <InnerLayout>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Конвертеры
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Полный каталог конвертеров единиц измерения.
          Найдите нужный инструмент через поиск или выберите по категории.
        </p>

        {/* Search */}
        <div className="mt-8 max-w-2xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск конвертера: километры, фунты, градусы..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
          {query.trim() && (
            <p className="mt-3 text-sm text-slate-500">
              Найдено: {filtered.length} из {converters.length}
            </p>
          )}
        </div>

        {/* Categories (shown when no search) */}
        {!query.trim() && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Категории</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categoryInfo.map((category) => {
                const count = converters.filter(
                  (c) => c.category === category.name
                ).length;
                return (
                  <Link
                    key={category.name}
                    href={`/converters?category=${encodeURIComponent(
                      category.name
                    )}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-semibold text-blue-600">
                      {category.icon}
                    </div>
                    <h3 className="mt-4 font-semibold">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {count} конвертер{count === 1 ? "" : count < 5 ? "а" : "ов"}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Filtered results */}
        {(query.trim() || categories.length > 0) && (
          <section className="mt-14 space-y-12">
            {categories.map((category) => {
              const items = filtered.filter(
                (c) => c.category === category
              );
              return (
                <div key={category}>
                  <h2 className="mb-5 text-2xl font-bold">
                    {category}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((converter) => (
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
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

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
      </div>
    </InnerLayout>
  );
}