"use client";

import { useState } from "react";
import InnerLayout from "@/components/InnerLayout";

export default function PercentageCalculator() {
  const [number, setNumber] = useState("");
  const [percent, setPercent] = useState("");

  const result =
    number && percent
      ? (Number(number) * Number(percent)) / 100
      : "";

  return (
    <InnerLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Калькулятор процентов
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Узнайте, сколько составляет процент от числа.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <label className="block text-sm font-medium">
            Число
          </label>

          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="1000"
          />

          <label className="mt-6 block text-sm font-medium">
            Процент
          </label>

          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="15"
          />

          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <div className="text-sm text-slate-500">
              Результат
            </div>

            <div className="mt-2 text-3xl font-bold">
              {result !== "" ? result : "—"}
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
}
