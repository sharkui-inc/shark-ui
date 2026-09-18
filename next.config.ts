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
  // Dev-only pretty URLs: /docs/:path.md → static /llms.mdx/docs/:path.
  // output: "export" does not apply these in production; vercel.json handles that.
  async rewrites() {
    return [
      {
        destination: "/llms.mdx/docs/index",
        source: "/docs.md",
      },
      {
        destination: "/llms.mdx/docs/:path*",
        source: "/docs/:path*.md",
      },
    ];
  },
  serverExternalPackages: ["@takumi-rs/core"],
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
