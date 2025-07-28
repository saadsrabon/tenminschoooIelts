/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['api.10minuteschool.com', 'img.youtube.com'],
  },
}

module.exports = nextConfig 