import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=800",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
    "https://images.unsplash.com/photo-1598371611186-ccae61a2f93e?q=80&w=800",
    "https://images.unsplash.com/photo-1590246814883-57c511f1e5a6?q=80&w=800",
  ];

  return (
    <section id="inicio" className="relative">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Tatuajes con <span className="text-accent">estilo</span> y profesionalismo
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseños personalizados, ambiente seguro y atención cercana. Reserva tu cita y
            hablemos de tu proyecto.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="shadow-glow">
              <a href="#reservas">Reservar cita</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contacto">Contacto</a>
            </Button>
          </div>

          <div className="pt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Horario:</span>
              Lun - Vie 10:00 - 20:00
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>
                Tel:{" "}
                <a
                  className="text-foreground font-medium hover:text-accent transition-smooth"
                  href="tel:+34123456789"
                >
                  +34 123 456 789
                </a>
              </span>
              <span className="mx-2">·</span>
              <a
                className="text-foreground font-medium hover:text-accent transition-smooth"
                href="https://wa.me/34123456789"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right duration-700">
          {heroImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-glow transition-smooth hover:scale-105"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                alt={`Tatuaje ${i + 1}`}
                src={src}
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
