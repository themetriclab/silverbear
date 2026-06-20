import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Poster fallback (shows instantly while the video loads, and stays
          visible if autoplay is blocked, e.g. iOS Low Power Mode) */}
      <img
        src={heroPoster}
        alt="Wildlife photography in the Canadian wilderness"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/Header_Ai.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wide text-foreground text-shadow-hero"
        >
          Wildlife Photography Tours in Canada
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-foreground/80 font-light tracking-wide"
        >
          Capture the Wild Like Never Before
        </motion.p>
        <motion.a
          href="#tours"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 px-8 py-3 border-2 border-primary text-primary font-medium tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Explore Tours
        </motion.a>
      </div>

    </section>
  );
};

export default HeroSection;
