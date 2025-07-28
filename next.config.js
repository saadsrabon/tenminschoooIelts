/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['api.10minuteschool.com', 'img.youtube.com', 'cdn.10minuteschool.com', 's3.ap-southeast-1.amazonaws.com'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 