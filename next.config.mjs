/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const apiUrl = process.env.API_URL;
        if (!apiUrl || !apiUrl.startsWith("http")) return [];

        // Ensure "/api/*" on the frontend proxies to "/api/*" on the backend.
        // Also avoid accidental "/api/api/*" if API_URL already ends with "/api".
        const base = apiUrl.replace(/\/+$/, "");
        const destinationBase = base.endsWith("/api") ? base : `${base}/api`;

        return [
            {
                source: "/api/:path*",
                destination: `${destinationBase}/:path*`,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
            {
                protocol: 'https',
                hostname: 'ttg.com.bd',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;