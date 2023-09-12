/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true, // must be valid Route or use new URL()
  },
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }],
  },
};

module.exports = nextConfig;
