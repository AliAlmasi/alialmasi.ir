import { Vazirmatn } from "next/font/google";
import { useTranslations } from "next-intl";

import ProfilePicture from "@/components/ProfilePicture";
import TopBar from "@/components/TopBar";

import links from "@/links";
import style from "@/styles/index.module.css";
import Logo from "@/components/Logo";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: "variable",
  preload: true,
});

export default function Index() {
  const t = useTranslations("index");
  return (
    <>
      <title>{t("page")}</title>
      <div className={vazirmatn.className}>
        <main className={style.main}>
          <TopBar />
          <ProfilePicture size={200} circle />
          <div id="title" className={style.title}>
            <h1 className={style.name}>{t("main.name")}</h1>
            <h2 className={style.sub}>{t("main.sub")}</h2>
          </div>
          <p>{t("main.bio")}</p>
          <p className={style.linksDesc}>{t("main.linksDesc")}</p>
          <ul className={style.linksList}>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className={style.linkBox}>
                  {link.logo} {t("main.links." + link.name)}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      i18n: (await import(`../../i18n/${context.locale}.json`)).default,
      dir: context.locale === "fa" ? "rtl" : "ltr",
    },
  };
}
