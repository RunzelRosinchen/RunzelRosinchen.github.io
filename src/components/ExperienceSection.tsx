import { motion } from "framer-motion";

const experiences = [
  {
    period: "04.2025 - today",
    role: "Frontend Engineer & UX Design",
    company: "PSIORI GmbH",
    description: "Creation of UX concepts for a range of new features and applications for internal and client projects, and their implementation on the frontend primarily using Flutter and Vue.js.",
  },
  {
    period: "04.2022 - 03.2025",
    role: "Frontend Engineer",
    company: "Virtual Identity AG",
    description: "Tech Lead for Corporate Website relaunch for a client in the finance industry. Mentoring new colleagues during internal onboarding. Realization and maintenace of company internal Frontend Knowledge Hub.",
  },
  {
    period: "04.2020 — 03.2022",
    role: "Junior Frontend Engineer",
    company: "Virtual Identity AG",
    description: "Frontend development in new and existing web projects with mainly React and Stencil.js. Setup of company wide used component library boilerplate for initialisation of new projects.",
  },
  {
    period: "12.2017 — 03.2019",
    role: "Working Student",
    company: "Virtual Identity AG",
    description: "Project management support, CMS maintenance, QA/Testing, Chatbot training",
  },
  {
    period: "08.2013 — 04.2017",
    role: "Research Assistant",
    company: "Fraunhofer IWM",
    description: "Data acquisition, data analysis & administrative tasks",
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
