/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	eslint: {
		dirs: ['src'],
	},
}

module.exports = nextConfig
