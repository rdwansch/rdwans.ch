/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true, // must be valid Route or use new URL()
  },
  swcMinify: true,
};

module.exports = nextConfig;
