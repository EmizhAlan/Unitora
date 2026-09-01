import Link from "next/link";
import { converters } from "@/lib/converters";

const popularSlugs = [
  "km-to-miles",
  "miles-to-km",
  "kg-to-lbs",
  "lbs-to-kg",
  "celsius-to-fahrenheit",
  "fahrenheit-to-celsius",
  "liters-to-gallons",
  "minutes-to-hours",
];

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
];

export default function Home() {
  const popularConverters = popularSlugs
    .map((slug) => converters.find((converter) => converter.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Быстро. Бесплатно. Без регистрации.
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Конвертируйте всё
              <span className="block text-blue-600">
                в одном месте
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Unitora — простой онлайн-сервис для перевода единиц
              измерения. Выберите нужный конвертер и получите
              результат за несколько секунд.
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
              <Link
                href="/converters"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl text-slate-400">
                    ⌕
                  </span>

                  <div>
                    <div className="font-medium text-slate-900">
                      Найти конвертер
                    </div>

                    <div className="text-sm text-slate-500">
                      Например: километры в мили
                    </div>
                  </div>
                </div>

                <span className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  Открыть
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AD SLOT */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex min-h-[100px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50">
          <span className="text-xs uppercase tracking-widest text-slate-400">
            Реклама
          </span>
        </div>
      </section>

      {/* POPULAR */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Популярное
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Часто используемые конвертеры
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Самые востребованные преобразования единиц измерения
              всегда под рукой.
            </p>
          </div>

          <Link
            href="/converters"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Все конвертеры →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularConverters.map((converter) => {
            if (!converter) return null;

            return (
              <Link
                key={converter.slug}
                href={`/converters/${converter.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {converter.category}
                  </span>

                  <span className="text-slate-300 transition group-hover:text-blue-500">
                    →
                  </span>
                </div>

                <h3 className="mt-5 font-semibold">
                  {converter.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {converter.fromShort} → {converter.toShort}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Категории
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Всё необходимое в одном месте
            </h2>

            <p className="mt-3 text-slate-600">
              Выберите категорию и найдите подходящий конвертер.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categoryInfo.map((category) => (
              <Link
                key={category.name}
                href={`/converters?category=${encodeURIComponent(
                  category.name
                )}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-semibold text-blue-600">
                  {category.icon}
                </div>

                <h3 className="mt-5 font-semibold">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-4 text-sm font-medium text-blue-600">
                  Смотреть →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY UNITORA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-2xl">⚡</div>

            <h3 className="mt-4 text-lg font-semibold">
              Мгновенный результат
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Вводите значение и сразу получаете результат без
              лишних действий.
            </p>
          </div>

          <div>
            <div className="text-2xl">✓</div>

            <h3 className="mt-4 text-lg font-semibold">
              Бесплатно
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Все основные конвертеры доступны бесплатно и без
              регистрации.
            </p>
          </div>

          <div>
            <div className="text-2xl">◉</div>

            <h3 className="mt-4 text-lg font-semibold">
              Всегда под рукой
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Unitora работает прямо в браузере на компьютере,
              планшете или телефоне.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Не нашли нужный конвертер?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Откройте полный каталог Unitora и найдите нужное
            преобразование.
          </p>

          <Link
            href="/converters"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Открыть каталог
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} Unitora
          </div>

          <div className="flex gap-6">
            <Link
              href="/converters"
              className="hover:text-slate-900"
            >
              Конвертеры
            </Link>

            <Link
              href="/about"
              className="hover:text-slate-900"
            >
              О сервисе
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}