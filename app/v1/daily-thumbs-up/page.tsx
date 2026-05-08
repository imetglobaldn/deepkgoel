import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "Daily Thumbs Up" };

const CARDS = [
  { theme: "Motivation" }, { theme: "Digital Strategy" }, { theme: "Entrepreneurship" },
  { theme: "Personal Branding" }, { theme: "Education" }, { theme: "Leadership" },
];

export default function DailyThumbsUpPage() {
  return (
    <>
      <PageHeader label="Daily Thumbs Up" title="Daily Dose of Inspiration" subtitle="Motivational insights and wisdom for your everyday journey in the digital world." />

      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {CARDS.map((c, i) => (
              <div key={i} className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[40px] flex flex-col items-center justify-center text-center min-h-[250px]">
                <span className="text-blue text-[12px] font-semibold uppercase tracking-wider mb-3">{c.theme}</span>
                <p className="text-white text-[20px] font-semibold">Daily Thumbs Up</p>
                <p className="text-gray text-[14px] mt-2">- Deepak Goel</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray text-[14px] mt-[40px]">
            Follow Deepak on social media for daily motivational content and insights.
          </p>
        </div>
      </section>

      <section className="py-[80px] bg-dark border-t border-gray-border text-center">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="heading-md !text-white">Follow for daily inspiration</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/v1/walk-talk" className="inline-flex items-center gap-2 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors">
              Watch Walk & Talk <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/v1/speaking-mind" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-border text-white text-[16px] font-semibold rounded-full hover:border-white/40 transition-colors">
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
