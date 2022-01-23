/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://linktr.ee/_vitto",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;