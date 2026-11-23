import { Button, Institutions, PageIntro, Surface } from "../components/UI";
import { capabilities, INDUSTRIES, TRAINING } from "../data/content";
import { pageMetadata } from "../data/site";

const intro =
  "A practical perspective on brands, business and people. Built around the decisions that move you forward.";

export const metadata = pageMetadata({
  title: "Expertise",
  description: intro,
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <PageIntro title="CLARITY FIRST." accent="THEN, PROGRESS.">
        {intro}
      </PageIntro>
      <Surface>
        <div className="site-capabilities">
          {capabilities.map((item, i) => (
            <article
              id={`capability-${i + 1}`}
              className="site-capability"
              key={item.title}
              data-reveal
            >
              <span className="site-number">0{i + 1}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div>
                <ul>
                  {item.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <Button
                  href={`/book-your-time?interest=${encodeURIComponent(i === 3 ? "Keynote Speaking" : "Other")}`}
                  dark
                >
                  Start a conversation
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Surface>
      <Surface dark>
        <h2 data-reveal>
          DIFFERENT INDUSTRIES.
          <br />
          CONNECTED THINKING.
        </h2>
        <div className="site-industries">
          {INDUSTRIES.map((industry, i) => (
            <div key={industry} data-reveal>
              <span>0{i + 1}</span>
              <h3>{industry}</h3>
            </div>
          ))}
        </div>
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
            <p className="site-section-description">
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
              <details key={group.title} open={i === 0}>
                <summary>
                  {group.title}
                  <span aria-hidden="true">+</span>
                </summary>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </Surface>
    </>
  );
}
