import { motion } from "framer-motion";
import profileImg from "@/assets/iqra.jpg";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 py-32 md:py-44 px-6 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
          About Me
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-6xl font-medium tracking-[-1px] mb-16">
          Who I <span className="font-serif-italic">Am</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div {...fadeUp(0.1)}>
            <div className="liquid-glass rounded-3xl p-3 inline-block">
              <img
                src={profileImg}
                alt="Iqra Hassan"
                width={512}
                height={512}
                className="rounded-2xl w-full max-w-sm object-cover aspect-square"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="space-y-6">
            <p className="text-hero-subtitle text-lg leading-relaxed">
              I'm <strong className="text-foreground">Iqra Hassan</strong>, a 20-year-old frontend
              developer and AI enthusiast from <strong className="text-foreground">Karachi, Sindh</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently enrolled in the <strong className="text-foreground/80">Governor Initiative of AI & Computing</strong>,
              I'm deeply passionate about building beautiful, responsive web applications
              and exploring the exciting world of artificial intelligence, machine learning, and deep learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love turning complex problems into elegant, user-friendly solutions.
              My goal is to bridge the gap between cutting-edge AI and intuitive frontend experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Location", value: "Karachi, Sindh" },
                { label: "Age", value: "20 Years" },
                { label: "Education", value: "GIAIC Student" },
                { label: "Focus", value: "Frontend & AI" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-medium mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
