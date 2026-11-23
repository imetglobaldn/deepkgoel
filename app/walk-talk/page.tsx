import Image from "next/image";
import PhotoCarousel from "../components/PhotoCarousel";
import VideoCard from "../components/VideoCard";
import { PageIntro, Surface } from "../components/UI";
import { MEDIA, VIDEOS, videoSources } from "../data/content";
import { pageMetadata } from "../data/site";

const intro =
  "On stage, in the room and out in the world. Perspectives on business, digital change and the way we learn.";

export const metadata = pageMetadata({
  title: "Media",
  description: intro,
  path: "/walk-talk",
});

export default function MediaPage() {
  return (
    <>
      <PageIntro title="GOOD QUESTIONS." accent="BETTER CONVERSATIONS.">
        {intro}
      </PageIntro>
      <Surface>
        <div className="site-section-head">
          <h2>RECENT CONVERSATIONS.</h2>
          <p>
            Verified event photographs and updates, alongside moments from the
            archive.
          </p>
        </div>
        <PhotoCarousel />
      </Surface>
      <Surface dark>
        <h2 data-reveal>WALK &amp; TALK.</h2>
        <div className="site-grid-three">
          {VIDEOS.map((video, i) => (
            <VideoCard
              key={video.title}
              title={video.title}
              description={video.desc}
              {...videoSources[i]}
            />
          ))}
        </div>
      </Surface>
      <Surface>
        <h2 data-reveal>IN THE PRESS.</h2>
        <p className="site-section-description">
          Coverage and clippings from the official archive.
        </p>
        <div className="site-press-grid">
          {MEDIA.map((item) => (
            <a
              className="site-press-card"
              href={item.image}
              target="_blank"
              rel="noreferrer"
              key={item.title}
              data-reveal
            >
              <div>
                <Image
                  src={item.image}
                  width={700}
                  height={500}
                  alt={`Press clipping: ${item.title}`}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <p className="site-caption">
                {item.source} · {item.date}
              </p>
              <h3>{item.title}</h3>
              <span className="site-source">Read clipping ↗</span>
            </a>
          ))}
        </div>
      </Surface>
    </>
  );
}
