"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navigation } from "../data/content";
import { Button, Footer, Invitation, Logo } from "./UI";

// The page the visitor first landed on: `undefined` until the site has loaded
// in the browser, `null` once they have moved to another page.
let landingPath: string | null | undefined;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const [scrollState, setScrollState] = useState({
    pathname,
    hidden: false,
    scrolled: false,
  });

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let directionStartY = previousY;
    let direction = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      // Clamp elastic overscroll so bouncing at either end cannot hide the nav.
      const maxY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const y = Math.min(maxY, Math.max(0, window.scrollY));
      const delta = y - previousY;
      const nextDirection = delta === 0 ? direction : Math.sign(delta);
      if (nextDirection !== direction) {
        directionStartY = previousY;
        direction = nextDirection;
      }
      const nearTop = y <= (header.current?.offsetHeight ?? 100);
      const focused =
        header.current?.contains(document.activeElement) &&
        document.activeElement?.matches(":focus-visible");
      setScrollState((current) => {
        const samePage = current.pathname === pathname;
        const hidden =
          nearTop || open || focused
            ? false
            : Math.abs(y - directionStartY) >= 8
              ? direction > 0
              : samePage && current.hidden;
        const scrolled = !nearTop;
        return samePage &&
          current.hidden === hidden &&
          current.scrolled === scrolled
          ? current
          : { pathname, hidden, scrolled };
      });
      previousY = y;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname, open]);

  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header
      ref={header}
      className={`site-header site-header--hero${open ? " site-header--menu-open" : ""}${scrollState.pathname === pathname && scrollState.scrolled ? " is-scrolled" : ""}${scrollState.pathname === pathname && scrollState.hidden && !open ? " is-hidden" : ""}`}
      onFocusCapture={() =>
        setScrollState((current) =>
          current.hidden ? { ...current, hidden: false } : current,
        )
      }
    >
      <div className="site-wrap">
        <Logo />
        <button
          className="site-menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          ref={toggle}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
        <nav
          id="site-navigation"
          className={open ? "is-open" : ""}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <span onClick={() => setOpen(false)}>
            <Button href="/book-your-time">Let’s talk</Button>
          </span>
        </nav>
      </div>
    </header>
  );
}
export function PageEnd() {
  const path = usePathname();
  return (
    <>
      {path !== "/book-your-time" && <Invitation />}
      <Footer />
    </>
  );
}
export function Motion() {
  const path = usePathname();
  useEffect(() => {
    const invitation = document.querySelector<HTMLElement>(".site-talk");
    if (!invitation) return;

    // Visibility still updates with reduced motion; CSS removes the animation.
    if (!("IntersectionObserver" in window)) {
      invitation.classList.add("is-in-view");
      return () => invitation.classList.remove("is-in-view");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        invitation.classList.toggle(
          "is-in-view",
          entry.isIntersecting && entry.intersectionRatio >= 0.3,
        );
      },
      { threshold: 0.3 },
    );
    observer.observe(invitation);
    return () => {
      observer.disconnect();
      invitation.classList.remove("is-in-view");
    };
  }, [path]);
  // Pictures cannot be dragged. The stylesheet covers Chrome and Safari; this
  // covers Firefox, which ignores that CSS property.
  useEffect(() => {
    const stop = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement) event.preventDefault();
    };
    document.addEventListener("dragstart", stop);
    return () => document.removeEventListener("dragstart", stop);
  }, []);
  // Scroll reveal: blocks marked `data-reveal` fade and rise as they come into
  // view. A layout effect hides them before the browser paints a new page, so
  // nothing blinks.
  useLayoutEffect(() => {
    if (landingPath === undefined) landingPath = path;
    else if (landingPath !== path) landingPath = null;
    const firstLoad = landingPath === path;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".site [data-reveal]"),
    );
    const timers: ReturnType<typeof setTimeout>[] = [];
    const settle = (node: HTMLElement) => {
      node.classList.remove("site-reveal-ready", "is-visible");
      node.style.removeProperty("--reveal-delay");
    };
    const observer = new IntersectionObserver(
      (entries) => {
        // Blocks that arrive together appear one after another.
        let order = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          const delay = Math.min(order++, 5) * 80;
          node.style.setProperty("--reveal-delay", `${delay}ms`);
          node.classList.add("is-visible");
          observer.unobserve(node);
          // Once revealed, hand the block back to its own hover and press
          // transitions. Groups keep their classes: their children animate.
          if (node.dataset.reveal !== "group")
            timers.push(setTimeout(() => settle(node), delay + 1000));
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    for (const node of nodes) {
      // On the first load the server already painted what is on screen;
      // hiding it now would make it blink, so only later blocks animate.
      if (firstLoad && node.getBoundingClientRect().top < window.innerHeight)
        continue;
      node.classList.add("site-reveal-ready");
      observer.observe(node);
    }
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      nodes.forEach(settle);
    };
  }, [path]);
  return null;
}
