import type { Metadata } from "next";

// The site's public address. Canonical links, the sitemap and share links use it.
export const SITE_URL = "https://deepakgoel.in";
export const SITE_NAME = "Deepak Goel";
// Shown when a page is shared, unless the page supplies its own image. It is a
// 1200×630 render of the homepage hero, the size link previews expect.
export const SOCIAL_IMAGE = {
  url: "/social-card.jpg",
  width: 1200,
  height: 630,
  alt: "Deepak Goel. Turn expertise into impact.",
};

type PageDetails = {
  title: string;
  description: string;
  /** The page's address on this site, such as "/about". */
  path: string;
  image?: string;
  /** Set for articles. `publishedAt` is the publication date as YYYY-MM-DD. */
  article?: { publishedAt?: string };
};

/**
 * Builds the browser title, description, canonical link and sharing tags for
 * one page. Every page needs its own sharing tags: a page that sets only a
 * title would otherwise be shared with the homepage's title and address.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  article,
}: PageDetails): Metadata {
  const sharedTitle = `${title} · ${SITE_NAME}`;
  const images = [image ?? SOCIAL_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      siteName: SITE_NAME,
      title: sharedTitle,
      description,
      url: path,
      images,
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedAt,
            authors: [SITE_NAME],
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: sharedTitle,
      description,
      images,
    },
  };
}
