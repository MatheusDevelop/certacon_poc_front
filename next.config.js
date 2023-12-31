/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    API_URL: process.env.API_URL || "http://localhost:8080",
  },
};
module.exports = nextConfig;
