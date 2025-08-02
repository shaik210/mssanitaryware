import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withTM = require('next-transpile-modules')(['canvg']);

module.exports = withTM({
  // your existing Next.js config
  reactStrictMode: true,
});






export default nextConfig;
