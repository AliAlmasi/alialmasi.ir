import { Vazirmatn } from "next/font/google";
import { useTranslations } from "next-intl";
import ProfilePicture from "@/components/ProfilePicture";

const vazirmatn = Vazirmatn({
	variable: "--font-vazirmatn",
	subsets: ["latin", "arabic"],
	display: "swap",
	weight: "variable",
	preload: true
});

export async function getStaticProps(context) {
	return {
		props: {
			i18n: (await import(`../../i18n/${context.locale}.json`)).default
		}
	};
}

export default function Home() {
	const t = useTranslations("index");

	return (
		<main className={vazirmatn.className}>
			<h1 className="text-red-600 bg-black">{t("title")}</h1>
			<p>{t("message")}</p>
			<ProfilePicture size={160} circle />
		</main>
	);
}
