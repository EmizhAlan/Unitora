import Link from "next/link";
import InnerLayout from "@/components/InnerLayout";

const calculators = [
  {
    title: "Калькулятор процентов",
    description: "Рассчитайте процент от числа и разницу между значениями.",
    href: "/calculators/percentage",
    icon: "%",
  },
  {
    title: "Калькулятор скидки",
    description: "Узнайте итоговую цену товара после скидки.",
    href: "/calculators/discount",
    icon: "🏷",
  },
  {
    title: "Калькулятор возраста",
    description: "Рассчитайте возраст по дате рождения.",
    href: "/calculators/age",
    icon: "🎂",
  },
];

export const metadata = {
  title: "Онлайн-калькуляторы — Unitora",
  description:
    "Бесплатные онлайн-калькуляторы для повседневных расчётов.",
};

export default function CalculatorsPage() {
  return (
    <InnerLayout>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Онлайн-калькуляторы
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Простые инструменты для быстрых расчётов.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {calculator.icon}
              </div>

              <h2 className="mt-5 text-lg font-semibold">
                {calculator.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {calculator.description}
              </p>

              <div className="mt-5 text-sm font-medium text-blue-600">
                Открыть →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </InnerLayout>
  );
}