/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    experimental: {
        reactCompiler
    }
=======
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { hostname: "lh3.googleusercontent.com"},
            { hostname: "avatars.githubusercontent.com" },
        ],
    },
>>>>>>> ce541ea (123)
};

export default nextConfig;
