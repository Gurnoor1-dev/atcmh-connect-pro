import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eligibility" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Requirements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Eligibility
            </h2>
            <p className="text-muted-foreground text-lg">
              Here's what you need to get started with ATCMH.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={22} />
                Requirements
              </h3>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertCircle className="text-gold" size={22} />
                Important Notes
              </h3>
              <ul className="space-y-4">
                {notes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-foreground/80 text-sm">{note}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  Our mentorship is designed to give you the best preparation possible. Your
                  success ultimately depends on your dedication and performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
