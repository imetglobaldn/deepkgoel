import Link from "next/link";
import { SOCIAL_LINKS } from "./SocialIcons";

const COL1 = [
  { label: "About", href: "/v1/about" },
  { label: "Area of Expertise", href: "/v1/expertise" },
  { label: "Book Your Time", href: "/v1/book-your-time" },
];

const COL2 = [
  { label: "Speaking Mind", href: "/v1/speaking-mind" },
  { label: "Daily Thumbs Up", href: "/v1/daily-thumbs-up" },
  { label: "Walk & Talk", href: "/v1/walk-talk" },
];

const VENTURES = [
  { name: "Digitally Next", href: "https://digitallynext.com/" },
  { name: "iMET Global", href: "https://imetglobal.com/" },
  { name: "iSoCIAL", href: "https://isocialconnect.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-border">
      <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
        {/* Top CTA */}
        <div className="section-pad border-b border-gray-border text-center">
          <p className="heading-lg max-w-[830px] mx-auto">
            Ready to transform your digital approach?
          </p>
          <Link
            href="/book-your-time"
            className="inline-flex items-center mt-10 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors"
          >
            Book Your Time
          </Link>
        </div>

        {/* Links */}
        <div className="py-[60px] grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <span className="text-[18px] font-semibold text-white tracking-[-0.02em]">
              Deepak Goel
            </span>
            <p className="mt-4 text-gray text-[14px] leading-[1.5em] max-w-[350px]">
              Deepak Goel provides expert guidance and actionable strategies to
              help you master the dynamic world of digital branding with confidence.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray hover:text-white transition-colors"
                  aria-label={s.name}
                >
                  <s.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-[14px] font-semibold mb-5">Navigate</h4>
            <ul className="space-y-3">
              {COL1.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-gray hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[14px] font-semibold mb-5">Content</h4>
            <ul className="space-y-3">
              {COL2.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-gray hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[14px] font-semibold mb-5">Ventures</h4>
            <ul className="space-y-3">
              {VENTURES.map((v) => (
                <li key={v.name}>
                  <a href={v.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-gray hover:text-white transition-colors">
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 border-t border-gray-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray text-[12px]">
            &copy; {new Date().getFullYear()} Deepak Goel. All rights reserved.
          </p>
          <p className="text-gray-dark text-[12px]">
            Group CEO - iMET Global | Digitally Next | iSoCIAL
          </p>
        </div>
      </div>
    </footer>
  );
}
