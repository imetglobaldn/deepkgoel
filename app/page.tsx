import type { Metadata } from "next";
import Image from "next/image";
import {
  ArticleCard,
  Button,
  ExpertiseCards,
  Institutions,
  Portrait,
  Statistics,
  Surface,
  VennStrip,
  Ventures,
} from "./components/UI";
import { articles } from "./data/content";
import PageTransition from "./components/PageTransition";

// The title, description and sharing tags come from the root layout.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <PageTransition>
      <section className="site-hero">
        <div className="site-hero-stage">
          <Image
            className="site-hero-background"
            src="/images/events/brics-stage.jpg"
            fill
            alt=""
            sizes="100vw"
            preload
          />
          <div className="site-hero-backdrop" />
          <Image
            className="site-hero-shadow"
            src="/images/hero-shadow.svg"
            width={700}
            height={830}
            alt=""
          />
          <Image
            className="site-hero-shadow-mobile"
            src="/images/hero-shadow-mobile.svg"
            width={568}
            height={748}
            alt=""
          />
          <Image
            className="site-hero-portrait"
            src="/images/hero-portrait.webp"
            width={740}
            height={925}
            alt="Deepak Goel"
            preload
            sizes="(max-width: 760px) 560px, 52vw"
          />
        </div>
        <div className="site-wrap site-hero-content">
          <h1>
            TURN EXPERTISE
            <br />
            INTO <span>IMPACT.</span>
          </h1>
          <div className="site-hero-statement">
            <p>
              Brand strategy. Business growth. Education. Build the clarity,
              confidence and capability to move forward.
            </p>
            <Button
              href="/book-your-time"
              icon={
                <Image
                  className="site-arrow"
                  src="/images/arrow-up-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              }
            >
              Build your next chapter
            </Button>
            <small>FOUNDER OF DIGITALLY NEXT, iMET GLOBAL &amp; iSoCIAL</small>
          </div>
        </div>
      </section>
      <VennStrip />
      <Surface>
        <div className="site-about-grid">
          <Portrait />
          <div className="site-stack" data-reveal>
            <h2>
              THE PERSON
              <br />
              BEHIND THE IDEAS.
            </h2>
            <h3 className="site-subtitle">Entrepreneur. Strategist. Mentor.</h3>
            <p>
              I work at the intersection of business, digital branding and
              education-helping ambitious people and organizations turn
              possibility into progress.
            </p>
            <p>
              My journey spans B2B marketing and business strategy across India,
              the US, Canada and Europe. Today, that experience connects
              Digitally Next, iMET Global and iSoCIAL.
            </p>
            <p className="site-small">
              Economics, University of Delhi · MBA, Symbiosis SCMHRD, Pune
            </p>
            <Button href="/about">More about Deepak</Button>
          </div>
        </div>
      </Surface>
      <Statistics />
      <Surface>
        <h2 data-reveal>
          Clarity before visibility.
          <br />
          Strategy before scale.
        </h2>
        <ExpertiseCards />
      </Surface>
      <Surface dark>
        <div className="site-section-head site-speaking-head">
          <h2 className="site-speaking-title" data-reveal>
            GOOD QUESTIONS.
            <br />
            BETTER CONVERSATIONS.
          </h2>
          <Button href="/book-your-time">Invite me to speak</Button>
        </div>
        <div className="site-speaking-photos">
          <Image
            src="/images/speaking.png"
            width={1200}
            height={733}
            sizes="(max-width: 760px) 100vw, 50vw"
            alt="Deepak Goel speaking at AIMA"
            data-reveal="zoom"
          />
          <Image
            src="/images/workshop.png"
            width={1200}
            height={733}
            sizes="(max-width: 760px) 100vw, 50vw"
            alt="Deepak in conversation with workshop participants"
            data-reveal="zoom"
          />
        </div>
        <Institutions />
      </Surface>
      <Ventures />
      <Surface>
        <h2 data-reveal>
          BUSINESS AMBITION.
          <br />
          HUMAN IMPACT.
        </h2>
        <p className="site-section-description" data-reveal>
          Three connected ways to turn experience into progress for people,
          organizations and communities.
        </p>
        <ExpertiseCards impactCards />
      </Surface>
      <Surface dark>
        <h2 data-reveal>
          LEARN SOMETHING.
          <br />
          MAKE SOMETHING HAPPEN.
        </h2>
        <div className="site-grid-three">
          {[0, 3, 4].map((i) => (
            <ArticleCard key={articles[i].slug} article={articles[i]} />
          ))}
        </div>
      </Surface>
    </PageTransition>
  );
}
