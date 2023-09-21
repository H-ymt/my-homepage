/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
