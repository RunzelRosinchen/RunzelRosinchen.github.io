import { Camera } from "lucide-react";
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
    <section id="experience" className="relative py-32 px-6 overflow-visible">
      <div className="max-w-5xl mx-auto relative">
        <motion.a
          href="https://www.momentsandmedia.de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open momentsandmedia.de"
          className="group/marker absolute top-10 left-[72%] -translate-x-1/2 z-0"
          animate={{
            y: [0, -12, -10, -10, 22, 22, 0],
            x: [0, 0, -6, 6, 0, 0, 0],
            rotate: [0, 0, -6, 6, 0, 0, 0],
          }}
          whileHover={{
            y: -12,
            x: [0, -6, 6, -6, 6, 0],
            rotate: [0, -4, 4, -4, 4, 0],
            transition: {
              y: { duration: 0 },
              x: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
            },
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.14, 0.24, 0.34, 0.46, 0.86, 1] }}
        >
          <div className="relative">
            <div className="opacity-0 -translate-y-1 pointer-events-none transition-all duration-200 group-hover/marker:opacity-100 group-hover/marker:translate-y-0 absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap">
              <span className="font-mono text-xs border border-border bg-card text-foreground px-3 py-1 rounded-md shadow-sm">
                since 10.2024
              </span>
            </div>

            <div className="w-12 h-12 rounded-full border border-border bg-card/70 backdrop-blur flex items-center justify-center text-primary hover:text-foreground transition-colors">
              <Camera size={22} />
            </div>
          </div>
        </motion.a>

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
              className={`group relative ${
                idx === 0 ? "z-20 bg-background" : "z-10"
              } grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border hover:border-primary transition-colors`}
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
