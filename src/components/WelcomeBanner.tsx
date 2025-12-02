import { ChevronDown } from "lucide-react";

export const WelcomeBanner = () => {
  const handleScrollDown = () => {
    const heroSection = document.getElementById("inicio");
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598371611186-ccae61a2f93e?q=80&w=1920"
          alt="Estudio de tatuajes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 opacity-0 animate-fade-in">
          <p className="text-primary font-medium tracking-widest uppercase text-sm md:text-base">
            Bienvenido a
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="text-gradient">Ink Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Donde el arte cobra vida en tu piel
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium tracking-wider uppercase opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Explorar
        </span>
        <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center opacity-0 animate-fade-in group-hover:border-primary" style={{ animationDelay: '0.6s' }}>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }} />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }} />
    </section>
  );
};
