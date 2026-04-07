import { motion } from "framer-motion";
import { Code2, Brain, Layout, Database } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "AI Fundamentals"],
  },
  {
    icon: Database,
    title: "Tools & More",
    skills: ["Git", "Tailwind CSS", "Responsive Design", "REST APIs"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative z-10 py-32 md:py-44 px-6 md:px-16 lg:px-28 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
          Skills
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-6xl font-medium tracking-[-1px] mb-16">
          What I <span className="font-serif-italic">Know</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...fadeUp(0.1 + i * 0.08)}
              className="liquid-glass rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300"
            >
              <cat.icon className="text-foreground mb-4" size={28} strokeWidth={1.5} />
              <h3 className="font-semibold text-base text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
