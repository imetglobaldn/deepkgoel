import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ViewTransition, type CSSProperties, type ReactNode } from "react";
import StatisticsCounters from "./StatisticsCounters";
import VentureCards from "./VentureCards";
import {
  expertise,
  impact,
  socialLinks,
  type Article,
  type IntroImage,
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
  transitionTypes,
}: {
  href: string;
  children: ReactNode;
  /** How the page change animates, such as ["nav-forward"]. See app/template.tsx. */
  transitionTypes?: string[];
}) {
  return (
    <Link
      href={href}
      className="site-text-link"
      transitionTypes={transitionTypes}
    >
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
  backdrop,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
  /** Decoration drawn behind the section's content, edge to edge. */
  backdrop?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`site-surface ${dark ? "site-dark" : "site-light"} ${className}`}
    >
      {backdrop}
      <div className="site-wrap site-section">{children}</div>
    </section>
  );
}
/** The faint picture behind an inner page's heading. Pass it to a dark
    Surface as its `backdrop`. */
export function IntroBackdrop({ image }: { image: IntroImage }) {
  return (
    <div
      className="site-intro-backdrop"
      aria-hidden="true"
      style={
        {
          "--intro-opacity": image.opacity,
          "--intro-position": image.position,
          "--intro-start": image.start,
        } as CSSProperties
      }
    >
      {/* It sits at the top of the page, so it loads with the page. */}
      <Image src={image.src} alt="" fill sizes="100vw" loading="eager" />
    </div>
  );
}
export function PageIntro({
  title,
  accent,
  children,
  image,
}: {
  title: string;
  accent: string;
  children: ReactNode;
  /** A faint picture behind the heading. See `introImages` in the content. */
  image?: IntroImage;
}) {
  return (
    <Surface
      dark
      className="site-page-intro"
      backdrop={image && <IntroBackdrop image={image} />}
    >
      <h1>
        {title}
        <br />
        <span>{accent}</span>
      </h1>
      <p className="site-lead">
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
        <div className="site-invitation-bottom" data-reveal>
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
      label: "X",
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
          </div>
          <div className="site-footer-socials" aria-label="Social profiles">
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
/** The portrait: Deepak at the MSME Champions of Change 2026 summit, in a
    rounded photo with a yellow frame set behind it (drawn by the stylesheet,
    so its colour follows the brand). Pass `eager` where the portrait sits at
    the top of the page, as on About. */
export function Portrait({ eager = false }: { eager?: boolean }) {
  return (
    <div className="site-portrait" data-reveal="zoom">
      <span className="site-portrait-frame" aria-hidden="true" />
      <Image
        src="/images/portrait-msme.webp"
        width={675}
        height={900}
        sizes="(max-width: 760px) 90vw, 32vw"
        alt="Deepak Goel at the MSME Champions of Change 2026 National Summit in New Delhi"
        loading={eager ? "eager" : undefined}
      />
    </div>
  );
}
/** The three homepage pathways, each with a real event photo (Figma "02 /
    Field notes", node 344:691). Sources are in sources.json. */
export function ExpertiseCards() {
  const pathways = [
    {
      action: "Shape your brand",
      photo: "/images/expertise/brand-strategy.webp",
      alt: "A full conference hall at an SMBConnect business session",
    },
    {
      action: "Build your growth strategy",
      photo: "/images/expertise/business-growth.webp",
      alt: "Deepak Goel with speakers on the SMBConnect stage",
    },
    {
      action: "Put learning into practice",
      photo: "/images/expertise/practical-learning.webp",
      alt: "Participants working at computers during an iMET Global session",
    },
  ];
  return (
    <div className="site-expertise-grid">
      {expertise.map((item, index) => {
        const { action, photo, alt } = pathways[index];
        return (
          <article data-reveal key={item.title}>
            <Link
              className="site-glass site-expertise-card"
              href={`/expertise#capability-${index + 1}`}
              aria-labelledby={`expertise-title-${index}`}
            >
              <div className="site-expertise-photo">
                <Image
                  src={photo}
                  alt={alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 30vw"
                />
              </div>
              <div className="site-expertise-body">
                <div className="site-expertise-copy">
                  <h3 id={`expertise-title-${index}`}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="site-expertise-link" aria-hidden="true">
                  <span>{action}</span>
                  <span className="site-expertise-arrow">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
export function ImpactCards() {
  return (
    <ol className="site-impact-grid">
      {impact.map((item, index) => (
        <li className="site-glass site-impact-card" data-reveal key={item.title}>
          <div className="site-impact-photo">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1600px) 30vw, 480px"
            />
          </div>
          <div className="site-impact-copy">
            <span className="site-section-index" aria-hidden="true">
              0{index + 1}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
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
      <VentureCards />
    </Surface>
  );
}
// Opening an article slides the new page in from the right.
const OPEN_ARTICLE = ["nav-forward"];

export function ArticleCard({
  article,
  morphTitle = true,
}: {
  article: Article;
  /** Set to false where the card sits far down a page, as under an article. */
  morphTitle?: boolean;
}) {
  const title = (
    <h3>
      <Link href={article.href} transitionTypes={OPEN_ARTICLE}>
        {article.displayTitle}
      </Link>
    </h3>
  );
  return (
    <article className="site-glass site-article-card" data-reveal>
      <p className="site-caption">
        {article.category} · {article.date}
      </p>
      {/* The title shares a name with the heading on the article page, so it
          grows into that heading when the article opens. */}
      {morphTitle ? (
        <ViewTransition
          name={`article-title-${article.slug}`}
          share="title-morph"
          default="none"
        >
          {title}
        </ViewTransition>
      ) : (
        title
      )}
      <p>{article.shortExcerpt}</p>
      <TextLink href={article.href} transitionTypes={OPEN_ARTICLE}>
        Read article
      </TextLink>
    </article>
  );
}
export function Institutions() {
  return (
    <div className="site-institutions">
      <p className="site-caption" data-reveal>
        Speaking &amp; mentoring across institutions including
      </p>
      <div className="site-logos">
        {["IIMs", "ISB", "IIFT", "IITs", "CII", "FICCI"].map((name) => (
          <div key={name} className="site-institution" data-reveal>
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
      <div className="site-wrap" data-reveal="group">
        <p>
          <span>
            <b>STRATEGY</b> <i aria-hidden="true">+</i>
          </span>
          <span>
            <b>LEARNING</b> <i aria-hidden="true">+</i>
          </span>
          <span>
            <b>COMMUNITY</b> <i aria-hidden="true">=</i>
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
