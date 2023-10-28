/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'panel-back.landaholding.com','https://panel-back.landaholding.com'],
  },
};

module.exports = nextConfig;
