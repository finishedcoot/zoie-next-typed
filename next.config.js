/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "personal-galleries.s3.amazonaws.com",
      "works-galleries.s3.amazonaws.com",
      "alizoie.com",
    ],
  },
};

module.exports = nextConfig;
