/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
    minimumCacheTTL: 31536000
  },
}

module.exports = nextConfig
