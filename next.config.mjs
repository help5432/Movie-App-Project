/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tvmaze.com",
        // port: "",
        // parhname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
