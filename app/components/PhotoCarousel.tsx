"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { eventPhotos } from "../data/content";

// The photos sit side by side in a strip that scrolls sideways and snaps to
// each photo. On a phone a swipe therefore follows the finger and settles
// with the system's own momentum; the arrows, the small pictures and the arrow
// keys scroll the same strip.
export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const settled = useRef<ReturnType<typeof setTimeout> | null>(null);
  // True while an arrow, small picture or key is scrolling the strip to a
  // chosen photo.
  const jumping = useRef(false);
  const event = eventPhotos[index];

  useEffect(
    () => () => {
      cancelAnimationFrame(frame.current);
      if (settled.current) clearTimeout(settled.current);
    },
    [],
  );

  function show(target: number) {
    const strip = track.current;
    if (!strip) return;
    const next = (target + eventPhotos.length) % eventPhotos.length;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Name the destination straight away, so the caption changes once even if
    // the strip passes other photos on the way.
    jumping.current = true;
    setIndex(next);
    strip.scrollTo({
      left: next * strip.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  function follow() {
    const strip = track.current;
    if (!strip || !strip.clientWidth) return;
    // Whichever photo covers most of the frame is the current one.
    const current = Math.round(strip.scrollLeft / strip.clientWidth);
    setIndex(Math.max(0, Math.min(eventPhotos.length - 1, current)));
  }

  function onScroll() {
    // Scrolling has stopped once no scroll event arrives for a moment.
    if (settled.current) clearTimeout(settled.current);
    settled.current = setTimeout(() => {
      jumping.current = false;
      follow();
    }, 140);
    if (jumping.current) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(follow);
  }

  return (
    <div
      className="site-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Events and conversations"
      tabIndex={0}
      data-reveal
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          show(index - 1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          show(index + 1);
        }
      }}
    >
      <div className="site-carousel-image">
        <div
          className="site-carousel-track"
          ref={track}
          onScroll={onScroll}
          tabIndex={-1}
        >
          {eventPhotos.map((photo, i) => (
            <div
              className="site-carousel-slide"
              key={photo.id}
              aria-hidden={i !== index}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 800px) 100vw, 65vw"
                className={photo.id === "brics-gathering" ? "site-contain" : ""}
              />
            </div>
          ))}
        </div>
        <div className="site-carousel-counter" aria-hidden="true">
          <b key={index}>0{index + 1}</b> <span>/ 0{eventPhotos.length}</span>
        </div>
      </div>
      <div className="site-carousel-copy">
        <div aria-live="polite" aria-atomic="true">
          {/* The key makes the caption re-enter each time the photo changes. */}
          <div className="site-carousel-caption" key={event.id}>
            <p className="site-caption">{event.date}</p>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <a
              className="site-source"
              href={event.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              {event.sourceLabel} ↗
            </a>
          </div>
        </div>
        <div className="site-carousel-controls">
          {/* Small pictures of every photo: they show what else is here and
              jump straight to it. */}
          <div className="site-carousel-thumbs">
            {eventPhotos.map((photo, i) => (
              <button
                key={photo.id}
                onClick={() => show(i)}
                aria-label={`Show photo ${i + 1}: ${photo.title}`}
                aria-current={i === index ? "true" : undefined}
              >
                <Image
                  src={photo.image}
                  alt=""
                  width={96}
                  height={72}
                  sizes="96px"
                />
              </button>
            ))}
          </div>
          <div className="site-carousel-arrows">
            <button
              onClick={() => show(index - 1)}
              aria-label="Previous event photo"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => show(index + 1)}
              aria-label="Next event photo"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
