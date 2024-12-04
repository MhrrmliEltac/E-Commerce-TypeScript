import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname:
          "/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688622161445-iphone14-white.png?alt=media&token=fe2065e5-fdfe-4a6f-baa6-380b5fad90b8",
      },
    ],
  },
};

export default nextConfig;
