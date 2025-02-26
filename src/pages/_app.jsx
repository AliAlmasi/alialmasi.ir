import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  useEffect(() => {
    const dir = locale === "fa" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="Asia/Tehran"
      messages={pageProps.i18n}
    >
      <Component {...pageProps} />
      <SpeedInsights />
    </NextIntlClientProvider>
  );
}
