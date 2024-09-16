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
  assetPrefix: process.env.NODE_ENV === 'production' ? '/FBT-GYM/' : '',
  swcMinify: false, // Desactiva la minificación de JavaScript
};

export default nextConfig;
