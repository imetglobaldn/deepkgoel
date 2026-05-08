import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";
import WordStack from "./WordStack";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  accent?: string;
};

export default function PageHeader({ label, title, subtitle, accent }: Props) {
  const titleWords = title.split(" ").length;
  return (
    <section className="relative overflow-hidden bg-paper text-ink pt-[168px] pb-20 sm:pt-[200px] sm:pb-28 border-b border-line">
      <div className="absolute -top-40 -right-40 w-130 h-130 rounded-full bg-saffron/14 blur-[140px] float-slow pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full bg-crimson/10 blur-[140px] float-slow pointer-events-none" style={{ animationDelay: "-5s" }} />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container-x relative">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-ink/55 text-[13px] hover:text-saffron-deep transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="link-line">Back home</span>
          </Link>
        </Reveal>

        <div className="flex items-center gap-4 mb-7">
          <Reveal>
            <span className="rule" />
          </Reveal>
          <Reveal delay={80}>
            <span className="eyebrow">{label}</span>
          </Reveal>
        </div>

        <h1 className="display text-[clamp(44px,7vw,108px)] text-ink max-w-[1100px]">
          <span className="block">
            <WordStack text={title} />
          </span>
          {accent && (
            <span
              className="block text-gradient fade-up"
              style={{ ["--fade-delay" as string]: `${titleWords * 70 + 250}ms` } as React.CSSProperties}
            >
              {accent}
            </span>
          )}
        </h1>

        {subtitle && (
          <Reveal delay={400}>
            <p className="mt-8 text-ink/65 text-[clamp(15px,1.3vw,18px)] leading-[1.6] max-w-160">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
