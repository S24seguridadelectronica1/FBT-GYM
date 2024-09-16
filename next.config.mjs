/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
