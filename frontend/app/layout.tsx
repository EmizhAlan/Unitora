import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <body>
        {children}

        <Script
          src="https://yandex.ru/ads/system/context.js"
          strategy="afterInteractive"
        />

        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
        >
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){
                (m[i].a=m[i].a||[]).push(arguments)
              };
              m[i].l=1*new Date();

              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                  return;
                }
              }

              k=e.createElement(t),
              a=e.getElementsByTagName(t)[0],
              k.async=1,
              k.src=r,
              a.parentNode.insertBefore(k,a)
            })(window, document, 'script',
              'https://mc.yandex.ru/metrika/tag.js?id=112150429',
              'ym'
            );

            ym(112150429, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}