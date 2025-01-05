import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions: {
      bodySizeLimit: "500mb"
    }
  },
  images:{
    domains: ['cloud.appwrite.io']
  }
  /* config options here */
};

export default nextConfig;
