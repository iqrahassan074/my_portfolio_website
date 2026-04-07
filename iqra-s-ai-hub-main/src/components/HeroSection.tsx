import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-muted-foreground text-sm tracking-[3px] uppercase mb-6">
          Frontend Developer & AI Enthusiast
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6"
        >
          Hi, I'm{" "}
          <span className="font-serif-italic">Iqra Hassan</span>
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-lg text-hero-subtitle max-w-2xl mx-auto mb-10">
          A passionate frontend developer and AI enthusiast from Karachi, building
          modern web experiences and exploring the frontiers of artificial intelligence.
        </motion.p>
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-foreground text-background rounded-full px-8 py-3.5 font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="liquid-glass rounded-full px-8 py-3.5 font-medium text-sm text-foreground"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
