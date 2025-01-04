import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions: {
      bodySizeLimit: "500mb"
    }
  }
  /* config options here */
};

export default nextConfig;
