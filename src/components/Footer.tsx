import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#reservas", label: "Reservas" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary/80">Nocturna Ink Studio</p>
          <p className="text-muted max-w-md">
            Un atelier boutique enfocado en tatuaje contemporáneo, higiene rigurosa y experiencias diseñadas para quienes buscan piezas memorables.
          </p>
          <a
            href="#reservas"
            className="inline-flex items-center gap-2 text-secondary uppercase tracking-[0.4em] text-xs"
          >
            Agenda privada <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-muted mb-4">Mapa</p>
            <nav className="flex flex-col gap-3 text-sm text-muted">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-secondary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <a href="tel:+34123456789" className="flex items-center gap-3 hover:text-secondary transition">
              <Phone className="w-4 h-4 text-secondary" /> +34 123 456 789
            </a>
            <a href="mailto:info@nocturnaink.com" className="flex items-center gap-3 hover:text-secondary transition">
              <Mail className="w-4 h-4 text-secondary" /> info@nocturnaink.com
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary" /> Calle Principal 123 · Madrid
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Síguenos</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center hover:border-secondary"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-muted flex flex-col md:flex-row gap-3 justify-between">
          <p>© {currentYear} Nocturna Ink Studio. Todos los derechos reservados.</p>
          <p>Diseño, técnica y cuidado en cada sesión.</p>
        </div>
      </div>
    </footer>
  );
};
