import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, HelpCircle, MapPin, Users } from "lucide-react";
import { tours } from "@/data/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import DiagonalSplitImage from "@/components/DiagonalSplitImage";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const SITE_URL = "https://silverbearphototours.com";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-4 mb-6">
    <div className="h-px w-16 bg-primary/60" />
    <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">{children}</span>
    <div className="h-px w-16 bg-primary/60" />
  </div>
);

const quickFacts = [
  { value: "Maximum 4", label: "Photographers in every Ontario group, so nobody waits behind a crowd of tripods" },
  { value: "5", label: "Photographers on the Churchill polar bear expedition, plus your guide" },
  { value: "Eye level", label: "Water-level boats and ground-level Arctic shooting, not shoreline or vehicle glass" },
  { value: "Since 1997", label: "Guided by professional photographer Erik Bertelsen on every departure" },
];

const chooseCopy: Record<string, { bestFor: string; planFor: string }> = {
  "ontario-waterfowl-photography-tours": {
    bestFor: "Flight shots, low-angle water work, and a first small-group tour. Spring migration fills the water with tundra swans, diving ducks, osprey, and terns.",
    planFor: "Two to four days in Southern Ontario with a maximum of four photographers, open to all levels.",
  },
  "algonquin-park-wildlife-photography-tour": {
    bestFor: "A full boreal park week in one trip: moose on lily pads, bald eagles, loons, beaver, and otter from the same boat.",
    planFor: "Three to six days in Algonquin Park with a maximum of four photographers, open to all levels. Park permit required.",
  },
  "moose-photography-tours": {
    bestFor: "A single day spent doing one thing well, following moose as they feed and submerge in the shallows at close range.",
    planFor: "Seven hours on the water, maximum of four photographers, breakfast included and lunch on your own. All levels.",
  },
  "loon-photography-tours": {
    bestFor: "Chicks riding on a parent's back, mist on still water, and patient close work with the most photographed bird in Canada.",
    planFor: "Two to six days in Northern Ontario, two and a half hours north of Toronto, maximum of four photographers. All levels.",
  },
  "polar-bear-photography-tour": {
    bestFor: "The headline trip: polar bears photographed on the ground at eye level, plus arctic fox, snowy owl, ptarmigan, and northern lights.",
    planFor: "Five to eight days in Churchill, Manitoba with five photographers. Intermediate to advanced, with serious cold weather gear.",
  },
};

const chooseOrder = [
  "ontario-waterfowl-photography-tours",
  "algonquin-park-wildlife-photography-tour",
  "moose-photography-tours",
  "loon-photography-tours",
  "polar-bear-photography-tour",
];

const faqs = [
  {
    question: "How big are the groups?",
    answer:
      "Four photographers on every Ontario tour and five on the Churchill polar bear expedition, plus Erik. Small enough that you get help with your own settings and position rather than general instruction from the back of a vehicle, and the boat never gets crowded.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Guiding, photography instruction, and the permits needed to work where we work are always part of it, and most Ontario tours include a light breakfast. Churchill adds a private lodge room, continental breakfasts, and ground transport on the tundra. Every tour page lists exactly what is included and what is not, because the Ontario tours and the Arctic expedition are set up differently.",
  },
  {
    question: "When should I book?",
    answer:
      "As soon as your dates are firm. Each group is four or five people and the wildlife windows are short, so a departure can be full months ahead. If the tour you want is showing as full or not currently running, send a note through the contact page and we will tell you what is still possible that season.",
  },
  {
    question: "What gear and experience do I need?",
    answer:
      "Most Ontario tours are open to all levels. Bring a camera you can run in manual or aperture priority, a telephoto from about 70 to 300mm or longer, and a monopod or tripod if you own one. Churchill is built for intermediate and advanced photographers and wants a 300 to 600mm lens plus cold weather clothing for temperatures down to about minus 20. Each tour page has a gear section with the specifics for that trip.",
  },
];

const Tours = () => {
  const listedTours = tours.filter((t) => !t.gallerySlug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Photography Tours", item: `${SITE_URL}/tours` },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listedTours.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/tours/${t.slug}`,
      name: t.title,
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Wildlife Photography Tours Ontario & Churchill Polar Bear Tours"
        description="Small-group wildlife photography tours in Ontario and Churchill polar bear photography tours: Algonquin moose by boat, loons, waterfowl and ground-level polar bears. Expert guiding since 1997."
        path="/tours"
        type="website"
        jsonLd={[breadcrumbLd, itemListLd, faqLd]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/60" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Expeditions</span>
            <div className="h-px w-16 bg-primary/60" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Wildlife Photography Tours in Canada
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Silver Bear Photo Tours runs small-group, guide-led <strong className="text-foreground font-medium">wildlife photography tours</strong> across
            Canada — from ground-level <strong className="text-foreground font-medium">polar bear photography tours</strong> in{" "}
            <strong className="text-foreground font-medium">Churchill, Manitoba</strong> to intimate{" "}
            <strong className="text-foreground font-medium">moose photography tours in Algonquin Park</strong>,{" "}
            <strong className="text-foreground font-medium">loon photography tours</strong>, and waterfowl photography workshops. Every tour is led
            by professional guide Erik Bertelsen, with decades of experience and Silver Bear's trusted best-in-class guiding since 1997.
          </p>
        </div>
      </section>

      {/* Why our tours are different — unique supporting copy, kept in plain HTML so crawlers read it */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <SectionLabel>Why Silver Bear</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              What Makes a Silver Bear Photography Tour Different
            </h2>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-5 text-lg">
            <p>
              Every tour we run starts from one idea: get close enough that the animal is still the subject and the frame still feels
              honest. That means small groups, boats designed for photography rather than for sightseeing, and a guide who already knows
              where the wildlife is working this week. Most of our expeditions cap at four photographers and the Churchill polar bear tour
              runs five, so you are never waiting behind fifteen tripods or being handed a pair of binoculars and pointed at the treeline.
            </p>
            <p>
              The access is the other half of it. Our Ontario tours work from purpose-built flat-bottom boats with swivel seats mounted on
              the centreline, which puts your lens at water level with a moose, a loon, or a swan instead of looking down on them from the
              shore. In Churchill we get out of the vehicle and photograph polar bears on the ground, eye to eye, which is the frame most
              visitors never get from a tour bus window.
            </p>
            <p>
              And the wildlife is genuinely wild. No game farms, no enclosures, no baited or staged setups. Some days the animals cooperate
              and some days they do not, and that is the trade you make for photographs that are real. Erik Bertelsen has guided these
              waterways and the edge of the Arctic tundra for decades, and each day is planned around weather, light, and animal behaviour
              rather than a printed schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {quickFacts.map((fact) => (
              <div key={fact.value} className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300">
                <div className="text-primary font-display font-semibold text-xl mb-2">{fact.value}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listedTours.map((tour, i) => (
              <motion.div
                key={tour.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/tours/${tour.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 h-full"
                >
                  <div className="relative overflow-hidden aspect-[3/2]">
                    {tour.image2 ? (
                      <DiagonalSplitImage
                        image1={tour.image}
                        image2={tour.image2}
                        alt={tour.title}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-primary text-xs font-medium tracking-wider uppercase">{tour.month}</span>
                    </div>
                    <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {tour.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tour.description}
                    </p>
                    <span className="inline-block mt-4 text-primary text-sm font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO copy block */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Guided Photography Tours Across Canada
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Whether you're searching for a <strong className="text-foreground font-medium">polar bear tour for photographers</strong> near
              Churchill, Manitoba, an <strong className="text-foreground font-medium">Algonquin wildlife photography tour</strong> to photograph
              moose and loons, or a dedicated <strong className="text-foreground font-medium">photo tour in Algonquin for moose</strong>, Silver
              Bear Photo Tours builds every expedition around small groups and serious photographers. Our{" "}
              <strong className="text-foreground font-medium">Churchill Manitoba photography tours</strong> are designed for ground-level access
              and intimate wildlife encounters that larger operators simply can't offer.
            </p>
            <p>
              Each tour page below includes detailed trip information — wildlife behaviour, best months to shoot, gear recommendations, pricing,
              and frequently asked questions — so you know exactly what to expect before you book.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose your tour */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <SectionLabel>Planning</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">How to Choose Your Tour</h2>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto text-center mb-14">
            <p>
              Three things decide most of it: the month you can travel, the animal you most want in your portfolio, and how much cold and
              distance you are happy to handle. If your dates are fixed, work backwards from the season. If there is one photograph you have
              been chasing, pick the tour that puts you closest to it.
            </p>
            <p>
              Every trip runs in a narrow window, because the behaviour we photograph only happens for a few weeks a year. That is why the
              calendar matters more than the checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chooseOrder.map((slug) => {
              const tour = tours.find((t) => t.slug === slug);
              const copy = chooseCopy[slug];
              if (!tour || !copy) return null;
              return (
                <Link
                  key={slug}
                  to={`/tours/${tour.slug}`}
                  className="group block h-full bg-card border border-border rounded-lg p-7 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-medium tracking-wider uppercase">
                      <Calendar size={12} />
                      {tour.month}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{copy.bestFor}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-5">{copy.planFor}</p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Users size={13} className="text-primary" />
                      {tour.groupSize}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-primary" />
                      {tour.difficulty}
                    </span>
                    <span className="text-primary text-xs font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-block">
                      Tour Details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <SectionLabel>Good to Know</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Questions Photographers Ask Before Booking
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <SpotlightCard key={f.question} className="p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <h3 className="text-foreground font-medium">{f.question}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">{f.answer}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-5">
              Still not sure which tour fits your dates and your gear?
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded transition-colors hover:bg-primary/90"
            >
              Ask Erik a Question
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
