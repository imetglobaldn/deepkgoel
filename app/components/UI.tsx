import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import StatisticsCounters from "./StatisticsCounters";
import {
  expertise,
  impact,
  navigation,
  socialLinks,
  ventures,
  type Article,
} from "../data/content";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <ArrowUpRight
      className={`site-arrow ${className}`}
      size={20}
      aria-hidden="true"
    />
  );
}
export function Button({
  href,
  children,
  dark = false,
  icon,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  icon?: ReactNode;
}) {
  return (
    <Link
      className={`site-button ${dark ? "site-button-dark" : ""}`}
      href={href}
    >
      {children}
      {icon ?? <Arrow />}
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="site-text-link">
      {children}
      <Arrow />
    </Link>
  );
}
export function Logo() {
  return (
    <Link href="/" className="site-logo" aria-label="Deepak Goel home">
      Deepak Goel
    </Link>
  );
}
export function Surface({
  children,
  dark = false,
  className = "",
  id,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`site-surface ${dark ? "site-dark" : "site-light"} ${className}`}
    >
      <div className="site-wrap site-section">{children}</div>
    </section>
  );
}
export function PageIntro({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <Surface dark className="site-page-intro">
      <h1 data-reveal>
        {title}
        <br />
        <span>{accent}</span>
      </h1>
      <p className="site-lead" data-reveal>
        {children}
      </p>
    </Surface>
  );
}
export function Invitation() {
  return (
    <section className="site-invitation">
      <div className="site-wrap">
        <Link className="site-talk" href="/book-your-time">
          <span>LET’S TALK.</span>
          <Arrow />
        </Link>
        <div className="site-invitation-bottom">
          <div>
            <h3>Your next move starts here.</h3>
            <p>
              For keynotes, workshops, brand strategy and meaningful
              collaborations.
            </p>
          </div>
          <Button href="/book-your-time" dark>
            Book your time
          </Button>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  const footerSocials = [
    {
      label: "Facebook",
      href: socialLinks.find((link) => link.label === "Facebook")?.href,
      path: "M15.36 24V13.05h3.68l.55-4.27h-4.23V6.05c0-1.24.35-2.08 2.12-2.08h2.26V.15A30.4 30.4 0 0 0 16.45 0c-3.26 0-5.49 1.99-5.49 5.64v3.14H7.28v4.27h3.68V24z",
    },
    {
      label: "Twitter",
      href: socialLinks.find((link) => link.label === "X")?.href,
      path: "M23.954 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.64 3.162a4.916 4.916 0 0 0 1.523 6.574A4.903 4.903 0 0 1 .936 9.12v.062a4.918 4.918 0 0 0 3.946 4.818 4.935 4.935 0 0 1-2.224.084 4.923 4.923 0 0 0 4.6 3.419 9.868 9.868 0 0 1-6.102 2.105c-.396 0-.788-.023-1.175-.068a13.933 13.933 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.637a10.012 10.012 0 0 0 2.46-2.548z",
    },
    {
      label: "LinkedIn",
      href: socialLinks.find((link) => link.label === "LinkedIn")?.href,
      path: "M5.372 24H.398V7.982h4.974zM2.882 5.797a2.884 2.884 0 1 1 0-5.768 2.884 2.884 0 0 1 0 5.768zM24 24h-4.974v-7.794c0-1.858-.038-4.249-2.589-4.249-2.591 0-2.988 2.025-2.988 4.115V24H8.475V7.982h4.776v2.185h.068c.665-1.26 2.288-2.589 4.71-2.589C23.067 7.578 24 10.896 24 15.206z",
    },
    {
      label: "Instagram",
      href: socialLinks.find((link) => link.label === "Instagram")?.href,
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
  ];
  return (
    <footer className="site-footer">
      <div className="site-wrap">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Logo />
            <p>Writer · Strategist · Media Professional</p>
          </div>
          <nav
            className="site-footer-navigation"
            aria-label="Footer navigation"
          >
            {[...navigation, { label: "Contact", href: "/book-your-time" }].map(
              (item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="site-footer-socials" aria-label="Social profiles">
            <span className="site-footer-social-label">Social networks</span>
            <div className="site-footer-social-icons">
              {footerSocials
                .filter((item) => item.href)
                .map(({ label, href, path }) => (
                  <a
                    key={label}
                    className="site-footer-social"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={path} fillRule="evenodd" />
                    </svg>
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} Deepak Goel. All rights reserved.</p>
          {/* Privacy and Terms links go here once approved pages exist. */}
        </div>
      </div>
    </footer>
  );
}
export function Statistics() {
  return (
    <Surface dark className="site-statistics">
      <StatisticsCounters />
    </Surface>
  );
}
/** Pass `eager` where the portrait sits at the top of the page, as on About. */
export function Portrait({ eager = false }: { eager?: boolean }) {
  return (
    <div className="site-portrait">
      <Image
        src="/images/portrait.webp"
        width={762}
        height={762}
        sizes="(max-width: 760px) 500px, 36vw"
        alt="Deepak Goel seated in his office"
        loading={eager ? "eager" : undefined}
      />
    </div>
  );
}
export function ExpertiseCards({
  impactCards = false,
}: {
  impactCards?: boolean;
}) {
  return (
    <div className="site-grid-three">
      {(impactCards ? impact : expertise).map((item, index) => (
        <article className="site-glass site-card" data-reveal key={item.title}>
          <span className="site-number">0{index + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {!impactCards && (
            <Button href={`/expertise#capability-${index + 1}`} dark>
              Explore the expertise
            </Button>
          )}
        </article>
      ))}
    </div>
  );
}
export function Ventures() {
  return (
    <Surface dark>
      <h2 data-reveal>
        THREE PLATFORMS.
        <br />
        ONE BUILDER.
      </h2>
      <div className="site-ventures">
        {ventures.map((venture, i) => (
          <a
            className="site-glass site-venture"
            key={venture.title}
            href={venture.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
          >
            <span className="site-index">0{i + 1}</span>
            <h3>{venture.title}</h3>
            <div>
              <span className="site-caption">{venture.category}</span>
              <p>{venture.description}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </div>
    </Surface>
  );
}
export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="site-glass site-article-card" data-reveal>
      <p className="site-caption">
        {article.category} · {article.date}
      </p>
      <h3>
        <Link href={article.href}>{article.displayTitle}</Link>
      </h3>
      <p>{article.shortExcerpt}</p>
      <TextLink href={article.href}>Read article</TextLink>
    </article>
  );
}
export function Institutions() {
  return (
    <div className="site-institutions">
      <p className="site-caption">
        Speaking &amp; mentoring across institutions including
      </p>
      <div className="site-logos">
        {["IIMs", "ISB", "IIFT", "IITs", "CII", "FICCI"].map((name) => (
          <div key={name} className="site-institution">
            {name === "IIMs" || name === "IITs" ? (
              <div className="site-group-mark">
                <Image
                  src={`/images/${name === "IIMs" ? "iim" : "iit"}-symbol.svg`}
                  width={36}
                  height={36}
                  alt=""
                />
                <div>
                  <strong>{name}</strong>
                  <small>
                    INDIAN INSTITUTES
                    <br />
                    OF {name === "IIMs" ? "MANAGEMENT" : "TECHNOLOGY"}
                  </small>
                </div>
              </div>
            ) : (
              <Image
                src={`/images/${name.toLowerCase()}.${["ISB", "CII"].includes(name) ? "svg" : "png"}`}
                width={name === "IIFT" ? 104 : 144}
                height={name === "IIFT" ? 71 : 60}
                alt={name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export function VennStrip() {
  return (
    <section className="site-discipline">
      <div className="site-wrap">
        <p>
          <span>
            STRATEGY <i aria-hidden="true">+</i>
          </span>
          <span>
            LEARNING <i aria-hidden="true">+</i>
          </span>
          <span>
            COMMUNITY <i aria-hidden="true">=</i>
          </span>
        </p>
        <div
          className="site-venn-holder"
          role="img"
          aria-label="Impact is where strategy, learning and community overlap"
        >
          <div className="site-venn">
            {["strategy", "learning", "community"].map((name) => (
              <div key={name} className={`site-circle site-circle-${name}`}>
                <Image
                  src="/images/venn-fill.svg"
                  width={138}
                  height={138}
                  alt=""
                />
                <Image
                  src="/images/venn-circle.svg"
                  width={138}
                  height={138}
                  alt=""
                />
              </div>
            ))}
            <Image
              className="site-venn-center"
              src="/images/venn-impact.svg"
              width={69}
              height={70}
              alt=""
            />
            <b>IMPACT</b>
          </div>
        </div>
      </div>
    </section>
  );
}
