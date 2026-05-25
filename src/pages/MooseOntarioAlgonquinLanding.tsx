import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Camera, Check, HelpCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import mooseImg from "@/assets/moose.jpg";

import algCalfCow from "@/assets/algonquin/calf-looking-at-cow.png";
import algCow from "@/assets/algonquin/cow.jpg";
import algEagle from "@/assets/algonquin/eagle-perched.png";
import algBull from "@/assets/algonquin/fav-bull-shot.jpg";
import algLoon from "@/assets/algonquin/loon-in-aurora-water-3.png";
import algMoose from "@/assets/algonquin/moose-sipping.png";
import algBabyBeaver from "@/assets/algonquin/baby-beaver.png";

const sliderImages = [algBull, algMoose, algCalfCow, algCow, algLoon, algEagle, algBabyBeaver];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    question: "When is the best time for moose photography in Ontario and Algonquin Park?",
    answer:
      "June is the prime month to photograph moose in Algonquin Park, Ontario. Moose feed extensively on aquatic vegetation in the lakes and wetlands at sunrise and sunset, often submerging their heads in the shallows just metres from the boat. Spring and early summer give the best combination of cooperative moose behaviour, golden light, and reflections.",
  },
  {
    question: "Is this a true moose photography workshop or a moose-watching tour?",
    answer:
      "It is a wildlife photography workshop first and a moose viewing experience second. The boat, group size, schedule, and instruction are all built around photographers. You'll receive in-field guidance on camera settings, telephoto lens technique, composition for moose in marsh and wetland scenes, and low-light wildlife photography.",
  },
  {
    question: "Why photograph moose from a boat in Algonquin Park?",
    answer:
      "Boat-based moose photography puts the camera at water level, where feeding moose are most engaged with their surroundings. Shooting from the water lets you photograph moose reflections, moose in lily pads, moose at sunrise on misty lakes, and moose in marshes — perspectives that are essentially impossible from shore.",
  },
  {
    question: "How small are the groups?",
    answer:
      "A maximum of 4 photographers per boat. Each guest gets a comfortable swivel seat on the centreline, a clean shooting lane, and direct attention from your guide for camera setup, exposure for low-light wildlife photography, and composition.",
  },
  {
    question: "What other wildlife can I photograph alongside moose in Algonquin?",
    answer:
      "Bald eagles in flight, common loons in territorial display, otters, beavers, mergansers, and a strong cast of boreal birds frequently appear on the same Algonquin Park wildlife photography tour — often during a single morning session.",
  },
  {
    question: "What camera gear should I bring for moose photography in Ontario?",
    answer:
      "A 100–400mm zoom covers most moose framing on the water, a 70–200mm is excellent for moose with their boreal-forest surroundings, and a wide-angle is perfect for moose-in-landscape compositions and reflections. A telephoto lens for wildlife photography, a monopod or tripod, layered clothing, and rubber boots round out the kit.",
  },
  {
    question: "How do I book a moose photography tour in Algonquin Park?",
    answer:
      "Contact us through the contact page to check availability for June moose photography departures. A non-refundable 50% deposit plus 13% Ontario tax holds your spot, with the balance due 2 months before the tour start date.",
  },
];

const MooseOntarioAlgonquinLanding = () => {
  const siteUrl = "https://wildlifediscovered.com";
  const path = "/moose-photography-tours-ontario-algonquin-park";
  const absoluteImage = `${siteUrl}${mooseImg}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Moose Photography Tours in Ontario & Algonquin Park", item: `${siteUrl}${path}` },
    ],
  };
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Moose Photography Tours in Ontario & Algonquin Park",
    description:
      "Guided moose photography tour in Ontario and Algonquin Park, by boat with expert wildlife photography instruction.",
    image: absoluteImage,
    brand: { "@type": "Brand", name: "Wildlife Discovered" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Moose Photography Tours in Ontario & Algonquin Park"
        description="Join a guided moose photography tour in Ontario and Algonquin Park. Photograph wild moose by boat with expert wildlife photography guidance."
        path={path}
        image={absoluteImage}
        type="product"
        jsonLd={[productLd, breadcrumbLd, faqLd]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        <img
          src={mooseImg}
          alt="Bull moose feeding on lily pads at sunrise in Algonquin Provincial Park, Ontario"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-16">
          <p className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Algonquin Provincial Park · Ontario
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground max-w-4xl text-shadow-hero"
          >
            Moose Photography Tours in Ontario & Algonquin Park
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-foreground/80 font-light max-w-2xl"
          >
            Photograph wild moose by boat at water level in Algonquin Provincial Park — small-group, photography-focused tours guided by a wildlife photography instructor.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact?tour=moose-photography-tours"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
            >
              Book This Tour <ArrowRight size={16} />
            </Link>
            <Link
              to="/tours/moose-photography-tours"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-medium tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              See Dates & Itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: MapPin, label: "Where", value: "Algonquin Park, Ontario" },
            { icon: Calendar, label: "When", value: "June" },
            { icon: Users, label: "Group Size", value: "Max 4 Photographers" },
            { icon: Camera, label: "Focus", value: "Moose Photography by Boat" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* H2: Photograph Wild Moose in Ontario */}
        <motion.section {...fadeUp} className="max-w-4xl">
          <SectionHeader label="The Experience" title="Photograph Wild Moose in Ontario" />
          <div className="space-y-5 text-muted-foreground leading-relaxed mt-6">
            <p>
              Ontario is one of the best places in Canada to photograph wild moose, and Algonquin Provincial Park is the heart of it. Roughly 3,000 moose live within the park, and in early summer they spend hours each day feeding on aquatic vegetation in marshes and on lakes — exactly where a low-angle boat-based wildlife photography tour can put you within metres.
            </p>
            <p>
              These are photography tours, not general moose-watching trips. Every detail — the boat, the group size, the schedule, the instruction — is built around making sharp, intimate, emotionally powerful images of moose in the wild.
            </p>
          </div>
        </motion.section>

        <section className="-mx-6 overflow-hidden">
          <ImageAutoSlider images={sliderImages} />
        </section>

        {/* H2: Moose Wildlife Photography by Boat */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Water-Level" title="Moose Wildlife Photography by Boat" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {[
              "Purpose-built stable photography boat with a flat floor and centreline swivel seats — perfect for moose photography on the water",
              "Silent approach with electric motor, oars, or push pole — ethical moose photography that keeps animals undisturbed",
              "Water-level perspective for moose-in-marsh and moose-reflection photography that simply isn't possible from shore",
              "Photograph bull moose, cow moose, and moose calves feeding on lily pads in Algonquin's wetlands",
              "Bald eagles, loons, beavers, otters, and boreal birds frequently photographed on the same Algonquin Park wildlife photography tour",
              "Sunrise and golden-hour wildlife photography sessions when moose behaviour and light are at their best",
            ].map((h, i) => (
              <SpotlightCard key={i} className="p-5">
                <div className="flex items-start gap-3">
                  <ChevronRight size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/90 text-sm leading-relaxed">{h}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* H2: Algonquin Park / Best Time */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader label="Location" title="Algonquin Park Moose Photography Tours" />
            <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
              <p>
                Algonquin Provincial Park is one of the most renowned wildlife photography destinations in Canada. Its lakes, wetlands, and boreal forest support a healthy population of moose and a rich cast of supporting wildlife — bald eagles, common loons, otters, beavers, and more.
              </p>
              <p>
                A boat-based Algonquin Park photography tour gives you access to corners of the park where most visitors never see a moose, and at angles most photographers never get to shoot. It is the best place to photograph moose in Ontario for serious wildlife photographers.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader label="Best Light" title="Best Time to Photograph Moose in Ontario" />
            <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
              <p>
                June is the peak window for moose photography in Algonquin Park. Bulls are in velvet, cows often travel with calves, and aquatic vegetation pulls moose into the water for long stretches at sunrise and sunset. Spring brings emerging colours and tender family behaviour, while summer extends the golden-hour light long into the evening.
              </p>
              <p>
                Fall moose photography in Ontario is possible, but for boat-based water-level photography of feeding moose, June remains unmatched.
              </p>
            </div>
          </div>
        </motion.section>

        {/* H2: A photography tour built for wildlife photographers */}
        <motion.section {...fadeUp} className="bg-card border border-border rounded-xl p-8 md:p-12">
          <SectionHeader label="Instruction" title="A Photography Tour Built for Wildlife Photographers" />
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-8">
            {[
              "Camera settings for moose at sunrise — shutter speed, ISO, and exposure for low-light wildlife photography",
              "Composition for wildlife photography — reflections, negative space, and environmental context",
              "Telephoto lens wildlife photography technique from a moving boat",
              "Reading natural moose behaviour to anticipate the next moment",
              "Reflections and wildlife photography on calm Algonquin lakes",
              "Quiet wildlife viewing and ethical approach distances at all times",
            ].map((tip) => (
              <div key={tip} className="flex items-start gap-3">
                <Check size={16} className="text-primary mt-1 shrink-0" />
                <p className="text-foreground/90 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* H2: What You'll Learn */}
        <motion.section {...fadeUp} className="max-w-4xl">
          <SectionHeader label="What You'll Learn" title="What You'll Learn on the Tour" />
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
            <p>
              Whether you are joining as a beginner or a seasoned wildlife photographer, your guide tailors instruction to your level. You'll work on camera settings for moose, sharp telephoto wildlife technique from the boat, sunrise wildlife photography exposure, and composition that places the moose meaningfully within the Ontario backcountry wilderness.
            </p>
            <p>
              You'll also walk away with a stronger understanding of natural moose behaviour, ethical wildlife photography practice, and how to plan a Canadian wildlife photography workshop or vacation that respects the animals first.
            </p>
          </div>
        </motion.section>

        {/* H2: Ethical Moose Photography */}
        <motion.section {...fadeUp} className="max-w-4xl">
          <SectionHeader label="Ethics" title="Ethical Moose Photography" />
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
            <p>
              Moose are large, sensitive wild animals, and Algonquin Park is their home. Every Wildlife Discovered moose photography tour follows quiet wildlife viewing principles — slow, silent approach with electric motor, oars, or push pole, respectful distances, and zero baiting or pressure on the animals.
            </p>
            <p>
              Ethical moose photography protects the population and produces better images. A relaxed, naturally feeding moose makes the photograph; a stressed moose does not.
            </p>
          </div>
        </motion.section>

        {/* H2: Camera Gear */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Preparation" title="What Camera Gear to Bring" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {[
              "100–400mm zoom lens — your most-used focal range for moose on the water",
              "70–200mm zoom for moose with their boreal-forest surroundings and tighter family scenes",
              "Wide-angle lens for moose-in-landscape compositions and reflections",
              "Monopod or tripod for sharp images from the stable boat platform",
              "Rain coat and pants — Algonquin weather can change quickly",
              "Rubber boots, layered clothing, bug spray, and a head net — June can bring intense black flies and mosquitoes",
            ].map((tip, i) => (
              <SpotlightCard key={i} className="p-5">
                <div className="flex items-start gap-3">
                  <Camera size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/90 text-sm">{tip}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* H2: FAQs */}
        <motion.section {...fadeUp}>
          <SectionHeader label="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <SpotlightCard key={i} className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <h3 className="text-foreground font-medium">{f.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-7">{f.answer}</p>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeUp} className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Book Your Algonquin Park Moose Photography Tour
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Limited to 4 photographers per boat. June dates are limited — reach out to secure your spot on this guided moose photography tour in Ontario.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact?tour=moose-photography-tours"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
            >
              Book This Tour
            </Link>
            <Link
              to="/tours/moose-photography-tours"
              className="inline-block px-10 py-4 border border-primary text-primary font-medium tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Full Tour Details
            </Link>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-10 bg-primary/60" />
      <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
  </div>
);

export default MooseOntarioAlgonquinLanding;