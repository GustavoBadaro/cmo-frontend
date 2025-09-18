import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmoconstrutora.com.br",
        pathname: "/public/uploads",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "jolly-desire-a77455bd16.media.strapiapp.com",
      },
    ],
  },
  env: {
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
  },
};

export default nextConfig;
