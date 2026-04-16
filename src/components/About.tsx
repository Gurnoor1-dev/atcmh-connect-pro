import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutBg}
                alt="ATC radar control room"
                loading="lazy"
                width={1920}
                height={880}
                className="w-full h-80 md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-8 glass-card rounded-xl p-5"
            >
              <p className="text-3xl font-display font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Controllers Mentored</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              About ATCMH
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Your Gateway to
              <br />
              <span className="text-gradient">Expert Server ATC</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ATC Mentorship Hub is dedicated to helping aspiring IFATC obtain the necessary
              skills and knowledge to control the Expert Server skies in Infinite Flight.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We provide Written Exam Help, Mentor Sessions, and Mock Practical exams to
              prepare individuals for the IFATC local written and practical exams. Our team
              is committed to guiding and supporting individuals in their journey towards
              becoming a successful IFATC controller.
            </p>
            <div className="flex gap-8">
              {[
                { num: "3", label: "Services Offered" },
                { num: "24/7", label: "Discord Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-bold text-foreground">{stat.num}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
