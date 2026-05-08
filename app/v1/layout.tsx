import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Deepak Goel · v1 archive", template: "%s · v1 · Deepak Goel" },
  robots: { index: false, follow: false },
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
