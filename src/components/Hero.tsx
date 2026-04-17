// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5">
      {/* Background - Suggest using a less busy image or higher blur */}
      <div className="absolute inset-0 z-[-1]">
        <img src={heroBg} className="w-full h-full object-cover blur-[2px] opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Control the <span className="text-primary">Expert Server</span> Skies
      </h1>
      
      {/* ... Buttons ... */}

      {/* Centered Stats at bottom */}
      <div className="mt-20 grid grid-cols-3 gap-12 border-t border-border/50 pt-10 w-full max-w-2xl">
        <div>
          <p className="text-3xl font-bold">700+</p>
          <p className="text-xs uppercase text-muted-foreground">Members</p>
        </div>
        <div>
          <p className="text-3xl font-bold">150+</p>
          <p className="text-xs uppercase text-muted-foreground">Graduates</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">FREE</p>
          <p className="text-xs uppercase text-muted-foreground">Services</p>
        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" />
      </div>
    </section>
  );
}
