import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === "development", // Allow unoptimized in dev to handle missing images
  },
};

export default withMDX(nextConfig);

