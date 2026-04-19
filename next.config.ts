// Triggering deployment fix...
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/talkenlyWebsite",
  images: {
    unoptimized: true,
  },
  // Ensure that trailing slashes are added for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
