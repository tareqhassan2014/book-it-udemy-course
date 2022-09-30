/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        MONGO_DB_URI: process.env.MONGO_DB_URI,
        ROOT_URL: process.env.ROOT_URL,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    },

    images: {
        domains: [
            'https://nextjs.org/docs/messages/next-image-unconfigured-host',
            'a0.muscache.com',
            'res.cloudinary.com',
        ],
    },
};

module.exports = nextConfig;
