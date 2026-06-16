// Auto-loading blog system.
// Every .html file in src/content/blog/ becomes a post automatically.
// Add a file -> it appears. Delete a file -> it disappears. No list to maintain.
//
// Each post may begin with an optional comment block, e.g.:
//   <!--
//   category: Field Craft
//   date: 2026-06-07
//   image: snow-owl-raven.jpg   (a file in src/assets/slider, OR a full https:// URL)
//   slug: custom-url-slug        (optional; defaults to the file name)
//   -->
// Anything not provided falls back to values read from the HTML itself.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: number; // minutes
  image: string;
  content: string;
  format?: "html" | "text";
}

// Raw HTML for every post.
const htmlModules = import.meta.glob("@/content/blog/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Local cover images (referenced by filename in a post's comment block).
const imageModules = import.meta.glob("@/assets/slider/*", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

const imageByName: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const name = path.split("/").pop();
  if (name) imageByName[name] = url;
}

const DEFAULT_CATEGORY = "Field Craft";
const DEFAULT_DATE = "2026-01-01";

const fileNameToSlug = (path: string) =>
  path.split("/").pop()!.replace(/\.html$/i, "");

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&rsquo;/g, "’")
    .replace(/\s+/g, " ")
    .trim();

const parseFrontmatter = (html: string): Record<string, string> => {
  const match = html.match(/^\s*<!--([\s\S]*?)-->/);
  if (!match) return {};
  const fm: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^\s*([a-zA-Z]+)\s*:\s*(.+?)\s*$/);
    if (m) fm[m[1].toLowerCase()] = m[2];
  }
  return fm;
};

const resolveImage = (fmImage: string | undefined, html: string): string => {
  if (fmImage) {
    if (/^https?:\/\//i.test(fmImage)) return fmImage;
    if (imageByName[fmImage]) return imageByName[fmImage];
  }
  // Fall back to the first <img> in the post body.
  const imgMatch = html.match(/<img[^>]*\ssrc=["']([^"']+)["']/i);
  return imgMatch ? imgMatch[1] : "";
};

const buildPost = (path: string, html: string): BlogPost => {
  const fm = parseFrontmatter(html);

  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : fileNameToSlug(path);

  const readMatch = html.match(/Estimated reading time:\s*(\d+)/i);
  const readTime = readMatch ? parseInt(readMatch[1], 10) : 10;

  // First paragraph that isn't the reading-time line.
  let excerpt = "";
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  for (const p of paragraphs) {
    const text = stripTags(p[1]);
    if (text && !/estimated reading time/i.test(text)) {
      excerpt = text.length > 200 ? `${text.slice(0, 197).trim()}…` : text;
      break;
    }
  }

  return {
    slug: fm.slug || fileNameToSlug(path),
    title,
    excerpt,
    category: fm.category || DEFAULT_CATEGORY,
    date: fm.date || DEFAULT_DATE,
    readTime,
    image: resolveImage(fm.image, html),
    content: html,
    format: "html",
  };
};

export const blogPosts: BlogPost[] = Object.entries(htmlModules)
  .map(([path, html]) => buildPost(path, html))
  .sort((a, b) => (a.date < b.date ? 1 : -1));
