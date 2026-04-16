export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">ATC</span>
            </div>
            <div>
              <span className="font-display font-bold text-foreground">ATC Mentorship Hub</span>
              <p className="text-xs text-muted-foreground">Your Gateway to IFATC</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#eligibility" className="text-muted-foreground hover:text-primary transition-colors">Eligibility</a>
            <a href="https://discord.gg/P3kcYbzTBU" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Discord</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ATCMH. Not affiliated with IFATC.
          </p>
        </div>
      </div>
    </footer>
  );
}
