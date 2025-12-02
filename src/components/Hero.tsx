import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Clock, MessageCircle } from "lucide-react";

export const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=800",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
    "https://images.unsplash.com/photo-1598371611186-ccae61a2f93e?q=80&w=800",
    "https://images.unsplash.com/photo-1590246814883-57c511f1e5a6?q=80&w=800",
  ];

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium opacity-0 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Arte profesional en tu piel</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Tatuajes con{" "}
            <span className="text-gradient">estilo</span>
            <br />y profesionalismo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Diseños personalizados, ambiente seguro y atención cercana. Reserva tu cita y
            hablemos de tu proyecto.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" asChild className="pulse-glow group">
              <a href="#reservas" className="flex items-center gap-2">
                Reservar cita
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="glass border-primary/20 hover:bg-primary/10">
              <a href="#contacto">Contacto</a>
            </Button>
          </div>

          <div className="pt-6 space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 p-3 rounded-xl glass max-w-fit">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Horario</p>
                <p className="font-semibold text-sm">Lun - Vie 10:00 - 20:00</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+34123456789"
                className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-primary/10 transition-all max-w-fit group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="font-semibold text-sm">+34 123 456 789</p>
                </div>
              </a>

              <a
                href="https://wa.me/34123456789"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-green-500/10 transition-all max-w-fit group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-sm">Escríbenos</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative">
          {/* Decorative element behind images */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
          
          {heroImages.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <img
                alt={`Tatuaje profesional ${i + 1}`}
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
