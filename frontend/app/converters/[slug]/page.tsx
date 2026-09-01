import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Converter from "@/components/converters/Converter";
import ConverterLayout from "@/components/ConverterLayout";
import { converters } from "@/lib/converters";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return converters.map((converter) => ({
    slug: converter.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const converter = converters.find(
    (item) => item.slug === slug
  );

  if (!converter) {
    return {};
  }

  return {
    title: `${converter.title} | Unitora`,
    description: converter.description,
  };
}

export default async function ConverterPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const converter = converters.find(
    (item) => item.slug === slug
  );

  if (!converter) {
    notFound();
  }

  return (
    <ConverterLayout>
      <div className="mx-auto max-w-4xl">
        <a
          href="/converters"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Все конвертеры
        </a>

        <div className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight">
            {converter.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {converter.description}
          </p>
        </div>

        <Converter converter={converter} />

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            Как выполнить перевод?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Введите значение в поле «{converter.from}».
            Unitora автоматически выполнит перевод в{" "}
            {converter.to.toLowerCase()}.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-100 p-5 font-mono text-sm">
            {converter.formula}
          </div>
        </div>

        <div className="mt-10 flex h-24 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
          <span className="text-sm text-slate-400">
            Рекламный блок
          </span>
        </div>
      </div>
    </ConverterLayout>
  );
}