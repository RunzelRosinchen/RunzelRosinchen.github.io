import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-8"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight"
        >
          Let's build something
          <br />
          <span className="text-gradient">extraordinary</span> together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:rebeccaemmanuel1995@gmail.com"
            className="px-8 py-4 bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm"
          >
            Say Hello
          </a>
          <a
            href="https://github.com/RunzelRosinchen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-foreground font-mono text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rebecca-emmanuel-5b8ba014a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-foreground font-mono text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 font-mono text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} — Designed & Built with care
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
