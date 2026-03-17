import type { NextConfig } from "next";

const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }
        ]
      }
    ]
  },
  // For local development
  serverRuntimeConfig: {
    // Will only be available on the server side
    WC_KEY: process.env.WC_KEY,
    WC_SECRET: process.env.WC_SECRET
  }
}

export default nextConfig;
