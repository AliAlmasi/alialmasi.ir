import Image from "next/image";
import source from "/public/me.webp";

export default function ProfilePicture({ size, circle = false }) {
	return (
		<Image
			src={source}
			alt={`${process.env.author}'s Profile Picture`}
			className={circle ? "rounded-full aspect-square" : "aspect-square"}
			width={size}
			height={size}
			placeholder="blur"
		/>
	);
}
