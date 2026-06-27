import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Compass, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import erikImg from "@/assets/erik.jpg";

const SITE_URL = "https://silverbearphototours.com";

const qualifications = [
  "Captain's License",
  "St. John's Ambulance – First Aid",
  "MED A3 – Marine First Aid",
];

const AboutPage = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Erik Bertelsen",
      jobTitle: "Wildlife Photography Guide & Photographer",
      worksFor: {
        "@type": "Organization",
        name: "Silver Bear Photo Tours",
        url: SITE_URL,
      },
      knowsAbout: [
        "Wildlife photography",
        "Polar bear photography",
        "Moose photography",
        "Algonquin Park",
        "Churchill, Manitoba",
      ],
      image: `${SITE_URL}/og-image.jpg`,
      url: `${SITE_URL}/about`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About Erik Bertelsen | Silver Bear Photo Tours Guide"
        description="Meet Erik Bertelsen, the professional wildlife guide and photographer behind Silver Bear Photo Tours — leading small-group polar bear, moose, and loon photography tours across Canada."
        path="/about"
        image={`${SITE_URL}/og-image.jpg`}
        jsonLd={[personLd, breadcrumbLd]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/60" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              The Guide / Photographer
            </span>
            <div className="h-px w-16 bg-primary/60" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            About Erik Bertelsen
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Professional wildlife guide, photographer, and videographer — and the
            person behind every Silver Bear Photo Tours expedition across Canada.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={erikImg}
                alt="Erik Bertelsen, wildlife photographer and guide at Silver Bear Photo Tours"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A Lifetime in the Field
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              I am Erik Bertelsen, a professional wildlife guide, photographer, and
              videographer, specializing in unique and wildlife-rich environments. From
              the Sub Arctic tundra of Churchill, Manitoba to the wetlands of southern
              Ontario and the wild landscapes across Canada, I capture authentic wildlife
              moments through striking photography and immersive film.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              With years of field experience, I lead guided wildlife photography tours —
              including Algonquin Park wildlife photography tours and Churchill, Manitoba
              polar bear photography tours — that offer safe, well-organized access to wild
              animals in their natural habitats. Silver Bear Photo Tours is built around
              small groups, hands-on instruction, and best-in-class guiding, helping clients
              create powerful images while deepening their connection to the natural world.
            </p>
            <div>
              <h3 className="text-primary font-semibold mb-3 tracking-wider uppercase text-sm">
                Qualifications
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Compass,
              title: "Small Groups, Real Access",
              text: "Every tour is intentionally small — for ground-level access, better angles, and an unhurried experience around the wildlife.",
            },
            {
              icon: Camera,
              title: "Hands-On Instruction",
              text: "From camera settings to composition and ethical fieldcraft, I'm beside you the whole way to help you bring home stronger images.",
            },
            {
              icon: Award,
              title: "Ethical Guiding",
              text: "We never bait, call in, or pressure animals. Respectful, low-impact viewing makes for healthier wildlife and better photographs.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-xl p-6">
              <v.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Ready to photograph the wild?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Explore the tours or get in touch to plan your next wildlife photography
          adventure across Canada.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/tours"
            className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-all rounded-full"
          >
            View Tours
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-primary text-primary text-sm font-medium tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all rounded-full"
          >
            Contact Erik
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;