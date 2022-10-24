/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['img.favpng.com', 'image.tmdb.org'] },

}

module.exports = nextConfig
