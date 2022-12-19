/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**/nkbmdolpygrwxgurnjuz.supabase.co/**',
      },
      {
        protocol: 'https',
        hostname: '**/images.unsplash.com/**',
      },
    ],
  },
};
