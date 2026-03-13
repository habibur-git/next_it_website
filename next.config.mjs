/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const apiUrl = process.env.API_URL;
        if (!apiUrl || !apiUrl.startsWith('http')) {
            return [];
        }
        return [
            {
                source: '/api/:path*',
                destination: `${apiUrl}/:path*`,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
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
