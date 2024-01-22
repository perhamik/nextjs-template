/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		dirs: ['app', 'pages', 'src'],
	},
	publicRuntimeConfig: {
		staticFolder: '/public',
	},
	devIndicators: {
		buildActivityPosition: 'bottom-right',
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	productionBrowserSourceMaps: true,
	compress: true,
	output: 'standalone',
	experimental: {
		typedRoutes: true,
		// optimizePackageImports: [],
		// turbotrace: {
		// 	logLevel: 'info',
		// 	logDetail: true,
		// },
		webVitalsAttribution: ['CLS', 'LCP'],
	},
}

export default nextConfig
