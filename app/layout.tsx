import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepakgoel.in"),
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
    title: "Deepak Goel - Entrepreneur · Group CEO · Speaker",
    description:
      "New-gen Indian entrepreneur building a better Digital-Social Media enabled world.",
    type: "website",
    url: "https://deepakgoel.in",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Goel - Entrepreneur · Group CEO · Speaker",
    description:
      "New-gen Indian entrepreneur building a better Digital-Social Media enabled world.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink text-ivory selection:bg-saffron selection:text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
