import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Discord", href: "https://discord.gg/P3kcYbzTBU", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">ATC</span>
          </div>
          <div>
            <span className="font-display font-bold text-lg text-foreground">ATC Mentorship Hub</span>
            <p className="text-xs text-muted-foreground -mt-0.5">Your Gateway to IFATC</p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://discord.gg/P3kcYbzTBU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold text-center"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
