/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async headers() {
    return [
      {
        source: "/api/scrape/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  images: {
    domains: ['lakshya-mahawar.vercel.app', 'cdn.sstatic.net', 'www.gravatar.com', 'cdna.artstation.com', 'cdnb.artstation.com'],
  },
};

export default nextConfig;
