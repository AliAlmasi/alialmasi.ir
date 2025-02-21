import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<NextIntlClientProvider
			locale={router.locale}
			timeZone="Asia/Tehran"
			messages={pageProps.i18n}
		>
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
