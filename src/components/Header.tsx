import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#galeria", label: "Galería" },
    { href: "#servicios", label: "Servicios" },
  ];

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
            TAT
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Estudio Tattoo</h1>
            <p className="text-sm text-muted-foreground">Arte, técnica y cuidado</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent transition-smooth"
            >
              {item.label}
            </a>
          ))}
          <Button asChild>
            <a href="#reservas">Reservar</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg text-foreground hover:text-accent transition-smooth"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-4">
                <a href="#reservas">Reservar</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
