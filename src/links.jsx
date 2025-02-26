import {
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
  At,
  MastodonLogo,
} from "@phosphor-icons/react";

const links = [
  {
    name: "github",
    href: "https://github.com/alialmasi",
    logo: <GithubLogo />,
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/alialmasi",
    logo: <LinkedinLogo />,
  },
  { name: "telegram", href: "https://al1almasi.t.me", logo: <TelegramLogo /> },
  { name: "email", href: "mailto:ali@almsi.ir", logo: <At /> },
  { name: "mastodon", href: "https://ieji.de/@almasi", logo: <MastodonLogo /> },
  // { name: "instagram", href: "https://instagram.com/al1almasi" }
  // { name: "twitter", href: "https://twitter.com/al1almasi" },
  // { name: "gpg", href: "https://key.alialmasi.ir" },
  // { name: "wakatime", href: "https://wakatime.com/alialmasi" },
  // { name: "donate", href: "https://donate.alialmasi.ir" },
  // { name: "notebook", href: "https://note.alialmasi.ir" }
];

export default links;
