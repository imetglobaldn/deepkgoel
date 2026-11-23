import PhotoCarousel from "../components/PhotoCarousel";
import {
  Button,
  PageIntro,
  Portrait,
  Statistics,
  Surface,
  Ventures,
} from "../components/UI";
import {
  CAREER,
  EDUCATION,
  introImages,
  socialLinks,
} from "../data/content";
import { pageMetadata } from "../data/site";
import PageTransition from "../components/PageTransition";

const intro =
  "Entrepreneur. Strategist. Mentor. Connecting business ambition with the people who make it happen.";

export const metadata = pageMetadata({
  title: "About",
  description: intro,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageTransition>
      <PageIntro
        title="THE PERSON"
        accent="BEHIND THE IDEAS."
        image={introImages.about}
      >
        {intro}
      </PageIntro>
      <Surface>
        <div className="site-about-grid">
          <Portrait eager />
          <div className="site-stack" data-reveal>
            <h2>
              Curious by nature.
              <br />A builder by choice.
            </h2>
            <p>
              I work where brand strategy, business growth and practical
              learning meet. My journey spans international B2B marketing,
              business development and professional education.
            </p>
            <p>
              From India to the US, Canada and Europe, that experience has
              shaped one belief: progress starts with a clear perspective-and
              becomes real through people.
            </p>
            <p>
              Today, I connect that work through Digitally Next, iMET Global and
              iSoCIAL.
            </p>
            <div className="site-social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </Surface>
      <Statistics />
      <Surface className="site-gallery">
        <div className="site-section-head">
          <h2 data-reveal>
            OUT IN THE WORLD.
            <br />
            OPEN TO WHAT’S NEXT.
          </h2>
          <p data-reveal>
            Recent gatherings, shared ideas and moments from the archive.
          </p>
        </div>
        <PhotoCarousel />
      </Surface>
      <Surface dark>
        <div className="site-editorial-grid">
          <div>
            <h2 data-reveal>
              EXPERIENCE
              <br />
              THAT CONNECTS.
            </h2>
            <p className="site-section-description" data-reveal>
              A journey across technology, business and people.
            </p>
          </div>
          <div className="site-timeline">
            {CAREER.map((role, i) => (
              <article key={role.company} data-reveal>
                <span>0{i + 1}</span>
                <div>
                  <h3>{role.company}</h3>
                  <p>{role.role}</p>
                </div>
                {role.current && <small>Current</small>}
              </article>
            ))}
          </div>
        </div>
      </Surface>
      <Surface>
        <div className="site-editorial-grid">
          <div>
            <h2 data-reveal>
              ALWAYS
              <br />A STUDENT.
            </h2>
            <p className="site-section-description" data-reveal>
              The foundations. And a commitment to keep learning.
            </p>
            <Button href="/expertise" dark>
              Explore the work
            </Button>
          </div>
          <div className="site-education">
            {EDUCATION.map((item) => (
              <article key={item.degree} data-reveal>
                <span className="site-caption">{item.year}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </article>
            ))}
          </div>
        </div>
      </Surface>
      <Ventures />
    </PageTransition>
  );
}
