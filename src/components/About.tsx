import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import aboutBg from "@/assets/about-bg.jpg";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Controllers Mentored", color: "text-primary" },
  { icon: TrendingUp, value: "95%", label: "Pass Rate", color: "text-accent" },
  { icon: Clock, value: "24/7", label: "Discord Support", color: "text-gold" },
  { icon: Award, value: "3", label: "Expert Programs", color: "text-primary" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-5 md:px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">About ATCMH</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Your Gateway to <span className="text-gradient">Expert Server ATC</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with overlay card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src={aboutBg}
                alt="ATC radar control room"
                loading="lazy"
                width={1920}
                height={880}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-64 sm:h-80 md:h-[400px] object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? "blur-0" : "blur-md"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-5 right-3 sm:right-6 glass-card rounded-2xl p-4 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">100+</p>
                  <p className="text-xs text-muted-foreground">Controllers Mentored</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">
              ATC Mentorship Hub is dedicated to helping aspiring IFATC obtain the necessary
              skills and knowledge to control the Expert Server skies in Infinite Flight.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              We provide Written Exam Help, Mentor Sessions, and Mock Practical exams to
              prepare individuals for the IFATC local written and practical exams. Our team
              is committed to guiding and supporting individuals in their journey towards
              becoming a successful IFATC controller.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="group/stat p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                >
                  <stat.icon className={`${stat.color} mb-2 group-hover/stat:scale-110 transition-transform`} size={18} />
                  <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
