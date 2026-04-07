import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import brandio from "@/assets/brandio.png"
import dfte from "@/assets/dfte.png"
import portfolio from "@/assets/portfolio.png"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const projects = [
  {
    title: "Brandio — AI Logo Generator",
    description:
      "An AI-powered brand identity engine that generates logo variations, color palettes, typography systems, and real-world mockups within seconds. Designed with a clean, premium UI and supports high-quality PNG & JPG exports in multiple sizes.",
    tech: ["Next.js", "Gemini API", "Tailwind CSS", "AI Integration"],
    image: brandio,
   
  },



  {
    title: "Gold Tier — Autonomous AI Employee (FTE)",
    description:
      "An AI ‘Digital Full-Time Employee’ that autonomously handles tasks, monitors apps, makes decisions, and delivers automated workflows like reporting and CEO briefings",
    tech: ["Claude Code","Obsidian","Python","MCP (Model Context Protocol)", "AI Agents", "Automation",
    ],
    image: dfte,
    
  },



  {
    title: "Portfolio Template Generator",
    description:
      "A dynamic portfolio generator that allows users to instantly create responsive portfolio websites with modern layouts and clean UI. Built for developers to quickly showcase their work.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    image: portfolio,
   
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-10 py-32 md:py-44 px-6 md:px-16 lg:px-28 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
          Projects
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-6xl font-medium tracking-[-1px] mb-16">
          My <span className="font-serif-italic">Work</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(0.1 + i * 0.1)}
              className="liquid-glass rounded-2xl overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    // href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {/* <Github size={16} /> GitHub */}
                  </a>
                  <a
                    // href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {/* <ExternalLink size={16} /> Live Demo */}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;