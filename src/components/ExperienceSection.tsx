import { motion } from "framer-motion";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Developer",
    company: "Tech Company",
    description: "Leading frontend architecture and design system initiatives. Building performant, accessible web applications with React and TypeScript.",
  },
  {
    period: "2020 — 2022",
    role: "UX Developer",
    company: "Design Studio",
    description: "Bridged the gap between design and development. Created interactive prototypes and implemented pixel-perfect interfaces from Figma designs.",
  },
  {
    period: "2019 — 2020",
    role: "Full Stack Developer",
    company: "Startup Inc.",
    description: "Built MVPs from scratch, handling everything from database design to deployment. Shipped features that helped grow the user base 3x.",
  },
  {
    period: "2018 — 2019",
    role: "Junior Developer",
    company: "Agency Co.",
    description: "Developed responsive websites and web applications for various clients. First exposure to professional software development workflows.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border hover:border-primary transition-colors"
            >
              <p className="font-mono text-xs text-muted-foreground tracking-wider">
                {exp.period}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-primary mt-1">{exp.company}</p>
                <p className="text-secondary-foreground mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
