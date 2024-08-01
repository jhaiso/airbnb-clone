/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    },
};

export default nextConfig;
