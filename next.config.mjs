/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	reactCompiler: true,
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"framer-motion",
			"@tanstack/react-query",
		],
	},
};

export default nextConfig;
