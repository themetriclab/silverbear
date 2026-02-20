import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Mountain, Camera, ChevronRight } from "lucide-react";
import { tours } from "@/data/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Tour Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const otherTours = tours.filter((t) => t.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-16">
          <Link
            to="/#tours"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Tours
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground max-w-4xl text-shadow-hero"
          >
            {tour.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-foreground/80 font-light max-w-2xl"
          >
            {tour.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Calendar, label: "When", value: tour.month },
            { icon: MapPin, label: "Where", value: tour.location },
            { icon: Clock, label: "Duration", value: tour.duration },
            { icon: Users, label: "Group Size", value: tour.groupSize },
            { icon: Mountain, label: "Difficulty", value: tour.difficulty },
            { icon: Camera, label: "Season", value: tour.season },
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Highlights */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Overview" title="Tour Highlights" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {tour.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                <ChevronRight size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-foreground/90 text-sm leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Animal Facts */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Wildlife" title="Animal Facts" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {tour.animalFacts.map((fact) => (
              <div key={fact.label} className="bg-card border border-border rounded-lg p-5">
                <p className="text-xs text-primary uppercase tracking-wider font-medium mb-1">{fact.label}</p>
                <p className="text-foreground text-sm font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Migration Info */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader label="Migration" title={tour.migrationInfo.title} />
            <p className="text-muted-foreground leading-relaxed mt-6">{tour.migrationInfo.content}</p>
          </div>
          <div>
            <SectionHeader label="Photography" title={tour.whyPhotograph.title} />
            <p className="text-muted-foreground leading-relaxed mt-6">{tour.whyPhotograph.content}</p>
          </div>
        </motion.section>

        {/* What to Expect */}
        <motion.section {...fadeUp} className="bg-card border border-border rounded-xl p-8 md:p-12">
          <SectionHeader label="Experience" title={tour.whatToExpect.title} />
          <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">{tour.whatToExpect.content}</p>
        </motion.section>

        {/* Gear Tips */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Preparation" title="Recommended Gear" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {tour.gearTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-5">
                <Camera size={16} className="text-primary mt-0.5 shrink-0" />
                <p className="text-foreground/90 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeUp} className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to Capture the Wild?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Secure your spot on the {tour.title}. Limited to {tour.groupSize} per expedition.
          </p>
          <Link
            to={`/contact?tour=${tour.slug}`}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
          >
            Book This Tour
          </Link>
        </motion.section>

        {/* Other Tours */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Explore" title="Other Expeditions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {otherTours.map((t) => (
              <Link
                key={t.slug}
                to={`/tours/${t.slug}`}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-primary font-medium tracking-wider uppercase mb-1">{t.month}</p>
                  <h3 className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t.title}
                  </h3>
                </div>
              </Link>
            ))}
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

export default TourDetail;
