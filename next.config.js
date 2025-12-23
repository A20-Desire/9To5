/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // During initial dev it's fine to keep unoptimized to avoid loader issues
    unoptimized: true
  }
};
