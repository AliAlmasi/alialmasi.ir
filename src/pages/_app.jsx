import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

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
