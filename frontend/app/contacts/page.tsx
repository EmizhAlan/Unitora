export const metadata = {
  title: "Контакты — Unitora",
  description: "Контактная информация Unitora.",
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold">Контакты</h1>

        <p className="mt-6 leading-8 text-slate-600">
          Если у вас есть вопросы, предложения или сообщения об
          ошибках, свяжитесь с администрацией Unitora.
        </p>

        <p className="mt-6">
          Email:{" "}
          <span className="font-medium">
            support@unitora.ru
          </span>
        </p>
      </article>
    </main>
  );
}