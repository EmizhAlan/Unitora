import InnerLayout from "@/components/InnerLayout";

export const metadata = {
  title: "Политика конфиденциальности — Unitora",
  description: "Политика конфиденциальности сервиса Unitora.",
};

export default function PrivacyPage() {
  return (
    <InnerLayout>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Политика конфиденциальности</h1>

        <p className="mt-6 text-sm text-slate-400">
          Последнее обновление: 1 сентября 2026 г.
        </p>

        <div className="mt-8 space-y-6 leading-8 text-slate-600">
          <p>
            Мы уважаем вашу приватность. Эта политика описывает, какие данные
            мы собираем и как используем сайт Unitora.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">1. Сбор данных</h2>
          <p>
            Unitora не собирает и не хранит персональные данные пользователей.
            Все расчёты выполняются локально в вашем браузере — данные не
            передаются на наши серверы.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">2. Файлы cookie</h2>
          <p>
            Сайт может использовать минимальные файлы cookie для корректной
            работы. Мы не используем файлы cookie для отслеживания пользователей
            или сбора персональной информации.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">3. Сторонние сервисы</h2>
          <p>
            На сайте могут использоваться сервисы веб-аналитики и рекламные
            технологии. Эти сервисы могут обрабатывать техническую информацию
            о посещении сайта, включая сведения о браузере, устройстве и
            действиях пользователя.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">4. Рекламные технологии</h2>
          <p>
            Мы можем использовать рекламные сети, которые используют cookie
            и другие технологии для показа релевантной рекламы. Это не
            означает, что мы собираем ваши персональные данные.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">5. Изменения политики</h2>
          <p>
            Мы можем обновлять эту политику конфиденциальности. О любых
            изменениях мы сообщаем на этой странице.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">6. Контакты</h2>
          <p>
            Если у вас есть вопросы по политике конфиденциальности, напишите нам:{" "}
            <a href="mailto:support@unitora.ru" className="text-blue-600 hover:underline">
              support@unitora.ru
            </a>
          </p>
        </div>
      </article>
    </InnerLayout>
  );
}