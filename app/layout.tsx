import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import { Header, Motion, PageEnd } from "./components/Chrome";
import DailyThumbsUp from "./components/DailyThumbsUp";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "./data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
const logo = Outfit({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Deepak Goel - Entrepreneur · Group CEO · Speaker",
    template: "%s · Deepak Goel",
  },
  description:
    "Deepak Goel is a new-gen Indian entrepreneur and Group CEO of iMET Global, Digitally Next & iSoCIAL - building a better Digital-Social Media enabled world.",
  keywords: [
    "Deepak Goel",
    "Digital Branding",
    "Personal Branding",
    "Keynote Speaker India",
    "Group CEO",
    "iMET Global",
    "Digitally Next",
    "iSoCIAL",
  ],
  openGraph: {
    siteName: SITE_NAME,
    title: "Deepak Goel - Entrepreneur · Group CEO · Speaker",
    description:
      "New-gen Indian entrepreneur building a better Digital-Social Media enabled world.",
    type: "website",
    url: SITE_URL,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Goel - Entrepreneur · Group CEO · Speaker",
    description:
      "New-gen Indian entrepreneur building a better Digital-Social Media enabled world.",
    images: [SOCIAL_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${heading.variable} ${logo.variable}`}
      // Lets Next.js jump straight to the top of a new page; in-page links
      // still scroll smoothly.
      data-scroll-behavior="smooth"
    >
      <body>
        <div className="site">
          <a className="site-skip" href="#site-content">
            Skip to content
          </a>
          <Header />
          <main id="site-content">{children}</main>
          <PageEnd />
          <DailyThumbsUp />
          <Motion />
        </div>
      </body>
    </html>
  );
}
