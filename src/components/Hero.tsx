// src/components/Hero.tsx
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = aboutSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <img 
          src={heroBg} 
          className="w-full h-full object-cover blur-[2px] opacity-40 scale-105" 
          alt="Background"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          Control the <span className="text-primary">Expert Server</span> Skies
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Professional mentorship for aspiring Infinite Flight Air Traffic Controllers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
             onClick={scrollToAbout}
             className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      {/* Centered Stats */}
      <div className="mt-20 grid grid-cols-3 gap-8 md:gap-12 border-t border-border/50 pt-10 w-full max-w-2xl">
        <div className="flex flex-col items-center">
          <p className="text-2xl md:text-3xl font-bold">700+</p>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Members</p>
        </div>
        <div className="flex flex-col items-center border-x border-border/50">
          <p className="text-2xl md:text-3xl font-bold">150+</p>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Graduates</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl md:text-3xl font-bold text-primary">FREE</p>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Services</p>
        </div>
      </div>

      {/* PROPERLY CENTERED Scroll Indicator */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center">
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to About"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.button>
      </div>
    </section>
  );
}
