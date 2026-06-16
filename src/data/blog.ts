import redFoxSunset from "@/assets/slider/red-fox-sunset.jpg";
import cameraGuideImg from "@/assets/slider/bear-snowstorm.jpg";
import polarBearGroundImg from "@/assets/slider/mom-cub-snowstorm.jpg";
import bestPolarBearImg from "@/assets/slider/bear-yellow-grass.jpg";
import bestCameraImg from "@/assets/slider/wolverine-snowy-hill.jpg";
import goldeneyeImg from "@/assets/slider/female-merganser.png";
import ptarmiganImg from "@/assets/slider/ptarmigan-close.jpg";
import groundLevelTipsImg from "@/assets/slider/fox-kit.jpg";
import arcticHaresImg from "@/assets/slider/arctic-hare.jpg";
import pineMartenImg from "@/assets/slider/pine-martin.jpg";
import smallGroupPolarBearImg from "@/assets/slider/mother-cubs-light.jpg";
import snowyOwlImg from "@/assets/slider/snow-owl-raven.jpg";
import redFoxHtml from "@/content/blog/ethical-red-fox-photography.html?raw";
import cameraGuideHtml from "@/content/blog/wildlife-photography-camera-guide.html?raw";
import groundLevelPolarBearHtml from "@/content/blog/ground-level-polar-bear-churchill.html?raw";
import bestPolarBearHtml from "@/content/blog/best-polar-bear-tour-churchill.html?raw";
import bestCameraHtml from "@/content/blog/best-wildlife-photography-camera.html?raw";
import goldeneyeHtml from "@/content/blog/female-goldeneye-duck-photography.html?raw";
import ptarmiganHtml from "@/content/blog/finding-willow-ptarmigan-churchill.html?raw";
import groundLevelTipsHtml from "@/content/blog/ground-level-wildlife-photo-tips.html?raw";
import arcticHaresHtml from "@/content/blog/photographing-arctic-hares-snow.html?raw";
import pineMartenHtml from "@/content/blog/pine-marten-photography-canada.html?raw";
import smallGroupPolarBearHtml from "@/content/blog/small-group-polar-bear-churchill.html?raw";
import snowyOwlHtml from "@/content/blog/snowy-owl-photography-churchill.html?raw";

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
  {
    slug: "ground-level-polar-bear-photography-tour-churchill-manitoba",
    title: "Experience the Ultimate Ground-Level Polar Bear Photography Tour in Churchill, Manitoba",
    excerpt:
      "Why ground-level polar bear photography tours in Churchill, Manitoba create immersive, eye-level encounters for serious wildlife photographers.",
    category: "Polar Bear Tours",
    date: "2026-05-29",
    readTime: 12,
    image: polarBearGroundImg,
    content: groundLevelPolarBearHtml,
    format: "html",
  },
  {
    slug: "best-polar-bear-photography-tour-churchill",
    title: "Discover the Best Polar Bear Photography Tour in Churchill This Fall",
    excerpt:
      "Churchill is the polar bear capital of the world — here's why fall is the ideal time for an expert-guided, ethical polar bear photography tour.",
    category: "Polar Bear Tours",
    date: "2026-05-30",
    readTime: 8,
    image: bestPolarBearImg,
    content: bestPolarBearHtml,
    format: "html",
  },
  {
    slug: "small-group-polar-bear-photography-tour-churchill",
    title: "Experience the Ultimate Small Group Polar Bear Photography Tour in Churchill",
    excerpt:
      "Why small group polar bear photography tours in Churchill deliver closer encounters, personal mentorship, and a lighter footprint on the wildlife.",
    category: "Polar Bear Tours",
    date: "2026-05-31",
    readTime: 12,
    image: smallGroupPolarBearImg,
    content: smallGroupPolarBearHtml,
    format: "html",
  },
  {
    slug: "best-wildlife-photography-camera",
    title: "What Is the Best Wildlife Photography Camera in 2026? A Complete Guide",
    excerpt:
      "The best wildlife photography cameras of 2026 — autofocus, frame rates, sensors, and top picks for every budget from a working wildlife photographer.",
    category: "Gear Guide",
    date: "2026-06-01",
    readTime: 12,
    image: bestCameraImg,
    content: bestCameraHtml,
    format: "html",
  },
  {
    slug: "snowy-owl-photography-churchill",
    title: "Mastering Snowy Owl Photography in Churchill: Essential Tips for Capturing Arctic Beauty",
    excerpt:
      "Where to find snowy owls in Churchill and how to photograph them ethically — fieldcraft, gear, and exposure tips for pristine arctic portraits.",
    category: "Field Craft",
    date: "2026-06-02",
    readTime: 12,
    image: snowyOwlImg,
    content: snowyOwlHtml,
    format: "html",
  },
  {
    slug: "finding-willow-ptarmigan-churchill",
    title: "Finding Willow Ptarmigan in Churchill: A Ptarmigan Photography Guide",
    excerpt:
      "A complete guide to finding and photographing willow ptarmigan in Churchill — top locations, seasonal plumage, gear, and ethical fieldcraft.",
    category: "Field Craft",
    date: "2026-06-03",
    readTime: 12,
    image: ptarmiganImg,
    content: ptarmiganHtml,
    format: "html",
  },
  {
    slug: "photographing-arctic-hares-snow",
    title: "Photographing Arctic Hares in Snow: Expert Tips from Silver Bear Photo Tours",
    excerpt:
      "How to find and photograph arctic hares against snow — exposure for white-on-white, low-angle technique, and patient, ethical fieldcraft.",
    category: "Field Craft",
    date: "2026-06-04",
    readTime: 12,
    image: arcticHaresImg,
    content: arcticHaresHtml,
    format: "html",
  },
  {
    slug: "pine-marten-photography-canada",
    title: "Pine Marten Photography Canada: Capture Ontario’s Elusive Forest Spirit",
    excerpt:
      "Track and photograph the elusive pine marten in Ontario's boreal forest — behaviour, locations, gear, and ethical techniques for sharp results.",
    category: "Field Craft",
    date: "2026-06-05",
    readTime: 10,
    image: pineMartenImg,
    content: pineMartenHtml,
    format: "html",
  },
  {
    slug: "female-goldeneye-duck-photography",
    title: "Mastering Female Goldeneye Duck Photography in Ontario’s Wilderness",
    excerpt:
      "Photograph female goldeneye ducks on Ontario's waterways — low-angle boat technique, light, and patience for intimate waterfowl portraits.",
    category: "Field Craft",
    date: "2026-06-06",
    readTime: 12,
    image: goldeneyeImg,
    content: goldeneyeHtml,
    format: "html",
  },
  {
    slug: "ground-level-wildlife-photo-tips",
    title: "Unlocking the Secrets of Ground-Level Wildlife Photography",
    excerpt:
      "Why eye-level matters and how to shoot it — ground pods, angles, and the fieldcraft behind immersive, intimate wildlife photographs.",
    category: "Field Craft",
    date: "2026-06-07",
    readTime: 11,
    image: groundLevelTipsImg,
    content: groundLevelTipsHtml,
    format: "html",
  },
];