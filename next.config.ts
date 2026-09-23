import { codeInspectorPlugin } from "code-inspector-plugin";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.dicebear.com",
        pathname: "/10.x/waves/svg",
        protocol: "https",
      },
    ],
    unoptimized: true,
  },
  // Static export: avoids serverless functions on Vercel Hobby (free) tier.
  output: "export",
  reactStrictMode: true,
  // Keep these dev-only aliases for a future runtime deployment. Static exports
  // do not apply Next rewrites, so Vercel serves the equivalents in vercel.json.
  // async rewrites() {
  //   return [
  //     {
  //       destination: "/llms.mdx/docs/index",
  //       source: "/docs.md",
  //     },
  //     {
  //       destination: "/llms.mdx/docs/:path*/index",
  //       source: "/docs/:path*.md",
  //     },
  //   ];
  // },
  turbopack: {
    rules: codeInspectorPlugin({
      behavior: {
        copy: true,
      },
      bundler: "turbopack",
    }),
  },
};

export default withMDX(config);
