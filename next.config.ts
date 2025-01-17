import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions: {
      bodySizeLimit: "500mb"
    }
  },
  images:{
    domains: ['cloud.appwrite.io']
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
  /* config options here */
};

export default nextConfig;
