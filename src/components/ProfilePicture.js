import Image from "next/image";
import source from "/public/me.webp";

const style = "aspect-square select-none";

export default function ProfilePicture({ size, circle = false }) {
	return (
		<Image
			src={source}
			alt={`${process.env.author}'s Profile Picture`}
			className={circle ? `rounded-full ${style}` : style}
			width={size}
			height={size}
			placeholder="blur"
		/>
	);
}
