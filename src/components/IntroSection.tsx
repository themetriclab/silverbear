import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light"
        >
          <span className="font-semibold text-foreground">Join small group wildlife photography tours</span>{" "}
          designed for passionate photographers who crave authentic, once-in-a-lifetime moments in nature.
          From rugged Arctic tundra to remote boreal landscapes, our guided expeditions focus on real
          wildlife encounters—not zoos, enclosures, or staged settings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-10">
            Why Photographers Travel With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Small Groups", desc: "Personalized experience with intimate group sizes" },
              { title: "Expert Guides", desc: "Led by experienced photography & wilderness guides" },
              { title: "Unscripted Moments", desc: "No game farms or fenced parks—real wild encounters" },
              { title: "All Skill Levels", desc: "Perfect for intermediate to advanced photographers" },
              { title: "Adventure & Art", desc: "Where adventure meets artistry in every location" },
              { title: "Natural Habitats", desc: "Polar bears, moose, foxes, loons & more in the wild" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="text-primary font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
