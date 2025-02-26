import { useTranslations } from "next-intl";
import ProfilePicture from "./ProfilePicture";

export default function TopBar() {
  const t = useTranslations("index");
  return (
    <div>
      <div>{t("main.name")}</div>
    </div>
  );
}
