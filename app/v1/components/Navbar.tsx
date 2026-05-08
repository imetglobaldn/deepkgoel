"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/v1/about" },
  { label: "Area of Expertise", href: "/v1/expertise" },
  { label: "Speaking Mind", href: "/v1/speaking-mind" },
  { label: "Events", href: "/v1/walk-talk" },
  { label: "Insights", href: "/v1/daily-thumbs-up" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-border">
      <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/v1" className="shrink-0 flex items-center gap-2">
            <span className="text-[18px] font-semibold text-white tracking-[-0.02em]">
              Deepak Goel
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] px-2 py-0.5 rounded-full border border-gray-border text-gray">
              v1
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center px-4 py-2 border border-gray-border text-white text-[13px] font-medium rounded-full hover:border-white/40 transition-colors"
            >
              View Latest
            </Link>
            <Link
              href="/v1/book-your-time"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-blue text-white text-[14px] font-semibold rounded-full hover:bg-blue-light transition-colors"
            >
              Register Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-dark border-t border-gray-border animate-fade-in">
          <div className="max-w-[1400px] mx-auto px-5 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-[14px] ${
                  pathname === link.href ? "text-white" : "text-gray"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/v1/book-your-time"
              onClick={() => setOpen(false)}
              className="block py-3 text-[14px] font-semibold text-blue"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
