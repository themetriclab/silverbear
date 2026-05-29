import redFoxSunset from "@/assets/slider/red-fox-sunset.jpg";
import cameraGuideImg from "@/assets/slider/bear-snowstorm.jpg";
import redFoxHtml from "@/content/blog/ethical-red-fox-photography.html?raw";
import cameraGuideHtml from "@/content/blog/wildlife-photography-camera-guide.html?raw";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: number; // minutes
  image: string;
  content: string; // HTML when format === "html", otherwise paragraphs split on \n\n
  format?: "html" | "text";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ethical-red-fox-photography",
    title: "Ethical Red Fox Photography – Capture Stunning Images Responsibly",
    excerpt:
      "How to photograph wild red foxes in Churchill, Manitoba without disturbing them — distance, gear, ground-level technique, and the ethics that put the fox first.",
    category: "Field Craft",
    date: "2026-05-27",
    readTime: 12,
    image: redFoxSunset,
    content: redFoxHtml,
    format: "html",
  },
  {
    slug: "wildlife-photography-camera-guide",
    title: "Wildlife Photography Camera: The Ultimate Guide to Capturing Stunning Animal Photos",
    excerpt:
      "Choosing the right wildlife photography camera — fast autofocus, high frame rates, sensor size, telephoto lenses, and top picks for every budget.",
    category: "Gear Guide",
    date: "2026-05-28",
    readTime: 14,
    image: cameraGuideImg,
    content: cameraGuideHtml,
    format: "html",
  },
];