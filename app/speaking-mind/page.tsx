import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Speaking Mind" };

const ARTICLES = [
  {
    title: "Why Alternative MBA is Gaining Popularity?",
    excerpt: "The education landscape is undergoing transformation with structured learning of business of Digital Social Media, Data Science, and IoT.",
    category: "Education",
    date: "July 23, 2021",
    featured: true,
  },
  {
    title: "How Alternative MBAs in Digital Social Media, Data Science, and IoT are Revolutionising Education",
    excerpt: "The higher education landscape has constantly been transforming due to the present market dynamics.",
    category: "Education",
    date: "July 23, 2021",
    featured: true,
  },
  {
    title: "Attention CMOs - 7 Social Media Platforms That Will Explode in the Coming Years",
    excerpt: "Social media is a boisterous playing field. And this field has seen many changing players.",
    category: "Digital Strategy",
    date: "July 23, 2021",
    featured: false,
  },
  {
    title: "How To Get First 1,000 Followers (LinkedIn & Instagram) Honestly and Credibly",
    excerpt: "How many followers one has on a particular social network is one of the most prestigious metrics.",
    category: "Personal Branding",
    date: "July 23, 2021",
    featured: false,
  },
  {
    title: "One Major Thing That Trainers, Biz Coaches and Consultants Tend to Miss Big Time",
    excerpt: "After spending lakhs on certifications and courses, one big reason why professionals fail to get recognition.",
    category: "Consulting",
    date: "July 23, 2021",
    featured: false,
  },
  {
    title: "Tools That Help You Become a Better Content Writer or Blogger for Social/Digital Media",
    excerpt: "Thousands of rules exist in the English language which is certainly not easy to remember.",
    category: "Content",
    date: "July 23, 2021",
    featured: false,
  },
];

export default function SpeakingMindPage() {
  const featured = ARTICLES.filter((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <>
      <PageHeader
        label="Speaking Mind"
        title="Articles &"
        accent="insights."
        subtitle="Thoughts on digital media, education, personal branding and professional development - distilled from two decades on the ground."
      />

      {/* Featured */}
      <section className="section-y border-b border-line">
        <div className="container-x">
          <Reveal><p className="eyebrow mb-10">Featured</p></Reveal>
          <div className="grid lg:grid-cols-2 gap-5">
            {featured.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="group h-full flex flex-col rounded-2xl bg-paper-2 border border-line p-9 card-lift hover:border-saffron/40 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-saffron text-[11px] font-semibold uppercase tracking-[0.28em]">{a.category}</span>
                    <span className="text-ink/35 text-[12px]">{a.date}</span>
                  </div>
                  <h2 className="display text-[clamp(22px,2.4vw,32px)] text-ink leading-[1.15] group-hover:text-saffron transition-colors mb-4">
                    {a.title}
                  </h2>
                  <p className="body-base text-[15px] mb-8 flex-grow">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-saffron text-[13px] font-semibold">
                    Read article
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rest */}
      <section className="section-y bg-paper-2 border-b border-line">
        <div className="container-x">
          <Reveal><p className="eyebrow mb-10">All articles</p></Reveal>
          <div>
            {rest.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <article className="group py-7 border-b border-line cursor-pointer">
                  <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="lg:col-span-1">
                      <span className="display text-[28px] text-ink/30 group-hover:text-saffron transition-colors">0{i + 1}</span>
                    </div>
                    <div className="lg:col-span-7">
                      <span className="block text-saffron text-[11px] font-semibold uppercase tracking-[0.28em] mb-2">{a.category}</span>
                      <h3 className="text-ink text-[18px] sm:text-[20px] font-semibold leading-snug group-hover:text-saffron transition-colors">
                        {a.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-3">
                      <p className="text-ink/55 text-[14px] leading-[1.55]">{a.excerpt}</p>
                    </div>
                    <div className="lg:col-span-1 flex lg:justify-end">
                      <ArrowUpRight className="w-5 h-5 text-ink/35 group-hover:text-saffron group-hover:rotate-12 transition-all" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - black image overlay */}
      <section className="relative min-h-[60svh] flex items-center text-center bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-fixed-img" style={{ backgroundImage: "url('/banner.png')" }} aria-hidden />
        <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/80 to-ink/60" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/50" />

        <div className="relative container-x py-24 sm:py-32 w-full">
          <Reveal><p className="eyebrow !text-saffron mb-5">Speaking Engagements</p></Reveal>
          <Reveal delay={80} blur>
            <h2 className="display text-[clamp(36px,5vw,76px)] text-ivory max-w-3xl mx-auto">
              Want Deepak to <span className="text-gradient-warm">speak at your event?</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <Link href="/book-your-time" className="group inline-flex items-center gap-3 mt-10 pl-6 pr-2 py-2 rounded-full bg-saffron text-ink text-[14px] font-semibold hover:bg-saffron-2 transition-colors">
              Book a Speaking Engagement
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
