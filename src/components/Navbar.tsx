// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logoLight from "../assets/logoLight.png";
import logoDark from "../assets/logoDark.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Exam Center", href: "https://exams.atcmh.org/", external: true },
  { label: "Contact", href: "mailto:admin@atcmh.org", external: true },
];

// ── Polaris-style pill toggle ──────────────────────────────────────────
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative inline-flex items-center rounded-full p-[3px] gap-0.5 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md">
      {/* Sliding indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className={`absolute top-[3px] bottom-[3px] w-[34px] rounded-full shadow-lg ${
          isDark
            ? "left-[3px] bg-primary shadow-primary/30"
            : "left-[calc(100%-37px)] bg-amber-400 shadow-amber-400/30"
        }`}
      />

      {/* Dark button */}
      <button
        onClick={() => setTheme("dark")}
        title="Dark mode"
        className={`relative z-10 w-[34px] h-[34px] flex items-center justify-center rounded-full transition-colors duration-200 ${
          isDark ? "text-white" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon size={15} />
      </button>

      {/* Light button */}
      <button
        onClick={() => setTheme("light")}
        title="Light mode"
        className={`relative z-10 w-[34px] h-[34px] flex items-center justify-center rounded-full transition-colors duration-200 ${
          !isDark ? "text-white" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun size={15} />
      </button>
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={scrolled && !isDark ? logoDark : logoLight}
            alt="ATCMH"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />

          
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <ThemeToggle />
                
                  href="https://discord.gg/P3kcYbzTBU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
