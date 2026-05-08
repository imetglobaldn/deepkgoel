import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, Video, Newspaper } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Walk & Talk" };

const VIDEOS = [
  {
    title: "Why companies don't get desired results from their digital campaigns?",
    desc: "Common mistakes businesses make with digital marketing campaigns and how to fix them.",
    category: "Digital Strategy",
  },
  {
    title: "How not to be any other Trainer or Coach",
    desc: "What sets apart truly impactful trainers and coaches from the crowd.",
    category: "Personal Branding",
  },
  {
    title: "4 Key Must-haves for Chief Digital Officers",
    desc: "Essential qualities every Chief Digital Officer needs for meaningful digital transformation.",
    category: "Leadership",
  },
];

const MEDIA = [
  { title: "Digital PR & Social Media meet at Press Club of India", source: "Times of India", date: "May 4, 2023" },
  { title: "Indian Express Delhi", source: "Indian Express", date: "May 4, 2023" },
  { title: "प्रेस क्लब ऑफ इंडिया और पीआर सोसाइटी - राष्ट्रीय पीआर दिवस", source: "Press Club of India", date: "Apr 27, 2023" },
  { title: "PR and media professionals celebrate National Public Relations Day", source: "Press Club of India", date: "Apr 27, 2023" },
  { title: "DMRC's Sh. Anuj Dayal Receives Lifetime Achievement Award", source: "PR Event", date: "Apr 24, 2023" },
  { title: "Celebration of National PR Day", source: "Press Club of India", date: "Apr 24, 2023" },
  { title: "Glimpses of National PR Day Celebration", source: "Event Gallery", date: "Apr 24, 2023" },
];

export default function WalkTalkPage() {
  return (
    <>
      <PageHeader
        label="Walk & Talk"
        title="Conversations &"
        accent="coverage."
        subtitle="Videos, dialogues and media moments on digital transformation, entrepreneurship and the changing face of Indian business."
      />

      {/* Videos */}
      <section className="section-y border-b border-line">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-12">
            <Video className="w-5 h-5 text-saffron" />
            <p className="eyebrow !mb-0">Featured Videos</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {VIDEOS.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group rounded-2xl bg-paper-2 border border-line overflow-hidden card-lift hover:border-saffron/40 cursor-pointer">
                  <div className="relative aspect-video bg-paper-3 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-saffron/20 via-ink to-crimson/15 opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                    <div className="relative w-16 h-16 rounded-full bg-ivory/10 backdrop-blur-md flex items-center justify-center group-hover:bg-saffron group-hover:scale-110 transition-all duration-500">
                      <Play className="w-6 h-6 text-ink ml-0.5 group-hover:text-ink transition-colors" />
                    </div>
                    <span className="absolute bottom-4 left-5 text-saffron text-[11px] font-semibold uppercase tracking-[0.28em]">
                      {v.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-ink text-[17px] font-semibold leading-[1.3] group-hover:text-saffron transition-colors mb-3">
                      {v.title}
                    </h3>
                    <p className="text-ink/55 text-[14px] leading-[1.55]">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="section-y bg-paper-2 border-b border-line">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-12">
            <Newspaper className="w-5 h-5 text-saffron" />
            <p className="eyebrow !mb-0">Media Coverage</p>
          </div>

          <div>
            {MEDIA.map((m, i) => (
              <Reveal key={m.title} delay={i * 50}>
                <div className="group py-6 border-b border-line cursor-pointer">
                  <div className="grid sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-1">
                      <span className="display text-[20px] text-ink/30 group-hover:text-saffron transition-colors">0{i + 1}</span>
                    </div>
                    <div className="sm:col-span-7">
                      <h3 className="text-ink text-[16px] font-semibold leading-snug group-hover:text-saffron transition-colors">
                        {m.title}
                      </h3>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-ink/55 text-[13px]">{m.source}</span>
                    </div>
                    <div className="sm:col-span-1">
                      <span className="text-ink/40 text-[12px]">{m.date}</span>
                    </div>
                    <div className="sm:col-span-1 flex sm:justify-end">
                      <ArrowUpRight className="w-4 h-4 text-ink/35 group-hover:text-saffron group-hover:rotate-12 transition-all" />
                    </div>
                  </div>
                </div>
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
          <Reveal><p className="eyebrow !text-saffron mb-5">On Stage</p></Reveal>
          <Reveal delay={80} blur>
            <h2 className="display text-[clamp(36px,5vw,76px)] text-ivory max-w-3xl mx-auto">
              Invite Deepak to <span className="text-gradient-warm">your event.</span>
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
