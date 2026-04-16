import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const floatingItems = [
  { text: "Mentor Sessions", x: "10%", y: "25%", delay: 1.2 },
  { text: "Written Exam", x: "75%", y: "20%", delay: 1.6 },
  { text: "Mock Practical", x: "80%", y: "65%", delay: 2.0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          src={heroBg}
          alt="Airport control tower at sunset"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Floating tags - desktop only */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: item.delay }}
          className="hidden lg:block absolute z-10"
          style={{ left: item.x, top: item.y }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
            className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-full text-primary-foreground/70 text-xs font-medium"
          >
            {item.text}
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-md text-primary-foreground/90 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            ATCMH — Your Path to IFATC
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground leading-[1.08] mb-5 sm:mb-7"
        >
          Control the
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
              Expert Server
            </span>
          </span>
          <br />
          Skies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-primary-foreground/60 mb-8 sm:mb-10 font-light leading-relaxed"
        >
          An independent mentorship service helping aspiring IFATC obtain the
          skills and knowledge to excel in Infinite Flight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-xl text-sm sm:text-base font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50"
          >
            Join Our Discord
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-primary-foreground/8 text-primary-foreground border border-primary-foreground/15 rounded-xl text-sm sm:text-base font-semibold backdrop-blur-md hover:bg-primary-foreground/15 transition-all"
          >
            Learn More
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-14 sm:mt-20 flex items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: "100+", label: "Mentored" },
            { value: "3", label: "Programs" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl font-display font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-primary-foreground/40 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] text-primary-foreground/30 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-primary-foreground/40" size={20} />
      </motion.a>
    </section>
  );
}
