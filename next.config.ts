import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.nvidia.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" }, 
      // allows Meta / Netflix / OpenAI / Wikipedia images
    ],
  },
};

export default nextConfig;
