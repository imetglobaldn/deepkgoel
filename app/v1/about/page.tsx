import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "About" };

const EDUCATION = [
  { degree: "PGDM (MBA)", school: "Symbiosis SCMHRD, Pune", year: "2001-2003" },
  { degree: "PG Diploma in Sales & Marketing", school: "National Institute of Sales, New Delhi", year: "1996-1998" },
  { degree: "B.A. (Hons.) Economics", school: "University of Delhi", year: "1995-1998" },
];

const CAREER = [
  { company: "Digitally Next", role: "Strategic Driver", current: true },
  { company: "iMET Global", role: "Group CEO", current: true },
  { company: "iSoCIAL", role: "Group CEO", current: true },
  { company: "Advent Global Solutions", role: "Director - Business Strategy", current: false },
  { company: "Hexaware Technologies", role: "Director - Americas", current: false },
  { company: "Ariba Inc", role: "Sr Manager - Sales Operations", current: false },
  { company: "QAI Asia", role: "Manager - Client Services", current: false },
  { company: "Fujitsu Zensar", role: "Manager - International Marketing", current: false },
  { company: "Bharti Telecom (Airtel)", role: "Customer Services", current: false },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Deepak Goel"
        subtitle="New-gen Indian Entrepreneur venturing his way as a catalyst in building a better Digital-Social Media Enabled world."
      />

      {/* Bio */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid lg:grid-cols-12 gap-[60px]">
            <div className="lg:col-span-4 space-y-8">
              {[
                { num: "18+", label: "Years Experience" },
                { num: "3", label: "Organizations" },
                { num: "34K+", label: "Community Reach" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[52px] font-semibold leading-[1em] tracking-[-0.04em] text-white">{s.num}</div>
                  <p className="body-text mt-1">{s.label}</p>
                </div>
              ))}

              <div className="p-[30px] bg-dark-card/50 border border-gray-border rounded-[20px]">
                <p className="label mb-3">Global Footprint</p>
                <div className="flex flex-wrap gap-2">
                  {["India", "USA", "Canada", "Europe", "Delhi/NCR", "Chicago", "Houston", "Irvine CA", "Mumbai", "Pune"].map((p) => (
                    <span key={p} className="px-3 py-1.5 rounded-full border border-gray-border text-[12px] text-gray">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <p className="text-[20px] text-white/80 leading-[1.5em]">
                Deepak is a <strong className="text-white">New Gen Indian Entrepreneur</strong> working as a catalyst
                in building a Digital-Social Media Enabled world.
              </p>
              <p className="body-text">
                He serves as the strategic driver of <strong className="text-white">Digitally Next</strong>, an
                organization disrupting the digital social media agency space through Digital Branding, Demand
                Generation, and Personal/Celebrity branding for startups, self-employed professionals, and big corporations.
              </p>
              <p className="body-text">
                Through <strong className="text-white">iMET Global</strong>, a Centre of Excellence that brings
                profitable, business-driven upskilling with industry-specific insights to the Professional Education
                sector, MSMEs, and Startups - supporting Digital India, Skill India, and Make in India.
              </p>
              <p className="body-text">
                Through <strong className="text-white">iSoCIAL</strong>, he is building India&apos;s largest IoT &amp;
                Big Data community with 34,000+ initial entity and individual reach.
              </p>
              <p className="body-text">
                An Economics graduate from University of Delhi with an MBA from Symbiosis (SCMHRD, Pune),
                Deepak brings 18+ years of professional experience across India, US, Canada, and Europe in B2B
                sectors including IT, ITES, Consulting, and BPO.
              </p>

              <div className="!mt-10 p-[30px] bg-dark-card/50 border border-gray-border rounded-[20px]">
                <p className="text-gray text-[14px] leading-[1.5em]">
                  Sought after for mentoring by top B-Schools (IIM, ISB, IIFT), engineering colleges (IITs, BIT),
                  and professional associations (CII, FICCI, SMB Connect, IAN). Awarded Honorary Lifetime
                  Membership of the International Film and Television Club.
                </p>
              </div>

              <div className="!mt-10">
                <p className="label mb-3">Philosophy</p>
                <p className="body-text">
                  Deepak believes in Destiny&apos;s Connect and the Cosmic Law of Attraction. He has studied
                  meditation through Art of Living, Dynamic Meditation, Vipassana, and The Secret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[20px]">Education</p>
          <p className="heading-md !text-white mb-[40px]">Academic Background</p>
          <div className="space-y-[20px]">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[30px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-white text-[18px] font-semibold">{e.degree}</h3>
                  <p className="text-gray text-[14px] mt-1">{e.school}</p>
                </div>
                <span className="text-gray-dark text-[14px] shrink-0">{e.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[20px]">Career</p>
          <p className="heading-md !text-white mb-[40px]">Professional Journey</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {CAREER.map((c) => (
              <div key={c.company} className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[30px] hover:bg-dark-card transition-colors">
                {c.current && (
                  <span className="inline-block px-3 py-1 rounded-full bg-blue/15 text-blue text-[11px] font-semibold uppercase tracking-wider mb-3">
                    Current
                  </span>
                )}
                <h3 className="text-white text-[18px] font-semibold">{c.company}</h3>
                <p className="text-gray text-[14px] mt-1">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-dark border-t border-gray-border text-center">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="heading-md !text-white">Want to collaborate?</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/v1/expertise" className="inline-flex items-center gap-2 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors">
              View Expertise <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/v1/book-your-time" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-border text-white text-[16px] font-semibold rounded-full hover:border-white/40 transition-colors">
              Book Your Time
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
