import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { SOCIAL_LINKS } from "../components/SocialIcons";

export const metadata: Metadata = { title: "Daily Thumbs Up" };

const QUOTES = [
  { theme: "Motivation", quote: "Discipline outlives motivation. Show up before you feel like it." },
  { theme: "Digital Strategy", quote: "Reach is rented. Reputation is owned. Build the second one." },
  { theme: "Entrepreneurship", quote: "Speed of decision compounds. Indecision quietly costs the most." },
  { theme: "Personal Branding", quote: "Be the explanation people search for, not the option they compare." },
  { theme: "Education", quote: "Curiosity is the only tuition that never refunds itself." },
  { theme: "Leadership", quote: "Lead the meeting that doesn't exist yet - that's where culture is built." },
];

export default function DailyThumbsUpPage() {
  return (
    <>
      <PageHeader
        label="Daily Thumbs Up"
        title="A daily dose of"
        accent="inspiration."
        subtitle="Short, sharp insights for entrepreneurs, marketers, students and anyone trying to do better digital work today than they did yesterday."
      />

      <section className="relative section-y bg-ink text-ivory border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg-d opacity-40 pointer-events-none" />
        <div className="absolute -top-32 left-1/3 w-[440px] h-[440px] rounded-full bg-saffron/10 blur-[140px] float-slow pointer-events-none" />
        <div className="container-x relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {QUOTES.map((c, i) => (
              <Reveal key={c.theme} delay={i * 80}>
                <div className="group h-full relative rounded-2xl bg-white/[0.03] border border-white/10 p-9 card-lift-d hover:border-saffron/40 overflow-hidden">
                  <Quote className="absolute -top-2 -right-2 w-20 h-20 text-saffron/15 group-hover:text-saffron/30 transition-colors" />
                  <span className="relative inline-block text-saffron text-[10px] font-semibold uppercase tracking-[0.32em] mb-6">
                    {c.theme}
                  </span>
                  <p className="relative display text-[clamp(20px,1.7vw,24px)] text-ivory leading-[1.3] mb-8">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="relative text-ivory/45 text-[13px]">- Deepak Goel</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-16 flex flex-col items-center gap-6">
              <p className="text-ivory/55 text-[14px]">Follow Deepak for daily thumbs-up content</p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-white/15 text-ivory/60 hover:text-ink hover:bg-saffron hover:border-saffron transition-all"
                  >
                    <s.icon className="w-[15px] h-[15px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA - black image overlay */}
      <section className="relative min-h-[60svh] flex items-center text-center bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-fixed-img" style={{ backgroundImage: "url('/banner.png')" }} aria-hidden />
        <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/80 to-ink/60" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/50" />

        <div className="relative container-x py-24 sm:py-32 w-full">
          <Reveal><p className="eyebrow !text-saffron mb-5">More from Deepak</p></Reveal>
          <Reveal delay={80} blur>
            <h2 className="display text-[clamp(36px,5vw,76px)] text-ivory max-w-3xl mx-auto">
              Keep going. <span className="text-gradient-warm">Plenty more to explore.</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link href="/walk-talk" className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-saffron text-ink text-[14px] font-semibold hover:bg-saffron-2 transition-colors">
                Watch Walk & Talk
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/speaking-mind" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-ivory text-[14px] hover:bg-ivory hover:text-ink hover:border-ivory transition-colors">
                Read Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
