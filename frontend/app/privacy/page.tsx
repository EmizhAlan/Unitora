export const metadata = {
  title: "Политика конфиденциальности — Unitora",
  description: "Политика конфиденциальности Unitora.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold">
          Политика конфиденциальности
        </h1>

        <p className="mt-6 leading-8 text-slate-600">
          Unitora может использовать сервисы веб-аналитики и
          рекламные технологии для анализа посещаемости сайта и
          показа рекламы.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          Используемые технологии могут обрабатывать техническую
          информацию о посещении сайта, включая сведения о
          браузере, устройстве и действиях пользователя.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          Используя сайт, пользователь соглашается с применением
          необходимых технических средств аналитики и рекламы в
          соответствии с их правилами и настройками.
        </p>
      </article>
    </main>
  );
}