# Self-Updating Blog System

## Goal
Fix the broken site and make blog posts load automatically from the `src/content/blog/` folder. Once done, adding, editing, or deleting an HTML file (on GitHub or here) updates the site by itself — no manual list to maintain, and a missing file can never crash the page again.

## Why the page is broken right now
`src/data/blog.ts` hand-imports 12 posts, but one of them — `female-goldeneye-duck-photography.html` — doesn't exist in the folder (only 11 files do). Vite can't resolve that import, so the entire site fails to load. The new auto-detect system removes this class of error entirely.

## How it will work after the change

### 1. Auto-detect every post
`src/data/blog.ts` will scan the blog folder automatically (via Vite's glob import) and build the post list from whatever HTML files are present. Drop a file in → it appears. Delete a file → it disappears. No code edits per post.

### 2. Read what it can straight from each HTML file
For each post the loader pulls:
- **Title** — from the `<h1>`
- **Read time** — from the "Estimated reading time: X minutes" line
- **Excerpt** — from the first paragraph (the reading-time line is skipped)
- **Cover image** — from the first `<img>` in the post (the link already in the file)
- **Slug** — from the file name

### 3. A small note at the top of each post for the rest
Categories and dates aren't in the HTML, so each post can start with a tiny comment block:

```text
<!--
category: Field Craft
date: 2026-06-07
image: https://...   (optional — overrides the cover image if you want a different one)
-->
```

Sensible fallbacks if the note is missing or partial:
- **category** → `Field Craft`
- **date** → a fixed default so ordering still works
- **image** → the first `<img>` in the post

I'll add this comment block to the existing 11 posts using their current category/date/image values, so nothing about the current look changes.

### 4. "Refreshing" becomes automatic
Because the list is built from the folder, there's no refresh button to press: when you push a new/edited/deleted HTML file to GitHub, it syncs and the site rebuilds with the change. If you ever want me to verify, reorder, or fix a post, just tell me and I'll check the folder.

## What changes
- **`src/data/blog.ts`** — rewritten from a hand-maintained array into an auto-loader (glob + small HTML parser + frontmatter-comment reader). The `BlogPost` type and the exported `blogPosts` list stay the same shape, so `Blog.tsx` and `BlogPost.tsx` need no changes.
- **The 11 HTML files in `src/content/blog/`** — each gets a small comment block at the top carrying its current category, date, and image.
- No changes to the page layouts, styling, or the "show once" Latest/Topics logic.

## Result
- Site loads again immediately.
- The missing-file crash can't happen again (absent files simply aren't listed).
- You add posts by dropping HTML files; the site keeps itself in sync.