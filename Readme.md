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

Development uses `.next-dev`; production builds and `start` use `.next-build`, so a build does not overwrite a running development server. `NEXT_DIST_DIR` can override either location.

## Structure

- `app/`: the homepage, About, Expertise, Writing, article detail, Media, Quotes and Contact routes, plus `sitemap.ts` and `robots.ts`, which generate `/sitemap.xml` and `/robots.txt`.
- `app/components/`: shared layout, controls, carousel, enquiry form and Daily Thumbs Up widget.
- `app/data/`: shared content, complete article archive and source attribution. `site.ts` holds the site address and builds each page's title, description and sharing tags.
- `app/globals.css`: the site's single stylesheet; no theme switcher or versioned routes.
- `public/images/`: the images and SVG assets used by the site.
- `public/social-card.jpg`: the 1200×630 image shown in link previews, rendered from the homepage hero.

Daily Thumbs Up rotates seven curated quotes Monday through Sunday in the visitor's local timezone. It opens automatically once per day per tab session, collapses after six seconds, pauses while hovered or focused, and reopens from its icon. Contact enquiries prepare email or WhatsApp drafts for the visitor to send.

Content provenance and research limitations are recorded in `app/data/sources.json`. No live social-media scraping or message sending happens in the app.
