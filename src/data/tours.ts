import loonImg from "@/assets/loon-chick.jpg";
import mooseImg from "@/assets/moose.jpg";
import polarBearImg from "@/assets/polar-bear.jpg";
import waterfowlImg from "@/assets/waterfowl.jpg";
import swanImg from "@/assets/swan.jpg";

export interface TourFact {
  label: string;
  value: string;
}

export interface TourSection {
  title: string;
  content: string;
}

export interface TourPricing {
  label: string;
  price: string;
  dates: string;
  availability: string;
}

export interface Tour {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  month: string;
  season: string;
  location: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  highlights: string[];
  animalFacts: TourFact[];
  migrationInfo: TourSection;
  whyPhotograph: TourSection;
  whatToExpect: TourSection;
  gearTips: string[];
  pricing?: TourPricing[];
  priceIncludes?: string[];
  priceExcludes?: string[];
  paymentPolicy?: string;
}

export const tours: Tour[] = [
  {
    slug: "loon-photography-tours",
    title: "Loon Photography Tours & Workshops",
    subtitle: "North America's leading loon photography experience — capture stunning images of common loons and their chicks on pristine Northern Ontario lakes",
    description:
      "Join Wildlife Discovered on a guided loon photography tour in Northern Ontario. Photograph common loons and their chicks from a purpose-built boat on sparkling northern lakes, with expert instruction and a 90% chick success rate since 1997.",
    image: loonImg,
    month: "July",
    season: "Summer",
    location: "Northern Ontario, 2.5 Hours North of Toronto",
    duration: "2–6 Days",
    difficulty: "All Levels",
    groupSize: "Maximum 4 Photographers",
    highlights: [
      "Photograph loon parents carrying chicks on their backs — a fleeting behaviour lasting only weeks",
      "Watch and capture parents feeding their young fish and crayfish up close",
      "Shoot from just 16 inches above the water for dramatic eye-level perspectives",
      "Morning and evening sessions timed for the best golden-hour light",
      "90% loon chick success rate since 1997 across 11 monitored nesting pairs on 9 lakes",
      "Bonus wildlife: moose, black bear, beaver, muskrat, blue herons, kingfishers, and more",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Gavia immer (Common Loon)" },
      { label: "Wingspan", value: "Up to 136 cm (54 inches)" },
      { label: "Dive Depth", value: "Can dive over 60 metres (200 ft)" },
      { label: "Speed", value: "Over 120 km/h in flight" },
      { label: "Lifespan", value: "Up to 30 years in the wild" },
      { label: "Diet", value: "Primarily fish, also crayfish and aquatic insects" },
    ],
    migrationInfo: {
      title: "Loon Nesting Season & Behaviour",
      content:
        "Common loons breed on freshwater lakes across Canada from May through August, fiercely defending their nesting territories. By late September they migrate south to coastal waters along the Atlantic, Pacific, and Gulf coasts. July is the ideal month because chicks have recently hatched and still ride on their parents' backs — a tender behaviour that lasts only a few weeks. You'll also witness parents feeding their young, creating some of the most iconic and emotionally powerful wildlife images possible. Wildlife Discovered monitors 11 nesting pairs across 9 different lakes, offering photographers a remarkable 90% chick success rate since 1997.",
    },
    whyPhotograph: {
      title: "Why July Is the Best Time for Loon Photography",
      content:
        "July offers calm lake conditions with stunning morning mist, creating ethereal backdrops for loon photography. The chicks are small enough to ride on their parents' backs — a fleeting behaviour that typically lasts only 2–3 weeks. The long daylight hours of the Canadian summer provide extended golden-hour windows at both dawn and dusk, perfect for low-light photography. Loons are also most vocal during breeding season, giving you the chance to capture dramatic yodelling and wailing postures. Different lakes offer varied water colours and reflections, ensuring each session produces unique compositions.",
    },
    whatToExpect: {
      title: "What to Expect on This Loon Photography Tour",
      content:
        "Each day begins with an early morning session on the water, timed for the best light. You'll photograph from a purpose-built boat with a flat floor, low sides, and comfortable swivel seats that drop down to position your lens just 16 inches from the water surface — perfect for dramatic eye-level loon portraits. A quiet electric trolling motor gets you in close without disturbing the birds, while an outboard gets you to each lake quickly. Your certified captain, guide, and instructor is with you at all times, offering personalized tips and calling out approaching wildlife. Midday is free to download images, explore Algonquin's trails for moose and boreal birds like grey jays and spruce grouse, or simply relax. Then it's back on the water for an evening session to capture loons in warm golden light.",
    },
    gearTips: [
      "300–600mm telephoto lens (500mm recommended for frame-filling loon portraits)",
      "Fast lens (f/4 or wider) for dawn and dusk low-light conditions",
      "Waterproof camera bag or dry bag for boat photography",
      "Polarizing filter for cutting water reflections and boosting colour",
      "Beanbag or gimbal head for stable shooting from the boat",
    ],
    pricing: [
      { label: "3-Day Loons & Chicks Workshop", price: "$1,470.00", dates: "July 06–08, 2026", availability: "Full" },
      { label: "3-Day Loons & Chicks Workshop", price: "$1,470.00", dates: "July 09–11, 2026", availability: "Full" },
      { label: "2-Day Loons & Chicks Workshop", price: "$980.00", dates: "July 13–14, 2026", availability: "1 spot left" },
    ],
    priceIncludes: [
      "Pick up and drop off at the hotel",
      "Light breakfast — yogurt, fruit juice, water, and granola bars",
      "Personalized photography instruction at all times",
      "Chilled bottled water on the boat",
    ],
    priceExcludes: [
      "Flights and transportation to the hotel",
      "Accommodation (recommendations gladly provided)",
      "All meals except breakfast",
      "13% HST Ontario taxes",
    ],
    paymentPolicy:
      "A non-refundable 50% deposit plus 13% Ontario sales tax is required to reserve your spot. Balance in full is due 2 months prior to the workshop start date. We accept PayPal or E-transfers. Travel insurance and health insurance are highly recommended.",
  },
  {
    slug: "algonquin-park-photography-tours",
    title: "Algonquin Park Wildlife Photography Tours",
    subtitle: "Photograph moose, bald eagles, loons, and boreal wildlife by boat in the heart of Algonquin Park",
    description:
      "Join Wildlife Discovered on a guided wildlife photography tour by boat in Ontario's world-renowned Algonquin Park. Capture moose feeding on lily pads, bald eagles in flight, territorial loon displays, and more from a stable, purpose-built photography boat.",
    image: mooseImg,
    month: "June",
    season: "Early Summer",
    location: "Algonquin Provincial Park, Ontario",
    duration: "2–6 Days",
    difficulty: "All Levels",
    groupSize: "Maximum 4 Photographers",
    highlights: [
      "Photograph moose feeding on lily pads from water level aboard a stable flat-bottom boat",
      "Capture bald eagles in flight and perching along Algonquin's waterways",
      "Witness spectacular territorial displays by common loons, including nest building",
      "Comfortable swivel seats mounted on the centreline for sharp, shake-free images",
      "Use monopod or tripod on the flat boat floor for razor-sharp results",
      "Silent approach with oars, push pole, or electric motor to get close without disturbing wildlife",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Alces alces (Moose)" },
      { label: "Height", value: "Up to 2.1 m (6.9 ft) at the shoulder" },
      { label: "Weight", value: "Males up to 700 kg (1,500 lbs)" },
      { label: "Antler Span", value: "Up to 1.8 m (6 ft) across" },
      { label: "Population in Algonquin", value: "Approximately 3,000 moose" },
      { label: "Diet", value: "Aquatic vegetation, lily pads, willow, birch, and aspen" },
    ],
    migrationInfo: {
      title: "Moose Behaviour in Algonquin Park",
      content:
        "Moose in Algonquin Park don't migrate long distances but shift between seasonal habitats. In early summer they frequent lakes and wetlands to feed on aquatic plants like lily pads, spending long stretches submerging their heads in the shallows — creating incredible photographic opportunities with the beautiful shoreline and boreal forest as backdrop. The boat-based approach provides a unique perspective that's impossible from land, with moose often feeding undisturbed just metres away.",
    },
    whyPhotograph: {
      title: "Why June Is the Best Time for Algonquin Wildlife",
      content:
        "June places you in Algonquin Park when moose are most active in the waterways, feeding extensively on aquatic vegetation. Bald eagles are nesting and hunting along the lakes, while common loons are in full territorial mode with dramatic displays and nest building. The long daylight hours and soft morning light create ideal conditions. Insects are minimal because you're on the water and away from land. The combination of moose, eagles, loons, and pristine boreal scenery makes this one of the finest wildlife photography experiences in North America.",
    },
    whatToExpect: {
      title: "What to Expect on This Algonquin Photography Tour",
      content:
        "You'll meet your certified captain and guide at a location in Algonquin Park and head out on the water for early morning light. The wide-bottomed boat with a flat floor and comfortable swivel seats mounted on the centreline keeps everything stable and shake-free — perfect for sharp images with your monopod or tripod. Your guide uses oars, a push pole, or a silent electric motor to slip in close to wildlife without disturbance. A light breakfast is served aboard around 8 am, and a picnic-style lunch break happens around 11:30 am before heading back out for the afternoon. Photography tips and camera settings are shared throughout whenever the moment allows.",
    },
    gearTips: [
      "70–200mm and 100–400mm zoom lenses for versatility with moose and eagles",
      "Wide-angle lens for landscape-wildlife combinations on the water",
      "Monopod or tripod for sharp images from the stable boat platform",
      "Rain coat and pants — weather can change quickly in Algonquin",
      "Rubber boots for stepping in and out of the boat in shallow water",
      "Layered clothing — temperatures range from 20°C to as low as -3°C",
    ],
    pricing: [
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 06–08, 2026", availability: "2 spots left" },
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 09–11, 2026", availability: "Full" },
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 12–14, 2026", availability: "Full" },
    ],
    priceIncludes: [
      "Light breakfast — yogurt, fruit juice, chilled water, and granola bar",
      "Picnic-style lunch — turkey, ham, kaiser bun, and fixings",
      "Photography tips and camera settings guidance throughout the day",
    ],
    priceExcludes: [
      "Accommodation (recommendations provided upon booking)",
      "Transportation to and from the meeting location",
      "Algonquin Park vehicle permit (2-day permit required)",
      "13% HST Ontario taxes",
    ],
    paymentPolicy:
      "A non-refundable 50% deposit plus 13% Ontario tax is required to reserve your spot. Balance in full is due 2 months before the tour start date. We accept PayPal or E-transfers. Travel insurance and health insurance are highly recommended.",
  },
  {
    slug: "polar-bear-photography-tour",
    title: "Polar Bear Photography Tours",
    subtitle: "Face to face with the Arctic's apex predator",
    description:
      "Join a polar bear photography tour in the Arctic tundra and capture these majestic animals along with other Arctic wildlife.",
    image: polarBearImg,
    month: "October – November",
    season: "Late Autumn",
    location: "Churchill, Manitoba – Polar Bear Capital of the World",
    duration: "5 Days",
    difficulty: "Intermediate–Advanced",
    groupSize: "6–10 Photographers",
    highlights: [
      "Photograph polar bears from a specialized Tundra Buggy",
      "Witness bears sparring and play-fighting before freeze-up",
      "Potential sightings of Arctic foxes, ptarmigan, and snowy owls",
      "Northern Lights photography opportunities",
      "Learn Arctic wildlife photography techniques from experts",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Ursus maritimus" },
      { label: "Weight", value: "Males up to 800 kg (1,760 lbs)" },
      { label: "Standing Height", value: "Up to 3 m (10 ft)" },
      { label: "Swimming Range", value: "Can swim over 100 km without rest" },
      { label: "Population", value: "Approx. 26,000 worldwide" },
      { label: "Fur", value: "Transparent hollow hairs over black skin" },
    ],
    migrationInfo: {
      title: "The Great Gathering at Hudson Bay",
      content:
        "Every autumn, roughly 1,000 polar bears congregate along the western coast of Hudson Bay near Churchill, Manitoba, waiting for the sea ice to form. This annual gathering is one of the greatest wildlife spectacles on Earth. The bears have spent the summer fasting on land and are eager to return to the ice to hunt ringed seals. October and November mark the peak of this congregation, with bears sparring, socializing, and resting on the tundra. Once the bay freezes—usually by mid-November—the bears disperse onto the ice and become nearly impossible to photograph.",
    },
    whyPhotograph: {
      title: "A Narrow Window of Opportunity",
      content:
        "The pre-freeze-up period offers the highest concentration of polar bears in an accessible location anywhere in the world. Bears are relatively relaxed and exhibit fascinating social behaviours—mock fights, curious investigations of Tundra Buggies, and tender moments between mothers and cubs. The Arctic light during October and November is low and golden for much of the day, creating dramatic side-lighting and long shadows. There's also the chance of photographing bears under the Northern Lights, producing truly once-in-a-lifetime images.",
    },
    whatToExpect: {
      title: "What to Expect on This Tour",
      content:
        "You'll travel in heated Tundra Buggies—purpose-built vehicles that elevate you safely above bear height while providing stable shooting platforms. Full days are spent on the tundra with bears often approaching within metres of the buggy. Guides provide real-time coaching on exposure for white fur against snow, capturing action during sparring, and creative compositions with the vast Arctic landscape. Evening sessions may include Northern Lights photography and image review workshops.",
    },
    gearTips: [
      "200–500mm or 100–400mm telephoto zoom",
      "Wide-angle lens for environmental portraits and Northern Lights",
      "Extra batteries—cold drains them rapidly",
      "Hand and toe warmers for extended outdoor sessions",
      "Lens hood to block wind and reduce flare in low Arctic sun",
    ],
  },
  {
    slug: "ontario-waterfowl-photography-tours",
    title: "Ontario Waterfowl Photography Tours",
    subtitle: "Ducks, herons, and shorebirds in serene wetland sanctuaries",
    description:
      "Capture stunning images of ducks, swans, ospreys, and other birdlife in calm natural settings across southern Ontario's wetlands.",
    image: waterfowlImg,
    month: "March – May",
    season: "Spring",
    location: "Southern Ontario Wetlands & Conservation Areas",
    duration: "2 Days",
    difficulty: "Beginner-Friendly",
    groupSize: "4 Photographers",
    highlights: [
      "Photograph courtship displays and breeding plumage",
      "Species include wood ducks, hooded mergansers, great blue herons",
      "Blind-based photography for close, undisturbed encounters",
      "Spring wildflowers and fresh green foliage as backdrops",
      "Learn bird behaviour prediction for better compositions",
    ],
    animalFacts: [
      { label: "Species Diversity", value: "Over 30 waterfowl species in Ontario" },
      { label: "Long-tailed Duck", value: "Can dive over 60 m deep—one of the deepest diving ducks" },
      { label: "Ring-necked Duck", value: "Named for a subtle chestnut neck ring, hard to see in the field" },
      { label: "Bufflehead", value: "One of the smallest diving ducks in North America" },
      { label: "Hooded Merganser", value: "Males have a dramatic fan-shaped crest" },
      { label: "Migration Scale", value: "Millions of waterfowl pass through Ontario annually" },
    ],
    migrationInfo: {
      title: "The Spring Migration Flyway",
      content:
        "Ontario sits along the Atlantic and Mississippi flyways, two of the four major migratory bird routes in North America. Each spring, millions of waterfowl funnel through the province heading north to breeding grounds across the Canadian Shield and Arctic. Southern Ontario's wetlands serve as critical stopover sites where birds rest and refuel. March through May sees waves of different species arriving—early migrants like mallards and Canada geese give way to colourful wood ducks, teal, and diving ducks by mid-spring. This staggered arrival means every visit offers different species and behaviours.",
    },
    whyPhotograph: {
      title: "Spring Plumage at Its Finest",
      content:
        "Spring is when waterfowl are in their most stunning breeding plumage. Males display brilliant colours and elaborate patterns to attract mates, making them extraordinarily photogenic. Courtship behaviours—head-bobbing, wing-flapping, synchronized swimming—provide dynamic action shots. The fresh green vegetation and blooming wildflowers of spring wetlands create vibrant, clean backgrounds that make subjects pop. Morning light reflecting off calm water produces beautiful catchlights in birds' eyes and mirror-like reflections.",
    },
    whatToExpect: {
      title: "What to Expect on This Tour",
      content:
        "Sessions take place from carefully positioned photography blinds at the water's edge, allowing incredibly close encounters without disturbing the birds. Your guide helps you read bird behaviour to anticipate action—knowing when a heron is about to strike or when a duck will flap its wings. Workshops cover fast shutter speed techniques for freezing wing motion, using natural light for fill, and composition rules specific to bird photography. This tour is ideal for beginners wanting to build foundational wildlife photography skills.",
    },
    gearTips: [
      "400–600mm telephoto lens for frame-filling shots from blinds",
      "1.4x teleconverter for extra reach",
      "Fast memory cards for continuous burst shooting",
      "Camouflage lens cover to avoid startling wary species",
      "Knee pads or ground pad for low-angle shooting",
    ],
  },
  {
    slug: "swan-and-cygnets-photography-tours",
    title: "Swan & Cygnet Photography Tour",
    subtitle: "Grace, elegance, and tender family moments on the water",
    description:
      "Capture graceful swans and their babies up close in calm, scenic wetlands—perfect for creating soft, intimate wildlife images.",
    image: swanImg,
    month: "May – June",
    season: "Late Spring",
    location: "Ontario Lakeshores & Rivers",
    duration: "2 Days",
    difficulty: "Beginner-Friendly",
    groupSize: "4 Photographers",
    highlights: [
      "Photograph cygnets riding on their parents' backs",
      "Capture the iconic heart-shaped pose of mating pairs",
      "Soft morning light on calm waterways",
      "Learn to create painterly, fine-art wildlife images",
      "Potential bonus subjects: kingfishers, turtles, dragonflies",
    ],
    animalFacts: [
      { label: "Species", value: "Mute Swan (Cygnus olor) & Trumpeter Swan (Cygnus buccinator)" },
      { label: "Wingspan", value: "Up to 2.4 m (8 ft)—among the largest flying birds" },
      { label: "Weight", value: "Up to 12 kg (26 lbs)" },
      { label: "Mate Bond", value: "Swans typically mate for life" },
      { label: "Clutch Size", value: "4–8 eggs per nest" },
      { label: "Cygnet Colour", value: "Grey-brown, turning white in first year" },
    ],
    migrationInfo: {
      title: "Resident & Migratory Populations",
      content:
        "Ontario hosts both resident Mute Swans (originally introduced from Europe) and native Trumpeter Swans, which were nearly extinct in the province by the 1900s but have been successfully reintroduced. Trumpeter Swans migrate short distances within Ontario, moving from breeding lakes to larger, ice-free waters in winter. Mute Swans tend to be more sedentary. May and June are the prime months because cygnets hatch in late May and are small, fluffy, and endearingly clumsy for only a few weeks. This brief window captures the most emotionally compelling family interactions.",
    },
    whyPhotograph: {
      title: "Fleeting Moments of Tenderness",
      content:
        "Newborn cygnets are only small enough to ride on their parents' backs for about 2–3 weeks, making this an extremely time-sensitive photographic opportunity. The combination of pure white adult plumage against green spring vegetation creates high-contrast, visually striking images. Swans are relatively approachable compared to many wild birds, allowing for intimate compositions with shorter lenses. The calm waters of late spring mornings produce perfect reflections, doubling the visual impact of every shot.",
    },
    whatToExpect: {
      title: "What to Expect on This Tour",
      content:
        "This tour focuses on patience and artistry. Sessions begin at golden hour when light is soft and warm. Your guide knows the nesting territories and positions you at respectful distances where swans are comfortable and natural in their behaviour. Workshops emphasize creating fine-art wildlife images—using negative space, backlighting, high-key exposure techniques, and intentional blur for painterly effects. This is a contemplative, rewarding tour perfect for photographers who value beauty and emotion over action.",
    },
    gearTips: [
      "70–200mm f/2.8 for intimate, shallow depth-of-field portraits",
      "300–400mm for tighter compositions without disturbing nests",
      "Tripod with low-angle capability for water-level shots",
      "Reflector disc for filling shadows in backlit scenes",
      "Lens cloth—expect morning dew and mist on glass",
    ],
  },
];
