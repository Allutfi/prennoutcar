import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // lh3.googleusercontent.com images are already CDN-optimised — pass them
    // through without re-optimising to avoid upstream timeouts in dev/prod.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
    // Skip Next.js image optimisation for these external CDN images.
    // The images are already served at appropriate quality from Google's CDN.
    unoptimized: false,
    minimumCacheTTL: 14400, // 4 h — the v16 default; be explicit
  },
};

export default nextConfig;
