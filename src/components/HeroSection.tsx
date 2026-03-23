import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative w-full max-w-5xl mx-auto text-center pt-8 sm:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs sm:text-sm tracking-[0.22em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-4 sm:mb-6">FRONTEND DEVELOPER


        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
          
          <span className="text-foreground">Rebecca</span>
          <br />
          <span className="text-gradient">Emmanuel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          
          Crafting digital experiences at the intersection of 
          <span className="text-primary"> design</span> and 
          <span className="text-primary"> engineering</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-8 font-mono text-xs sm:text-sm text-muted-foreground">
          
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <span className="text-border hidden sm:inline">—</span>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <span className="text-border hidden sm:inline">—</span>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <span className="text-border hidden sm:inline">—</span>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2">
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        
      </motion.div>
    </section>);

};

export default HeroSection;