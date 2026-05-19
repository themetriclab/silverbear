## Goal

Rank on page 1 (ideally top 3) of Google for:
- **polar bear photography tours / polar bear photo tours**
- **moose photography tours**

The current site is technically clean (sitemap, robots, JSON-LD, canonicals all in place from the last passes). What's missing now is **keyword-targeted content depth, dedicated landing pages, and richer structured data** — the things that actually move rankings.

> Honest note: SEO ranking is competitive and depends heavily on **backlinks and time** (Google needs weeks to months to re-crawl, re-rank). On-page work below maximizes your chance, but no agent can guarantee a #1 ranking. Off-page (links from photography blogs, guest posts, Instagram drive-throughs to the site, Google Business Profile) is the other half of the battle and lives outside the codebase.

---

## What I'll change

### 1. Dedicated "Moose Photography Tours" landing page
Right now moose is buried inside `/tours/algonquin-park-photography-tours`. Google can't rank you for "moose photography tours" without a page that owns the phrase.
- Add a new route `/tours/moose-photography-tours` that renders Algonquin tour data but with **moose-first** title, H1, subtitle, description, and meta — e.g. H1: "Moose Photography Tours in Algonquin Park, Ontario".
- Keep the Algonquin page as-is (don't break existing links / sitemap entries).
- Both pages point to the same booking flow; canonical on the new page = the new URL.

### 2. Tighten the Polar Bear page for its target phrase
- H1 currently is the long tour title. Add a keyword-rich H1: "Polar Bear Photography Tours in Churchill, Manitoba".
- Rewrite first 150 words of the description to lead with **"polar bear photography tours"** naturally 2–3 times.
- Add 4–6 internal anchor links from home, footer, and other tour pages using the anchor text "polar bear photography tours" and "moose photography tours" (instead of generic "Learn more").

### 3. FAQ section + FAQPage JSON-LD on each tour page
FAQ rich snippets dramatically increase click-through and SERP real estate. I'll add 5–6 Q&As per tour (When is the best time? How many photographers? What lens? etc.) and emit `FAQPage` schema.

### 4. BreadcrumbList JSON-LD
Adds the breadcrumb trail visual under your URL in Google results. Small but free win on every tour page.

### 5. Stronger image SEO
- Set descriptive, keyword-bearing `alt` text on hero and gallery images (currently many use the generic tour title). Example: `alt="Polar bear mother and cub in Churchill, Manitoba"`.
- Add `width` / `height` attributes where missing (helps CLS / Core Web Vitals).
- Add `loading="eager"` to hero images, `loading="lazy"` to gallery.

### 6. Sitemap + homepage
- Add the new `/tours/moose-photography-tours` URL to `public/sitemap.xml`.
- On the homepage tour grid, surface "Polar Bear Photography Tours" and "Moose Photography Tours" with those exact phrases as link labels.
- Add a short, keyword-rich intro paragraph above the tour grid (the H1 area) — Google weighs above-the-fold text heavily.

### 7. Homepage `<title>` / meta tweak
Current title is generic Canada-wide. Change to something that mentions both target phrases:
"Polar Bear & Moose Photography Tours in Canada | Wildlife Discovered"

### 8. Update llms.txt with the new page
Mirror sitemap so AI search engines (ChatGPT search, Perplexity) discover it.

---

## What I won't do (and why)

- **Won't rewrite tour copy beyond SEO targeting.** Your existing copy is already strong; I'll layer keywords in, not gut it.
- **Won't add testimonials, phone numbers, or addresses** (per your brand rules).
- **Won't build a blog.** That's the single biggest off-site lever (5–10 long-form articles like "Best Time to Photograph Polar Bears in Churchill" pulling organic traffic), but it's a multi-hour content project — happy to plan it as a follow-up if you want.
- **Won't touch Google Search Console or buy backlinks.** Those have to come from you.

---

## After the changes — what *you* should do

1. **Submit the updated sitemap** in Google Search Console (`https://wildlifediscovered.com/sitemap.xml`) and request indexing on the two target URLs.
2. **Create a Google Business Profile** for Wildlife Discovered (huge for local + map results).
3. **Get 3–5 backlinks** from photography blogs, gear review sites, or guest posts. This is what actually moves ranking once on-page is solid.
4. Wait 4–8 weeks for Google to re-crawl and re-rank.

---

## Files I'll touch

- `src/data/tours.ts` — add moose page metadata (or reuse Algonquin data with overrides)
- `src/pages/TourDetail.tsx` — H1 tweak, FAQ section, BreadcrumbList + FAQPage JSON-LD, better alts
- `src/App.tsx` — new route for `/tours/moose-photography-tours`
- `src/pages/Index.tsx` — homepage title/meta + intro paragraph
- `src/components/ToursSection.tsx` — keyword-rich link labels
- `src/components/Footer.tsx` — descriptive internal links
- `index.html` — homepage `<title>` + meta description
- `public/sitemap.xml` — add new URL
- `public/llms.txt` — add new URL

Ready to implement when you approve.