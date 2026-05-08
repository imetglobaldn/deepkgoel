import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";

export const metadata: Metadata = { title: "About" };

const STATS = [
  { num: 18, suffix: "+", label: "Years Experience" },
  { num: 3, suffix: "", label: "Organizations" },
  { num: 34, suffix: "K+", label: "Community Reach" },
];

const EDUCATION = [
  { degree: "PGDM (MBA)", school: "Symbiosis SCMHRD, Pune", year: "2001 - 2003" },
  { degree: "PG Diploma in Sales & Marketing", school: "National Institute of Sales, New Delhi", year: "1996 - 1998" },
  { degree: "B.A. (Hons.) Economics", school: "University of Delhi", year: "1995 - 1998" },
];

const CAREER = [
  { company: "Digitally Next", role: "Strategic Driver", current: true },
  { company: "iMET Global", role: "Group CEO", current: true },
  { company: "iSoCIAL", role: "Group CEO", current: true },
  { company: "Advent Global Solutions", role: "Director - Business Strategy" },
  { company: "Hexaware Technologies", role: "Director - Americas" },
  { company: "Ariba Inc", role: "Sr Manager - Sales Operations" },
  { company: "QAI Asia", role: "Manager - Client Services" },
  { company: "Fujitsu Zensar", role: "Manager - International Marketing" },
  { company: "Bharti Telecom (Airtel)", role: "Customer Services" },
];

const PLACES = ["India", "USA", "Canada", "Europe", "Delhi/NCR", "Mumbai", "Pune", "Chicago", "Houston", "Irvine CA"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="A new-gen Indian"
        accent="entrepreneur."
        subtitle="Venturing his way as a catalyst in building a better Digital-Social Media enabled world - across India, the US, Canada and Europe."
      />

      {/* Bio */}
      <section className="section-y border-b border-line">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <aside className="lg:col-span-4 space-y-10">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="border-l border-line pl-6">
                    <div className="display text-[clamp(48px,5vw,72px)] text-gradient">
                      <Counter to={s.num} suffix={s.suffix} />
                    </div>
                    <p className="mt-2 text-ink/55 text-[14px]">{s.label}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={300}>
                <div className="rounded-2xl bg-paper-2 border border-line p-7">
                  <div className="flex items-center gap-2 eyebrow !text-ink/50 mb-4">
                    <MapPin className="w-3.5 h-3.5" /> Global Footprint
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PLACES.map((p) => (
                      <span key={p} className="px-3 py-1.5 rounded-full border border-line text-[12px] text-ink/60 hover:text-saffron hover:border-saffron transition-colors">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>

            <div className="lg:col-span-8 space-y-7">
              <Reveal>
                <p className="text-[clamp(20px,1.8vw,26px)] text-ink/90 leading-[1.5] font-light">
                  Deepak is a <strong className="text-saffron font-medium">New Gen Indian Entrepreneur</strong> working as a catalyst in building a Digital-Social Media enabled world.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="body-base">
                  He serves as the strategic driver of <strong className="text-ink">Digitally Next</strong>, an organization disrupting the digital social media agency space through Digital Branding, Demand Generation, and Personal/Celebrity branding for startups, self-employed professionals and big corporations.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-base">
                  Through <strong className="text-ink">iMET Global</strong>, a Centre of Excellence bringing profitable, business-driven upskilling with industry-specific insights to the Professional Education sector, MSMEs and startups - supporting Digital India, Skill India and Make in India.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="body-base">
                  Through <strong className="text-ink">iSoCIAL</strong>, he is building India&apos;s largest IoT &amp; Big Data community with 34,000+ entity and individual reach.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="body-base">
                  An Economics graduate from University of Delhi with an MBA from Symbiosis (SCMHRD, Pune), Deepak brings 18+ years of professional experience across India, US, Canada and Europe in B2B sectors including IT, ITES, Consulting and BPO.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="!mt-12 rounded-2xl bg-paper-2 border border-line p-8 relative">
                  <Sparkles className="absolute -top-3 -left-3 w-7 h-7 text-saffron" />
                  <p className="text-ink/75 text-[15px] leading-[1.7]">
                    Sought after for mentoring by top B-Schools (IIM, ISB, IIFT), engineering colleges (IITs, BIT) and professional associations (CII, FICCI, SMB Connect, IAN). Awarded
                    <strong className="text-ink"> Honorary Lifetime Membership</strong> of the International Film and Television Club.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="!mt-12">
                  <p className="eyebrow mb-3">Philosophy</p>
                  <p className="body-base">
                    Deepak believes in Destiny&apos;s Connect and the Cosmic Law of Attraction. He has studied meditation through Art of Living, Dynamic Meditation, Vipassana, and The Secret.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Education - BLACK section */}
      <section className="relative section-y bg-ink text-ivory overflow-hidden">
        <div className="absolute inset-0 grid-bg-d opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-saffron/10 blur-[140px] float-slow pointer-events-none" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal><p className="eyebrow !text-saffron mb-4">Education</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(36px,4.4vw,64px)] text-ivory">
                  Academic <span className="text-gradient-warm">background.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.degree} delay={i * 80}>
                  <div className="group rounded-2xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 card-lift-d hover:border-saffron/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-ivory text-[18px] font-semibold">{e.degree}</h3>
                      <p className="text-ivory/55 text-[14px] mt-1">{e.school}</p>
                    </div>
                    <span className="text-ivory/40 text-[13px] group-hover:text-saffron transition-colors">{e.year}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-y border-b border-line">
        <div className="container-x">
          <Reveal><p className="eyebrow mb-4">Career</p></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-[clamp(36px,4.8vw,72px)] text-ink mb-12">
              Professional <span className="text-gradient">journey.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAREER.map((c, i) => (
              <Reveal key={c.company} delay={i * 60}>
                <div className="group h-full rounded-2xl bg-paper-2 border border-line p-7 card-lift hover:border-saffron/40">
                  {c.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-saffron/15 text-saffron text-[11px] font-semibold uppercase tracking-[0.22em] mb-3">
                      Current
                    </span>
                  )}
                  <h3 className="text-ink text-[17px] font-semibold leading-tight group-hover:text-saffron transition-colors">{c.company}</h3>
                  <p className="text-ink/55 text-[14px] mt-2">{c.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function CtaStrip() {
  return (
    <section className="relative min-h-[60svh] flex items-center text-center bg-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed-img"
        style={{ backgroundImage: "url('/banner.png')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/80 to-ink/60" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/50" />

      <div className="relative container-x py-24 sm:py-32 w-full">
        <Reveal>
          <p className="eyebrow !text-saffron mb-5">Collaborate</p>
        </Reveal>
        <Reveal delay={80} blur>
          <h2 className="display text-[clamp(36px,5vw,76px)] text-ivory max-w-3xl mx-auto">
            Want to <span className="text-gradient-warm">build something meaningful</span> together?
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/expertise" className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-saffron text-ink text-[14px] font-semibold hover:bg-saffron-2 transition-colors">
              View Expertise
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/book-your-time" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-ivory text-[14px] hover:bg-ivory hover:text-ink hover:border-ivory transition-colors">
              Book Your Time <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
