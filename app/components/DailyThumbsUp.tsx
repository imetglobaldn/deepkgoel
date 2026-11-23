"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Pin, ThumbsUp, X } from "lucide-react";
import { weekdays, weeklyQuotes } from "../data/content";

// Stable Mon–Sun schedule in the visitor's local timezone; repeats every week.
export function quoteIndex(date: Date) {
  return (date.getDay() + 6) % 7;
}
export default function DailyThumbsUp() {
  const pathname = usePathname();
  const [visibility, setVisibility] = useState<{
    pathname: string;
    visible: boolean;
  } | null>(null);
  const visible = visibility?.pathname === pathname && visibility.visible;
  const [day, setDay] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [autoHide, setAutoHide] = useState(true);
  const trigger = useRef<HTMLButtonElement>(null);
  const deadline = useRef(0);
  const remaining = useRef(6000);
  const show = useCallback(() => {
    remaining.current = 6000;
    setPaused(false);
    setAutoHide(true);
    setOpen(true);
  }, []);
  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    setPaused(false);
    if (restoreFocus) trigger.current?.focus();
  }, []);
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(
      ".site-hero, .site-page-intro, .site-reader-intro",
    );
    const updateVisibility = () => {
      const bounds = hero?.getBoundingClientRect();
      const outsideHero =
        !bounds || bounds.bottom <= 0 || bounds.top >= window.innerHeight;
      setVisibility((current) =>
        current?.pathname === pathname && current.visible === outsideHero
          ? current
          : { pathname, visible: outsideHero },
      );
      if (!outsideHero) close();
    };
    // Stay hidden through hydration and route changes until visibility is known.
    const frame = requestAnimationFrame(updateVisibility);
    if (hero && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(updateVisibility, {
        threshold: 0,
      });
      observer.observe(hero);
      return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
      };
    }
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname, close]);
  useEffect(() => {
    let midnight: ReturnType<typeof setTimeout>;
    let opening: ReturnType<typeof setTimeout>;
    function sync() {
      const now = new Date();
      setDay(quoteIndex(now));
      const key = `site-quote-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
      let seen = false;
      try {
        seen = sessionStorage.getItem(key) === "seen";
      } catch {
        /* Still works with storage disabled. */
      }
      clearTimeout(opening);
      if (!seen && visible)
        opening = setTimeout(() => {
          // Mark a view only when it opens, after React's effect cleanup/replay.
          try {
            sessionStorage.setItem(key, "seen");
          } catch {
            /* Optional persistence. */
          }
          show();
        }, 1200);
      const next = new Date(now);
      next.setHours(24, 0, 0, 50);
      clearTimeout(midnight);
      midnight = setTimeout(sync, next.getTime() - now.getTime());
    }
    sync();
    const onVisibility = () => {
      if (document.visibilityState === "visible") sync();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimeout(midnight);
      clearTimeout(opening);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [show, visible]);
  useEffect(() => {
    if (!visible || !open || paused || !autoHide) return;
    deadline.current = Date.now() + remaining.current;
    const timer = setTimeout(() => close(), remaining.current);
    return () => {
      clearTimeout(timer);
      remaining.current = Math.max(0, deadline.current - Date.now());
    };
  }, [visible, open, paused, autoHide, close]);
  const quote = weeklyQuotes[day];
  // The widget and its panel stay in the page the whole time and are shown
  // or hidden with classes, so both can animate in and out (see globals.css).
  return (
    <aside
      className={`site-daily-widget${visible ? "" : " is-hidden"}${open ? " is-open" : ""}`}
      aria-label="Daily Thumbs Up"
      onKeyDown={(e) => {
        if (e.key === "Escape") close(true);
      }}
    >
      <div
        className={`site-daily-panel${autoHide ? "" : " is-pinned"}`}
        id="site-daily-quote"
        role="region"
        aria-labelledby="site-quote-title"
        // Closed, the panel cannot be reached by keyboard or screen reader.
        inert={!open}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        }}
      >
        <div className="site-daily-heading">
          <span className="site-daily-badge" aria-hidden="true">
            <ThumbsUp size={18} />
          </span>
          <p className="site-daily-title">
            <span id="site-quote-title">DAILY THUMBS UP</span>
            <span className="site-daily-day">
              {weekdays[day]} · {quote.theme}
            </span>
          </p>
          <button aria-label="Close daily quote" onClick={() => close(true)}>
            <X size={16} />
          </button>
        </div>
        <blockquote>{quote.quote}</blockquote>
        <p className="site-daily-author">Deepak Goel</p>
        {/* The divider doubles as the countdown to the automatic close. */}
        <div className="site-quote-timer" aria-hidden="true">
          <span
            style={{
              animationPlayState: paused || !autoHide ? "paused" : "running",
            }}
          />
        </div>
        <div className="site-daily-links">
          <Link href="/daily-thumbs-up" onClick={() => close()}>
            All seven thoughts
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            onClick={() => setAutoHide(!autoHide)}
            aria-pressed={!autoHide}
          >
            <Pin size={13} aria-hidden="true" />
            Keep open
          </button>
        </div>
      </div>
      <button
        ref={trigger}
        className="site-daily-trigger"
        aria-label={
          open ? "Close daily thought" : "Open today’s Daily Thumbs Up quote"
        }
        aria-expanded={open}
        aria-controls="site-daily-quote"
        onClick={() => (open ? close() : show())}
      >
        <ThumbsUp size={22} />
        <span>Daily Thumbs Up</span>
      </button>
    </aside>
  );
}
