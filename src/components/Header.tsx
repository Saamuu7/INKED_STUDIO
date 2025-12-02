import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#reservas", label: "Reservas" },
    { href: "#contacto", label: "Contacto" },
  ];

  const NavLinks = () => (
    <nav className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-sm font-medium">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="relative text-muted-foreground uppercase tracking-[0.2em] hover:text-primary transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all hover:after:w-full"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-[rgb(5,5,5,0.85)] backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary font-semibold tracking-[0.3em] text-xs uppercase glint">
            NIS
          </div>
          <div>
            <p className="text-xs text-muted-foreground tracking-[0.4em] uppercase">Studio</p>
            <p className="text-lg font-semibold section-heading">Nocturna Ink</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button asChild className="uppercase tracking-[0.3em]">
            <a href="#reservas" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Agenda
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-border/60 bg-transparent">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-border/40">
            <div className="mt-8 flex flex-col gap-8">
              <NavLinks />
              <Button asChild>
                <a href="#reservas" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Reservar cita
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
