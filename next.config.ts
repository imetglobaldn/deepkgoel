import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    allowedDevOrigins: ["192.168.29.104"],
    // Production builds never overwrite a running development server's files.
    distDir:
      process.env.NEXT_DIST_DIR ||
      (phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next-build"),
    reactCompiler: true,
  };
}
