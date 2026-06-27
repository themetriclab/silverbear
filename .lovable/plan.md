## Goal

Fix the mismatch where Google shows "Polar Bear & Moose Photography Tours in Canada" instead of the Silver Bear brand title. The cause is the static `index.html` head, which Google indexes before JavaScript runs — it still carries the old keyword title.

## Changes

Edit `index.html` `<head>` only. Replace the old title across all related tags with the brand title and matching description.

- `<title>` → `Silver Bear Photo Tours | Guided Wildlife Photography Tours in Canada`
- `<meta name="description">` → `Guided, small-group wildlife photography tours across Canada — photograph polar bears in Churchill, moose in Algonquin Park, loons and more with expert guide Erik Bertelsen.`
- `<meta property="og:title">` → brand title
- `<meta name="twitter:title">` → brand title
- `<meta property="og:description">` → matching description
- `<meta name="twitter:description">` → matching description

This makes the static head match what `Index.tsx`'s `Seo.tsx` already sets client-side, so there is one consistent title for crawlers.

## What this does NOT fix immediately

- **Search result update timing:** Google serves results from its cache. The corrected title won't appear in search until Google re-crawls. You can speed this up by requesting indexing for the homepage in Google Search Console.
- **Favicon in search:** Your live favicon (`public/favicon.png`, the iceberg/polar-bear logo) is already correct. Google caches favicons separately and on a slow schedule; it will refresh on its next crawl. No code change can force this.

## Technical notes

- `<link rel="canonical">` is not in `index.html` (it's handled per-route by `Seo.tsx`), so no canonical conflict is introduced.
- The sitewide `og:*` tags stay in `index.html` as the fallback for non-JS social crawlers — only their text values change.
- No changes to React components, routing, or the favicon file are needed.
