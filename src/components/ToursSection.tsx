import { motion } from "framer-motion";
import loonImg from "@/assets/loon-chick.jpg";
import mooseImg from "@/assets/moose.jpg";
import polarBearImg from "@/assets/polar-bear.jpg";
import waterfowlImg from "@/assets/waterfowl.jpg";
import swanImg from "@/assets/swan.jpg";

const tours = [
  {
    title: "Loons & Chicks Photography Tours",
    description:
      "Capture loons and their chicks amid misty landscapes and calm waters, while mastering low-light photography with an expert guide.",
    image: loonImg,
    link: "https://wildlifediscovered.ca/loon-photography-tours/",
  },
  {
    title: "Algonquin Park Photography Tours",
    description:
      "A guided wildlife photo tour by boat in Ontario's Algonquin Park. Capture moose, loons, beavers, and more in their natural habitat.",
    image: mooseImg,
    link: "https://wildlifediscovered.ca/algonquin-park-photography-tours/",
  },
  {
    title: "Polar Bear Photography Tours",
    description:
      "Join a polar bear photography tour in the Arctic tundra and capture these majestic animals along with other Arctic wildlife.",
    image: polarBearImg,
    link: "https://wildlifediscovered.ca/polar-bear-photography-tour/",
  },
  {
    title: "Ontario Waterfowl Photography Tours",
    description:
      "Capture stunning images of ducks, swans, ospreys, and other birdlife in calm natural settings across southern Ontario's wetlands.",
    image: waterfowlImg,
    link: "https://wildlifediscovered.ca/ontario-waterfowl-photography-tours/",
  },
  {
    title: "Swan & Cygnet Photography Tour",
    description:
      "Capture graceful swans and their babies up close in calm, scenic wetlands—perfect for creating soft, intimate wildlife images.",
    image: swanImg,
    link: "https://wildlifediscovered.ca/swan-and-cygnets-photography-tours/",
  },
];

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
            <motion.a
              key={tour.title}
              href={tour.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tour.description}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
