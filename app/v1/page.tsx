import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "./components/SocialIcons";

/* ─── Data ─── */

const TOPICS = [
  {
    num: "01",
    title: "Digital Branding & Strategy",
    desc: "Strategic brand building through Digital Branding, Demand Generation, and Personal/Celebrity branding for startups to corporations.",
  },
  {
    num: "02",
    title: "Professional Education & Upskilling",
    desc: "Industry-specific insights and business-driven upskilling supporting Digital India, Skill India & Make in India initiatives.",
  },
  {
    num: "03",
    title: "IoT & Big Data Community",
    desc: "Building India\u2019s largest IoT & Big Data community with 34,000+ initial entity and individual reach nationwide.",
  },
];

const STATS = [
  { num: "18+", label: "years of professional experience" },
  { num: "3", label: "organizations led as Group CEO" },
  { num: "34K+", label: "community reach through iSoCIAL" },
  { num: "6+", label: "cities across India, US & Europe" },
];

const SKILLS = [
  {
    title: "Strategic Management & Business Development",
    desc: "Master proven strategies across B2B international marketing, bid management, key account management, and corporate communication spanning India, US, Canada, and Europe.",
  },
  {
    title: "Digital & Social Media Transformation",
    desc: "Learn to leverage digital branding, demand generation, and personal/celebrity branding to disrupt the digital social media agency space.",
  },
  {
    title: "Corporate Training & Mentoring",
    desc: "Gain insights from guest lectures, workshops, and mentorship programs delivered at top B-Schools (IIM, ISB, IIFT), engineering colleges (IITs, BIT), and professional associations.",
  },
];

const IMPACTS = [
  {
    title: "Mentoring Future Leaders",
    desc: "Sought after for mentoring by top B-Schools (IIM, ISB, IIFT), engineering colleges (IITs, BIT), and professional associations (CII, FICCI, SMB Connect, IAN).",
  },
  {
    title: "Driving Digital Transformation",
    desc: "As the strategic driver of Digitally Next, disrupting the digital social media agency space through Digital Branding, Demand Generation, and Personal/Celebrity branding.",
  },
  {
    title: "Building Professional Education",
    desc: "Through iMET Global, bringing profitable, business-driven upskilling to the Professional Education sector, MSMEs, and Startups across India.",
  },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative mt-[72px]">
        <div className="relative w-full min-h-[70vh]">
          <Image
            src="/banner.png"
            alt="Deepak Goel"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-dark/90 via-dark/60 to-dark/30" />
          <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5 w-full pb-[80px]">
            <div className="max-w-[830px]">
              <h1 className="heading-xl animate-fade-in-up">
                Strategies for a Better Digital World
              </h1>
              <p className="mt-[30px] text-gray text-[16px] leading-[1.5em] max-w-[530px] animate-fade-in-up delay-200">
                A new-gen Indian Entrepreneur venturing his way as a catalyst in
                building a better Digital-Social Media Enabled world.
              </p>
              <Link
                href="/v1/about"
                className="inline-flex items-center gap-2 mt-[40px] px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors animate-fade-in-up delay-300"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid lg:grid-cols-2 gap-[60px]">
            <div>
              <p className="label mb-[20px]">About Deepak Goel</p>
              <p className="heading-md !text-white">
                Distinguished entrepreneur and thought leader in digital transformation and social media.
              </p>
            </div>
            <div>
              <p className="body-text">
                With over 18 years of experience, Deepak has served as the strategic driver
                of Digitally Next, an organization disrupting the digital social media agency
                space through Digital Branding, Demand Generation, and Personal/Celebrity
                branding for startups, self-employed professionals, and big corporations.
              </p>
              <p className="body-text mt-5">
                An Economics graduate from University of Delhi with an MBA from Symbiosis
                (SCMHRD, Pune), he brings multi-cultural experience across India, US, Canada,
                and Europe in B2B sectors including IT, ITES, Consulting, and BPO.
              </p>
              <Link
                href="/v1/about"
                className="inline-flex items-center gap-2 mt-8 text-blue text-[16px] font-semibold hover:text-blue-light transition-colors"
              >
                More About Deepak
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TOPICS ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[20px]">Ventures & Focus Areas</p>
          <p className="heading-md !text-white max-w-[830px] mb-[60px]">
            The most critical areas in today&apos;s digital and social media landscape
          </p>

          <div className="grid lg:grid-cols-3 gap-[20px]">
            {TOPICS.map((t) => (
              <div
                key={t.num}
                className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[40px] hover:bg-dark-card transition-colors"
              >
                <span className="text-[50px] font-semibold leading-[1em] tracking-[-0.04em] text-gray-dark">
                  {t.num}
                </span>
                <h3 className="heading-sm mt-4 mb-3">{t.title}</h3>
                <p className="body-text">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">
            <div>
              <p className="heading-md !text-white">
                Ready to Transform Your Digital Approach?
              </p>
              <p className="body-text mt-5 max-w-[530px]">
                From digital branding to professional education, gain insights and
                strategies to thrive in today&apos;s digital landscape. Take this opportunity
                to learn from industry experience.
              </p>
              <Link
                href="/v1/book-your-time"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors"
              >
                Book Your Time
              </Link>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {["Proven Strategies for Growth", "Expert Insights into Digital Media", "Tools for Professional Upskilling"].map((badge) => (
                <span
                  key={badge}
                  className="px-5 py-2.5 rounded-full border border-gray-border text-gray text-[14px]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-[72px] font-semibold leading-[1em] tracking-[-0.05em] text-white">
                  {s.num}
                </div>
                <p className="body-text mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="heading-md !text-white mb-[60px]">
            Skills &amp; expertise you&apos;ll gain
          </p>

          <div className="grid lg:grid-cols-3 gap-[20px]">
            {SKILLS.map((skill, i) => (
              <div
                key={skill.title}
                className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[40px]"
              >
                <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue/15 text-blue text-[14px] font-semibold mb-6">
                  0{i + 1}
                </span>
                <h3 className="heading-sm mb-3">{skill.title}</h3>
                <p className="body-text">{skill.desc}</p>
              </div>
            ))}
          </div>

          <p className="body-text mt-[30px]">
            Deepak Goel provides expert guidance and actionable strategies to help you
            master the dynamic world of digital branding with confidence.
          </p>
        </div>
      </section>

      {/* ═══ IMPACT ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid lg:grid-cols-2 gap-[60px]">
            <div>
              <p className="label mb-[20px]">Our Impact</p>
              <p className="heading-md !text-white">
                Through strategic insights and actionable advice, empowering individuals and organizations to unlock their full potential.
              </p>
            </div>
            <div className="space-y-0">
              {IMPACTS.map((item) => (
                <div key={item.title} className="py-[30px] border-b border-gray-border last:border-0">
                  <h3 className="heading-sm mb-2">{item.title}</h3>
                  <p className="body-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[20px]">Recognition</p>
          <div className="max-w-[830px]">
            <p className="heading-md !text-white">
              &ldquo;Awarded Honorary Lifetime Membership of the International Film and
              Television Club for outstanding contributions to digital media and
              entrepreneurship.&rdquo;
            </p>
            <div className="mt-[40px]">
              <p className="text-white text-[16px] font-semibold">Deepak Goel</p>
              <p className="text-gray text-[14px] mt-1">
                Group CEO - iMET Global | Digitally Next | iSoCIAL
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
