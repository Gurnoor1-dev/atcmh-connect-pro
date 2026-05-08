import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ctaBg from "../assets/cta-bg.jpg";

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
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Image Background */}
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* 
            Force a dark overlay so white text is always visible 
            Using 'bg-slate-950/70' or 'bg-black/60' ensures it stays dark in light mode
          */}
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              /* Changed text-primary-foreground to text-white/80 */
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white/80 text-xs font-medium mb-6"
            >
              <Sparkles size={14} />
              Start your journey today
            </motion.div>

            {/* Changed text-primary-foreground to text-white */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 sm:mb-6 leading-tight">
              Ready to Start Your
              <br />
              IFATC Journey?
            </h2>

            {/* Changed text-primary-foreground/60 to text-white/70 */}
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              Join our Discord community and take the first step towards controlling
              the Expert Server skies.
            </p>

            <a
              href="https://discord.gg/P3kcYbzTBU"
              target="_blank"
              rel="noopener noreferrer"
              /* 
                 For the button, I used bg-white text-black so it pops 
                 against the dark background regardless of theme 
              */
              className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-slate-950 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.98] transition-all"
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
