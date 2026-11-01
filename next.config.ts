import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Takes are read from Markdown at request time on the few dynamic pages;
  // make sure the files ship with the server bundle.
  outputFileTracingIncludes: {
    "/**": ["./src/content/takes/**/*.md"],
  },
};

export default nextConfig;
