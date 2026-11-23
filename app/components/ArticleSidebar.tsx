"use client";

import { Check, Link2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ArticleSection } from "../data/articles";

export default function ArticleSidebar({
  sections,
  title,
  url,
}: {
  sections: ArticleSection[];
  title: string;
  url: string;
}) {
  const [active, setActive] = useState("overview");
  const [copyStatus, setCopyStatus] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const targets = sections.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      let current = sections[0].id;
      for (let i = 0; i < targets.length; i++) {
        if (targets[i] && targets[i]!.getBoundingClientRect().top <= 160) {
          current = sections[i].id;
        }
      }
      setActive(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActive);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections]);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  async function copyLink() {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        copied = true;
      }
    } catch {
      // Local phone previews use HTTP, where the Clipboard API may be unavailable.
    }
    if (!copied) {
      const previousFocus = document.activeElement as HTMLElement | null;
      const field = document.createElement("textarea");
      field.value = url;
      field.readOnly = true;
      field.className = "site-copy-buffer";
      document.body.appendChild(field);
      field.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      } finally {
        field.remove();
        previousFocus?.focus({ preventScroll: true });
      }
    }
    setCopyStatus(
      copied
        ? "Link copied"
        : "Could not copy. Copy the address from your browser.",
    );
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyStatus(""), 4000);
  }

  return (
    <aside className="site-reader-sidebar" aria-label="Article tools">
      <div className="site-reader-tools">
        <nav aria-label="On this page">
          <h2 className="site-reader-tools-title">ON THIS PAGE</h2>
          <ol className="site-reader-contents">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="site-reader-share">
          <h2 className="site-reader-tools-title">SHARE ARTICLE</h2>
          <div className="site-reader-share-actions">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share article on LinkedIn (opens in a new tab)"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share article on X (opens in a new tab)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy article link"
            >
              {copyStatus === "Link copied" ? (
                <Check size={22} className="site-pop" />
              ) : (
                <Link2 size={22} />
              )}
            </button>
          </div>
          <p className="site-reader-copy-status" role="status">
            {copyStatus}
          </p>
        </div>
      </div>
    </aside>
  );
}
