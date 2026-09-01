import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Unitora — онлайн-конвертеры и калькуляторы",
    template: "%s | Unitora",
  },

  description:
    "Бесплатные онлайн-конвертеры и калькуляторы. Перевод единиц длины, веса, температуры, объёма, времени и другие полезные инструменты.",

  applicationName: "Unitora",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Unitora — онлайн-конвертеры и калькуляторы",
    description:
      "Бесплатные онлайн-инструменты для расчётов и конвертации.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}