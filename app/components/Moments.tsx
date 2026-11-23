import Image from "next/image";
import { moments } from "../data/content";

// A strip of event photos that drifts slowly from right to left and loops.
// The list is drawn twice, side by side, and the strip moves by exactly one
// copy's width, so the loop has no visible seam. Hovering pauses it. With
// reduced motion it stands still and can be scrolled sideways instead.
export default function Moments() {
  const strip = (copy: number) =>
    moments.map((photo) => (
      <li key={`${copy}-${photo.src}`}>
        <Image
          src={photo.src}
          alt={copy === 0 ? photo.alt : ""}
          width={photo.width}
          height={photo.height}
          // Each photo is shown at most 400px tall.
          sizes={`${Math.round((400 * photo.width) / photo.height)}px`}
        />
      </li>
    ));
  return (
    <div className="site-moments" data-reveal>
      <div className="site-moments-track">
        <ul aria-label="Moments from events and sessions">{strip(0)}</ul>
        {/* The second copy is only there to close the loop. */}
        <ul aria-hidden="true">{strip(1)}</ul>
      </div>
    </div>
  );
}
