/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {turbo: undefined},
  output: 'export',
  basePath: '/psy',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config: any, {dev}: any) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
