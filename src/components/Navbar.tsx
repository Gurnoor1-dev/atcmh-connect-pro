import { useState, useEffect, useMemo } from "react"; // Added useMemo
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logoLight from "../assets/logoLight.png";
import logoDark from "../assets/logoDark.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Exam Center", href: "https://exams.atcmh.org/", external: true },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Track system preference locally to force a re-render if system changes
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const location = useLocation();
  const navigate = useNavigate();

  // 1. Sync with system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 2. Determine if the UI should show dark mode elements
  const isDark = useMemo(() => {
    if (theme === "system") return systemTheme === "dark";
    return theme === "dark";
  }, [theme, systemTheme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 3. Cycle through themes: Light -> Dark -> (Optional: System) 
  // Most users prefer a binary toggle, but this ensures it updates the Provider
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http") || (href.startsWith("/") && !href.startsWith("/#"))) return;
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    const id = href === "#" ? "root" : href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = scrolled ? 70 : 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="/" onClick={(e) => handleNavClick(e, "#")} className="flex items-center gap-2">
          {/* Logo switches based on the calculated isDark state */}
          <img
            src={isDark ? logoLight : logoDark}
            alt="ATCMH"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
          >
            {isDark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          <a
            href="https://discord.gg/P3kcYbzTBU"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground relative z-[110]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-card border-b border-border shadow-2xl md:hidden z-[90]"
          >
            <div className="container mx-auto px-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl bg-muted flex items-center gap-3"
                >
                  {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
                  <span className="text-sm capitalize">{isDark ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>

              <a
                href="https://discord.gg/P3kcYbzTBU"
                className="w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
