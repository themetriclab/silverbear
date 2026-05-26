export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: number; // minutes
  image: string;
  content: string; // markdown-ish plain text paragraphs separated by \n\n
}

export const blogPosts: BlogPost[] = [
  {
    slug: "polar-bear-photography-churchill-guide",
    title: "Polar Bear Photography in Churchill: A Complete Field Guide",
    excerpt:
      "Everything you need to know about photographing wild polar bears on the shores of Hudson Bay — gear, settings, light, and ethics.",
    category: "Polar Bears",
    date: "2026-05-20",
    readTime: 12,
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1600&q=80",
    content: `Churchill, Manitoba is the undisputed polar bear capital of the world. Every October and November, the bears gather along the western shore of Hudson Bay, waiting for the sea ice to form. For wildlife photographers, this is one of the rarest and most rewarding opportunities on the planet.\n\nThe light at this latitude is soft, low, and golden for most of the day. Pair that with snow, frost, and the unmistakable subject — a wild polar bear — and you have the recipe for portfolio-defining images.\n\nGear we recommend: a fast telephoto in the 400–600mm range, a reliable second body for wider environmental shots, and plenty of batteries. Cold drains them quickly. Keep spares in an inside pocket close to your body.\n\nEthics matter. We photograph from purpose-built tundra vehicles, never approach bears on foot, and always prioritize the animal's welfare over the shot. The best images come from patience, not pressure.`,
  },
  {
    slug: "best-time-photograph-moose-algonquin",
    title: "The Best Time of Year to Photograph Moose in Algonquin Park",
    excerpt:
      "Spring, summer, fall — each season offers something different for moose photographers. Here's how to plan your trip.",
    category: "Moose",
    date: "2026-05-10",
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1564415900645-f25fb352ca59?auto=format&fit=crop&w=1600&q=80",
    content: `Algonquin Provincial Park in Ontario is home to one of the most accessible moose populations in North America. But timing your visit makes all the difference.\n\nLate May through early June is peak season. The bulls are still carrying velvet antlers, the cows are often with newborn calves, and the moose come to roadside ponds and wetlands to feed on sodium-rich aquatic plants after a long winter.\n\nWe photograph from boats and canoes whenever possible — it's quieter, less intrusive, and gives you a low water-level perspective that's impossible from the shore.`,
  },
  {
    slug: "wildlife-photography-ethics",
    title: "Ethical Wildlife Photography: Our Five Non-Negotiables",
    excerpt:
      "Great wildlife images shouldn't come at the animal's expense. These are the principles we never compromise on.",
    category: "Field Craft",
    date: "2026-04-28",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1600&q=80",
    content: `Every wildlife photographer faces moments where the shot and the animal's welfare are in tension. How you respond in those moments defines you.\n\n1. The animal always comes first. If our presence changes its behaviour, we back off.\n\n2. No baiting, no calls, no playback. Wild means wild.\n\n3. Keep distance. A long lens is cheaper than a stressed animal.\n\n4. Respect nesting and denning sites. Some places are simply off-limits.\n\n5. Be honest in captioning. Captive, baited, or staged images should be disclosed.`,
  },
  {
    slug: "winter-photography-gear-guide",
    title: "Cold-Weather Photography Gear: What Actually Survives -30°C",
    excerpt:
      "After a decade of arctic and sub-arctic expeditions, here's the gear that consistently works when the temperature drops.",
    category: "Gear",
    date: "2026-04-12",
    readTime: 9,
    image:
      "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&w=1600&q=80",
    content: `Cold-weather photography is a special kind of suffering — and a special kind of reward. Most gear works fine down to about -15°C. Below that, things start to break.\n\nMirrorless bodies generally hold up better than DSLRs in extreme cold, but battery performance still drops sharply. Carry at least four batteries per body and keep them warm.\n\nLens choice matters. Internal-focusing telephotos are far more reliable than designs with extending barrels, which can seize when cold contracts the metal.\n\nMost importantly: dress for it. You can't shoot if your hands stop working. Layered mitts with fingerless gloves underneath are the standard for a reason.`,
  },
];