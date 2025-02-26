import Image from "next/image";
import source from "/public/me.webp";
import clsx from "clsx";

export default function ProfilePicture({ size, circle = false }) {
  return (
    <Image
      src={source}
      alt={`${process.env.author}'s Profile Picture`}
      className={clsx("aspect-square select-none", circle && "rounded-full")}
      width={size}
      height={size}
      placeholder="blur"
    />
  );
}
