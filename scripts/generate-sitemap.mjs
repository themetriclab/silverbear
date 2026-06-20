// Auto-generates public/sitemap.xml from the site's actual content.
// Run automatically before every build (see package.json "build" script),
// so every tour and every blog post in src/content/blog/*.html is always
// included — no manual editing required when new posts are added.

import { readFileSync, readdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SITE_URL = "https://silverbearphototours.com";

// ---- Static pages ----
const staticPages = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/tours", changefreq: "weekly", priority: "0.9" },
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
  { loc: "/contact", changefreq: "monthly", priority: "0.6" },
];

// ---- Tour pages: pull every slug out of src/data/tours.ts ----
const toursSource = readFileSync(path.join(root, "src/data/tours.ts"), "utf-8");
const tourSlugMatches = [...toursSource.matchAll(/slug:\s*"([^"]+)"/g)];
const tourSlugs = tourSlugMatches.map((m) => m[1]);

const tourPages = tourSlugs.map((slug) => ({
  loc: `/tours/${slug}`,
  changefreq: "monthly",
  priority: "0.8",
}));

// ---- Blog pages: every .html file in src/content/blog ----
const blogDir = path.join(root, "src/content/blog");
const blogFiles = readdirSync(blogDir).filter((f) => f.endsWith(".html"));

const blogPages = blogFiles.map((file) => {
  const html = readFileSync(path.join(blogDir, file), "utf-8");
  // Reuse the same frontmatter convention as src/data/blog.ts
  const fmMatch = html.match(/^\s*<!--([\s\S]*?)-->/);
  let slug = file.replace(/\.html$/i, "");
  if (fmMatch) {
    const slugLine = fmMatch[1].match(/^\s*slug\s*:\s*(.+?)\s*$/m);
    if (slugLine) slug = slugLine[1];
  }
  return { loc: `/blog/${slug}`, changefreq: "monthly", priority: "0.6" };
});

const allPages = [...staticPages, ...tourPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(root, "public/sitemap.xml"), xml);

console.log(
  `sitemap.xml generated with ${allPages.length} URLs (${tourPages.length} tours, ${blogPages.length} blog posts).`
);
