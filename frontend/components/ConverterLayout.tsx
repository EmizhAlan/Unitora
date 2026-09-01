import Link from "next/link";

export default function ConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            Unitora
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <Link href="/converters" className="transition hover:text-slate-950">
              Конвертеры
            </Link>
            <Link href="/calculators" className="transition hover:text-slate-950">
              Калькуляторы
            </Link>
            <Link href="/about" className="transition hover:text-slate-950">
              О проекте
            </Link>
            <Link href="/contacts" className="transition hover:text-slate-950">
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {children}
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Unitora</div>
          <div className="flex gap-6">
            <Link href="/converters" className="hover:text-slate-900">
              Конвертеры
            </Link>
            <Link href="/calculators" className="hover:text-slate-900">
              Калькуляторы
            </Link>
            <Link href="/about" className="hover:text-slate-900">
              О проекте
            </Link>
            <Link href="/privacy" className="hover:text-slate-900">
              Конфиденциальность
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
