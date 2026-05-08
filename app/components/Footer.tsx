import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "./SocialIcons";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Speaking Mind", href: "/speaking-mind" },
  { label: "Walk & Talk", href: "/walk-talk" },
  { label: "Daily Thumbs Up", href: "/daily-thumbs-up" },
  { label: "Book Your Time", href: "/book-your-time" },
];

const VENTURES = [
  { name: "Digitally Next", href: "https://digitallynext.com/" },
  { name: "iMET Global", href: "https://imetglobal.com/" },
  { name: "iSoCIAL", href: "https://isocialconnect.com/" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory border-t border-white/10 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-saffron/12 blur-[140px] float-slow pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-130 h-130 rounded-full bg-crimson/10 blur-[160px] float-slow pointer-events-none" style={{ animationDelay: "-6s" }} />

      <div className="container-x relative">
        {/* Big mark */}
        <div className="pt-24 sm:pt-32 pb-16">
          <p className="eyebrow mb-6 !text-saffron">Let&apos;s build something meaningful</p>
          <h2 className="display text-[clamp(48px,9vw,140px)] text-ivory">
            Ready when <span className="text-gradient-warm">you are.</span>
          </h2>
          <Link
            href="/book-your-time"
            className="group inline-flex items-center gap-3 mt-10 pl-6 pr-3 py-3 rounded-full bg-saffron text-ink text-[14px] font-semibold transition-colors hover:bg-saffron-2"
          >
            Book Your Time
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-t border-white/10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-saffron text-ink font-serif font-bold text-[16px]">
                DG
              </span>
              <span className="text-ivory text-[16px] font-semibold tracking-tight">Deepak Goel</span>
            </Link>
            <p className="mt-5 text-ivory/55 text-[14px] leading-[1.65] max-w-[420px]">
              New-gen Indian entrepreneur and Group CEO of iMET Global, Digitally Next & iSoCIAL.
              Building a better Digital-Social Media enabled world.
            </p>
            <div className="flex gap-2 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-white/15 text-ivory/60 hover:text-ink hover:bg-saffron hover:border-saffron transition-all"
                >
                  <s.icon className="w-[14px] h-[14px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-ivory text-[12px] uppercase tracking-[0.28em] mb-5">Navigate</p>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ivory/65 text-[14px] link-line hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-ivory text-[12px] uppercase tracking-[0.28em] mb-5">Ventures</p>
            <ul className="space-y-4">
              {VENTURES.map((v) => (
                <li key={v.name}>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-ivory/65 text-[14px] hover:text-ivory transition-colors"
                  >
                    <span className="link-line">{v.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-ivory text-[12px] uppercase tracking-[0.28em] mb-3">Contact</p>
              <a href="mailto:deepak@digitallynext.com" className="block text-ivory/65 text-[14px] link-line hover:text-ivory">
                deepak@digitallynext.com
              </a>
              <a href="https://wa.me/919810409943" target="_blank" rel="noopener noreferrer" className="block mt-1 text-ivory/65 text-[14px] link-line hover:text-ivory">
                +91-9810409943
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-ivory/50 text-[12px]">
            &copy; {new Date().getFullYear()} Deepak Goel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/v1" className="text-ivory/40 text-[12px] hover:text-ivory/70 transition-colors">
              v1 archive
            </Link>
            <p className="text-ivory/40 text-[12px]">
              Group CEO - iMET Global · Digitally Next · iSoCIAL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
