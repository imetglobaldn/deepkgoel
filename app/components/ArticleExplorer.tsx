"use client";
import { useDeferredValue, useState, ViewTransition } from "react";
import { Search } from "lucide-react";
import { articles } from "../data/content";
import { ArticleCard } from "./UI";
export default function ArticleExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  // The buttons and the search box respond at once; the list follows a moment
  // behind. React treats that catch-up as a transition, which is what lets
  // the cards below glide, fade in and fade out instead of jumping.
  const shownQuery = useDeferredValue(query);
  const shownCategory = useDeferredValue(category);
  const categories = ["All", ...new Set(articles.map((item) => item.category))];
  // Search what the cards show (the rewritten title and excerpt) as well as the
  // original title and excerpt, so either wording finds the article.
  const search = shownQuery.trim().toLowerCase();
  const filtered = articles.filter(
    (item) =>
      (shownCategory === "All" || item.category === shownCategory) &&
      [
        item.displayTitle,
        item.shortExcerpt,
        item.title,
        item.excerpt,
        item.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search),
  );
  return (
    <>
      <div className="site-explorer-toolbar" data-reveal>
        <div className="site-filter-list" aria-label="Filter articles by topic">
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="site-search">
          <Search size={18} />
          <span className="site-sr-only">Search writing</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Find a thought…"
          />
        </label>
      </div>
      <p className="site-result-count" role="status">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>
      <div className="site-grid-three">
        {filtered.map((article) => (
          <ViewTransition
            key={article.slug}
            enter="card-in"
            exit="card-out"
            update="card-move"
            default="none"
          >
            <ArticleCard article={article} />
          </ViewTransition>
        ))}
      </div>
      {!filtered.length && (
        <ViewTransition enter="card-in" exit="card-out" default="none">
          <div className="site-empty">
            <h3>No articles found.</h3>
            <p>Try a different word or explore the full archive.</p>
            <button
              className="site-button site-button-dark"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        </ViewTransition>
      )}
    </>
  );
}
