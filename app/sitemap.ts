import type { MetadataRoute } from "next";
import { articles, navigation } from "./data/content";
import { SITE_URL } from "./data/site";

// Served at /sitemap.xml. Pages come from the navigation, so a page added to
// the menu is listed here automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...navigation.map((item) => item.href), "/book-your-time"];
  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...articles.map((article) => ({
      url: `${SITE_URL}${article.href}`,
      lastModified: article.publishedAt,
    })),
  ];
}
