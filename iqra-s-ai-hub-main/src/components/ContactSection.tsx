import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react"; // Fixed: Github instead of GitHub

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-32 md:py-44 px-6 md:px-16 lg:px-28 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
          Contact
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-6xl font-medium tracking-[-1px] mb-6">
          Let's <span className="font-serif-italic">Connect</span>
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech and AI.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          <motion.a
            {...fadeUp(0.15)}
            href="mailto:iqrasher142@gmail.com" // Fixed email
            className="liquid-glass rounded-2xl p-8 flex flex-col items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
          >
            <Mail size={28} strokeWidth={1.5} className="text-foreground" />
            <div>
              <p className="text-foreground font-medium">Email</p>
              <p className="text-muted-foreground text-sm mt-1">iqrasher142@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            {...fadeUp(0.2)}
            href="https://www.linkedin.com/in/iqra-hassan-a511b6302/"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-2xl p-8 flex flex-col items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
          >
            <Linkedin size={28} strokeWidth={1.5} className="text-foreground" />
            <div>
              <p className="text-foreground font-medium">LinkedIn</p>
              <p className="text-muted-foreground text-sm mt-1">linkedin.com/in/iqrahassan</p>
            </div>
          </motion.a>

          <motion.a
            {...fadeUp(0.25)}
            href="https://github.com/iqrahassan074"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-2xl p-8 flex flex-col items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
          >
            <Github size={28} strokeWidth={1.5} className="text-foreground" /> {/* Fixed icon */}
            <div>
              <p className="text-foreground font-medium">GitHub</p>
              <p className="text-muted-foreground text-sm mt-1">github.com/iqrahassan</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;