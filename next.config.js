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
  env: {
    graphql: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clhheyhl0132z01um00ukankn/master'
  }
}

module.exports = nextConfig
