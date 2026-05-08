import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Globe,
  GraduationCap,
  Mic,
  Sparkles,
  Users,
  Zap,
  Quote,
  Briefcase,
  Compass,
} from "lucide-react";
import Reveal from "./components/Reveal";
import WordStack from "./components/WordStack";
import Counter from "./components/Counter";
import { SOCIAL_LINKS } from "./components/SocialIcons";

const VENTURES = [
  {
    name: "Digitally Next",
    tag: "Digital & Social Media Agency",
    desc: "Disrupting the digital social media agency space through Digital Branding, Demand Generation, and Personal/Celebrity branding for startups, professionals, and enterprises.",
    href: "https://digitallynext.com/",
    icon: Globe,
  },
  {
    name: "iMET Global",
    tag: "Professional Education · CoE",
    desc: "A Centre of Excellence bringing profitable, business-driven upskilling and industry insights to Professional Education, MSMEs, and startups across India.",
    href: "https://imetglobal.com/",
    icon: GraduationCap,
  },
  {
    name: "iSoCIAL",
    tag: "IoT & Big Data Community",
    desc: "Building India's largest IoT & Big Data community, with 34,000+ entity and individual reach connecting innovators nationwide.",
    href: "https://isocialconnect.com/",
    icon: Zap,
  },
];

const PILLARS = [
  { icon: Compass, title: "Digital Branding", desc: "Demand generation, personal & celebrity branding for ambitious leaders." },
  { icon: GraduationCap, title: "Professional Education", desc: "Industry-driven upskilling for B-schools, MSMEs and startups." },
  { icon: Briefcase, title: "Business Strategy", desc: "B2B international marketing, key accounts and process consulting." },
  { icon: Mic, title: "Speaking & Mentoring", desc: "Keynotes, workshops and guest sessions at IIMs, IITs, and CII / FICCI." },
];

const STATS = [
  { num: 18, suffix: "+", label: "Years of Experience" },
  { num: 3, suffix: "", label: "Organizations as Group CEO" },
  { num: 34, suffix: "K+", label: "Community Reach via iSoCIAL" },
  { num: 6, suffix: "+", label: "Cities · India · US · Europe" },
];

const MEDIA = ["Indian Express", "Times of India", "Press Club of India", "CII", "FICCI", "SMB Connect", "IAN"];

const ARTICLES = [
  { tag: "Education", title: "Why Alternative MBA is Gaining Popularity?" },
  { tag: "Strategy", title: "7 Social Media Platforms That Will Explode in the Coming Years" },
  { tag: "Branding", title: "Get First 1,000 Followers (LinkedIn & Instagram) - Honestly" },
  { tag: "Consulting", title: "What Trainers, Coaches and Consultants Tend to Miss Big Time" },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════ 1. HERO - image bg, dark overlay, white text (100vh) ════════════ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink pt-[120px] pb-[100px]">
        <div className="absolute inset-0">
          <Image src="/banner.png" alt="" fill priority sizes="100vw" className="object-cover object-right" quality={100} />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/70 to-ink/20" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-ink/40" />
        </div>
        
        <div className="absolute -top-40 -right-40 w-160 h-160 rounded-full bg-saffron/20 blur-[160px] float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-130 h-130 rounded-full bg-crimson/12 blur-[160px] float-slow pointer-events-none" style={{ animationDelay: "-5s" }} />

        <div className="relative container-x w-full">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 mb-7 fade-up">
              <span className="rule" />
              <span className="eyebrow !text-saffron">Entrepreneur · Group CEO · Speaker</span>
            </div>

            <h1 className="display text-ivory text-[clamp(38px,6vw,90px)]" style={{ lineHeight: 1.35 }}>
              <span className="block -mb-4.5" >
                <WordStack text="Strategies for a" />
              </span>
              <span
                className="block text-gradient-warm fade-up"
                style={{
                  ["--fade-delay" as string]: "650ms",
                } as React.CSSProperties}
              >
                better digital world.
              </span>
            </h1>

            <p className="mt-7 text-ivory/75 text-[clamp(15px,1.2vw,18px)] leading-[1.6] max-w-[560px] fade-up" style={{ ["--fade-delay" as string]: "950ms" } as React.CSSProperties}>
              A new - gen Indian entrepreneur venturing his way as a catalyst in
              building a better Digital - Social Media enabled world -
              across India, the US, and Europe.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 fade-up" style={{ ["--fade-delay" as string]: "1150ms" } as React.CSSProperties}>
              <Link href="/about" className="group inline-flex h-14 items-center gap-3 pl-6 pr-2 rounded-full bg-saffron text-ink text-[14px] font-semibold transition-colors hover:bg-saffron-2">
                Discover the Story
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/book-your-time" className="inline-flex h-14 items-center gap-2 px-7 rounded-full border border-white/25 text-ivory text-[14px] hover:bg-ivory hover:text-ink hover:border-ivory transition-colors">
                Book a Speaking Engagement
              </Link>
            </div>
          </div>
        </div>

        {/* Hero footer strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-ink/50 backdrop-blur-md">
          <div className="container-x flex items-center justify-between py-4">
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-ivory/50 hover:text-saffron transition-colors">
                  <s.icon className="w-[16px] h-[16px]" />
                </a>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-2 text-ivory/50 text-[11px] uppercase tracking-[0.32em]">
              Scroll
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 2. MARQUEE - BLACK ════════════ */}
      <section className="py-12 bg-ink border-y border-white/10 overflow-hidden">
        <Reveal>
          <p className="text-center eyebrow !text-ivory/40 mb-6">Featured in & associated with</p>
        </Reveal>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-16 marquee whitespace-nowrap will-change-transform">
            {[...MEDIA, ...MEDIA, ...MEDIA].map((m, i) => (
              <span key={`${m}-${i}`} className="text-ivory/30 hover:text-saffron transition-colors font-serif text-[26px] sm:text-[34px] font-semibold shrink-0 select-none">
                {m}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-ink to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-ink to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ════════════ 3. ABOUT INTRO - WHITE (Ventures-style layout) ════════════ */}
      <section className="relative section-y bg-paper text-ink overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-saffron/8 blur-[140px] float-slow pointer-events-none" />
        <div className="container-x relative">
          {/* Heading row — title left, tagline right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <Reveal><p className="eyebrow mb-4">About</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(36px,5vw,72px)] whitespace-nowrap text-ink">
                  Deepak <span className="text-gradient">Goel.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="text-ink-mute text-[17px] leading-[1.6] max-w-md">
                New-gen Indian entrepreneur. Strategic driver of three organizations
                building India&apos;s digital, education, and tech-community future.
              </p>
            </Reveal>
          </div>

          {/* Body — paragraphs left, stats right */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 space-y-7">
              <Reveal>
                <p className="text-[clamp(20px,2vw,28px)] text-ink leading-[1.45] font-light">
                  A <strong className="font-medium text-saffron-deep">new-gen Indian entrepreneur</strong>{" "}
                  venturing his way as a catalyst in building a better Digital-Social Media enabled world.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="body-base">
                  Strategic driver of <strong className="text-ink">Digitally Next</strong>, <strong className="text-ink">iMET Global</strong>, and <strong className="text-ink">iSoCIAL</strong> -
                  organizations disrupting digital services, professional education, and India&apos;s
                  technology communities. Economics graduate from University of Delhi with an MBA from
                  Symbiosis (SCMHRD), with 18+ years across India, US, Canada and Europe.
                </p>
              </Reveal>
            </div>

            {/* Stats column */}
            <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {STATS.slice(0, 4).map((s, i) => (
                  <Reveal key={s.label} delay={i * 80}>
                    <div className="display text-[clamp(36px,3.6vw,52px)] text-ink">
                      <Counter to={s.num} suffix={s.suffix} />
                    </div>
                    <p className="mt-1 text-ink-mute text-[13px] leading-snug">{s.label}</p>
                  </Reveal>
                ))}
              </div>
            </aside>
          </div>

          {/* Full-width quote */}
          <Reveal delay={220}>
            <div className="relative mt-16 p-8 sm:p-10 rounded-2xl bg-paper-2 border border-line">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-saffron" />
              <p className="text-ink/75 text-[clamp(15px,1.2vw,17px)] leading-[1.7] max-w-4xl">
                Sought after for mentoring by top B-Schools (IIM, ISB, IIFT), engineering colleges
                (IITs, BIT), and professional associations (CII, FICCI, SMB Connect, IAN). Awarded
                <strong className="text-ink"> Honorary Lifetime Membership</strong> of the
                International Film & Television Club.
              </p>
            </div>
          </Reveal>

          {/* Right-aligned link */}
          <Reveal delay={320}>
            <div className="mt-8 flex justify-end">
              <Link href="/about" className="group inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-saffron-deep transition-colors">
                <span className="link-line">Read the full story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ 4. VENTURES - BLACK ════════════ */}
      <section className="relative section-y bg-ink text-ivory overflow-hidden">
        <div className="absolute inset-0 grid-bg-d opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <Reveal><p className="eyebrow !text-saffron mb-4">Ventures</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(40px,6vw,84px)] text-ivory">
                  Three engines.
                  <br />
                  <span className="text-gradient-warm">One mission.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="text-ivory/65 text-[17px] leading-[1.6] max-w-md">
                Each organization compounds the others - brand, education, and community
                reinforcing a single thesis on India&apos;s digital future.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {VENTURES.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <a href={v.href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 card-lift-d hover:border-saffron/50">
                  <div className="grid lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-1 text-saffron/30 font-serif font-bold text-[56px] leading-none group-hover:text-saffron transition-colors">
                      0{i + 1}
                    </div>
                    <div className="lg:col-span-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-[11px] uppercase tracking-[0.22em] text-ivory/55 mb-3">
                        <v.icon className="w-3.5 h-3.5 text-saffron" />
                        {v.tag}
                      </div>
                      <h3 className="display text-[28px] sm:text-[34px] text-ivory group-hover:text-saffron transition-colors">{v.name}</h3>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="text-ivory/65 text-[16px] leading-[1.6]">{v.desc}</p>
                    </div>
                    <div className="lg:col-span-1 flex lg:justify-end">
                      <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/15 text-ivory/60 group-hover:bg-saffron group-hover:text-ink group-hover:border-saffron group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 5. PILLARS - WHITE ════════════ */}
      <section className="relative section-y bg-paper text-ink overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <div className="max-w-3xl mb-16">
            <Reveal><p className="eyebrow mb-4">What I do</p></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(36px,5vw,72px)] text-ink">
                Four pillars of <span className="text-gradient">strategic impact.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group h-full rounded-2xl bg-paper-2 border border-line p-7 card-lift hover:border-saffron/40">
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-saffron/10 text-saffron-deep mb-6 group-hover:bg-saffron group-hover:text-ink transition-colors">
                    <p.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-ink font-semibold text-[18px] mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-ink-mute text-[14px] leading-[1.6]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-14 flex justify-center">
              <Link href="/expertise" className="group inline-flex items-center gap-3 text-[14px] font-semibold text-ink hover:text-saffron-deep transition-colors">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-line group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="link-line uppercase tracking-[0.2em] text-[12px]">View Full Expertise</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ 6. IMAGE INTERSTITIAL - Tony-Robbins-style ════════════ */}
      <section className="relative min-h-[80svh] flex items-center overflow-hidden bg-ink">
        <div
          className="absolute inset-0 bg-fixed-img"
          style={{ backgroundImage: "url('/banner.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-transparent to-ink/30" />

        <div className="relative container-x py-32 w-full">
          <div className="max-w-[820px]">
            <Reveal>
              <p className="eyebrow !text-saffron mb-6">A Note from Deepak</p>
            </Reveal>
            <Reveal delay={120} blur>
              <h2 className="display text-[clamp(24px,3vw,44px)] text-ivory">
                &ldquo;The best brands aren&apos;t built in a quarter.{" "}
                <span className="text-gradient-warm">They&apos;re built in conversations,</span>{" "}
                consistency, and quiet conviction.&rdquo;
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ 7. STATS - BLACK ════════════ */}
      <section className="relative section-y bg-ink text-ivory overflow-hidden">
        <div className="absolute -bottom-32 -right-40 w-[480px] h-[480px] rounded-full bg-saffron/10 blur-[140px] float-slow pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow !text-saffron mb-4">By the numbers</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-[clamp(36px,5vw,72px)] text-ivory mb-16">
              Built in the open. <span className="text-gradient-warm">Measured in impact.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="border-l border-white/15 pl-6">
                  <div className="display text-[clamp(56px,7vw,96px)] text-gradient-warm">
                    <Counter to={s.num} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-ivory/65 text-[14px] leading-[1.5] max-w-[200px]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 8. SPEAKING SPLIT - WHITE ════════════ */}
      <section className="relative section-y bg-paper text-ink overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal><p className="eyebrow mb-5">Speaking Mind</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(40px,5.5vw,84px)] text-ink">
                  Inspiring audiences,<br />
                  <span className="text-gradient">igniting change.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="body-base mt-7 max-w-lg">
                  From keynotes on &quot;Digital Media for Election Campaigns&quot; to workshops on
                  social media strategy - insights that inspire action and drive results.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/speaking-mind" className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-saffron text-ink text-[14px] font-semibold hover:bg-saffron-2 transition-colors">
                    Read Articles
                    <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="/book-your-time" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line-strong text-ink text-[14px] hover:border-saffron hover:text-saffron-deep transition-colors">
                    Invite to Speak
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} blur>
              <div className="space-y-3">
                {ARTICLES.map((a, i) => (
                  <Link key={a.title} href="/speaking-mind" className="group flex items-center justify-between gap-4 px-6 py-5 rounded-xl bg-paper-2 border border-line hover:border-saffron/40 hover:bg-paper-3 transition-all">
                    <div className="flex items-center gap-5 min-w-0">
                      <span className="text-saffron/70 font-serif text-[20px] font-bold shrink-0">0{i + 1}</span>
                      <div className="min-w-0">
                        <span className="block text-saffron-deep text-[10px] font-semibold uppercase tracking-[0.28em] mb-1.5">{a.tag}</span>
                        <span className="block text-ink text-[15px] font-medium leading-snug truncate group-hover:text-saffron-deep transition-colors">{a.title}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-saffron group-hover:rotate-12 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ 9. RECOGNITION - BLACK with image ════════════ */}
      <section className="relative section-y bg-ink text-ivory overflow-hidden">
        <div className="absolute inset-0 grid-bg-d opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-saffron/10 blur-[160px] float-slow pointer-events-none" />

        <div className="container-x relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles className="w-8 h-8 text-saffron mx-auto mb-8" />
              <p className="display text-[clamp(28px,3.4vw,52px)] text-ivory leading-[1.25]">
                &ldquo;Awarded <span className="text-gradient-warm">Honorary Lifetime Membership</span> of
                the International Film and Television Club for outstanding contributions to digital
                media and entrepreneurship.&rdquo;
              </p>
              <div className="mt-10 inline-flex items-center gap-3">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-saffron text-ink font-serif font-bold">DG</span>
                <div className="text-left">
                  <p className="text-ivory text-[15px] font-semibold">Deepak Goel</p>
                  <p className="text-ivory/55 text-[13px]">Group CEO - iMET Global · Digitally Next · iSoCIAL</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
              {["IIM", "ISB", "IIFT", "IIT", "BIT", "CII", "FICCI", "SMB Connect", "IAN"].map((b) => (
                <span key={b} className="px-4 py-2 rounded-full border border-white/15 text-ivory/60 text-[12px] uppercase tracking-[0.2em] hover:border-saffron hover:text-saffron transition-colors">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
