/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/(.*)\\.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // Cache PNG's for 1 day (86400 seconds)
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 86400000).toUTCString(), // Set an expiration date 1 day from now
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
