import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#galeria", label: "Galería" },
    { href: "#servicios", label: "Servicios" },
    { href: "#reservas", label: "Reservas" },
    { href: "#contacto", label: "Contacto" },
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-muted/50 pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  TAT
                </div>
                <div>
                  <h4 className="text-xl font-bold">Estudio Tattoo</h4>
                  <p className="text-sm text-muted-foreground">Arte, técnica y cuidado</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Más de 10 años creando arte en la piel. Cada tatuaje es una historia única, 
                diseñada con pasión y ejecutada con la máxima profesionalidad.
              </p>
              
              {/* Social */}
              <div className="flex gap-3 mt-6">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Enlaces</h5>
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Contacto</h5>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+34123456789"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +34 123 456 789
                </a>
                <a
                  href="mailto:info@estudiotattoo.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@estudiotattoo.com
                </a>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Calle Principal 123, Madrid, España</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Estudio Tattoo. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en España
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
