import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-accent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,255,255,0.06),transparent_60%)]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur text-primary-foreground/80 text-xs font-medium mb-6"
            >
              <Sparkles size={14} />
              Start your journey today
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-5 sm:mb-6 leading-tight">
              Ready to Start Your
              <br />
              IFATC Journey?
            </h2>
            <p className="text-primary-foreground/60 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              Join our Discord community and take the first step towards controlling
              the Expert Server skies.
            </p>
            <a
              href="https://discord.gg/P3kcYbzTBU"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-card text-foreground rounded-xl text-sm sm:text-base font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all shadow-2xl"
            >
              Join Our Discord
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
