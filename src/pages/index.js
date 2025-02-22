import { Vazirmatn } from "next/font/google";
import { useTranslations } from "next-intl";
import ProfilePicture from "@/components/ProfilePicture";

import links from "@/links";
import style from "@/styles/index.module.css";

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

export default function Index() {
	const t = useTranslations("index");

	return (
		<>
			<title>{t("page")}</title>
			<main
				className={`${vazirmatn.className} flex flex-col w-full h-full items-center gap-3`}
			>
				<ProfilePicture size={200} circle />
				<div id="title" className={style.title}>
					<h1 className={style.name}>{t("main.name")}</h1>
					<h2 className={style.sub}>{t("main.sub")}</h2>
				</div>
				<p className={style.bio}>{t("main.bio")}</p>
				<p className={style.linksDesc + style.bio}>{t("main.linksDesc")}</p>
				<ul className={style.linksList}>
					{links.map((link, i) => (
						<li key={i}>
							<a href={link.href}>{t("main.links." + link.name)}</a>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
