// import type { NextConfig } from "next";

// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/api/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: '*' }
//         ]
//       }
//     ]
//   },
//   // For local development
//   serverRuntimeConfig: {
//     // Will only be available on the server side
//     WC_KEY: process.env.WC_KEY,
//     WC_SECRET: process.env.WC_SECRET
//   }
// }

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

};

export default nextConfig;