import { motion } from "framer-motion";
import erikImg from "@/assets/erik.jpg";

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

            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={erikImg}
                alt="Erik Bertelsen - Wildlife Photographer"
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
            <p className="text-foreground/80 leading-relaxed mb-6">I am Erik Bertelsen, a professional wildlife guide, photographer, and videographer, specializing in unique and wildlife-rich environments. From the Sub Arctic tundra to the wetlands of southern Ontario and the wild landscapes across Canada, I capture authentic wildlife moments through striking photography and immersive film.




            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              With years of field experience, I lead guided photography tours that offer safe,
              well-organized access to wild animals in their natural habitats—helping clients create
              powerful images while deepening their connection to the natural world.
            </p>

            <div>
              <h4 className="text-primary font-semibold mb-3 tracking-wider uppercase text-sm">
                Qualifications
              </h4>
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