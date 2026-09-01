"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    yaContextCb: any[];
    Ya: any;
  }
}

export default function YandexAd() {
  useEffect(() => {
    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      window.Ya.Context.AdvManager.render({
        blockId: "R-A-19853764-1",
        renderTo: "yandex_rtb_R-A-19853764-1",
      });
    });
  }, []);

  return <div id="yandex_rtb_R-A-19853764-1" />;
}