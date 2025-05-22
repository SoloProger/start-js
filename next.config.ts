import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/starter/js",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
