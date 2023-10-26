/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/board/links",
      //   permanent: false,
      // },
    ];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
