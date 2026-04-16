import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Removed Plane since we're using the logo
import logoImg from "../assets/logo.png"; // Import your logo here

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Discord", href: "https://discord.gg/P3kcYbzTBU", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "services", "eligibility"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border/50 py-2 shadow-sm"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo area */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* LOGO INTEGRATED HERE */}
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img 
              src={logoImg} 
              alt="ATCMH Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          
          <div className="hidden sm:block">
            <span className={`font-display font-bold text-base leading-tight block transition-colors ${scrolled ? "text-foreground" : "text-navy-foreground"}`}>
              ATCMH
            </span>
            <span className={`text-[10px] font-medium tracking-wider uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-navy-foreground/60"}`}>
              Mentorship Hub
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? isActive
                      ? "text-primary bg-primary/8"
                      : "text-foreground/60 hover:text-primary hover:bg-primary/5"
                    : isActive
                      ? "text-navy-foreground bg-navy-foreground/10"
                      : "text-navy-foreground/70 hover:text-navy-foreground hover:bg-navy-foreground/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground hover:bg-muted" : "text-navy-foreground hover:bg-navy-foreground/10"
          }`}
        >
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-3 right-3 mt-2 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-0.5">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://discord.gg/P3kcYbzTBU"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-1 mx-1 px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold text-center shadow-lg shadow-primary/20"
              >
                Enroll Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
