import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    }
  },  /* config options here */
};

export default nextConfig;
