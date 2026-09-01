import HomeSearch from "@/components/home/HomeSearch";

const popularConverters = [
  {
    title: "Километры → мили",
    description: "Быстро перевести километры в мили",
    href: "/converters/km-to-miles",
  },
  {
    title: "Килограммы → фунты",
    description: "Перевести килограммы в фунты",
    href: "/converters/kg-to-lbs",
  },
  {
    title: "Цельсий → Фаренгейт",
    description: "Перевести температуру из °C в °F",
    href: "/converters/celsius-to-fahrenheit",
  },
  {
    title: "Метры → футы",
    description: "Перевести метры в футы",
    href: "/converters/meters-to-feet",
  },
];

const categories = [
  {
    title: "Длина",
    description:
      "Километры, мили, метры, футы, сантиметры, дюймы и другие единицы.",
  },
  {
    title: "Вес",
    description:
      "Килограммы, фунты, граммы, унции и другие единицы измерения.",
  },
  {
    title: "Температура",
    description:
      "Цельсий, Фаренгейт и другие температурные шкалы.",
  },
  {
    title: "Калькуляторы",
    description:
      "Проценты, скидки, возраст, зарплата и другие полезные расчёты.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            Unitora
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a
              href="/converters"
              className="transition hover:text-slate-950"
            >
              Конвертеры
            </a>

            <a
              href="/calculators"
              className="transition hover:text-slate-950"
            >
              Калькуляторы
            </a>

            <a
              href="/about"
              className="transition hover:text-slate-950"
            >
              О проекте
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Бесплатные онлайн-инструменты
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Калькуляторы и
            <br />
            конвертеры онлайн
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Быстро переводите единицы измерения и решайте
            повседневные задачи прямо в браузере.
          </p>

          {/* Search */}
            <HomeSearch />
        </div>
      </section>

      {/* Ad placeholder */}
      <section className="px-6 pb-16">
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
          <span className="text-sm text-slate-400">
            Рекламный блок
          </span>
        </div>
      </section>

      {/* Popular */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <h2 className="text-2xl font-bold">
              Популярные инструменты
            </h2>

            <p className="mt-2 text-slate-600">
              Часто используемые конвертеры Unitora
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularConverters.map((converter) => (
              <a
                key={converter.href}
                href={converter.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg">
                  ↔
                </div>

                <h3 className="mt-5 font-semibold">
                  {converter.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {converter.description}
                </p>

                <div className="mt-5 text-sm font-medium text-blue-600 transition group-hover:text-blue-800">
                  Открыть →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">
              Инструменты Unitora
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Простые и понятные инструменты для быстрых
              расчётов и преобразования единиц измерения.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {category.description}
                </p>

                <a
                  href="/converters"
                  className="mt-5 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Смотреть инструменты →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">
            Как работает Unitora
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-slate-300">
                01
              </div>

              <h3 className="mt-4 font-semibold">
                Выберите инструмент
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Найдите нужный конвертер или калькулятор.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-slate-300">
                02
              </div>

              <h3 className="mt-4 font-semibold">
                Введите значение
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Укажите необходимые данные в форме.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-slate-300">
                03
              </div>

              <h3 className="mt-4 font-semibold">
                Получите результат
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Unitora мгновенно выполнит расчёт.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Unitora</p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/about"
              className="hover:text-slate-900"
            >
              О проекте
            </a>

            <a
              href="/privacy"
              className="hover:text-slate-900"
            >
              Конфиденциальность
            </a>

            <a
              href="/contacts"
              className="hover:text-slate-900"
            >
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}