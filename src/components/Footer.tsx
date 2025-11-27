export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-lg">Estudio Tattoo</div>
          <div className="text-sm text-muted-foreground mt-1">
            © {currentYear} Estudio Tattoo. Todos los derechos reservados.
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#contacto"
            className="text-muted-foreground hover:text-accent transition-smooth"
          >
            Contacto
          </a>
          <a
            href="#reservas"
            className="text-muted-foreground hover:text-accent transition-smooth"
          >
            Reservas
          </a>
          <a
            href="#galeria"
            className="text-muted-foreground hover:text-accent transition-smooth"
          >
            Galería
          </a>
        </div>
      </div>
    </footer>
  );
};
