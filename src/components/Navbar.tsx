// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";
import logoLight from "../assets/logo-light.png"; // Use the one with light text for dark bg
import logoDark from "../assets/logo-dark.png";   // Use the one with dark text for light bg

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Exam Center", href: "https://exams.atcmh.org/", external: true },
  { label: "Contact", href: "mailto:admin@atcmh.org", external: true }, // Simple mailto for now
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true); // Default to dark
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("light"); // Ensure your tailwind config handles .light
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-card/90 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <img 
            src={scrolled && !dark ? logoDark : logoLight} 
            alt="ATCMH" 
            className="h-10 w-auto" 
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          
          <button onClick={toggleTheme} className="p-2 rounded-full bg-primary/10 text-primary">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="https://discord.gg/P3kcYbzTBU" className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20">
            Enroll Now
          </a>
        </div>
        {/* Mobile Toggle logic remains similar but includes theme switch */}
      </div>
    </nav>
  );
}
