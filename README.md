# WriteNow Media — Astro + Keystatic

Research-and-writing services site. Static, fast, CMS-editable.

## Stack
- **Astro 5** — static site, content collections
- **Keystatic** — git-based CMS at `/keystatic` (add successes, services, posts without touching code)
- **Netlify or Cloudflare Pages** — free hosting; the contact form uses Netlify Forms out of the box

## Run locally
```bash
npm install
npm run dev
# Site:  http://localhost:4321
# CMS:   http://localhost:4321/keystatic
```

## Content model (all editable in the CMS)
| Collection | Purpose | Key fields |
|---|---|---|
| Services | One page per service | title, tagline, order, deliverables, body |
| Successes | Case studies / portfolio | client, service, year, outcome, featured, body |
| Posts | Blog ("Notes") | title, pubDate, excerpt, body |

Adding a success in Keystatic creates a markdown file, commits it, and the
site rebuilds — no database, no server to maintain.

## Going live
1. Push to GitHub.
2. Connect the repo to Netlify (build: `npm run build`, publish: `dist`).
3. In `keystatic.config.ts`, switch storage to
   `{ kind: 'github', repo: 'yourname/writenow-media' }` so you can edit
   from writenow.media/keystatic on any device.
4. Point the writenow.media domain at the host.

## To do before launch
- Replace placeholder bio on `/about` and sample successes/posts
- Set the real Substack URL (homepage + settings singleton)
- Add analytics (Plausible/Fathom — one script tag in `src/layouts/Base.astro`)
- Optional: Cal.com booking embed on `/contact`
- Add OG image at `public/og.png`
# writenow
