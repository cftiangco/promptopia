/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['lh3.googleusercontent.com'], // Allow external images from Google
    },
};

export default nextConfig;
