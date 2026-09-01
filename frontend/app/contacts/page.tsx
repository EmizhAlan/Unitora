import InnerLayout from "@/components/InnerLayout";

export const metadata = {
  title: "Контакты — Unitora",
  description: "Свяжитесь с командой Unitora.",
};

export default function ContactsPage() {
  return (
    <InnerLayout>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Контакты</h1>

        <p className="mt-6 leading-8 text-slate-600">
          Если у вас есть вопросы, предложения, пожелания по развитию
          сервиса или вы нашли ошибку — мы всегда рады обратной связи.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Email</h2>
            <p className="mt-3 text-slate-600">
              Для вопросов и предложений:{" "}
              <a
                href="mailto:support@unitora.ru"
                className="text-blue-600 hover:underline"
              >
                support@unitora.ru
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Социальные сети</h2>
            <p className="mt-3 text-slate-600">
              Мы планируем открыть страницы в социальных сетях.
              Следите за обновлениями на сайте.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Баги и предложения</h2>
            <p className="mt-3 text-slate-600">
              Если вы обнаружили ошибку на сайте или хотите предложить
              новый конвертер или калькулятор — напишите нам на email.
              Мы рассмотрим каждое обращение.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-blue-900">
              Быстрый вопрос?
            </h2>
            <p className="mt-3 text-blue-800">
              Напишите нам на <a href="mailto:support@unitora.ru" className="font-semibold hover:underline">support@unitora.ru</a> —
              мы стараемся отвечать в течение 24 часов.
            </p>
          </div>
        </div>
      </article>
    </InnerLayout>
  );
}