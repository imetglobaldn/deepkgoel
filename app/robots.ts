import type { MetadataRoute } from "next";
import { SITE_URL } from "./data/site";

// Served at /robots.txt: every page may be indexed, and crawlers are pointed
// at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
