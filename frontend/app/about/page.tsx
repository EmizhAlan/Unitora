export const metadata = {
  title: "О проекте — Unitora",
  description: "Информация о сервисе Unitora.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold">О Unitora</h1>

        <p className="mt-6 leading-8 text-slate-600">
          Unitora — бесплатный онлайн-сервис с конвертерами и
          калькуляторами для повседневных задач.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          Мы стремимся сделать расчёты максимально простыми,
          быстрыми и доступными прямо в браузере.
        </p>
      </article>
    </main>
  );
}