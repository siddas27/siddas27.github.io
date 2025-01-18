/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

