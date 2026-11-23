"use client";

import { useEffect, useRef } from "react";
import { stats } from "../data/content";

const DURATION = 1800;
const STAGGER = 60;

export default function StatisticsCounters() {
  const list = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const element = list.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !element ||
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const counters = Array.from(
      element.querySelectorAll<HTMLElement>("[data-count-value]"),
    ).map((node, index) => ({
      node,
      final: stats[index][0],
      target: Number.parseInt(stats[index][0], 10),
      suffix: stats[index][0].replace(/^\d+/, ""),
    }));
    let frame = 0;
    let started = false;
    let startTime: number | undefined;

    const finish = () => {
      started = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      counters.forEach(({ node, final }) => {
        node.textContent = final;
      });
    };

    const tick = (now: number) => {
      startTime ??= now;
      const elapsed = now - startTime;
      counters.forEach(({ node, target, suffix }, index) => {
        const progress = Math.min(
          1,
          Math.max(0, (elapsed - index * STAGGER) / DURATION),
        );
        const eased = 1 - (1 - progress) ** 3;
        const value = `${Math.floor(target * eased)}${suffix}`;
        if (node.textContent !== value) node.textContent = value;
      });
      if (elapsed < DURATION + (counters.length - 1) * STAGGER) {
        frame = window.requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (started || !entry.isIntersecting || entry.intersectionRatio < 0.3) {
          return;
        }
        started = true;
        observer.disconnect();
        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    // Keep the server-rendered totals for no-JS visitors and assistive technology.
    counters.forEach(({ node, suffix }) => {
      node.textContent = `0${suffix}`;
    });
    observer.observe(element);

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) finish();
    };
    reducedMotion.addEventListener("change", onMotionPreferenceChange);

    return () => {
      finish();
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return (
    <dl ref={list}>
      {stats.map(([value, label]) => (
        <div key={value} data-reveal>
          <dt>
            <span className="site-sr-only">{value}</span>
            <span data-count-value aria-hidden="true">
              {value}
            </span>
          </dt>
          <dd>{label}</dd>
        </div>
      ))}
    </dl>
  );
}
