"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { articles } from "../data/content";
import { ArticleCard } from "./UI";
export default function ArticleExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(articles.map((item) => item.category))];
  // Search what the cards show (the rewritten title and excerpt) as well as the
  // original title and excerpt, so either wording finds the article.
  const search = query.trim().toLowerCase();
  const filtered = articles.filter(
    (item) =>
      (category === "All" || item.category === category) &&
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
      <div className="site-explorer-toolbar">
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
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {!filtered.length && (
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
      )}
    </>
  );
}
