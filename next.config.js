/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX(nextConfig);
