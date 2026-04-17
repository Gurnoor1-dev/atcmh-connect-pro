import { Plane } from "lucide-react"; 
import logoImg from "../assets/logo.png"; 
import vaLogo from "../assets/vacompany-logo.svg"; // New Logo Import

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Discord", href: "https://discord.gg/P3kcYbzTBU", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-5 md:px-6 py-10 md:py-14">
        <div className="flex flex-col gap-8">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={logoImg} 
                  alt="ATCMH Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div>
                <span className="font-display font-bold text-foreground text-sm">ATC Mentorship Hub</span>
                <p className="text-[10px] text-muted-foreground">Your Gateway to IFATC</p>
              </div>
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/50" />

          {/* VACompany Logo Section */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">
              Powered By
            </span>
            <div className="h-8 group">
              <img 
                src={vaLogo} 
                alt="VACompany Logo" 
                className="h-full w-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 invert dark:invert-0"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} ATC Mentorship Hub. All rights reserved.</p>
            <p>Not directly affiliated with the IFATC Recruitment Process.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
