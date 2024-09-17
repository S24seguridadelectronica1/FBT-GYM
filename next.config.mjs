// next.config.mjs
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
};

export default nextConfig;
