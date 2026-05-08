"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Speaking", href: "/speaking-mind" },
  { label: "Walk & Talk", href: "/walk-talk" },
  { label: "Daily Thumbs Up", href: "/daily-thumbs-up" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-[78px]">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-saffron text-ink font-serif font-bold text-[16px]">
              DG
              <span className="absolute inset-0 rounded-full ring-1 ring-saffron/40 group-hover:scale-125 transition-transform duration-700" />
            </span>
            <span className="hidden sm:inline-block text-ivory text-[15px] font-semibold tracking-tight">
              Deepak Goel
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[14px] font-medium transition-colors ${
                    active ? "text-saffron" : "text-ivory/75 hover:text-ivory"
                  }`}
                >
                  <span className="link-line">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/book-your-time"
              className="hidden sm:inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full bg-saffron text-ink text-[13px] font-semibold tracking-wide hover:bg-saffron-2 transition-colors"
            >
              Book Your Time
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/20 text-ivory hover:border-white/40 transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <div className="container-x py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-[15px] ${
                  pathname === link.href ? "text-saffron" : "text-ivory/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-your-time"
              className="block mt-3 py-3 px-5 rounded-full bg-saffron text-ink text-center font-semibold"
            >
              Book Your Time
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
