import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="font-mono text-sm tracking-[0.3em] uppercase text-primary sticky top-24">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6">
          
          <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-foreground">I'm a developer with love for UX design who believes that great software is built where 

            <span className="text-primary"> empathy meets engineering</span>.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            With a passion for intuitive interfaces, I specialize in 
            building products that people actually enjoy using. I approach every project 
            with a user-first mindset, balancing aesthetic appeal with robust, scalable and maintainable code.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            When I'm not shipping features, you'll find me outside exploring the world with my kids or through my camera lens, dancing ballett and jazz or enjoying a good book.   
          </p>

          <div className="pt-6 grid grid-cols-2 gap-8 border-t border-border">
            <div>
              <p className="font-mono text-3xl font-bold text-primary">6+</p>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold text-primary">20+</p>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;