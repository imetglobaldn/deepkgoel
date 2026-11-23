"use client";
import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { weekdays, weeklyQuotes } from "../data/content";
import { quoteIndex } from "./DailyThumbsUp";
export default function QuoteCollection() {
  const [day, setDay] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setDay(quoteIndex(new Date())), 0);
    return () => clearTimeout(timer);
  }, []);
  async function copy(id: string, quote: string) {
    try {
      await navigator.clipboard.writeText(`“${quote}” — Deepak Goel`);
      setCopied(id);
      setMessage("Quote copied.");
    } catch {
      setMessage("Please select the quote text to copy it.");
    }
  }
  return (
    <>
      <p className="site-section-description">
        One thought for each day. The same seven return every week—a small
        reminder to carry with you.
      </p>
      <div className="site-quotes-grid">
        {weeklyQuotes.map((quote, i) => (
          <article
            className={`site-glass site-quote-card ${day === i ? "is-today" : ""}`}
            key={quote.id}
          >
            <div className="site-quote-card-top">
              <span className="site-caption">
                {weekdays[i]}
                {day === i ? " · TODAY" : ""}
              </span>
              <button
                onClick={() => copy(quote.id, quote.quote)}
                aria-label={`Copy ${weekdays[i]} quote`}
              >
                {copied === quote.id ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <blockquote>“{quote.quote}”</blockquote>
            <p>— Deepak Goel</p>
            <a
              href={quote.sourceUrl}
              className="site-source"
              target="_blank"
              rel="noreferrer"
            >
              {quote.source} ↗
            </a>
          </article>
        ))}
      </div>
      <p className="site-sr-only" role="status">
        {message}
      </p>
    </>
  );
}
