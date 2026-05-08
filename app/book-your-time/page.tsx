import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Mic, GraduationCap, Users, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { SOCIAL_LINKS, WhatsAppIcon } from "../components/SocialIcons";

export const metadata: Metadata = { title: "Book Your Time" };

const TYPES = [
  { num: "01", title: "Keynote Speaking", desc: "Inspiring talks at conferences, summits and corporate events.", icon: Mic },
  { num: "02", title: "Master Class", desc: "In-depth workshops on digital branding, marketing and strategy.", icon: GraduationCap },
  { num: "03", title: "Guest Sessions", desc: "B-School lectures, panel discussions and academic sessions.", icon: Users },
  { num: "04", title: "Other", desc: "Consulting, collaboration, mentoring or any other inquiry.", icon: Sparkles },
];

export default function BookYourTimePage() {
  return (
    <>
      <PageHeader
        label="Book Your Time"
        title="Let's"
        accent="connect."
        subtitle="Tell us a little about your event, audience or idea - and we'll be in touch within one working day."
      />

      <section className="section-y border-b border-line">
        <div className="container-x">
          {/* Types */}
          <Reveal><p className="eyebrow mb-8">What are you looking for?</p></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {TYPES.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="group h-full rounded-2xl bg-paper-2 border border-line p-7 card-lift hover:border-saffron/40 cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="display text-[40px] text-ink/25 group-hover:text-saffron transition-colors">{t.num}</span>
                    <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-saffron/10 text-saffron group-hover:bg-saffron group-hover:text-ink transition-colors">
                      <t.icon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-ink text-[17px] font-semibold mb-2 group-hover:text-saffron transition-colors">{t.title}</h3>
                  <p className="text-ink/55 text-[13px] leading-[1.55]">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact + Form */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <Reveal>
                <h3 className="display text-[clamp(28px,2.5vw,36px)] text-ink mb-10">Get in touch.</h3>
              </Reveal>
              <div className="space-y-7">
                <Reveal delay={80}>
                  <a href="mailto:deepak@digitallynext.com" className="group flex items-start gap-4">
                    <span className="w-11 h-11 rounded-full bg-paper-2 border border-line flex items-center justify-center shrink-0 group-hover:bg-saffron group-hover:border-saffron group-hover:text-ink transition-colors">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="eyebrow !text-[11px] mb-1">Email</p>
                      <p className="text-ink text-[14px] group-hover:text-saffron transition-colors">deepak@digitallynext.com</p>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={140}>
                  <a href="https://wa.me/919810409943" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <span className="w-11 h-11 rounded-full bg-paper-2 border border-line flex items-center justify-center shrink-0 group-hover:bg-saffron group-hover:border-saffron group-hover:text-ink transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="eyebrow !text-[11px] mb-1">WhatsApp</p>
                      <p className="text-ink text-[14px] group-hover:text-saffron transition-colors">+91 98104 09943</p>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={200}>
                  <div className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-full bg-paper-2 border border-line flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-ink/65" />
                    </span>
                    <div>
                      <p className="eyebrow !text-[11px] mb-1">Office</p>
                      <p className="text-ink/70 text-[14px] leading-[1.6]">
                        DigitallyNext · iMET Global<br />
                        Business India Complex, Uday Park,<br />
                        Adjacent to August Kranti Marg,<br />
                        Behind South Ex-II, Delhi 110049
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={300}>
                <div className="mt-10">
                  <p className="eyebrow !text-[11px] mb-4">Connect Online</p>
                  <div className="flex gap-2">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink/60 hover:text-ink hover:bg-saffron hover:border-saffron transition-all"
                      >
                        <s.icon className="w-[14px] h-[14px]" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>

            <Reveal className="lg:col-span-8" delay={120}>
              <div className="rounded-2xl bg-paper-2 border border-line p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute -top-32 -right-20 w-[320px] h-[320px] rounded-full bg-saffron/8 blur-[100px] pointer-events-none float-slow" />
                <div className="relative">
                  <h3 className="display text-[clamp(24px,2vw,32px)] text-ink mb-2">Book an appointment.</h3>
                  <p className="text-ink/55 text-[14px] mb-10">Fill out the details below and we&apos;ll get back to you shortly.</p>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="name" label="Full Name *" required>
                        <input type="text" id="name" required placeholder="Your full name" className="form-input" />
                      </Field>
                      <Field id="email" label="Email *" required>
                        <input type="email" id="email" required placeholder="your@email.com" className="form-input" />
                      </Field>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="phone" label="Phone">
                        <input type="tel" id="phone" placeholder="+91-XXXXXXXXXX" className="form-input" />
                      </Field>
                      <Field id="org" label="Organization">
                        <input type="text" id="org" placeholder="Company / Institution" className="form-input" />
                      </Field>
                    </div>
                    <Field id="type" label="Appointment Type *" required>
                      <select id="type" required className="form-input">
                        <option value="">Select a type</option>
                        <option value="keynote">Keynote Speaking</option>
                        <option value="masterclass">Master Class</option>
                        <option value="guest">Guest Session</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>
                    <Field id="message" label="Message *" required>
                      <textarea id="message" rows={4} required placeholder="Tell us about your event, preferred date, audience size..." className="form-input resize-none" />
                    </Field>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-saffron text-ink text-[14px] font-semibold hover:bg-saffron-2 transition-colors"
                    >
                      Send Request
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-ink text-saffron group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-ink/55 text-[11px] uppercase tracking-[0.22em] font-semibold mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
