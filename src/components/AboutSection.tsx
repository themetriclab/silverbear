import { motion } from "framer-motion";
import erikPhoto from "@/assets/erik-winter-tundra-workshop-2.jpg.asset.json";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={erikPhoto.url}
                alt="Photographers on tripods shooting on the winter tundra during a Silver Bear Photo Tours workshop"
                className="w-full h-full object-cover"
                loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary/60" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">THE GUIDE/PHOTOGRAPHER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Hi, I'm Erik Bertelsen, a professional wildlife guide, photographer and videographer. If you're looking
              for your next wildlife photography tour, you're in the right place.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Through Silver Bear Photo Tours, I lead Algonquin wildlife photography tours and Churchill polar bear
              photography tours. As a working polar bear guard in Churchill, safety is built into everything I do. My
              tours are kept to small groups, with hands-on instruction and well-organized access to wildlife.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              In Churchill, I guide alongside Mike Bertelson and other trusted local guides. We follow all wildlife
              regulations and keep a respectful distance, so the animals are never disturbed or stressed and you get
              natural, unforced photos.
            </p>
            <div>
              <h3 className="text-primary font-semibold mb-3 tracking-wider uppercase text-sm">
                Qualifications
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Captain's License
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  St. John's Ambulance – First Aid
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  MED A3 – Marine First Aid
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};
export default AboutSection;
