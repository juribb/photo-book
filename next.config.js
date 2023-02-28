/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://cdn.toss.im/cert/'],
  },
}

module.exports = nextConfig
