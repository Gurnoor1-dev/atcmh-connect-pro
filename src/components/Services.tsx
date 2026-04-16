import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, BookOpen, Target } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Mentor Sessions",
    description:
      "Request a Mentor who will show you everything from applying knowledge to advanced controlling techniques, specifically preparing you for the practical exam.",
    color: "from-primary to-accent",
    tag: "Most Popular",
  },
  {
    icon: BookOpen,
    title: "Written Exam Help",
    description:
      "Struggling with understanding questions on the written exam? A Mentor will guide you through them while giving you clear explanations to ensure full understanding.",
    color: "from-accent to-primary",
    tag: "Knowledge",
  },
  {
    icon: Target,
    title: "Mock Practical",
    description:
      "Ready for the practical exam but want one last check? Mock Practicals mirror the real exam to ensure you have a solid understanding of all applicable skills.",
    color: "from-gold to-primary",
    tag: "Final Prep",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore What We Offer
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Three tailored programs to get you from aspiring controller to IFATC ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass-card rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Tag */}
              <span className="absolute top-6 right-6 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {service.tag}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="text-primary-foreground" size={26} />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${service.color} group-hover:w-20 transition-all duration-300`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl text-base font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Join Discord to Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
