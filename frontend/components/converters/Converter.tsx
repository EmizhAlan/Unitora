"use client";

import { useMemo, useState } from "react";
import type { ConverterConfig } from "@/lib/converters";

type ConverterProps = {
  converter: ConverterConfig;
};

export default function Converter({
  converter,
}: ConverterProps) {
  const [value, setValue] = useState("");

  const result = useMemo(() => {
    if (value.trim() === "") {
      return "";
    }

    const number = Number(value);

    if (!Number.isFinite(number)) {
      return "";
    }

    let converted: number;

    switch (converter.type) {
      case "factor":
        converted = number * (converter.factor ?? 1);
        break;

      case "celsius-to-fahrenheit":
        converted = number * 9 / 5 + 32;
        break;

      case "fahrenheit-to-celsius":
        converted = (number - 32) * 5 / 9;
        break;

      case "celsius-to-kelvin":
        converted = number + 273.15;
        break;

      case "kelvin-to-celsius":
        converted = number - 273.15;
        break;

      case "fahrenheit-to-kelvin":
        converted = (number - 32) * 5 / 9 + 273.15;
        break;

      case "kelvin-to-fahrenheit":
        converted = (number - 273.15) * 9 / 5 + 32;
        break;

      default:
        return "";
    }

    return converted
      .toFixed(8)
      .replace(/\.?0+$/, "");
  }, [value, converter]);

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <div>
          <label
            htmlFor="converter-value"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            {converter.from}
          </label>

          <div className="relative">
            <input
              id="converter-value"
              type="number"
              inputMode="decimal"
              value={value}
              onChange={(event) =>
                setValue(event.target.value)
              }
              placeholder="Введите значение"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 pr-14 text-lg outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              {converter.fromShort}
            </span>
          </div>
        </div>

        <div className="hidden pb-4 text-2xl text-slate-300 md:block">
          →
        </div>

        <div>
          <label
            htmlFor="converter-result"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            {converter.to}
          </label>

          <div className="relative">
            <input
              id="converter-result"
              type="text"
              readOnly
              value={result}
              placeholder="Результат"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-14 text-lg font-semibold outline-none"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              {converter.toShort}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">
        <div className="text-sm font-semibold text-blue-900">
          Формула
        </div>

        <div className="mt-2 text-sm text-blue-800">
          {converter.formula}
        </div>
      </div>
    </div>
  );
}