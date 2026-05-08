import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, Play, Video, Newspaper } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "Walk & Talk" };

const VIDEOS = [
  { title: "Why Companies don\u2019t get desired results from their Digital Campaign?", desc: "Common mistakes businesses make with digital marketing campaigns and how to fix them.", category: "Digital Strategy" },
  { title: "How not to be any other Trainer/Coach \u2013 Video by Deepak Goel", desc: "What sets apart truly impactful trainers and coaches from the crowd.", category: "Personal Branding" },
  { title: "4 Key Must haves for Chief Digital Officers", desc: "Essential qualities every Chief Digital Officer needs for meaningful digital transformation.", category: "Leadership" },
];

const MEDIA = [
  { title: "Digital PR & Social Media meet at Press Club of India", source: "Times of India", date: "May 4, 2023" },
  { title: "Indian Express Delhi", source: "Indian Express", date: "May 4, 2023" },
  { title: "\u092A\u094D\u0930\u0947\u0938 \u0915\u094D\u0932\u092C \u0911\u092B \u0907\u0902\u0921\u093F\u092F\u093E \u0914\u0930 \u092A\u0940\u0906\u0930 \u0938\u094B\u0938\u093E\u0907\u091F\u0940 \u2013 \u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u092A\u0940\u0906\u0930 \u0926\u093F\u0935\u0938", source: "Press Club of India", date: "Apr 27, 2023" },
  { title: "PR and media professionals celebrate National Public Relations Day", source: "Press Club of India", date: "Apr 27, 2023" },
  { title: "DMRC\u2019s Sh. Anuj Dayal Received Lifetime Achievement Award", source: "PR Event", date: "Apr 24, 2023" },
  { title: "Celebration of National PR Day", source: "Press Club of India", date: "Apr 24, 2023" },
  { title: "Glimpses of National PR Day Celebration", source: "Event Gallery", date: "Apr 24, 2023" },
];

export default function WalkTalkPage() {
  return (
    <>
      <PageHeader label="Walk & Talk" title="Walk & Talk" subtitle="Videos, conversations, and media coverage on digital transformation and entrepreneurship." />

      {/* Videos */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="flex items-center gap-3 mb-[40px]">
            <Video className="w-5 h-5 text-blue" />
            <p className="label !mb-0">Featured Videos</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-[20px]">
            {VIDEOS.map((v) => (
              <div key={v.title} className="group bg-dark-card/50 border border-gray-border rounded-[20px] overflow-hidden hover:bg-dark-card transition-colors cursor-pointer">
                <div className="relative aspect-video bg-dark flex items-center justify-center">
                  <div className="w-[56px] h-[56px] rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue transition-all">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                  <span className="absolute bottom-3 left-4 text-blue text-[11px] font-semibold uppercase tracking-wider">{v.category}</span>
                </div>
                <div className="p-[30px]">
                  <h3 className="text-white text-[16px] font-semibold leading-[1.3em] group-hover:text-blue transition-colors mb-2">{v.title}</h3>
                  <p className="text-gray text-[14px] leading-[1.5em]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="flex items-center gap-3 mb-[40px]">
            <Newspaper className="w-5 h-5 text-blue" />
            <p className="label !mb-0">Media Coverage</p>
          </div>
          {MEDIA.map((m, i) => (
            <div key={m.title} className="group py-[25px] border-b border-gray-border last:border-0 cursor-pointer">
              <div className="grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-1">
                  <span className="text-[20px] font-semibold text-gray-dark group-hover:text-blue transition-colors">0{i + 1}</span>
                </div>
                <div className="sm:col-span-7">
                  <h3 className="text-white text-[16px] font-semibold leading-snug group-hover:text-blue transition-colors">{m.title}</h3>
                </div>
                <div className="sm:col-span-2"><span className="text-gray text-[14px]">{m.source}</span></div>
                <div className="sm:col-span-1"><span className="text-gray-dark text-[12px]">{m.date}</span></div>
                <div className="sm:col-span-1 flex sm:justify-end">
                  <ArrowUpRight className="w-4 h-4 text-gray-dark group-hover:text-blue transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[80px] bg-dark border-t border-gray-border text-center">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="heading-md !text-white">Invite Deepak to your event</p>
          <Link href="/v1/book-your-time" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors">
            Book a Speaking Engagement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
