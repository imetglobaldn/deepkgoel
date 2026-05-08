import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveRight, Globe, Briefcase, Users, GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Expertise" };

const FUNCTIONAL = [
  "Strategic Management",
  "International Marketing (B2B)",
  "Business Development",
  "Bid Management",
  "Sales Support & Pre-sales",
  "Key Account Management",
  "Corporate Communication & Operations",
  "Offshoring & Process Consulting",
];
const INDUSTRIES = [
  "Internet & Digital Media",
  "Professional Education",
  "BPO & ITES",
  "Software Services",
  "KPO / Consulting",
  "Telecom",
];
const TRAINING = [
  "Personality Development",
  "Business Communication & Presentation",
  "Process Improvement",
  "Strategic Marketing",
  "Cross-Cultural Sensitization",
  "Customer Relationship Management",
  "Key Account Management",
  "ITES/KPO/Software Services Marketing",
  "International Marketing",
  "Sales Management & Analytics",
  "Team Building & Leadership",
  "Entrepreneurship & Self-Employment",
  "Startup, SME, MSME Challenges",
  "Industry Interface Programs",
  "Emotional Intelligence",
];

const CLIENTS = {
  corporate: ["WNS", "TechServ Consult", "Attainix", "InvestEdge", "Global Development Foundation"],
  education: ["Symbiosis SCMHRD, Pune", "SCMLD, Pune", "ICSI India", "ILI Indore", "Disha Group of Institutes"],
};

const CAREER = [
  { company: "Advent Global Solutions", role: "Director - Business Strategy" },
  { company: "Hexaware Technologies", role: "Director - Americas" },
  { company: "Ariba Inc", role: "Sr Manager - Sales Operations" },
  { company: "QAI Asia", role: "Manager - Client Services" },
  { company: "Fujitsu Zensar", role: "Manager - International Marketing" },
  { company: "Bharti Telecom (Airtel)", role: "Customer Services" },
];

const PILLARS = [
  { icon: Globe, label: "Strategic Management", sub: "B2B International across 4 continents" },
  { icon: Briefcase, label: "Business Development", sub: "Bid management, key accounts, pre-sales" },
  { icon: Users, label: "Corporate Training", sub: "6+ Indian locations · KPO · MSME" },
  { icon: GraduationCap, label: "Mentoring", sub: "IIM, ISB, IIFT, IITs, BIT" },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="group flex items-center gap-3 py-3 border-b border-line text-ink/65 hover:text-ink transition-colors">
      <MoveRight className="w-4 h-4 text-saffron shrink-0 group-hover:translate-x-1 transition-transform" />
      <span className="text-[14px]">{children}</span>
    </li>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        label="Area of Expertise"
        title="16+ years of strategic"
        accent="experience."
        subtitle="Across Business Planning, Marketing Strategy, Campaign Management, Sales, Process Consulting and Centre-of-Excellence building - spanning India, US, EMEA and APAC."
      />

      {/* Pillars */}
      <section className="section-y border-b border-line relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-x relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <div className="group h-full rounded-2xl bg-paper-2 border border-line p-7 card-lift hover:border-saffron/40">
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-saffron/10 text-saffron mb-6 group-hover:bg-saffron group-hover:text-ink transition-colors">
                    <p.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-ink font-semibold text-[17px] mb-1.5">{p.label}</h3>
                  <p className="text-ink/55 text-[14px] leading-[1.55]">{p.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Functional + Industries */}
      <section className="section-y bg-paper-2 border-b border-line">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Reveal><p className="eyebrow mb-4">Functional Areas</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(32px,4vw,56px)] text-ink mb-8">What I do.</h2>
              </Reveal>
              <ul>{FUNCTIONAL.map((f) => <Bullet key={f}>{f}</Bullet>)}</ul>
            </div>
            <div>
              <Reveal><p className="eyebrow mb-4">Industries</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(32px,4vw,56px)] text-ink mb-8">Where I&apos;ve worked.</h2>
              </Reveal>
              <ul>{INDUSTRIES.map((i) => <Bullet key={i}>{i}</Bullet>)}</ul>

              <Reveal delay={300}>
                <div className="mt-10 rounded-2xl bg-paper border border-line p-7">
                  <p className="eyebrow !text-ink/50 mb-5">Geographic Experience</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-ink text-[14px] font-semibold mb-1">India</p>
                      <p className="text-ink/55 text-[13px]">Delhi/NCR, Mumbai, Pune</p>
                    </div>
                    <div>
                      <p className="text-ink text-[14px] font-semibold mb-1">United States</p>
                      <p className="text-ink/55 text-[13px]">Irvine CA, Chicago IL, Houston TX</p>
                    </div>
                  </div>
                </div>
              </Reveal>
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
                  <h3 className="text-ink text-[17px] font-semibold leading-tight group-hover:text-saffron transition-colors">{c.company}</h3>
                  <p className="text-ink/55 text-[14px] mt-2">{c.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="section-y bg-paper-2 border-b border-line">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal><p className="eyebrow mb-4">Training</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(32px,4vw,56px)] text-ink">
                  Corporate training & consulting.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="body-base mt-7">
                  Since 2004 - guest lectures, workshops, and mentorship at top B-schools. Currently
                  engaged in corporate training across 6 Indian locations for a multi-million-dollar
                  KPO firm.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-10">
                {TRAINING.map((t, i) => (
                  <Reveal key={t} delay={i * 30}>
                    <div className="group flex items-center gap-3 py-3 border-b border-line text-ink/65 hover:text-ink transition-colors">
                      <MoveRight className="w-4 h-4 text-saffron/70 shrink-0 group-hover:translate-x-1 group-hover:text-saffron transition-all" />
                      <span className="text-[14px]">{t}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-y border-b border-line">
        <div className="container-x">
          <Reveal><p className="eyebrow mb-4">Clients</p></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-[clamp(36px,4.8vw,72px)] text-ink mb-12">
              Key clients & <span className="text-gradient">associations.</span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-ink text-[12px] uppercase tracking-[0.28em] mb-5">Corporate</p>
              <div className="flex flex-wrap gap-2">
                {CLIENTS.corporate.map((c, i) => (
                  <Reveal key={c} delay={i * 50}>
                    <span className="inline-block px-4 py-2 rounded-full border border-line text-[13px] text-ink/65 hover:text-saffron hover:border-saffron transition-colors">
                      {c}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <p className="text-ink text-[12px] uppercase tracking-[0.28em] mb-5">Professional Education</p>
              <div className="flex flex-wrap gap-2">
                {CLIENTS.education.map((c, i) => (
                  <Reveal key={c} delay={i * 50}>
                    <span className="inline-block px-4 py-2 rounded-full border border-line text-[13px] text-ink/65 hover:text-saffron hover:border-saffron transition-colors">
                      {c}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - black image overlay */}
      <section className="relative min-h-[60svh] flex items-center text-center bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-fixed-img" style={{ backgroundImage: "url('/banner.png')" }} aria-hidden />
        <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/80 to-ink/60" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/50" />

        <div className="relative container-x py-24 sm:py-32 w-full">
          <Reveal><p className="eyebrow !text-saffron mb-5">Work Together</p></Reveal>
          <Reveal delay={80} blur>
            <h2 className="display text-[clamp(36px,5vw,76px)] text-ivory max-w-3xl mx-auto">
              Interested in <span className="text-gradient-warm">working together?</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <Link href="/book-your-time" className="group inline-flex items-center gap-3 mt-10 pl-6 pr-2 py-2 rounded-full bg-saffron text-ink text-[14px] font-semibold hover:bg-saffron-2 transition-colors">
              Book Your Time
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
