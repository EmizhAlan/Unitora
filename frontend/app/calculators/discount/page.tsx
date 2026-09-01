"use client";

import { useState } from "react";
import InnerLayout from "@/components/InnerLayout";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const priceNum = Number(price);
  const discountNum = Number(discount);
  const isValid =
    priceNum > 0 &&
    discountNum >= 0 &&
    discountNum <= 100 &&
    Number.isFinite(priceNum);

  const savings = isValid ? (priceNum * discountNum) / 100 : null;
  const finalPrice = isValid ? priceNum - savings! : null;

  return (
    <InnerLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Калькулятор скидки
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Узнайте итоговую цену после применения скидки.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Исходная цена
            </label>
            <div className="relative mt-2">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="1000"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">₽</span>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700">
              Скидка, %
            </label>
            <div className="relative mt-2">
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="20"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">%</span>
            </div>
          </div>

          {isValid && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-green-50 p-5">
                <div className="text-sm text-green-700">Экономия</div>
                <div className="mt-1 text-2xl font-bold text-green-800">
                  {savings!.toFixed(2)} ₽
                </div>
              </div>
              <div className="rounded-2xl bg-blue-50 p-5">
                <div className="text-sm text-blue-700">Итоговая цена</div>
                <div className="mt-1 text-2xl font-bold text-blue-800">
                  {finalPrice!.toFixed(2)} ₽
                </div>
              </div>
            </div>
          )}

          {!isValid && discountNum > 100 && (
            <div className="mt-8 rounded-2xl bg-red-50 p-5 text-sm text-red-700">
              Скидка не может превышать 100%.
            </div>
          )}
        </div>
      </div>
    </InnerLayout>
  );
}