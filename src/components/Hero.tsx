import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Airport control tower at sunset" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
            ATCMH — Your Path to IFATC
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-navy-foreground leading-[1.05] mb-6"
        >
          Control the
          <br />
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Expert Server
          </span>
          <br />
          Skies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-navy-foreground/70 mb-10 font-light"
        >
          We are an independent mentorship service helping aspiring IFATC obtain the
          skills and knowledge to excel in Infinite Flight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl text-base font-semibold hover:opacity-90 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
          >
            Join Our Discord to Enroll
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 text-navy-foreground border border-white/20 rounded-xl text-base font-semibold backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-navy-foreground/50" size={28} />
      </motion.div>
    </section>
  );
}
