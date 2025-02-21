/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en", "fa"],
		defaultLocale: "fa",
		localeDetection: false
	},
	trailingSlash: true,
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on"
					},
					{
						key: "Access-Control-Allow-Origin",
						value: "*"
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, POST"
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type, Authorization"
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload"
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN"
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff"
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin"
					},
					{
						key: "X-Developed-By",
						value: "Ali Almasi"
					}
				]
			}
		];
	}
};

export default nextConfig;
