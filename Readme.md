# Deepak Goel

One personal-brand website built with Next.js, React and TypeScript. The approved glass, yellow and editorial typography theme is served at the root URL.

## Run locally

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. To use another port, run `pnpm dev --port 3009`.

```sh
pnpm typecheck
pnpm build
pnpm start
```

Development uses `.next-dev`; production builds and `start` use the default `.next` (which Vercel expects), so a build does not overwrite a running development server. `NEXT_DIST_DIR` can override either location.

## Structure

- `app/`: the homepage, About, Expertise, Writing, article detail, Media, Quotes and Contact routes, plus `sitemap.ts` and `robots.ts`, which generate `/sitemap.xml` and `/robots.txt`.
- `app/components/`: shared layout, controls, carousel, enquiry form and Daily Thumbs Up widget.
- `app/data/`: shared content, complete article archive and source attribution. `site.ts` holds the site address and builds each page's title, description and sharing tags.
- `app/globals.css`: the site's single stylesheet; no theme switcher or versioned routes.
- `public/images/`: the images and SVG assets used by the site. `public/images/intro/` holds the faint pictures behind each inner page's heading; `introImages` in `app/data/content.ts` says which page uses which, and `app/data/sources.json` records where each came from.
- `public/social-card.jpg`: the 1200×630 image shown in link previews, rendered from the homepage hero.

## Motion

The site moves the way iOS does: quick presses, springy releases, and screens that slide and fade into one another. There is no animation library; everything is CSS plus a few small components.

- **Timings** live at the top of `app/globals.css`: `--ease-ios` (the curve iOS uses for sheets and navigation) and two springs, `--spring` and `--spring-bouncy`. Use these instead of inventing new easings.
- **Moving between pages** is handled by `app/components/PageTransition.tsx`, which wraps the content of every page. Pages cross-fade by default. A link that passes `transitionTypes={["nav-forward"]}` or `["nav-back"]` slides instead, which is how opening an article and returning from it work. An article's title also travels between its card and its page.
- **Blocks that appear as you scroll** carry a `data-reveal` attribute (`data-reveal="zoom"` grows in instead of rising). The script is `Motion` in `app/components/Chrome.tsx`; new sections only need the attribute.
- **Components with their own motion**: `PhotoCarousel` (a strip that scrolls and snaps, so a swipe follows the finger), `Disclosure` (the training lists that open and close; lists that share a `group` name keep only one open), `DailyThumbsUp` (springs open, fades shut) and `ArticleExplorer` (cards glide when filtered).
- **Layout that reacts to the screen**: on a desktop the photo gallery (`.site-gallery`) sizes its photo so the whole section fits one screen, and the heading column of a two-column section (`.site-editorial-grid`) stays in view while the longer column scrolls.

Everything respects the visitor's "reduce motion" setting. Page transitions and the hero's depth effect need a recent browser; older ones simply skip them and the site works as before.

Daily Thumbs Up rotates seven curated quotes Monday through Sunday in the visitor's local timezone. It opens automatically once per day per tab session, collapses after six seconds, pauses while hovered or focused, and reopens from its icon. Contact enquiries prepare email or WhatsApp drafts for the visitor to send.

Content provenance and research limitations are recorded in `app/data/sources.json`. No live social-media scraping or message sending happens in the app.
