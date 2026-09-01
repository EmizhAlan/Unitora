import InnerLayout from "@/components/InnerLayout";

export const metadata = {
  title: "О проекте — Unitora",
  description: "Информация о сервисе Unitora — онлайн-конвертеры и калькуляторы.",
};

export default function AboutPage() {
  return (
    <InnerLayout>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">О Unitora</h1>

        <div className="mt-8 space-y-6 leading-8 text-slate-600">
          <p>
            Unitora — бесплатный онлайн-сервис с конвертерами и
            калькуляторами для повседневных задач. Мы создали его,
            чтобы сделать расчёты максимально простыми, быстрыми и
            доступными прямо в браузере.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Наша миссия</h2>
          <p>
            Мы верим, что простые инструменты должны быть бесплатными
            и доступными для каждого. Unitora не требует регистрации,
            установки приложений или подписок — просто откройте сайт
            и начните использовать.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Что умеет Unitora</h2>
          <ul className="list-inside space-y-2">
            <li><strong>Конвертеры единиц</strong> — длина, вес, температура, объём, время</li>
            <li><strong>Калькулятор процентов</strong> — расчёт процентов от числа</li>
            <li><strong>Калькулятор скидки</strong> — узнайте итоговую цену после скидки</li>
            <li><strong>Калькулятор возраста</strong> — точный возраст по дате рождения</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">Почему Unitora?</h2>
          <ul className="list-inside space-y-2">
            <li>⚡ <strong>Мгновенный результат</strong> — без задержек и рекламы</li>
            <li>🔒 <strong>Приватность</strong> — мы не собираем личные данные</li>
            <li>📱 <strong>Работает на любом устройстве</strong> — телефон, планшет, компьютер</li>
            <li>💰 <strong>Полностью бесплатно</strong> — без скрытых платежей</li>
          </ul>

          <p className="pt-4 text-sm text-slate-400">
            Если у вас есть предложения или вы нашли ошибку, напишите нам на{" "}
            <a href="mailto:support@unitora.ru" className="text-blue-600 hover:underline">
              support@unitora.ru
            </a>
          </p>
        </div>
      </article>
    </InnerLayout>
  );
}