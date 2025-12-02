import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#galeria", label: "Galería" },
    { href: "#servicios", label: "Servicios" },
  ];

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
            TAT
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight flex items-center gap-2">
              Estudio Tattoo
              <Sparkles className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </h1>
            <p className="text-sm text-muted-foreground">Arte, técnica y cuidado</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
            <a href="#reservas" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Reservar
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="glass">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="glass">
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xl text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-6">
                <a href="#reservas" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Reservar
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
