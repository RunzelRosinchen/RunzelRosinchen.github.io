import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Stencil.js", "Flutter", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js"],
  },
  {
    title: "Design",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Adobe Photoshop", "Adobe InDesign", "Adobe Lightroom"],
  },
  {
    title: "Tools & Methods",
    skills: ["Git", "CI/CD", "Agile/Scrum", "Testing/QAs", "Headless CMS", "Accessibility"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-16"
        >
          Technologies & Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="font-mono text-xs text-primary">0{catIdx + 1}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-border bg-secondary font-mono text-xs text-secondary-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
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
