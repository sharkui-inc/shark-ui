import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  // Static export — avoids serverless functions on Vercel Hobby (free) tier.
  output: "export",
  reactStrictMode: true,
  serverExternalPackages: ["@takumi-rs/core"],
  images: {
    unoptimized: true,
  },
  experimental: {
    appNewScrollHandler: true,
  },
  // DISABLED for Vercel free tier — rewrites to /api/raw spawn serverless routes.
  // async rewrites() {
  //   return [
  //     {
  //       destination: "/api/raw/docs/:path*",
  //       source: "/docs/:path*.md",
  //     },
  //   ];
  // },
};

export default withMDX(config);
