"use client";

import { useState } from "react";
import InnerLayout from "@/components/InnerLayout";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  daysUntilBirthday: number;
} | { error: string };

export default function AgeCalculator() {
  const [date, setDate] = useState("");

  const result: AgeResult | null = (() => {
    if (!date) return null;
    const birth = new Date(date);
    const today = new Date();

    if (birth > today) return { error: "Дата не может быть в будущем" };

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const nextBirthday = new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    return { years, months, days, totalDays, totalWeeks, totalMonths, daysUntilBirthday };
  })();

  const isError = result !== null && "error" in result;
  const isData = result !== null && !isError;

  return (
    <InnerLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Калькулятор возраста
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Узнайте точный возраст по дате рождения.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <label className="block text-sm font-medium text-slate-700">
            Дата рождения
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          {isError && (
            <div className="mt-6 rounded-2xl bg-red-50 p-5 text-sm text-red-700">
              {result.error}
            </div>
          )}

          {isData && (
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl font-bold text-blue-800">
                  {result.years} {result.years === 1 ? "год" : result.years < 5 ? "года" : "лет"}
                </div>
                <div className="mt-1 text-blue-700">
                  {result.months} {result.months === 1 ? "месяц" : result.months < 5 ? "месяца" : "месяцев"}
                  {" "}{result.days} {result.days === 1 ? "день" : result.days < 5 ? "дня" : "дней"}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {result.totalMonths.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">Всего месяцев</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {result.totalWeeks.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">Всего недель</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {result.totalDays.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">Всего дней</div>
                </div>
                <div className="rounded-xl bg-amber-50 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-800">
                    {result.daysUntilBirthday}
                  </div>
                  <div className="text-sm text-amber-700">Дней до ДР</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </InnerLayout>
  );
}
