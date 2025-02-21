export default function handler(req, res) {
	res.status(200).json({
		name: process.env.author || "My App",
		short_name: process.env.author || "App",
		description:
			process.env.description || "A dynamic web application manifest",
		start_url: "/",
		display: "standalone",
		background_color: process.env.bg_color || "#ffffff",
		theme_color: process.env.theme_color || "#000000",
		icons: [
			{
				src: "/favicon.png",
				sizes: "512x512",
				type: "image/png"
			}
		]
	});
}
