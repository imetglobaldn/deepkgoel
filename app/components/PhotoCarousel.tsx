"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { eventPhotos } from "../data/content";

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const start = useRef<number | null>(null);
  const event = eventPhotos[index];
  function move(amount: number) {
    setIndex(
      (current) => (current + amount + eventPhotos.length) % eventPhotos.length,
    );
  }
  return (
    <div
      className="site-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Events and conversations"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          move(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          move(1);
        }
      }}
    >
      <div
        className="site-carousel-image"
        onTouchStart={(e) => {
          start.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (
            start.current !== null &&
            Math.abs(e.changedTouches[0].clientX - start.current) > 45
          )
            move(e.changedTouches[0].clientX < start.current ? 1 : -1);
          start.current = null;
        }}
      >
        <Image
          key={event.image}
          src={event.image}
          alt={event.alt}
          fill
          sizes="(max-width: 800px) 100vw, 65vw"
          className={event.id === "brics-gathering" ? "site-contain" : ""}
        />
        <div className="site-carousel-counter">
          0{index + 1} <span>/ 0{eventPhotos.length}</span>
        </div>
      </div>
      <div className="site-carousel-copy">
        <div aria-live="polite" aria-atomic="true">
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
        <div className="site-carousel-controls">
          <button onClick={() => move(-1)} aria-label="Previous event photo">
            <ArrowLeft size={20} />
          </button>
          <div className="site-carousel-dots">
            {eventPhotos.map((photo, i) => (
              <button
                key={photo.id}
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}: ${photo.title}`}
                aria-current={i === index ? "true" : undefined}
              >
                <span />
              </button>
            ))}
          </div>
          <button onClick={() => move(1)} aria-label="Next event photo">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
