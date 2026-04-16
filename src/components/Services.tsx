import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Headphones, BookOpen, Target, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Mentor Sessions",
    description:
      "Request a Mentor who will show you everything from applying knowledge to advanced controlling techniques, specifically preparing you for the practical exam.",
    gradient: "from-primary to-accent",
    bg: "bg-primary/5",
    tag: "Most Popular",
    num: "01",
  },
  {
    icon: BookOpen,
    title: "Written Exam Help",
    description:
      "Struggling with understanding questions on the written exam? A Mentor will guide you through them while giving you clear explanations to ensure full understanding.",
    gradient: "from-accent to-primary",
    bg: "bg-accent/5",
    tag: "Knowledge",
    num: "02",
  },
  {
    icon: Target,
    title: "Mock Practical",
    description:
      "Ready for the practical exam but want one last check? Mock Practicals mirror the real exam to ensure you have a solid understanding of all applicable skills.",
    gradient: "from-gold to-primary",
    bg: "bg-gold/5",
    tag: "Final Prep",
    num: "03",
  },
];

function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-card rounded-2xl border border-border/50 p-7 sm:p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-default overflow-hidden"
    >
      {/* Background glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${service.bg} blur-3xl`}
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
          >
            <service.icon className="text-primary-foreground" size={24} />
          </motion.div>
          <span className="text-xs font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-full">
            {service.tag}
          </span>
        </div>

        {/* Number */}
        <span className="text-6xl font-display font-bold text-border/60 absolute top-6 right-8 select-none">
          {service.num}
        </span>

        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm mb-6">
          {service.description}
        </p>

        {/* Bottom bar */}
        <div className="flex items-center justify-between">
          <div className={`h-1 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-500 ${hovered ? "w-16" : "w-10"}`} />
          <motion.div
            animate={{ x: hovered ? 0 : -5, opacity: hovered ? 1 : 0 }}
            className="flex items-center gap-1 text-xs font-semibold text-primary"
          >
            Learn more <ArrowUpRight size={12} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-5 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore What We Offer
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
            Three tailored programs to get you from aspiring controller to IFATC ready.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm sm:text-base font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Join Discord to Get Started
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
