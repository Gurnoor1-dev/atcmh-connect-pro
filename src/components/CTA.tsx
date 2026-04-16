import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-accent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-foreground mb-6">
              Ready to Start Your
              <br />
              IFATC Journey?
            </h2>
            <p className="text-navy-foreground/70 text-lg max-w-xl mx-auto mb-10">
              Join our Discord community today and take the first step towards controlling
              the Expert Server skies.
            </p>
            <a
              href="https://discord.gg/P3kcYbzTBU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-4 bg-card text-foreground rounded-xl text-base font-semibold hover:opacity-90 transition-all shadow-2xl hover:-translate-y-0.5"
            >
              Join Our Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
