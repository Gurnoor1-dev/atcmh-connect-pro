import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, AlertTriangle, Shield, Sparkles } from "lucide-react";

const requirements = [
  "Must be an active Infinite Flight user",
  "Must have Grade 2 or higher",
  "Must join our Discord server to enroll",
  "Must be willing to learn and commit time",
  "No prior ATC experience required",
];

const notes = [
  "We are not directly affiliated with the IFATC Recruitment Process",
  "Completion of our program does not guarantee IFATC acceptance",
];

export default function Eligibility() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="eligibility" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="relative container mx-auto px-5 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
            Requirements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Eligibility
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Here's what you need to get started with ATCMH.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Requirements card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group bg-card rounded-2xl border border-border/50 p-7 sm:p-8 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">Requirements</h3>
            </div>
            <ul className="space-y-4">
              {requirements.map((req, i) => (
                <motion.li
                  key={req}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 group/item"
                >
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" size={16} />
                  <span className="text-foreground/75 text-sm leading-relaxed">{req}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Notes card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-card rounded-2xl border border-border/50 p-7 sm:p-8 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <AlertTriangle className="text-gold" size={20} />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">Important Notes</h3>
            </div>
            <ul className="space-y-4 mb-6">
              {notes.map((note, i) => (
                <motion.li
                  key={note}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/75 text-sm leading-relaxed">{note}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl">
              <div className="flex items-start gap-3">
                <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our mentorship is designed to give you the best preparation possible. Your
                  success ultimately depends on your dedication and performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
