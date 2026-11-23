import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    allowedDevOrigins: ["192.168.29.104"],
    // The development server writes to its own folder, so a production build
    // (which uses the default `.next`, as Vercel expects) never overwrites it.
    distDir:
      process.env.NEXT_DIST_DIR ||
      (phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"),
    reactCompiler: true,
  };
}
