/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'images.unsplash.com'],
    minimumCacheTTL: 31536000
  },
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
}

module.exports = nextConfig
