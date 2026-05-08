import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "Speaking Mind" };

const ARTICLES = [
  { title: "Why Alternative MBA is Gaining Popularity?", excerpt: "The education landscape is undergoing transformation with structured learning of business of Digital Social Media, Data Science, and IoT.", category: "Education", date: "July 23, 2021", featured: true },
  { title: "How Alternative MBAs in Digital Social Media, Data Science, and IoT Revolutionising the Education Landscape", excerpt: "The higher education landscape has constantly been transforming due to the present market dynamics.", category: "Education", date: "July 23, 2021", featured: true },
  { title: "Attention CMOs \u2013 7 Social Media Platforms That Will Explode in the Coming Years", excerpt: "Social media is a boisterous playing field. And this field has seen many changing players.", category: "Digital Strategy", date: "July 23, 2021", featured: false },
  { title: "How To Get First 1,000 Followers (LinkedIn & Instagram) in an Honest and Credible Way", excerpt: "How many followers one has on a particular social networking site is one of the hardest and most prestigious metrics.", category: "Personal Branding", date: "July 23, 2021", featured: false },
  { title: "One Major Thing That Trainers, Biz Coach and Consultants Tend to Miss Big Time While Working on Their Portfolios", excerpt: "After spending lakhs on certifications and courses, one big reason why professionals fail to get recognition.", category: "Consulting", date: "July 23, 2021", featured: false },
  { title: "Tools That Help You Become a Better Content Writer or Blogger for Social/Digital Media", excerpt: "Thousands of rules exist in the English language which is certainly not easy to remember.", category: "Content", date: "July 23, 2021", featured: false },
];

export default function SpeakingMindPage() {
  const featured = ARTICLES.filter((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <>
      <PageHeader label="Speaking Mind" title="Articles & Insights" subtitle="Thoughts on digital media, education, personal branding, and professional development." />

      {/* Featured */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[40px]">Featured</p>
          <div className="grid lg:grid-cols-2 gap-[20px]">
            {featured.map((a) => (
              <article key={a.title} className="group bg-dark-card/50 border border-gray-border rounded-[20px] p-[40px] hover:bg-dark-card transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-blue text-[12px] font-semibold uppercase tracking-wider">{a.category}</span>
                  <span className="text-gray-dark text-[12px]">{a.date}</span>
                </div>
                <h2 className="heading-sm group-hover:text-blue transition-colors mb-3">{a.title}</h2>
                <p className="body-text mb-5">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-blue text-[14px] font-semibold">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rest */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[40px]">All Articles</p>
          {rest.map((a, i) => (
            <article key={a.title} className="group py-[30px] border-b border-gray-border last:border-0 cursor-pointer">
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="text-[32px] font-semibold tracking-[-0.04em] text-gray-dark group-hover:text-blue transition-colors">0{i + 1}</span>
                </div>
                <div className="lg:col-span-7">
                  <span className="text-blue text-[12px] font-semibold uppercase tracking-wider">{a.category}</span>
                  <h3 className="heading-sm group-hover:text-blue transition-colors mt-1">{a.title}</h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-gray text-[14px] leading-[1.5em]">{a.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[80px] bg-dark border-t border-gray-border text-center">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="heading-md !text-white">Want Deepak to speak at your event?</p>
          <Link href="/v1/book-your-time" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors">
            Book a Speaking Engagement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
