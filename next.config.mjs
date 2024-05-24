/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'docs',
    images: {
        domains: ['flowbite.s3.amazonaws.com'],
    }
};

export default nextConfig;
