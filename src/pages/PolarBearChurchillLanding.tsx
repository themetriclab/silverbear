import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Camera, Check, HelpCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import polarBearImg from "@/assets/polar-bear.jpg";

import pbFoxSunset from "@/assets/polar-bear/arctic-fox-sunset-2.jpg";
import pbHareSnow from "@/assets/polar-bear/arctic-hare-snow.jpg";
import pbMomCubStorm from "@/assets/polar-bear/mom-cub-snowstorm-2.jpg";
import pbMaleSunset from "@/assets/polar-bear/male-sunset.jpg";
import pbMotherCubs from "@/assets/polar-bear/mother-cubs.jpg";
import pbYoungBearRock from "@/assets/polar-bear/young-bear-rock-2.jpg";
import pbBearsFighting from "@/assets/polar-bear/bears-fighting.jpg";
import pbBearFrostyGrass from "@/assets/polar-bear/bear-frosty-grass.jpg";
import pbPtarmigan from "@/assets/polar-bear/ptarmigan-close.jpg";

const sliderImages = [pbMotherCubs, pbMaleSunset, pbBearsFighting, pbMomCubStorm, pbYoungBearRock, pbBearFrostyGrass, pbFoxSunset, pbHareSnow, pbPtarmigan];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    question: "When is the best time to photograph polar bears in Churchill?",
    answer:
      "October and November are the peak months for a Churchill polar bear photography tour. Roughly 1,000 polar bears congregate along the western coast of Hudson Bay near Churchill, Manitoba — the polar bear capital of the world — waiting for the sea ice to form before dispersing onto the bay to hunt seals.",
  },
  {
    question: "Is this a polar bear photography workshop or a sightseeing tour?",
    answer:
      "This is a true polar bear photography workshop. Group size is capped at 5 photographers, and your licensed Manitoba guide gives in-field instruction on camera settings, composition, exposure for snow and Arctic light, telephoto technique, and ethical wildlife viewing throughout each session.",
  },
  {
    question: "How is this different from a tundra buggy tour?",
    answer:
      "Unlike elevated tundra buggies, our Churchill polar bear photography tour puts you at ground level — eye to eye with wild polar bears. Ground-level perspective produces dramatically more powerful and intimate images of polar bears in their natural Arctic environment.",
  },
  {
    question: "What other Arctic wildlife can I photograph in Churchill?",
    answer:
      "Beyond polar bears, photographers regularly capture arctic fox, cross fox, silver fox, red fox, arctic hare, willow and rock ptarmigan, and occasionally snowy owls, gyrfalcons, wolves, and wolverine. Clear nights also bring outstanding northern lights photography over the Hudson Bay tundra.",
  },
  {
    question: "What camera gear should I bring on a Churchill polar bear photo tour?",
    answer:
      "Bring a 300–600mm telephoto for polar bears and Arctic wildlife, a wide-angle lens for tundra landscapes and northern lights, two camera bodies for quick lens changes, a sturdy tripod, and plenty of spare batteries — the cold drains them quickly. Cold-weather clothing is essential for temperatures from +2°C down to -20°C.",
  },
  {
    question: "Is ground-level polar bear viewing safe?",
    answer:
      "Yes — when guided properly. We operate under full Manitoba WMA permits with a licensed guide who has 15 years of polar bear field experience reading bear behaviour. Our small group of 5 photographers shares door access to a 4×4 van for quick re-entry whenever a bear approaches.",
  },
  {
    question: "How do I book this Churchill polar bear photography tour?",
    answer:
      "Reach out through our contact page to check current availability for October and November departures. A non-refundable $2,000 CAD deposit secures your spot, with the balance due 90 days before departure.",
  },
];

const PolarBearChurchillLanding = () => {
  const siteUrl = "https://silverbearphototours.com";
  const path = "/polar-bear-photography-tours-churchill-manitoba";
  const absoluteImage = `${siteUrl}${polarBearImg}`;

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
      { "@type": "ListItem", position: 2, name: "Polar Bear Photography Tours in Churchill, Manitoba", item: `${siteUrl}${path}` },
    ],
  };
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Polar Bear Photography Tours in Churchill, Manitoba",
    description:
      "Guided polar bear photography tour in Churchill, Manitoba — small group, ground-level, with expert wildlife photography instruction.",
    image: absoluteImage,
    brand: { "@type": "Brand", name: "Silver Bear Photo Tours" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Polar Bear Photography Tours in Churchill, Manitoba"
        description="Join a guided polar bear photography tour in Churchill, Manitoba. Photograph wild polar bears with expert guidance, small groups, and ethical wildlife viewing."
        path={path}
        image={absoluteImage}
        type="product"
        jsonLd={[productLd, breadcrumbLd, faqLd]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        <img
          src={polarBearImg}
          alt="Wild polar bear photographed at ground level near Churchill, Manitoba on the shores of Hudson Bay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-16">
          <p className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Polar Bear Capital of the World
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground max-w-4xl text-shadow-hero"
          >
            Polar Bear Photography Tours in Churchill, Manitoba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-foreground/80 font-light max-w-2xl"
          >
            Photograph wild polar bears at ground level on a small-group, photography-focused expedition to Churchill, Manitoba — guided by a licensed Arctic wildlife photography guide.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact?tour=polar-bear-photography-tour"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
            >
              Book This Tour <ArrowRight size={16} />
            </Link>
            <Link
              to="/tours/polar-bear-photography-tour"
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
            { icon: MapPin, label: "Where", value: "Churchill, Manitoba" },
            { icon: Calendar, label: "When", value: "October – November" },
            { icon: Users, label: "Group Size", value: "5 Photographers" },
            { icon: Camera, label: "Focus", value: "Ground-Level Photography" },
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
        {/* H2: Photograph Wild Polar Bears in Churchill */}
        <motion.section {...fadeUp} className="max-w-4xl">
          <SectionHeader label="The Experience" title="Photograph Wild Polar Bears in Churchill" />
          <div className="space-y-5 text-muted-foreground leading-relaxed mt-6">
            <p>
              Each autumn, roughly 1,000 polar bears gather along the western shore of Hudson Bay near Churchill, Manitoba — the polar bear capital of the world. They wait on the tundra for the sea ice to form so they can return to hunt ring and bearded seals. For wildlife photographers, this is the single greatest opportunity on Earth to photograph wild polar bears in their natural environment.
            </p>
            <p>
              Our Churchill polar bear photography tour puts you on the ground, eye-to-eye with the Arctic's apex predator, with a licensed Manitoba guide and a maximum of five photographers. This is a true polar bear photo expedition built for image-makers — not a sightseeing tour with photography tacked on.
            </p>
          </div>
        </motion.section>

        <section className="-mx-6 overflow-hidden">
          <ImageAutoSlider images={sliderImages} />
        </section>

        {/* H2: A Photography-Focused Polar Bear Tour */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Built for Photographers" title="A Photography-Focused Polar Bear Tour" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {[
              "Small group polar bear photography tour — capped at 5 photographers per departure for an intimate experience",
              "Ground-level perspective from a licensed 4×4 van with door access for every guest",
              "Personalised in-field guidance on camera settings, exposure, composition, and Arctic light",
              "Licensed Manitoba polar bear guide with 15 years of field experience and full WMA permits",
              "Ethical polar bear viewing — bear behaviour read in real time to keep distance respectful and safe",
              "Cold-weather and snow photography coaching tailored to the Hudson Bay tundra",
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

        {/* H2: Why Churchill */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader label="Location" title="Why Churchill Is One of the Best Places to Photograph Polar Bears" />
            <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
              <p>
                Churchill, Manitoba sits at the meeting point of Arctic tundra, boreal forest, and the salty waters of Hudson Bay. Its unique geography concentrates polar bears along a narrow strip of coast each autumn — making it the most reliable place in Canada to photograph polar bears in the wild.
              </p>
              <p>
                It is also one of the only places on Earth where photographers can stand on the same ground as the bears with proper licensed supervision. Combined with low golden Arctic light that lasts all day long in October and November, the result is a Canadian Arctic wildlife photography tour with no real equivalent.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader label="Best Light" title="Best Time for Polar Bear Photography in Churchill" />
            <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
              <p>
                The Churchill polar bear tour season runs from early October through mid-November. October offers more cooperative weather, larger numbers of bears on land, and dramatic side-lighting from the low Arctic sun. November brings the first snow and frost — perfect for moody, cold-weather polar bear images and increased northern lights opportunities on clear nights.
              </p>
              <p>
                Summer Churchill viewing also exists for beluga whales in the Churchill River, but for serious polar bear photography Canada has no equal to the October–November congregation at Hudson Bay.
              </p>
            </div>
          </div>
        </motion.section>

        {/* H2: What You'll Learn */}
        <motion.section {...fadeUp} className="bg-card border border-border rounded-xl p-8 md:p-12">
          <SectionHeader label="Instruction" title="What You'll Learn on This Photography Tour" />
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-8">
            {[
              "Exposure for snow, frost, and bright Arctic light",
              "Reading polar bear behaviour to anticipate the next frame",
              "Composition for wildlife — negative space, environmental context, eye-level intimacy",
              "Telephoto technique and handheld stability in cold weather",
              "Northern lights photography — settings, focus, and foreground composition",
              "Camera and battery care in sub-zero conditions",
            ].map((tip) => (
              <div key={tip} className="flex items-start gap-3">
                <Check size={16} className="text-primary mt-1 shrink-0" />
                <p className="text-foreground/90 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* H2: Camera gear */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Preparation" title="What Camera Gear to Bring" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {[
              "300–600mm telephoto lens — your most-used focal range for polar bears, arctic fox, and ptarmigan",
              "Wide-angle lens for tundra landscapes and northern lights over Hudson Bay",
              "Two camera bodies for fast lens changes when bears or foxes move quickly",
              "Sturdy tripod for low light, long lenses, and aurora sequences",
              "Extra batteries — cold weather drains them rapidly",
              "Layered cold-weather clothing for temperatures from +2°C to -20°C",
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

        {/* H2: Ethical Wildlife Photography */}
        <motion.section {...fadeUp} className="max-w-4xl">
          <SectionHeader label="Ethics" title="Ethical Wildlife Photography in the Arctic" />
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
            <p>
              Polar bears are a protected species and Churchill is their home. Every Silver Bear Photo Tours polar bear expedition follows strict Manitoba WMA protocols for safe polar bear viewing — keeping bears wild, undisturbed, and behaving naturally. We never bait, call in, or pressure animals for a frame.
            </p>
            <p>
              Our guide carries the permits and the experience to read bear behaviour in real time, ensuring distance and timing that protect both the bears and our small group. Ethical polar bear viewing produces stronger photographs and a healthier population for future photographers to enjoy.
            </p>
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
            Book Your Churchill Polar Bear Photography Tour
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Limited to 5 photographers per departure. October and November dates fill quickly — reach out to secure your spot on this guided polar bear photo expedition in Canada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact?tour=polar-bear-photography-tour"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
            >
              Book This Tour
            </Link>
            <Link
              to="/tours/polar-bear-photography-tour"
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

export default PolarBearChurchillLanding;