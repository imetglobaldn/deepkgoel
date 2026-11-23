"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
export default function VideoCard({
  title,
  description,
  id,
  start,
}: {
  title: string;
  description: string;
  id: string;
  start: number;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <article className="site-video-card" data-reveal>
      <div className="site-video-stage">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?start=${start}&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={`/images/videos/${id}.jpg`}
              fill
              sizes="(max-width: 760px) 100vw, 33vw"
              alt=""
            />
            <button
              onClick={() => setPlaying(true)}
              aria-label={`Play: ${title}`}
            >
              <Play size={28} fill="currentColor" />
              <span>Watch conversation</span>
            </button>
          </>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
