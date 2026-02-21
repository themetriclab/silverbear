import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { tours } from "@/data/tours";
import DiagonalSplitImage from "@/components/DiagonalSplitImage";

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/60" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Expeditions</span>
            <div className="h-px w-16 bg-primary/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Guided Photography Tours
          </h2>
        </div>

        {/* Tours grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
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
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
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
  );
};

export default ToursSection;
