import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**'
      }
    ]
  },
  env: {
    NEXT_PUBLIC_API_HOST : process.env.NEXT_PUBLIC_API_HOST 
  }

};

export default nextConfig;
