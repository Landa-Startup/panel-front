/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'panel.landaholding.com'],
  },
};

module.exports = nextConfig;
