/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { withContentlayer } = require('next-contentlayer');

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/,
// });

module.exports = withContentlayer(nextConfig);
