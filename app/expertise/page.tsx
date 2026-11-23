import Image from "next/image";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Headset,
  MonitorPlay,
  RadioTower,
} from "lucide-react";
import CapabilityIndex from "../components/CapabilityIndex";
import Disclosure from "../components/Disclosure";
import {
  Button,
  Institutions,
  PageIntro,
  Surface,
  TextLink,
} from "../components/UI";
import {
  capabilities,
  INDUSTRIES,
  introImages,
  TRAINING,
} from "../data/content";
import { pageMetadata } from "../data/site";
import PageTransition from "../components/PageTransition";

const intro =
  "A practical perspective on brands, business and people. Built around the decisions that move you forward.";

export const metadata = pageMetadata({
  title: "Expertise",
  description: intro,
  path: "/expertise",
});

// One icon per industry, in the order of INDUSTRIES.
const industryIcons = [
  MonitorPlay,
  GraduationCap,
  Headset,
  Code2,
  Briefcase,
  RadioTower,
];

export default function ExpertisePage() {
  return (
    <PageTransition>
      <PageIntro
        title="CLARITY FIRST."
        accent="THEN, PROGRESS."
        image={introImages.expertise}
      >
        {intro}
      </PageIntro>
      <Surface className="site-cap-section">
        <div className="site-section-head">
          <h2 data-reveal>
            WHERE I
            <br />
            CAN HELP.
          </h2>
          <p data-reveal>
            Four ways to work together, from brand and growth strategy to
            learning programs and the stage.
          </p>
        </div>
        <div className="site-cap-layout">
          <CapabilityIndex titles={capabilities.map((item) => item.title)} />
          <div className="site-cap-panels">
            {capabilities.map((item, i) => (
              <article
                id={`capability-${i + 1}`}
                className="site-glass site-cap-panel"
                key={item.title}
                data-reveal
              >
                <div className="site-cap-photo">
                  <Image
                    src={item.photo}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 62vw"
                  />
                  <span className="site-cap-number" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <div className="site-cap-body">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <ul className="site-cap-topics">
                      {item.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                    <TextLink
                      href={`/book-your-time?interest=${encodeURIComponent(i === 3 ? "Keynote Speaking" : "Other")}`}
                    >
                      Start a conversation
                    </TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Surface>
      <Surface dark>
        <div className="site-section-head">
          <h2 data-reveal>
            DIFFERENT INDUSTRIES.
            <br />
            CONNECTED THINKING.
          </h2>
          <p data-reveal>
            Experience built across the sectors where digital change moves
            fastest.
          </p>
        </div>
        <ul className="site-industry-tiles">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industryIcons[i];
            return (
              <li key={industry} className="site-glass" data-reveal>
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>0{i + 1}</span>
                <h3>{industry}</h3>
              </li>
            );
          })}
        </ul>
        <Institutions />
      </Surface>
      <Surface>
        <div className="site-editorial-grid">
          <div>
            <h2 data-reveal>
              LEARNING
              <br />
              THAT LEADS
              <br />
              TO ACTION.
            </h2>
            <p className="site-section-description" data-reveal>
              Workshops and master classes shaped around real professional
              challenges.
            </p>
            <Button href="/book-your-time?interest=Master%20Class" dark>
              Plan a master class
            </Button>
          </div>
          <div className="site-training">
            {[
              {
                title: "Leadership & communication",
                items: [TRAINING[1], TRAINING[4], TRAINING[11], TRAINING[0]],
              },
              {
                title: "Marketing & business growth",
                items: [
                  TRAINING[3],
                  TRAINING[6],
                  TRAINING[7],
                  TRAINING[9],
                  TRAINING[10],
                ],
              },
              {
                title: "Entrepreneurship & industry readiness",
                items: [TRAINING[12], TRAINING[13], TRAINING[14], TRAINING[5]],
              },
            ].map((group, i) => (
              <Disclosure
                key={group.title}
                title={group.title}
                defaultOpen={i === 0}
                group="training"
              >
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Disclosure>
            ))}
          </div>
        </div>
      </Surface>
    </PageTransition>
  );
}
