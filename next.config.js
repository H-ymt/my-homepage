/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
