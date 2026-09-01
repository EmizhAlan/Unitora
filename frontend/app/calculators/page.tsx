import Link from "next/link";

const calculators = [
  {
    title: "Калькулятор процентов",
    description: "Рассчитайте процент от числа и разницу между значениями.",
    href: "/calculators/percentage",
  },
  {
    title: "Калькулятор скидки",
    description: "Узнайте итоговую цену товара после скидки.",
    href: "/calculators/discount",
  },
  {
    title: "Калькулятор возраста",
    description: "Рассчитайте возраст по дате рождения.",
    href: "/calculators/age",
  },
];

export const metadata = {
  title: "Онлайн-калькуляторы — Unitora",
  description:
    "Бесплатные онлайн-калькуляторы для повседневных расчётов.",
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Онлайн-калькуляторы
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Простые инструменты для быстрых расчётов.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold">
                {calculator.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {calculator.description}
              </p>

              <div className="mt-5 text-sm font-medium text-blue-600">
                Открыть →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}