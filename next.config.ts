import {BASE_PATH} from 'config/site';

const nextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
