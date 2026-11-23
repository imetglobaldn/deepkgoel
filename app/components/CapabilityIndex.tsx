"use client";
import { useEffect, useState } from "react";

// The list of capabilities that stays beside the panels on the Expertise
// page. The one being read is highlighted, and each entry jumps to its panel.
export default function CapabilityIndex({ titles }: { titles: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const panels = titles
      .map((_, i) => document.getElementById(`capability-${i + 1}`))
      .filter((panel): panel is HTMLElement => panel !== null);
    // A panel counts as "being read" once it crosses the middle band of the
    // window.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            setCurrent(panels.indexOf(entry.target as HTMLElement));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, [titles]);

  return (
    <nav className="site-cap-index" aria-label="Capabilities">
      <ol>
        {titles.map((title, i) => (
          <li key={title}>
            <a
              href={`#capability-${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            >
              <span>0{i + 1}</span>
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
