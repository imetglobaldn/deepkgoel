import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { SOCIAL_LINKS, WhatsAppIcon } from "../components/SocialIcons";

export const metadata: Metadata = { title: "Book Your Time" };

const TYPES = [
  { num: "01", title: "Keynote Speaking", desc: "Inspiring talks at conferences, summits, and corporate events" },
  { num: "02", title: "Master Class", desc: "In-depth workshops on digital branding, marketing, and strategy" },
  { num: "03", title: "Guest Sessions", desc: "B-School lectures, panel discussions, and academic sessions" },
  { num: "04", title: "Other", desc: "Consulting, collaboration, mentoring, or any other inquiry" },
];

export default function BookYourTimePage() {
  return (
    <>
      <PageHeader label="Book Your Time" title="Let's Connect" subtitle="Fill out the form and we'll be in touch soon." />

      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          {/* Types */}
          <p className="label mb-[30px]">What are you looking for?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[80px]">
            {TYPES.map((t) => (
              <div key={t.title} className="group bg-dark-card/50 border border-gray-border rounded-[20px] p-[30px] hover:bg-blue hover:border-blue transition-all cursor-pointer">
                <span className="text-[38px] font-semibold leading-[1em] tracking-[-0.04em] text-gray-dark group-hover:text-white/30 transition-colors">{t.num}</span>
                <h3 className="text-white text-[16px] font-semibold mt-3 mb-1 transition-colors">{t.title}</h3>
                <p className="text-gray text-[14px] group-hover:text-white/60 transition-colors">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact + Form */}
          <div className="grid lg:grid-cols-12 gap-[60px]">
            <div className="lg:col-span-4">
              <p className="heading-sm mb-8">Get in Touch</p>
              <div className="space-y-6">
                <a href="mailto:deepak@digitallynext.com" className="flex items-start gap-3 group">
                  <span className="w-10 h-10 rounded-full bg-dark-card border border-gray-border flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-gray" />
                  </span>
                  <div>
                    <p className="label !text-[12px] mb-0.5">Email</p>
                    <p className="text-gray text-[14px] group-hover:text-white transition-colors">deepak@digitallynext.com</p>
                  </div>
                </a>
                <a href="https://wa.me/919810409943" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <span className="w-10 h-10 rounded-full bg-dark-card border border-gray-border flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-4 h-4 text-gray" />
                  </span>
                  <div>
                    <p className="label !text-[12px] mb-0.5">WhatsApp</p>
                    <p className="text-gray text-[14px] group-hover:text-white transition-colors">+91-9810409943</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-dark-card border border-gray-border flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gray" />
                  </span>
                  <div>
                    <p className="label !text-[12px] mb-0.5">Office</p>
                    <p className="text-gray text-[14px] leading-[1.5em]">
                      DigitallyNext | iMET Global<br />Business India Complex, Uday Park,<br />
                      Adjacent to August Kranti Marg,<br />Behind South Ex-II, Delhi 110049
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="label mb-3">Connect Online</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-dark-card border border-gray-border flex items-center justify-center text-gray hover:text-white hover:border-blue transition-all" aria-label={s.name}>
                      <s.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[40px]">
                <h3 className="text-white text-[20px] font-semibold mb-1">Book an Appointment</h3>
                <p className="text-gray text-[14px] mb-8">Fill out the details below and we&apos;ll get back to you shortly.</p>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="label !text-[12px] mb-2 block">Full Name *</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-[12px] bg-dark border border-gray-border text-white text-[14px] focus:border-blue outline-none transition-colors placeholder:text-gray-dark" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="label !text-[12px] mb-2 block">Email *</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-[12px] bg-dark border border-gray-border text-white text-[14px] focus:border-blue outline-none transition-colors placeholder:text-gray-dark" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="label !text-[12px] mb-2 block">Phone</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-[12px] bg-dark border border-gray-border text-white text-[14px] focus:border-blue outline-none transition-colors placeholder:text-gray-dark" placeholder="+91-XXXXXXXXXX" />
                    </div>
                    <div>
                      <label htmlFor="org" className="label !text-[12px] mb-2 block">Organization</label>
                      <input type="text" id="org" className="w-full px-4 py-3 rounded-[12px] bg-dark border border-gray-border text-white text-[14px] focus:border-blue outline-none transition-colors placeholder:text-gray-dark" placeholder="Company / Institution" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="type" className="label !text-[12px] mb-2 block">Appointment Type *</label>
                    <select id="type" required className="w-full px-4 py-3 rounded-[12px] bg-dark border border-gray-border text-white text-[14px] focus:border-blue outline-none transition-colors">
                      <option value="">Select a type</option>
                      <option value="keynote">Keynote Speaking</option>
                      <option value="masterclass">Master Class</option>
                      <option value="guest">Guest Sessions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="label !text-[12px] mb-2 block">Message *</label>
                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-[12px] bg-dark border border-gray-border text-white text-[14px] focus:border-blue outline-none transition-colors resize-none placeholder:text-gray-dark" placeholder="Tell us about your event, preferred date, audience size..." />
                  </div>
                  <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors flex items-center justify-center gap-2">
                    Send Request <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
